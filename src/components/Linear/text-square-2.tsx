import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSquare2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M21 9.3c-.058-2.512-.298-3.98-1.303-4.982C18.377 3 16.251 3 12 3 7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 5.4c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21c-4.251 0-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8M12 16V8M22 12h-2M4 12H2"
      />
    </svg>
  );
};
export default SvgTextSquare2;
