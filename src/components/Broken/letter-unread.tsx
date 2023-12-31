import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterUnread = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-.946.018-1.273 0-2m-9-6h-3C6.229 4 4.343 4 3.172 5.172 2.518 5.825 2.229 6.7 2.102 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m6 8 1.664 1.387m8.177.412c-1.836 1.53-2.755 2.296-3.841 2.296-.65 0-1.239-.274-2-.82"
      />
      <circle cx={19} cy={5} r={3} stroke="currentColor"  />
    </svg>
  );
};
export default SvgLetterUnread;
