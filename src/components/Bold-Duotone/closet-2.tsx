import * as React from "react";
import type { SVGProps } from "react";
const SvgCloset2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2h-2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828a3.1 3.1 0 0 0 1.078.697V22a.75.75 0 0 0 1.5 0v-2.129C6.82 20 8.194 20 10 20h2V2ZM9 8.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14 20h-2V2h2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v2c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-2.129C17.18 20 15.806 20 14 20Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15.75 9a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V9Z"
      />
    </svg>
  );
};
export default SvgCloset2;
