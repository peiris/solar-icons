import * as React from "react";
import type { SVGProps } from "react";
const SvgHourglass = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M14.958 9.071 12 12 9.042 9.071C6.12 6.177 4.66 4.73 5.068 3.481c.035-.107.078-.211.13-.312C5.8 2 7.867 2 12 2c4.133 0 6.2 0 6.802 1.17.052.1.095.204.13.311.41 1.249-1.052 2.696-3.974 5.59Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9.042 14.929 12 12l2.958 2.929c2.922 2.894 4.383 4.341 3.974 5.59a2.12 2.12 0 0 1-.13.312C18.2 22 16.133 22 12 22c-4.133 0-6.2 0-6.802-1.17a2.133 2.133 0 0 1-.13-.311c-.41-1.249 1.052-2.696 3.974-5.59Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgHourglass;
