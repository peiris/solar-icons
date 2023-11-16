import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackHole3 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={2} />
      <path d="M12 10c5 0 4.6 12-3 12" />
      <path d="M12.312 14c-5 0-4.6-12 3-12" />
      <path d="M10 12.312c0-5 12-4.6 12 3" />
      <path d="M14 12c0 5-12 4.6-12-3" />
    </svg>
  );
};
export default SvgBlackHole3;
