import * as React from "react";
import type { SVGProps } from "react";
const SvgSafe2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
      <path
        stroke="currentColor"
        
        d="M12 12V8M12 12l3.5 1.5M12 12l-3.5 1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4.5 7v3M4.5 14v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 5C8.7 5 7.05 5 6.025 6.025 5 7.05 5 8.7 5 12s0 4.95 1.025 5.975C7.05 19 8.7 19 12 19s4.95 0 5.975-1.025C19 16.95 19 15.3 19 12s0-4.95-1.025-5.975c-.682-.681-1.64-.91-3.175-.986"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M10 8.535A4 4 0 1 1 8.126 11"
      />
    </svg>
  );
};
export default SvgSafe2;
