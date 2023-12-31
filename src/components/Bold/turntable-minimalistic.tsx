import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.75 2.222v5.743a1.75 1.75 0 0 1-.78 1.456l-2.554 1.703a.75.75 0 1 1-.832-1.248l2.555-1.703a.25.25 0 0 0 .111-.208V2.069C15.094 2 13.7 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536c-.683-.684-1.562-1.048-2.785-1.242ZM6.25 12a5.75 5.75 0 0 1 7.475-5.487.75.75 0 1 1-.45 1.431A4.25 4.25 0 1 0 16.25 12a.75.75 0 0 1 1.5 0 5.75 5.75 0 0 1-11.5 0Zm3.75-.75a.75.75 0 0 1 .75.75c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5A2.75 2.75 0 0 1 9.25 12a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTurntableMinimalistic;
