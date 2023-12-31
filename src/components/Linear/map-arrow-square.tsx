import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowSquare = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z"
      />
      <path
        stroke="currentColor"
        
        d="m13.423 17.362 3.512-9.166a.863.863 0 0 0-1.131-1.13l-9.166 3.511c-.83.319-.857 1.483-.04 1.731l3.477 1.057c.27.082.478.29.56.56l1.057 3.477c.248.817 1.412.79 1.73-.04Z"
      />
    </svg>
  );
};
export default SvgMapArrowSquare;
