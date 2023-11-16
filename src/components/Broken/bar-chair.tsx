import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChair = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.058 1.058 0 0 1 17.893 8H6.107c-.539 0-.992-.394-1.057-.917l-.018-.145Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 8 6 22M15 8l.75 3.5M18 22l-1.5-7M16.5 17h-9"
      />
    </svg>
  );
};
export default SvgBarChair;
