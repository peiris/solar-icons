import * as React from "react";
import type { SVGProps } from "react";
const SvgSatellite = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20.47 10.918a5.224 5.224 0 0 1-7.388-7.388m7.388 7.388a5.224 5.224 0 0 0-7.388-7.388m7.388 7.388s-1.847-.615-4.31-3.078m4.31 3.078L14.313 22M13.082 3.53s.616 1.847 3.078 4.31m-3.078-4.31L2 9.687M16.16 7.84 5 19" />
    </svg>
  );
};
export default SvgSatellite;
