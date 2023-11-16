import * as React from "react";
import type { SVGProps } from "react";
const SvgIncognito = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM2 11h20M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635.814.636 1.086 1.727 1.632 3.91L20 11M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33" />
    </svg>
  );
};
export default SvgIncognito;
