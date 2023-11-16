import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0ZM17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315l.654-1.659ZM16.017 9.043l.75-.75-.3-.76-.76-.3-.75.75c.384.321.739.676 1.06 1.06Z"
      />
    </svg>
  );
};
export default SvgBomb;
