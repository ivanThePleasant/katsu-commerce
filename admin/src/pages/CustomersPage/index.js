/*
 *
 * CustomersPage
 *
 */

import React, { memo } from "react";
import { useHistory } from 'react-router-dom';
import { Box } from "@strapi/design-system/Box";

import pluginId from "../../pluginId";

import Header from "../../components/Header/Header";
import AddEntryButton from "../../components/AddEntryButton/AddEntryButton";
import CollectionTable from "../../components/CollectionTable/CollectionTable";

import CustomersIcon from '../../assets/customer.png'


const CustomersPage = () => {
  const history = useHistory()

  return (
    <>
      <Header
        title="Customers"
        subtitle="Some Subtitle"
        button={
          <AddEntryButton
            onClickAction={() =>
              history.push(
                `/plugins/${pluginId}/collectionType/plugin::katsu-commerce.customer/create`
              )
            }
          />
        }
      />
      <Box padding={8} background="neutral100">
        <CollectionTable emptyStateLayoutIcon={CustomersIcon} />
      </Box>
    </>
  );
};

export default memo(CustomersPage);
