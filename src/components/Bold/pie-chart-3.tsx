import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414C13.172 12 14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10.002 10.002 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.774 2.128a.75.75 0 0 1 .913-.54 10.768 10.768 0 0 1 7.725 7.725.75.75 0 0 1-1.453.374 9.267 9.267 0 0 0-6.646-6.646.75.75 0 0 1-.54-.913Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPieChart3;
