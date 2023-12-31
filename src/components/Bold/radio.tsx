import * as React from "react";
import type { SVGProps } from "react";
const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.75 12.25v-.75a.75.75 0 0 0-1.5 0v.75H7a1.25 1.25 0 1 1 0-2.5h10a1.25 1.25 0 1 1 0 2.5h-1.25ZM6.75 17a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14c0-3.771 0-5.657-1.172-6.828C19.657 6 17.771 6 14 6h-3.613l4.932-2.321ZM7 8.25a2.75 2.75 0 0 0 0 5.5h10a2.75 2.75 0 1 0 0-5.5H7ZM5.25 17a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRadio;
