import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlockRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3a2.24 2.24 0 0 0-.97-.22Zm2.03 1.28-3 3a2.25 2.25 0 0 0 3-3Zm-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.216 14.332a3.751 3.751 0 0 0-1.97 6.213c-.97.29-2.075.455-3.246.455-3.866 0-7-1.79-7-4s3.134-4 7-4c2.072 0 3.934.515 5.216 1.332Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgUserBlockRounded;
