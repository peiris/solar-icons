import * as React from "react";
import type { SVGProps } from "react";
const SvgFeed = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M20.965 7c-.078-1.872-.328-3.02-1.137-3.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172 3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-3"
      />
      <path
        stroke="currentColor"
        
        d="M6 12c0-1.414 0-2.121.44-2.56C6.878 9 7.585 9 9 9h6c1.414 0 2.121 0 2.56.44.44.439.44 1.146.44 2.56v4c0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44H9c-1.414 0-2.121 0-2.56-.44C6 18.122 6 17.415 6 16v-4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 6h5"
      />
    </svg>
  );
};
export default SvgFeed;
