// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { AuthenticationPath, ApiKey } from './constants/Config';
import { LogLevel, Logger } from "msal";

const tenant = process.env.REACT_APP_AZURE_TENANT;
const applicationID = process.env.REACT_APP_AZURE_APPLICATION_ID;
const applicationCustomScopeURL = process.env.REACT_APP_AZURE_APPLICATION_CUSTOM_SCOPE_URL; //e.g. https://jasenssandpit.onmicrosoft.com/check-in-admin-sandpit/myscope
// const tenantSubdomain = tenant.split(".")[0];
// const authorityDomain = `${tenantSubdomain}.b2clogin.com`;
// const signInPolicy = "B2C_1_";
// const signInAuthority = `https://${authorityDomain}/${tenant}/${signInPolicy}`;
//const signInAuthority = `https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration`;
const signInAuthority = `https://login.microsoftonline.com/${tenant}`;
//console.log("tenant=" + tenant + ", signInAuthority=" + signInAuthority);

// Msal Configurations
const config = {
  auth: {
    clientId: applicationID,
    authority: signInAuthority,
    //knownAuthorities: [authorityDomain],
    validateAuthority: true,
    postLogoutRedirectUri: window.location.origin,
    // From https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-avoid-page-reloads
    // redirectUri: window.location.origin + '/auth.html',
    redirectUri: window.location.origin,
    navigateToLoginRequestUrl: true
  },
  system: {
    logger: new Logger(
      (logLevel, message, containsPii) => {
        console.log("[MSAL]", message);
      },
      {
        level: LogLevel.Info, //Verbose
        piiLoggingEnabled: false
      }
    )
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

// Authentication Parameters
const authenticationParameters = {
  //scopes: [".default"],
  scopes: [applicationCustomScopeURL, "openid", "profile", "email"],
  // scopes: ["openid", "profile", "user.read"],
}

// Options
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin  // + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)

let apiJWTCache = null;
let apiJWTCacheExpiryTime = null;

export const apiLogin = async () => {
  // From https://www.npmjs.com/package/react-aad-msal#refreshing-access-tokens
  // Add a custom scope so the Access Token is v2 and not v1 as discussed on https://github.com/AzureAD/passport-azure-ad/issues/396
  // NOTE: ensure that SAML based single sign on is NOT enabled in the "Enterprise application" area of the Azure Portal,
  // otherwise the accessToken is signed with the SAML key, but that key isn't in the list of known OIDC/oAuth keys
  // as detailed on https://login.microsoftonline.com/55eaae63-7cbc-4194-9bbf-6a5957c7cb65/v2.0/.well-known/openid-configuration 
  // which resulted in the error: "authentication failed due to: In Strategy.prototype.jwtVerify: We did not receive a token we know how to validate" 
  // console.log("About to get accessToken")
  if (apiJWTCache == null || (apiJWTCacheExpiryTime < Date.now())) {
    const bearerToken = await authProvider.getAccessToken();
    // console.log("Got bearerToken.accessToken=" + bearerToken.accessToken)

    const response = await fetch(AuthenticationPath + '/login', { 
      method: 'get', 
      headers: new Headers({
        Authorization: 'Bearer ' + bearerToken.accessToken,
        'x-api-key': ApiKey
      }) 
    })
    let jsonResponse = await response.json()
    apiJWTCache = jsonResponse.token
    apiJWTCacheExpiryTime = Date.now() + (1000 * 60 * (process.env.REACT_APP_API_JWT_CACHE_TIMEOUT_IN_MINS || 14))
  }
  return apiJWTCache;
}

export const getUserName = () => {
  let account = authProvider.getAccountInfo()?.account
  return account?.userName ? account.userName : 'Unknown';
}