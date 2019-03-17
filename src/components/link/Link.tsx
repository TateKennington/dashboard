import React from "react";
import cn from "classnames";

export interface Props {
  children: React.ReactNode;
  className?: string;
  url: string;
  title?: string;
  external?: boolean;
}

class Link extends React.Component<Props> {
  static defaultProps = {
    className: undefined,
    title: undefined,
    external: true
  };

  shouldComponentUpdate = () => false; // The link content does not ever change

  render() {
    const { className, url, title, external } = this.props;
    return (
      <a
        className={cn("link", className)}
        href={url}
        title={title}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {this.props.children}
      </a>
    );
  }
}

export default Link;