import React from 'react';

import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  SubNavLinkSection,
} from "@strapi/design-system/SubNav";
import Apps from "@strapi/icons/Apps";
import ShoppingCart from "@strapi/icons/ShoppingCart";
import User from "@strapi/icons/User";
import Clock from "@strapi/icons/Clock";
import Drag from "@strapi/icons/Drag";
import File from "@strapi/icons/File";
import Earth from "@strapi/icons/Earth";
import BulletList from '@strapi/icons/BulletList';

import pluginId from "../../pluginId";

const MainMenu = () => {
  return (
    <SubNav ariaLabel="Plugin main menu">
      <SubNavHeader label="Katsu Commerce" />
      <SubNavSections>
        <SubNavLink
          to={`/plugins/${pluginId}`}
          withBullet={false}
          icon={<Apps />}
        >
          Dashboard
        </SubNavLink>
        <SubNavSection label="Store management">
          <SubNavLink to="/test" withBullet={false} icon={<Drag />}>
            Products
          </SubNavLink>
          <SubNavLink to="/test" withBullet={false} icon={<BulletList />}>
            Categories
          </SubNavLink>
          <SubNavLink
            to={`/plugins/${pluginId}/collectionType/plugin::katsu-commerce.customer`}
            withBullet={false}
            icon={<User />}
          >
            Customers
          </SubNavLink>
          <SubNavLink to="/test" withBullet={false} icon={<Clock />}>
            Promotions
          </SubNavLink>
        </SubNavSection>
        <SubNavSection label="Orders">
          <SubNavLink to="/test" withBullet={false} icon={<File />}>
            Orders
          </SubNavLink>
          <SubNavLink to="/test" withBullet={false} icon={<Earth />}>
            Payments
          </SubNavLink>
          <SubNavLink to="/test" withBullet={false} icon={<ShoppingCart />}>
            Carts
          </SubNavLink>
        </SubNavSection>
      </SubNavSections>
    </SubNav>
  );
};

export default MainMenu;
