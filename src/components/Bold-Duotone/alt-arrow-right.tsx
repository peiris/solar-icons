import * as React from "react";
import type { SVGProps } from "react";
const SvgAltArrowRight = (props: SVGProps<SVGSVGElement>) => {
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
        d="m12.404 8.303 3.431 3.327c.22.213.22.527 0 .74l-6.63 6.43C8.79 19.201 8 18.958 8 18.43v-5.723l4.404-4.404Z"
      />
      <path
        fill="currentColor"
        d="M8 11.293V5.57c0-.528.79-.771 1.205-.37l2.481 2.406L8 11.293Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgAltArrowRight;
