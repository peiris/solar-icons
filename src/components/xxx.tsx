import * as React from "react";
import type { SVGProps } from "react";
const SvgXxx = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m8.5 9-2 3m0 0-2 3m2-3-2-3m2 3 2 3M14 9l-2 3m0 0-2 3m2-3-2-3m2 3 2 3m5.5-6-2 3m0 0-2 3m2-3-2-3m2 3 2 3M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
    </svg>
  );
};
export default SvgXxx;
