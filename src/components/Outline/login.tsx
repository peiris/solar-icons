import * as React from "react";
import type { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 3.25a.75.75 0 0 0 0 1.5 7.25 7.25 0 1 1 0 14.5.75.75 0 0 0 0 1.5 8.75 8.75 0 1 0 0-17.5Z"
      />
      <path
        fill="currentColor"
        d="M10.47 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19l-1.72-1.72Z"
      />
    </svg>
  );
};
export default SvgLogin;
