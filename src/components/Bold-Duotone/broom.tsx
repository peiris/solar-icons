import * as React from "react";
import type { SVGProps } from "react";
const SvgBroom = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22.53 2.53a.75.75 0 1 0-1.06-1.06l-2.403 2.402a4.471 4.471 0 0 1 1.061 1.06L22.53 2.53ZM2.449 11.411l.74 1.218a24.449 24.449 0 0 0 8.181 8.181l1.219.741c1.898.97 4.353.347 5.414-1.661.5-.949.977-2.012 1.279-3.07.488-1.706.659-3.259.712-4.33.033-.64.049-.961-.104-1.357-.152-.395-.416-.66-.944-1.187L14.12 5.12c-.491-.491-.737-.737-1.107-.89-.37-.151-.664-.15-1.253-.148a17.191 17.191 0 0 0-4.581.635c-1.057.302-2.12.778-3.069 1.28-2.008 1.06-2.63 3.515-1.661 5.413Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.643 4.358a4.445 4.445 0 0 0-6.287 0l-.038.037c.232.156.456.38.802.726l4.825 4.825c.302.302.518.517.675.72l.023-.022a4.445 4.445 0 0 0 0-6.286Z"
      />
    </svg>
  );
};
export default SvgBroom;
