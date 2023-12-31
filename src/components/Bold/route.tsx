import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Zm7.704 2.31a.75.75 0 1 0-1.026 1.095l1.283 1.203h-3.436c-.555 0-1.378.15-2.087.628-.748.505-1.33 1.357-1.33 2.622a.75.75 0 0 0 1.5 0c0-.735.307-1.133.67-1.378a2.373 2.373 0 0 1 1.247-.372h3.436l-1.283 1.203a.75.75 0 0 0 1.026 1.094l2.667-2.5a.75.75 0 0 0 0-1.094l-2.667-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoute;
