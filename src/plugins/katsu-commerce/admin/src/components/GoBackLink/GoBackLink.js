import React from 'react'
import { Link } from "@strapi/design-system/Link";
import ArrowLeft from "@strapi/icons/ArrowLeft";

const GoBackLink = ({ link }) => {
  return (
    <Link startIcon={<ArrowLeft />} to={link}>
      Go back
    </Link>
  );
}

export default GoBackLink