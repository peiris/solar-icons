import * as React from "react";
import type { SVGProps } from "react";
const SvgPills2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.465 20.536a5 5 0 1 0 7.07-7.071 5 5 0 0 0-7.07 7.07ZM3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M12.056 17.75h9.888a5.026 5.026 0 0 0 0-1.5h-9.888a5.026 5.026 0 0 0 0 1.5ZM3.974 4.035l6.991 6.991a5.038 5.038 0 0 0 1.06-1.06l-6.99-6.992a5.028 5.028 0 0 0-1.061 1.06Z"
      />
    </svg>
  );
};
export default SvgPills2;
