import * as React from "react";
import type { SVGProps } from "react";
const SvgRestartCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={10} />
      <path d="m15.978 8.715-.442-.453a4.918 4.918 0 0 0-7.072 0c-1.952 1.999-1.952 5.24 0 7.239a4.919 4.919 0 0 0 7.072 0 5.184 5.184 0 0 0 1.425-4.259m-.983-2.527h-2.652m2.651 0V6" />
    </svg>
  );
};
export default SvgRestartCircle;
