// in src/App.js
import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import { AppTitle, ApiBasePath } from './constants/Config';

import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";
import jsonServerProvider from 'ra-data-json-server';
import {TaskShow} from "./Task";
import {SummaryList} from "./Summary";

import AppLayout from './components/Layout';
import AppTheme from './components/Theme';

import { apiLogin, getUserName } from "./authProvider";


const messages = {
  en: englishMessages
};

const i18nProvider = polyglotI18nProvider(locale => messages[locale], "en", {
  allowMissing: true
});

export const getHeadersToCallAPI = async (headers = null) => {
  if (!headers) {
      headers = new Headers({ Accept: 'application/json' });
  }

  // let apiToken = await apiLogin()
  // let userName = getUserName()

  // headers.set('x-access-token', apiToken);
  // headers.set('userId', userName);
  // headers.set('content-type', 'application/json');
  return headers;
};

  
  const fetchJson = async (url, options = {}) => {
    options.headers = await getHeadersToCallAPI(options.headers);
    return fetchUtils.fetchJson(url, options);
  };
  
  const jsonDataProvider = jsonServerProvider(ApiBasePath, fetchJson);
  const dataProvider = ({
    ...jsonDataProvider,
    getList: (resource, params) => {
      return jsonDataProvider.getList(resource.replace(/(\w+):/, ''), params)
    }
  })

  export default function App() {
    return (   
      <Admin
      dataProvider={dataProvider} 
      title={AppTitle}
      locale="en"
      theme={AppTheme}
      layout={AppLayout}
      i18nProvider={i18nProvider}
      >
          <Resource name='PetasosTaskSummary' options={{label: 'Summary'}} show={TaskShow} list={SummaryList} />
          
      </Admin>
  )
}