import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 12h2M20 12h2M12 4V2M12 22v-2" />
    </svg>
  );
};
export default SvgGps;
