import * as React from "react";
import type { SVGProps } from "react";
const SvgBackpack = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M3 10.911v-.18a6 6 0 0 1 4.618-5.757l.176-.04.167-.036a19 19 0 0 1 8.078 0l.167.037.176.04A6 6 0 0 1 21 10.91v5.464a4.519 4.519 0 0 1-3.538 4.411c-3.598.8-7.326.8-10.923 0A4.519 4.519 0 0 1 3 16.376V10.91ZM17.5 15.5V17" />
      <path d="M15.959 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.959 2.5M3 14a22.16 22.16 0 0 0 18 0M10 13h4" />
    </svg>
  );
};
export default SvgBackpack;
