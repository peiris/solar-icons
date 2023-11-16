import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundVideo = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12c0 5.523-4.477 10-10 10-1.6 0-3.112-.376-4.452-1.044a1.634 1.634 0 0 0-1.149-.133l-2.226.596a1.3 1.3 0 0 1-1.591-1.592l.595-2.226a1.633 1.633 0 0 0-.134-1.148A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10Zm-6 0c0-.844-.927-1.414-2.78-2.553C11.34 8.292 10.4 7.715 9.7 8.139 9 8.563 9 9.709 9 12c0 2.291 0 3.437.7 3.861.701.424 1.64-.153 3.52-1.308C15.073 13.414 16 12.844 16 12Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatRoundVideo;
