import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartHomeAngle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M2.011 10c-.044-.875.038-1.527.324-2.125.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093-1.069.92-2.591 1.004-5.451 1.011" />
      <path d="M11 22a9 9 0 0 0-9-9" />
      <path d="M8 22a6 6 0 0 0-6-6M5 22a3 3 0 0 0-3-3" />
    </svg>
  );
};
export default SvgSmartHomeAngle;
