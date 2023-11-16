import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={3} />
      <path d="M21.95 13c-.501 5.054-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.448 9-9.95" />
      <path d="M15 12V2.456a10.024 10.024 0 0 1 6.542 6.542" />
    </svg>
  );
};
export default SvgVinyl;
