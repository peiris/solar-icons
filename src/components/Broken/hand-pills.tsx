import * as React from "react";
import type { SVGProps } from "react";
const SvgHandPills = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M8.796 6.64a2.718 2.718 0 1 1 3.845-3.844l2.563 2.563a2.719 2.719 0 0 1-3.845 3.845L8.796 6.64Z"
      />
      <path
        stroke="currentColor"
        
        d="M14 4s-.225 1.168-1.529 2.471C11.167 7.775 10 8 10 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4 21.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118m-.93-3.297c.12-.014.235-.03.345-.047.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.887 1.887 0 0 1 2.22 0c.573.433.749 1.146.386 1.728-.423.678-1.019 1.545-1.591 2.075m-5.544-1.229a8.176 8.176 0 0 1-.11.012m.11-.012a.998.998 0 0 0 .427-.24 1.492 1.492 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.524.524 0 0 1-.11.012m0 0a9.274 9.274 0 0 1-1.814.004"
      />
    </svg>
  );
};
export default SvgHandPills;
