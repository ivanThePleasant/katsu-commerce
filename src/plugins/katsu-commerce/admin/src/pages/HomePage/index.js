/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';

import {
  SubNav,
  SubNavHeader,
  SubNavSection,
  SubNavSections,
  SubNavLink,
  SubNavLinkSection,
} from "@strapi/design-system/SubNav";

import pluginId from '../../pluginId';

const HomePage = () => {
  return (
    <SubNav ariaLabel="Plugin main menu">
      <SubNavHeader label="Katsu Commerce" value="Katsu Commerce" />
      <SubNavSections>
        <SubNavLink to="/test" withBullet={false}>
          SomeLink
        </SubNavLink>
        <SubNavLink to="/test2" className="active">
          SomeLink
        </SubNavLink>
      </SubNavSections>
    </SubNav>
  );
};

export default memo(HomePage);
