// in src/App.js
import * as React from "react";
import { Admin, Resource, fetchUtils } from 'react-admin';
import { AppTitle, ApiBasePath } from './constants/Config';

import jsonServerProvider from 'ra-data-json-server';
import {TaskShow} from "./Task";
import {SummaryList} from "./Summary";


export const getHeadersToCallAPI = async (headers = null) => {
    if (!headers) {
        headers = new Headers({ Accept: 'application/json' });
    }
  
    // let apiToken = await apiLogin()
    // let userName = getUserName()
  
    // headers.set('x-access-token', apiToken);
    // headers.set('userId', userName);
    headers.set('content-type', 'application/json');
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

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="PetasosTaskSummary" options={{label: 'Summary'}} show={TaskShow} list={SummaryList} />
      </Admin>
  );
export default App;
