import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.792 2h-1.583C9.67 2 8.9 2 8.353 2.44s-.715 1.19-1.049 2.692l-.065.292C8.22 5 9.594 5 12 5s3.782 0 4.761.424l-.065-.292c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2ZM7.24 18.576C8.217 19 9.593 19 12 19c2.406 0 3.782 0 4.76-.424l-.064.292c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.317.44-2.856.44H11.21c-1.538 0-2.308 0-2.856-.44s-.715-1.19-1.049-2.692l-.065-.292Z"
      />
      <path
        fill="currentColor"
        d="M6.778 18.326C7.787 19 9.19 19 12 19c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C5 7.787 5 9.19 5 12c0 2.809 0 4.213.674 5.222.292.437.667.812 1.104 1.104Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8.25a.75.75 0 0 1 .75.75v2.758l1.77 1.701a.75.75 0 1 1-1.04 1.082l-2-1.924a.75.75 0 0 1-.23-.54V9a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWatchSquare;
