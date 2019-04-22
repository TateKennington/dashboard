import React, { memo } from "react";

import "./Text.scss";

const Text = ({ id, content, setOption }: Props) => {
  return (
    <textarea
      onChange={event =>
        setOption({ id, key: "content", value: event.target.value })
      }
      value={content}
    />
  );
};

export interface Props {
  id: string;
  content?: string;
  setOption: (payload: object) => void;
}

Text.defaultProps = {};

export default memo(Text);