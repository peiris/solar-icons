import * as React from "react";
import type { SVGProps } from "react";
const SvgDollar = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5.25a.75.75 0 0 1 .75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 0 1-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 0 1-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 0 1 1.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 0 1 .75-.75Zm-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652V7.848Zm3 6.653c0-.678-.564-1.397-1.5-1.652v3.304c.936-.255 1.5-.974 1.5-1.652Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDollar;
