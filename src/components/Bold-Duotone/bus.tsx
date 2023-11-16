import * as React from "react";
import type { SVGProps } from "react";
const SvgBus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.5 19.982c1.573-.04 2.677-.167 3.5-.567V21a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-1.018ZM6 19.415c.823.4 1.927.527 3.5.567V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.585Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.172 3.172C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C19.892 4.235 19.99 5.886 20 9L20 13c-.01 3.114-.108 4.765-1.172 5.828a3.02 3.02 0 0 1-.828.587c-.823.4-1.927.527-3.5.567C13.773 20 12.946 20 12 20s-1.773 0-2.5-.018c-1.573-.04-2.677-.167-3.5-.567a3.02 3.02 0 0 1-.828-.587C4.108 17.765 4.009 16.114 4 13V9c.01-3.114.108-4.765 1.172-5.828Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.75 16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 .75-.75ZM6.25 16a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75ZM5.5 9.5c0 1.414 0 2.121.44 2.56.439.44 1.146.44 2.56.44h7c1.414 0 2.121 0 2.56-.44.44-.439.44-1.146.44-2.56V7c0-1.414 0-2.121-.44-2.56C17.622 4 16.915 4 15.5 4h-7c-1.414 0-2.121 0-2.56.44C5.5 4.878 5.5 5.585 5.5 7v2.5ZM2.4 11.8 4 13V9H3a1 1 0 0 0-1 1v1a1 1 0 0 0 .4.8ZM21 9h-1.001L20 13l1.6-1.2a1 1 0 0 0 .4-.8v-1a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
};
export default SvgBus;
