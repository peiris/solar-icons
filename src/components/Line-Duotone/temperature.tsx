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
        strokeWidth={1.5}
        d="M12 22a5.5 5.5 0 0 0 3.439-9.793c-.264-.211-.439-.521-.439-.86V5a3 3 0 1 0-6 0v6.348c0 .338-.175.648-.439.86A5.5 5.5 0 0 0 12 22Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm0 0V5"
      />
    </svg>
  );
};
export default SvgTemperature;
