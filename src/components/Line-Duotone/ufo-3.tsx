import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo3 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M18.922 12.15c1.603 2.623 2.072 5 .98 6.091-1.63 1.63-6.118-.214-10.023-4.12C5.974 10.217 4.129 5.73 5.759 4.1c1.092-1.092 3.468-.624 6.092.98"
      />
      <path
        stroke="#8E93A6"
        
        d="M11.485 5.445a4.729 4.729 0 0 1 6.687 0l.384.383a4.729 4.729 0 0 1 0 6.688c-.126.125-.286.21-.46.178-.497-.09-1.72-.56-3.975-2.815-2.255-2.256-2.725-3.477-2.814-3.974-.032-.174.052-.335.178-.46Z"
      />
      <circle
        cx={12}
        cy={12}
        r={1}
        fill="#8E93A6"
        transform="rotate(45 12 12)"
      />
      <circle
        cx={9.172}
        cy={7.757}
        r={1}
        fill="currentColor"
        transform="rotate(45 9.172 7.757)"
      />
      <circle
        cx={16.243}
        cy={14.828}
        r={1}
        fill="currentColor"
        transform="rotate(45 16.243 14.828)"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m3.636 20.364 4.121-4.122"
      />
      <path
        stroke="#8E93A6"
        strokeLinecap="round"
        
        d="m10 22 2.707-2.222M2 14l2.222-2.707"
      />
    </svg>
  );
};
export default SvgUfo3;
