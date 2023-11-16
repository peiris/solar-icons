import * as React from "react";
import type { SVGProps } from "react";
const SvgTemperature = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 6V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86a5.5 5.5 0 1 0 6.877 0c-.263-.212-.438-.522-.438-.86V10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 14v-2m0-7v3"
      />
    </svg>
  );
};
export default SvgTemperature;
