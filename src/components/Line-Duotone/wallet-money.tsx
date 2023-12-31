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
        
        d="M6 9h4"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        
        d="M20.833 10h-2.602C16.446 10 15 11.343 15 13s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.071.002-.148v-3.834c0-.077 0-.116-.002-.148-.036-.501-.465-.9-1.005-.933-.035-.002-.076-.002-.16-.002Z"
      />
      <path
        stroke="currentColor"
        
        d="M20.965 10c-.078-1.872-.328-3.02-1.137-3.828C18.657 5 16.771 5 13 5h-3C6.229 5 4.343 5 3.172 6.172 2 7.343 2 9.229 2 13c0 3.771 0 5.657 1.172 6.828C4.343 21 6.229 21 10 21h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m6 5 3.735-2.477a3.237 3.237 0 0 1 3.53 0L17 5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.991 13H18"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWalletMoney;
