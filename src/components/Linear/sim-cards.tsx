import * as React from "react";
import type { SVGProps } from "react";
const SvgSimCards = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M3.172 20.828C4.343 22 6.229 22 10 22c3.771 0 5.657 0 6.828-1.172C18 19.657 18 17.771 18 14c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.864 3.864 0 0 0 10 6C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828Z"
      />
      <path
        stroke="currentColor"
        
        d="M18 17.899c1.3-.128 2.175-.417 2.828-1.07C22 15.656 22 13.77 22 10c0-1.025-.41-2.006-1.136-2.731l-4.133-4.133A3.863 3.863 0 0 0 14.001 2c-3.772 0-5.658 0-6.83 1.172C6.519 3.825 6.23 4.7 6.102 6M10 14H9c-.943 0-1.414 0-1.707.293C7 14.586 7 15.057 7 16v1c0 .943 0 1.414.293 1.707C7.586 19 8.057 19 9 19h1m0-5h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v.5M10 14v2.5m0 2.5h1c.943 0 1.414 0 1.707-.293C13 18.414 13 17.943 13 17v-.5M10 19v-2.5m0 0h3"
      />
    </svg>
  );
};
export default SvgSimCards;
