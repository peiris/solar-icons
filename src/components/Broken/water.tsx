import * as React from "react";
import type { SVGProps } from "react";
const SvgWater = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M12 19c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354m20 0c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013-.41.516-.899.99-1.49 1.379M12 9c2.507 0 4.082-1.345 5.134-2.611.439-.53 1.28-.522 1.664.043.701 1.03 1.518 1.98 3.202 2.354m-20 0c1.588-.352 2.404-1.216 3.08-2.178.423-.602 1.355-.565 1.814.013.41.515.9.99 1.491 1.379M22 13.786c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354"
      />
    </svg>
  );
};
export default SvgWater;
