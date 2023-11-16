import * as React from "react";
import type { SVGProps } from "react";
const SvgUserBlock = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <circle cx={12} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 13.535C14.47 13.195 13.275 13 12 13c-3.866 0-7 1.79-7 4 0 .345 0 .68.027 1M13 20.987c-.316.009-.65.013-1 .013-1.722 0-3.02-.108-4-.305M19.95 17.05l-3.9 3.9"
      />
      <circle cx={18} cy={19} r={3} stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
};
export default SvgUserBlock;
