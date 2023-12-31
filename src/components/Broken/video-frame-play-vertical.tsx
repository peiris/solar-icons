import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFramePlayVertical = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M17 2.5v19M7 2.5v19M2 12h5m15 0h-5M2.5 7H7m14.5 0H17"
      />
      <path
        fill="currentColor"
        d="M21.5 17.75a.75.75 0 0 0 0-1.5v1.5Zm-4.5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm-10 1.5a.75.75 0 0 0 0-1.5v1.5Zm10 0h4.5v-1.5H17v1.5Zm-15 0h5v-1.5H2v1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14 12c0-.528-.53-.884-1.589-1.596-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12c0 1.432 0 2.148.4 2.413.4.265.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.817.817 1.178 1.91 1.338 3.536M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465c-.816-.816-1.177-1.91-1.337-3.535"
      />
    </svg>
  );
};
export default SvgVideoFramePlayVertical;
