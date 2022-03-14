import React from 'react';

import { Button } from '@strapi/design-system/Button';
import Plus from "@strapi/icons/Plus";

const AddEntryButton = ({ onClickAction }) => {
  return (
    <Button onClick={() => onClickAction()} startIcon={<Plus />}>
      Add an entry
    </Button>
  );
};

export default AddEntryButton;
