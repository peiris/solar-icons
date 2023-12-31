import * as React from "react";
import type { SVGProps } from "react";
const SvgScissors = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815 5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142l-5.346-9.51Z"
      />
    </svg>
  );
};
export default SvgScissors;
