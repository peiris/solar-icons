import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicNote2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M13 18V2" />
      <circle cx={9} cy={18} r={4} />
      <path d="M19 8a6 6 0 0 1-6-6" />
    </svg>
  );
};
export default SvgMusicNote2;
