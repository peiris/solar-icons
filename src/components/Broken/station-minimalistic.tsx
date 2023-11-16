import * as React from "react";
import type { SVGProps } from "react";
const SvgStationMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 4.822c-2.32 0-4.2 1.895-4.2 4.233 0 1.147.453 2.187 1.188 2.95M12 2c3.866 0 7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913M7.008 14A7.06 7.06 0 0 1 5 9.055a7.06 7.06 0 0 1 2.008-4.946m8.035 7.863A4.236 4.236 0 0 0 16.2 9.055c0-.746-.191-1.447-.527-2.055"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16 22-4-12-4 12"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 17.5h-5"
      />
    </svg>
  );
};
export default SvgStationMinimalistic;
