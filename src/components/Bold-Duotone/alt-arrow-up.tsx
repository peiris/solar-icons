import * as React from "react";
import type { SVGProps } from "react";
const SvgAltArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="m8.303 11.596 3.327-3.431a.499.499 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723l-4.404-4.404Z"
      />
      <path
        fill="currentColor"
        d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482L11.293 16Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgAltArrowUp;
