"use strict";

/**
 * User.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const { getAbsoluteServerUrl, sanitize } = require("@strapi/utils");
const { getService } = require("../utils");

module.exports = ({ strapi }) => ({
  /**
   * Promise to count users
   *
   * @return {Promise}
   */

  count(params) {
    return strapi.query("plugin::katsu-commerce.customer").count({ where: params });
  },

  /**
   * Promise to search count users
   *
   * @return {Promise}
   */

  /**
   * Promise to add a/an user.
   * @return {Promise}
   */
  async add(values) {
    if (values.password) {
      values.password = await getService("customer").hashPassword(values);
    }

    return strapi
      .query("plugin::katsu-commerce.customer")
      .create({ data: values, populate: ["role"] });
  },

  /**
   * Promise to edit a/an user.
   * @param {string} userId
   * @param {object} params
   * @return {Promise}
   */
  async edit(customerId, params = {}) {
    if (params.password) {
      params.password = await getService("customer").hashPassword(params);
    }

    return strapi.entityService.update("plugin::katsu-commerce.customer", customerId, {
      data: params,
      populate: ["role"],
    });
  },

  /**
   * Promise to fetch a/an user.
   * @return {Promise}
   */
  fetch(params, populate) {
    return strapi.query("plugin::katsu-commerce.customer").findOne({ where: params, populate });
  },

  /**
   * Promise to fetch authenticated user.
   * @return {Promise}
   */
  fetchAuthenticatedUser(id) {
    return strapi
      .query("plugin::katsu-commerce.customer")
      .findOne({ where: { id }, populate: ["role"] });
  },

  /**
   * Promise to fetch all users.
   * @return {Promise}
   */
  fetchAll(params, populate) {
    return strapi.query("plugin::katsu-commerce.customer").findMany({ where: params, populate });
  },

  hashPassword(customer = {}) {
    return new Promise((resolve, reject) => {
      if (!customer.password || this.isHashed(customer.password)) {
        resolve(null);
      } else {
        bcrypt.hash(`${customer.password}`, 10, (err, hash) => {
          if (err) {
            return reject(err);
          }
          resolve(hash);
        });
      }
    });
  },

  isHashed(password) {
    if (typeof password !== "string" || !password) {
      return false;
    }

    return password.split("$").length === 4;
  },

  /**
   * Promise to remove a/an user.
   * @return {Promise}
   */
  async remove(params) {
    return strapi.query("plugin::katsu-commerce.customer").delete({ where: params });
  },

  validatePassword(password, hash) {
    return bcrypt.compare(password, hash);
  },

  async sendConfirmationEmail(user) {
    const userPermissionService = getService("users-permissions");
    const pluginStore = await strapi.store({
      type: "plugin",
      name: "users-permissions",
    });
    const userSchema = strapi.getModel("plugin::katsu-commerce.customer");

    const settings = await pluginStore
      .get({ key: "email" })
      .then((storeEmail) => storeEmail.email_confirmation.options);

    // Sanitize the template's customer information
    const sanitizedCustomerInfo = await sanitize.sanitizers.defaultSanitizeOutput(userSchema, user);

    const confirmationToken = crypto.randomBytes(20).toString("hex");

    await this.edit(customer.id, { confirmationToken });

    settings.message = await userPermissionService.template(settings.message, {
      URL: `${getAbsoluteServerUrl(strapi.config)}/auth/email-confirmation`,
      USER: sanitizedCustomerInfo,
      CODE: confirmationToken,
    });

    settings.object = await userPermissionService.template(settings.object, {
      USER: sanitizedCustomerInfo,
    });

    // Send an email to the user.
    await strapi
      .plugin("email")
      .service("email")
      .send({
        to: customer.email,
        from:
          settings.from.email && settings.from.name
            ? `${settings.from.name} <${settings.from.email}>`
            : undefined,
        replyTo: settings.response_email,
        subject: settings.object,
        text: settings.message,
        html: settings.message,
      });
  },
});
