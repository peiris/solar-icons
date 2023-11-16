import * as React from "react";
import type { SVGProps } from "react";
const SvgServerPath = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 19h-8M2 19h8M12 17v-3" />
      <circle cx={12} cy={19} r={2} />
      <path d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3ZM2 5a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3ZM13 5h6M13 11h6" />
      <circle cx={6} cy={5} r={1} />
      <circle cx={6} cy={11} r={1} />
    </svg>
  );
};
export default SvgServerPath;
