import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorRight = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M12 21h1c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-1"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2.5 3"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22V2"
      />
    </svg>
  );
};
export default SvgMirrorRight;
