import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForward = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m11 15.232-6.097 4.46C3.601 20.589 2 19.422 2 17.574V15m9-6.232-6.097-4.46C3.601 3.411 2 4.578 2 6.426V11M17.37 7.708 13.66 5.27C12.467 4.485 11 5.507 11 7.123v9.754c0 1.616 1.467 2.638 2.661 1.853l7.418-4.877c1.228-.807 1.228-2.899 0-3.706l-.928-.61"
      />
    </svg>
  );
};
export default SvgRewindForward;
