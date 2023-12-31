import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletMoney = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="M6 10h4"
      />
      <path
        stroke="currentColor"
        
        d="M20.833 11h-2.602C16.446 11 15 12.343 15 14s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933-.035-.002-.076-.002-.16-.002Z"
      />
      <path
        stroke="currentColor"
        
        d="M20.965 11c-.078-1.872-.328-3.02-1.137-3.828C18.657 6 16.771 6 13 6h-3C6.229 6 4.343 6 3.172 7.172 2 8.343 2 10.229 2 14c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m6 6 3.735-2.477a3.237 3.237 0 0 1 3.53 0L17 6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.991 14h.01"
      />
    </svg>
  );
};
export default SvgWalletMoney;
