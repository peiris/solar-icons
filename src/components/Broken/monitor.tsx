import * as React from "react";
import type { SVGProps } from "react";
const SvgMonitor = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M5 2.252c-.774.169-1.359.45-1.828.92C2 4.343 2 6.229 2 10v1c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11v-1c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2H9M16 22H8M12 17v5M22 13h-6M2 13h10"
      />
    </svg>
  );
};
export default SvgMonitor;
