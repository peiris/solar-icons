import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSend = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12c0-.442.002-1.608.004-2H22c.002.392 0 1.558 0 2 0 .66 0 1.261-.006 1.812l-1.403-1.403a2.25 2.25 0 0 0-3.182 0l-2 2a2.25 2.25 0 0 0 1.341 3.827v1.738C15.964 20 15.056 20 14 20Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.47 13.47a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06l2-2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5h-1.5ZM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5H6ZM9.995 4h4.01c3.781 0 5.672 0 6.846 1.116.846.803 1.083 1.96 1.149 3.884v1H2V9c.066-1.925.303-3.08 1.149-3.884C4.323 4 6.214 4 9.995 4Z"
      />
    </svg>
  );
};
export default SvgCardSend;
