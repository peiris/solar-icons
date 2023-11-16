import * as React from "react";
import type { SVGProps } from "react";
const SvgEraserSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m8.988 10.289 4.723 4.723 2.619-2.618c1.113-1.114 1.67-1.67 1.67-2.362 0-.692-.557-1.249-1.67-2.362S14.66 6 13.968 6c-.692 0-1.248.557-2.362 1.67l-2.618 2.619ZM12.394 16.33l.257-.257-4.724-4.724-.257.257C6.557 12.72 6 13.276 6 13.968c0 .692.557 1.249 1.67 2.362S9.34 18 10.032 18c.692 0 1.248-.557 2.362-1.67Z"
      />
    </svg>
  );
};
export default SvgEraserSquare;
