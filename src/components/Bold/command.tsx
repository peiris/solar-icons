import * as React from "react";
import type { SVGProps } from "react";
const SvgCommand = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16 8h3a3 3 0 1 0-3-3v3H8V5a3 3 0 1 0-3 3h3v8h8V8ZM16 16h3a3 3 0 1 1-3 3.001V16ZM5 16l3 .001v3a3 3 0 1 1-3-3Z"
      />
    </svg>
  );
};
export default SvgCommand;
