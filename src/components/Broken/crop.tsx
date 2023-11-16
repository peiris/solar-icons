import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M8.5 11.5c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44h1c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v1c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44h-1c-1.414 0-2.121 0-2.56-.44-.44-.439-.44-1.146-.44-2.56v-1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172-.654-.653-.943-1.528-1.07-2.828M5 11V2M8 5h3c3.771 0 5.657 0 6.828 1.172.654.653.943 1.528 1.07 2.828M2 5h3m14 14v3m0-9v3"
      />
    </svg>
  );
};
export default SvgCrop;
