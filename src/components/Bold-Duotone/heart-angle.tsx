import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartAngle = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M2 9.137c0 4.405 3.298 6.946 6.106 9.11.292.225.579.445.856.664C10 19.729 11 20.5 12 20.5v-15C7.5.826 2 4.275 2 9.138Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m14 7.5-2-2v15c1 0 2-.77 3.038-1.59.277-.218.564-.438.856-.663C18.702 16.083 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63l1.931 1.931A.75.75 0 0 1 14 7.5Z"
      />
    </svg>
  );
};
export default SvgHeartAngle;
