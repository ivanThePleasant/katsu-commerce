import React from "react";

import { BaseHeaderLayout } from "@strapi/design-system/Layout";

function Header({ title, subtitle, button, navigationAction }) {
  return (
    <BaseHeaderLayout
      primaryAction={button}
      title={title}
      subtitle={subtitle}
      as="h2"
      navigationAction={navigationAction}
    />
  );
}

export default Header;
