import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundTransferVertical = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M10 7v10l-3-3.437M14 17V7l3 3.438" />
    </svg>
  );
};
export default SvgRoundTransferVertical;
