import * as React from "react";
import type { SVGProps } from "react";
const SvgPrinter = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M9 10H6"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 14H5M18 14v2c0 2.828 0 4.243-.879 5.121C16.243 22 14.828 22 12 22c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-2"
      />
      <path
        stroke="currentColor"
        
        d="M17.983 6c-.047-1.553-.22-2.48-.862-3.121C16.243 2 14.828 2 12 2c-2.828 0-4.243 0-5.121.879-.642.641-.815 1.568-.862 3.121"
        opacity={0.5}
      />
      <circle cx={17} cy={10} r={1} fill="currentColor" opacity={0.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M15 16.5H9M13 19H9"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPrinter;
