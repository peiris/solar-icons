import * as React from "react";
import type { SVGProps } from "react";
const SvgAltArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.596 8.303 8.165 11.63a.499.499 0 0 0 0 .74l6.63 6.43c.414.401 1.205.158 1.205-.37v-5.723l-4.404-4.404Z"
      />
      <path
        fill="currentColor"
        d="M16 11.293V5.57c0-.528-.791-.771-1.205-.37l-2.482 2.406L16 11.293Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgAltArrowLeft;
