import * as React from "react";
import type { SVGProps } from "react";
const SvgDialog = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <path
        fill="currentColor"
        d="M22 8.5a6.5 6.5 0 0 0-11.626-3.993C15.447 4.703 19.5 8.878 19.5 14c0 .11-.002.22-.006.33l.333.088a1.3 1.3 0 0 0 1.592-1.591l-.128-.476c-.103-.385-.04-.791.125-1.153A6.477 6.477 0 0 0 22 8.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 14a8 8 0 0 1-11.45 7.22 1.671 1.671 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14ZM6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDialog;
