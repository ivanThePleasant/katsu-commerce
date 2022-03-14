import React from 'react';
import { Table, Thead, Tbody, Tr, Td, Th } from "@strapi/design-system/Table";
import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import { BaseCheckbox } from "@strapi/design-system/BaseCheckbox";
import { IconButton } from "@strapi/design-system/IconButton";
import { Typography } from "@strapi/design-system/Typography";
import { Button } from "@strapi/design-system/Button";
import CarretDown from "@strapi/icons/CarretDown";
import Plus from "@strapi/icons/Plus";

const CollectionTable = ({ tableData, emptyStateLayoutIcon, emptyStateLayoutText, onClickFunction }) => {
  return (
    <>
      <Table colCount={6} rowCount={6}>
        <Thead>
          <Tr>
            <Th>
              <BaseCheckbox aria-label="Select all entries" />
            </Th>
            <Th
              action={
                <IconButton label="Sort on ID" icon={<CarretDown />} noBorder />
              }
            >
              <Typography variant="sigma">ID</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Name</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Email</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Address</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Phone</Typography>
            </Th>
          </Tr>
        </Thead>
      </Table>
      <EmptyStateLayout
        content={emptyStateLayoutText}
        icon={<img src={emptyStateLayoutIcon}></img>}
        action={
          <Button onClick={() => onClickFunction()} variant="secondary" startIcon={<Plus />}>
            Create your first content-type
          </Button>
        }
      />
    </>
  );
};


export default CollectionTable;
