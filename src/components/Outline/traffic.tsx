import * as React from "react";
import type { SVGProps } from "react";
const SvgTraffic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.114 21.932A10.75 10.75 0 1 1 12 1.25a.75.75 0 0 1 0 1.5A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0 10.75 10.75 0 0 1-6.636 9.932Z"
      />
      <path
        fill="currentColor"
        d="M14.687 1.589a.75.75 0 1 0-.374 1.452 9.267 9.267 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.768 10.768 0 0 0-7.724-7.724Z"
      />
    </svg>
  );
};
export default SvgTraffic;
