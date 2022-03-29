/*
 *
 * CreateNewCustomerPage
 *
 */

import React from "react";
import { Box } from "@strapi/design-system/Box";
import { TwoColsLayout } from "@strapi/design-system/Layout";

import Header from "../../components/Header/Header";
import CreateNewCustomerForm from "../../components/Forms/CreateNewCustomerForm";
import GoBackLink from "../../components/GoBackLink/GoBackLink";
import SideMetaDataMenu from "../../components/SideMenu";


const CreateNewCustomer = () => {
  return (
    <>
      <Header
        title={"Create an entry"}
        subtitle={"Content-type: Customer"}
        navigationAction={
          <GoBackLink link={"/"} />
        }
      />
      <Box padding={8} background="neutral100">
        <TwoColsLayout
          startCol={<CreateNewCustomerForm />}
          endCol={<Box padding={4}><SideMetaDataMenu /></Box>}
        />
      </Box>
    </>
  );
};

export default CreateNewCustomer;
