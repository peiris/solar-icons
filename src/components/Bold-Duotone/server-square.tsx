import * as React from "react";
import type { SVGProps } from "react";
const SvgServerSquare = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M14 21h-4c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-.25h20V13c0 3.771 0 5.657-1.172 6.828C19.657 21 17.771 21 14 21ZM10 3h4c3.771 0 5.657 0 6.828 1.172C22 5.343 22 7.229 22 11v.25H2V11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3Z" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 12.75H2v-1.5h20v1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.75 16.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM12.75 7.5a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75ZM6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM6 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75ZM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75Z"
      />
    </svg>
  );
};
export default SvgServerSquare;
