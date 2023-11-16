import * as React from "react";
import type { SVGProps } from "react";
const SvgTagPrice = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M15.39 15.39c.585-.587.664-1.457.176-1.946-.488-.488-1.359-.409-1.945.177-.585.586-1.456.665-1.944.177-.488-.488-.409-1.359.177-1.944m3.535 3.535.354.354m-.354-.354c-.4.401-.935.565-1.389.471m-2.5-4.36.354.354m0 0c.331-.332.753-.5 1.146-.497M8.607 10.879a2 2 0 1 0-2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M16.137 4.728c-1.546-1.545-2.318-2.318-3.321-2.605-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233-.613.614-.82 1.51-1.233 3.302l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033 2.69-2.69 4.034-4.034 4.034-5.705 0-1.342-.868-2.474-2.604-4.262"
      />
    </svg>
  );
};
export default SvgTagPrice;
