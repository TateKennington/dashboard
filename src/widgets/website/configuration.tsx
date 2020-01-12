import React from "react";
import { useTranslation } from "react-i18next";

import { ConfigurationProps } from "widgets/index";
import Input from "components/forms/input";

const Configuration = ({ id, options, setOptions }: ConfigurationProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Input
        setValue={value => setOptions({ url: value })}
        value={options.url}
        label={t("widget.website.configuration.url")}
      />
    </>
  );
};

export default Configuration;