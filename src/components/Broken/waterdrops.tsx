import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterdrops = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 17.833C10 20.134 8.21 22 6 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C8.434 14.472 10 16.393 10 17.833ZM22 17.833C22 20.134 20.21 22 18 22s-4-1.866-4-4.167c0-1.44 1.566-3.361 2.738-4.598a1.724 1.724 0 0 1 2.524 0C20.434 14.472 22 16.393 22 17.833Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13.262 3.235a1.724 1.724 0 0 0-2.524 0C9.566 4.472 8 6.393 8 7.833 8 10.134 9.79 12 12 12s4-1.866 4-4.167A2.74 2.74 0 0 0 15.854 7"
      />
    </svg>
  );
};
export default SvgWaterdrops;
