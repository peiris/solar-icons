import * as React from "react";
import type { SVGProps } from "react";
const SvgSidebarCode = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h5V3h-5C6.229 3 4.343 3 3.172 4.172Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M22 13v-2c0-3.771 0-5.657-1.172-6.828-.974-.975-3.192-1.139-5.828-1.166v17.988c2.636-.027 4.854-.191 5.828-1.166C22 18.657 22 16.771 22 13ZM9.263 13.298a.75.75 0 0 1 .44.965l-1.5 4a.75.75 0 0 1-1.405-.526l1.5-4a.75.75 0 0 1 .965-.44ZM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 0 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0ZM9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06Z"
      />
    </svg>
  );
};
export default SvgSidebarCode;
