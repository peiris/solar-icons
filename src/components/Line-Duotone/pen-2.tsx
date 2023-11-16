import * as React from "react";
import type { SVGProps } from "react";
const SvgPen2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4 22h16"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.63 2.921-.742.742-6.817 6.817c-.462.462-.693.692-.891.947a5.24 5.24 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626-.213.641a.848.848 0 0 0 1.073 1.073l.641-.213 2.625-.875c.62-.207.93-.31 1.221-.45.344-.163.669-.364.969-.598.255-.199.485-.43.947-.891l6.817-6.817.742-.742a3.146 3.146 0 0 0-4.45-4.449Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.888 3.664S13.98 5.24 15.37 6.63c1.39 1.39 2.966 1.483 2.966 1.483m-12.579 9.63-1.5-1.5"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPen2;
