import * as React from "react";
import type { SVGProps } from "react";
const SvgSleepingSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.464 21.536C3.93 23 6.286 23 11 23c4.714 0 7.071 0 8.535-1.465C21 20.072 21 17.714 21 13s0-7.071-1.465-8.536C18.072 3 15.715 3 11 3S3.929 3 2.464 4.464C1 5.93 1 8.286 1 13c0 4.714 0 7.071 1.464 8.535Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715 1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715-1.896 1.095ZM12.673 6.15a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264-.164-.094Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM11.999 11.442a.75.75 0 0 1 1.059.056c.465.517.965.752 1.442.752s.977-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249-1.01 0-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06ZM6.058 11.499A.75.75 0 1 0 4.942 12.5c.67.744 1.548 1.249 2.558 1.249 1.01 0 1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.464.517-.965.752-1.442.752s-.977-.235-1.442-.751Z"
      />
    </svg>
  );
};
export default SvgSleepingSquare;
