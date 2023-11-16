import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 20v-2.4m0-11.2V4m8 8h-2.4M6.4 12H4m13.657-5.657L15.96 8.04m-7.92 7.92-1.697 1.697m0-11.314L8.04 8.04m7.92 7.92 1.697 1.697" />
    </svg>
  );
};
export default SvgStar;
