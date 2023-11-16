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
        d="M12.026 9.965a5 5 0 0 0-6.992-6.992l6.992 6.992ZM10.965 11.026a5 5 0 0 1-6.991-6.992l6.991 6.992ZM21.944 16.25a5 5 0 0 0-9.887 0h9.887ZM21.944 17.75h-9.888a5 5 0 0 0 9.888 0Z"
      />
    </svg>
  );
};
export default SvgPills2;
