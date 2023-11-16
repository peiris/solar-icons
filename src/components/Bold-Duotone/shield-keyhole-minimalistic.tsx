import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldKeyholeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536.721.315 1.082.473 2.101.473 1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2c-.811 0-1.595.268-3.162.805L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.125 7.253a3.745 3.745 0 0 1 5.122 1.372 3.745 3.745 0 0 1-1.372 5.122 3.75 3.75 0 0 1-1.125.428V16.5a.75.75 0 0 1-1.5 0v-2.326a3.75 3.75 0 0 1-1.125-6.921Zm.75 1.299a2.245 2.245 0 0 1 3.073.823 2.245 2.245 0 0 1-.823 3.073 2.25 2.25 0 1 1-2.25-3.896Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShieldKeyholeMinimalistic;
