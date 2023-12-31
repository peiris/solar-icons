import * as React from "react";
import type { SVGProps } from "react";
const SvgPlugCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="m10.013 21.967-.15.735.15-.735Zm6.021-1.482a.75.75 0 1 0 .66 1.347l-.66-1.347Zm-5.872.747c-4.224-.858-7.412-4.625-7.412-9.149h-1.5c0 5.242 3.696 9.62 8.613 10.62l.3-1.47ZM2.75 12.083c0-5.16 4.147-9.333 9.25-9.333v-1.5c-5.943 0-10.75 4.856-10.75 10.833h1.5ZM12 2.75c5.103 0 9.25 4.173 9.25 9.333h1.5C22.75 6.106 17.943 1.25 12 1.25v1.5Zm.75 17.4v-5.042h-1.5v5.042h1.5Zm8.5-8.067c0 3.697-2.13 6.89-5.216 8.402l.66 1.347a10.84 10.84 0 0 0 6.056-9.749h-1.5ZM9.863 22.703c1.658.336 2.887-1.085 2.887-2.553h-1.5c0 .759-.58 1.186-1.088 1.082l-.299 1.47Z"
      />
      <path
        stroke="currentColor"
        
        d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0v-.2Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M13.5 11V9M10.5 11V9"
      />
    </svg>
  );
};
export default SvgPlugCircle;
