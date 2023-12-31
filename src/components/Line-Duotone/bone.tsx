import * as React from "react";
import type { SVGProps } from "react";
const SvgBone = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M10.931 16.631c-.393.394-.369 1.043-.22 1.58.28 1.013-.105 2.308-.848 3.051A2.519 2.519 0 0 1 6.3 17.7a2.519 2.519 0 0 1-3.562-3.563c.743-.743 2.038-1.128 3.052-.848.536.149 1.185.173 1.579-.22m9.262-2.138c.394-.393 1.043-.369 1.58-.22 1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562c-.743.743-1.128 2.038-.848 3.052.149.536.173 1.185-.22 1.579"
      />
      <path
        fill="currentColor"
        d="M17.161 11.462a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM13.6 7.899a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.137 9.263 5.7-5.7-1.061-1.06-5.7 5.699 1.06 1.06Zm-3.563-3.563 5.7-5.7-1.06-1.06-5.7 5.7 1.06 1.06Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBone;
