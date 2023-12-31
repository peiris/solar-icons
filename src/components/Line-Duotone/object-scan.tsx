import * as React from "react";
import type { SVGProps } from "react";
const SvgObjectScan = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 11.5s2.4-2 8-2 8 2 8 2"
      />
      <path
        fill="currentColor"
        d="M5.25 10a.75.75 0 0 0 1.5 0h-1.5Zm12.164-3.914-.53.53.53-.53ZM10 6.25h4v-1.5h-4v1.5ZM6.75 10v-.5h-1.5v.5h1.5Zm10.5-.5v.5h1.5v-.5h-1.5ZM14 6.25c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08v1.5Zm4.75 3.25c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094h1.5ZM10 4.75c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066v-1.5ZM6.75 9.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294h1.5Z"
        opacity={0.7}
      />
      <path
        stroke="currentColor"
        
        d="M18 10.5v4c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-4c-1.886 0-2.828 0-3.414-.586C6 17.328 6 16.386 6 14.5V10"
        opacity={0.7}
      />
    </svg>
  );
};
export default SvgObjectScan;
