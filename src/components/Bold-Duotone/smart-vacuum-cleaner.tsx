import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartVacuumCleaner = (props: SVGProps<SVGSVGElement>) => {
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
        d="m16.441 19.427-1 1.118.559.5a3.75 3.75 0 0 0 5.295-5.295l-.5-.56-1.118 1.001-3.236 3.236ZM7.559 19.427l1 1.118-.559.5a3.75 3.75 0 0 1-5.295-5.295l.5-.56 1.118 1.001 3.236 3.236Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12 6.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 11.75c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Zm-13.75-3a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartVacuumCleaner;
