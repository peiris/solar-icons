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
        d="M12 2c-1.716 0-3.096 1.38-5.858 4.142C3.381 8.904 2 10.284 2 12c0 1.716 1.38 3.096 4.142 5.858C8.904 20.619 10.284 22 12 22c1.716 0 3.096-1.38 5.858-4.142C20.619 15.096 22 13.716 22 12c0-1.716-1.38-3.096-4.142-5.858C15.096 3.381 13.716 2 12 2Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.786 8.487a.75.75 0 0 1 1.06-.034l2.667 2.5a.75.75 0 0 1 0 1.094l-2.667 2.5a.75.75 0 0 1-1.026-1.094l1.283-1.203h-3.436c-.334 0-.844.1-1.247.372-.363.245-.67.643-.67 1.378a.75.75 0 0 1-1.5 0c0-1.265.582-2.117 1.33-2.622.709-.478 1.532-.628 2.087-.628h3.436L12.82 9.547a.75.75 0 0 1-.034-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoute;
