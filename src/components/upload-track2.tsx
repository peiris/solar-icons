import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M13 15V7" />
      <circle cx={11} cy={15} r={2} />
      <path d="M16 10a3 3 0 0 1-3-3" />
      <path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5" />
    </svg>
  );
};
export default SvgUploadTrack2;
