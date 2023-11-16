import * as React from "react";
import type { SVGProps } from "react";
const SvgSunrise = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M8 22h8M5 19h14M2 16h20M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z" />
      <path d="m12 10 .53-.53a.75.75 0 0 0-1.06 0L12 10Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 16v-6h-1.5v6h1.5Zm-1.28-5.47 2 2 1.06-1.06-2-2-1.06 1.06Zm0-1.06-2 2 1.06 1.06 2-2-1.06-1.06ZM12 2v1M22 12h-1M3 12H2M19.07 4.93l-.392.393M5.322 5.322l-.393-.393" />
    </svg>
  );
};
export default SvgSunrise;
