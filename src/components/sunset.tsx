import * as React from "react";
import type { SVGProps } from "react";
const SvgSunset = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M8 22h8M5 19h14M2 16h20M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6ZM12 6v7m0 0 2-2m-2 2-2-2M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393" />
    </svg>
  );
};
export default SvgSunset;
