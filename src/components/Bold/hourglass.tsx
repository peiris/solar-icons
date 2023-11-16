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
        fill="currentColor"
        d="M5.198 3.3C5.8 2 7.867 2 12 2c4.133 0 6.2 0 6.802 1.3.052.11.095.227.13.346.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.51 2.51 0 0 1-.13.348C18.2 22 16.133 22 12 22c-4.133 0-6.2 0-6.802-1.3a2.524 2.524 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12 9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647c.035-.12.078-.236.13-.348Z"
      />
    </svg>
  );
};
export default SvgHourglass;
