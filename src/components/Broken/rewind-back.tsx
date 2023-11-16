import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindBack = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m13 15.232 6.097 4.46c1.302.897 2.903-.27 2.903-2.118V15m-9-6.232 6.097-4.46C20.399 3.411 22 4.578 22 6.426V11M6.63 7.708 10.34 5.27C11.533 4.485 13 5.507 13 7.123v9.754c0 1.616-1.467 2.638-2.661 1.853L2.92 13.853c-1.228-.807-1.228-2.899 0-3.706l.928-.61"
      />
    </svg>
  );
};
export default SvgRewindBack;
