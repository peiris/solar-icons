import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 20.283A6 6 0 1 0 17.5 10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 2.803A6 6 0 1 1 6.341 6"
      />
      <path
        fill="currentColor"
        d="M8 22v-.75.75Zm-6-6h-.75H2Zm.153 3.375a.75.75 0 1 0 1.299-.75l-1.299.75Zm4.097 1.576a.75.75 0 0 0-.5 1.415l.5-1.415Zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16h-1.5Zm-10.5 0a5.252 5.252 0 0 1 3.937-5.085l-.374-1.452A6.753 6.753 0 0 0 1.25 16h1.5Zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41l-1.401.536Zm-9.454 4.498A5.222 5.222 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375l1.299-.75ZM8 21.25a5.24 5.24 0 0 1-1.75-.299l-.5 1.415A6.742 6.742 0 0 0 8 22.75v-1.5Z"
      />
    </svg>
  );
};
export default SvgFilters;
