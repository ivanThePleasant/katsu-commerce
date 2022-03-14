"use strict";

const { yup, validateYupSchema } = require("@strapi/utils");

const deleteRoleSchema = yup.object().shape({
  role: yup.strapiID().required(),
});

const createCustomerBodySchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().min(1).required(),
  password: yup.string().min(1).required(),
  role: yup.strapiID(),
});

const updateCustomerBodySchema = yup.object().shape({
  email: yup.string().email().min(1),
  username: yup.string().min(1),
  password: yup.string().min(1),
});

module.exports = {
  validateCreateCustomerBody: validateYupSchema(createCustomerBodySchema),
  validateUpdateCustomerBody: validateYupSchema(updateCustomerBodySchema),
  validateDeleteRoleBody: validateYupSchema(deleteRoleSchema),
};
