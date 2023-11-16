import * as React from "react";
import type { SVGProps } from "react";
const SvgLetter = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m18 8-2.159 1.8c-1.836 1.53-2.755 2.295-3.841 2.295-.65 0-1.239-.274-2-.82M6 8l.9.75.9.75"
      />
    </svg>
  );
};
export default SvgLetter;