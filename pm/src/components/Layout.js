import * as React from "react";
import { Layout } from 'react-admin';
import MyAppBar from './AppBar';
import AppMenu from './Menu';

const AppLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={AppMenu}/>;

export default AppLayout;