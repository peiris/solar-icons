import * as React from "react";
import type { SVGProps } from "react";
const SvgTextCross = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3H8c-1.886 0-2.828 0-3.414.586C4 4.172 4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v.95M12 3v6m0 12v-6M7 21h10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M4 12h16"
      />
    </svg>
  );
};
export default SvgTextCross;
