import React, { memo } from "react";
import isEmpty from "lodash/isEmpty";

import WidgetUnconfigured from "components/widget-unconfigured";

import { WidgetProps } from "../index";
import { Props as ConfigurationProps } from "./configuration";
import { widgetType } from "./properties";

const Website: React.FC<Props> = memo(
  ({ id, url }) => {
    if (isEmpty(url)) return <WidgetUnconfigured type={widgetType} />;

    return <iframe src={url} title={id} className="h-full w-full" />;
  },
  (previousProps, nextProps) => previousProps.url === nextProps.url
);
Website.displayName = "Website";

interface Props extends WidgetProps, ConfigurationProps {}

export default Website;
