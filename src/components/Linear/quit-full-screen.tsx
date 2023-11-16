import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitFullScreen = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M14 22c0-3.771 0-5.657 1.172-6.828C16.343 14 18.229 14 22 14M2 14c3.771 0 5.657 0 6.828 1.172C10 16.343 10 18.229 10 22M2 10c3.771 0 5.657 0 6.828-1.172C10 7.657 10 5.771 10 2M22 10c-3.771 0-5.657 0-6.828-1.172C14 7.657 14 5.771 14 2"
      />
    </svg>
  );
};
export default SvgQuitFullScreen;
