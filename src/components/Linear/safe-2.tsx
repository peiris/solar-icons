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
        stroke="currentColor"
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="currentColor"
        
        d="M5 11c0-2.828 0-4.243.879-5.121C6.757 5 8.172 5 11 5h2c2.828 0 4.243 0 5.121.879C19 6.757 19 8.172 19 11v2c0 2.828 0 4.243-.879 5.121C17.243 19 15.828 19 13 19h-2c-2.828 0-4.243 0-5.121-.879C5 17.243 5 15.828 5 13v-2Z"
      />
      <path
        stroke="currentColor"
        
        d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      />
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
        
        d="M4.5 7v3M4.5 14v3"
      />
    </svg>
  );
};
export default SvgSafe2;
