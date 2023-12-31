import * as React from "react";
import type { SVGProps } from "react";
const SvgFloorLampMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M14.599 3C14.08 2.402 13.11 2 12 2s-2.08.402-2.599 1H14.6ZM12.749 7.955c1.998-.24 3.61-1.426 4.099-2.97C17.014 4.457 16.552 4 16 4H8c-.552 0-1.014.458-.847.984.488 1.545 2.1 2.731 4.098 2.971L11.25 8v6.407a4.828 4.828 0 0 0-.387-.334l-.011-.01-3.887-2.777-.076-.057a3.127 3.127 0 0 0-.26-2.836c-.305-.48-.968-.398-1.318.05L2.78 11.685c-.35.447-.274 1.117.26 1.304a3.052 3.052 0 0 0 2.97-.546l.07.053 3.876 2.77a3.39 3.39 0 0 1 1.295 2.637v3.347H9a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25V8c0-.015 0-.03-.002-.045ZM2.157 10.857l2.212-2.831a2.036 2.036 0 0 0-1.93.76 2.078 2.078 0 0 0-.282 2.07Z"
      />
    </svg>
  );
};
export default SvgFloorLampMinimalistic;
