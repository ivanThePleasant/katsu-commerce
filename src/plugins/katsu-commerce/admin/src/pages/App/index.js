/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import { Layout } from "@strapi/design-system/Layout";
import pluginId from '../../pluginId';

import MainMenu from '../../components/MainMenu/MainMenu';
import HomePage from '../HomePage';
import CustomersPage from '../CustomersPage';
import CreateNewCustomer  from '../Create/CreateNewCustomer';

const App = () => {
  return (
    <div>
      <Layout sideNav={<MainMenu />}>
        <Switch>
          <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
          <Route
            path={`/plugins/${pluginId}/collectionType/plugin::katsu-commerce.customer`}
            component={CustomersPage}
            exact
          />
          <Route
            path={`/plugins/${pluginId}/collectionType/plugin::katsu-commerce.customer/create`}
            component={CreateNewCustomer}
            exact
          />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
