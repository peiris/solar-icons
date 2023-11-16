import * as React from "react";
import type { SVGProps } from "react";
const SvgWomen = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 15.96a7.001 7.001 0 1 0-1.5 0v1.79H9.5a.75.75 0 0 0 0 1.5h1.75V22a.75.75 0 1 0 1.5 0v-2.75h1.75a.75.75 0 0 0 0-1.5h-1.75v-1.79Z"
      />
    </svg>
  );
};
export default SvgWomen;
