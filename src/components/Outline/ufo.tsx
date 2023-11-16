import * as React from "react";
import type { SVGProps } from "react";
const SvgUfo = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.367 7.599a5.48 5.48 0 0 1 5.362-4.349h.542a5.48 5.48 0 0 1 5.362 4.349c1.358.368 2.54.874 3.421 1.499.966.684 1.696 1.604 1.696 2.728 0 .837-.41 1.567-1.01 2.159-.596.588-1.42 1.084-2.38 1.485l-.03.012.84 1.683a.75.75 0 1 1-1.34.67l-.93-1.856c-1.499.434-3.262.703-5.15.76V19a.75.75 0 0 1-1.5 0v-2.261c-1.888-.057-3.651-.326-5.15-.76l-.93 1.857a.75.75 0 1 1-1.34-.671l.84-1.683-.03-.012c-.96-.4-1.784-.897-2.38-1.485-.6-.592-1.01-1.322-1.01-2.159 0-1.124.73-2.044 1.696-2.728.882-.625 2.063-1.131 3.42-1.5Zm-.05 1.575c-1.042.318-1.892.714-2.504 1.148-.788.557-1.063 1.084-1.063 1.504 0 .316.15.684.563 1.09.415.41 1.054.814 1.905 1.17 1.698.708 4.095 1.164 6.782 1.164 2.687 0 5.084-.456 6.782-1.165.85-.355 1.49-.758 1.905-1.168.413-.407.563-.775.563-1.09 0-.421-.275-.948-1.062-1.505-.613-.434-1.463-.83-2.506-1.148-.07.221-.206.45-.453.622-.602.418-1.983.954-5.229.954s-4.627-.536-5.229-.954a1.176 1.176 0 0 1-.453-.622Zm1.434-.535c.387.206 1.503.611 4.249.611 2.746 0 3.862-.405 4.249-.611a3.979 3.979 0 0 0-3.978-3.889h-.542A3.979 3.979 0 0 0 7.75 8.639Zm8.499.097v-.001Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgUfo;