import * as React from "react";
import type { SVGProps } from "react";
const SvgIPhone = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20 14c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10M15 19H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m16.748 2.378-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27-1.363 0-2.045 0-2.636-.27a3.002 3.002 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"
      />
    </svg>
  );
};
export default SvgIPhone;
