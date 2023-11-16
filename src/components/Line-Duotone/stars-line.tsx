import * as React from "react";
import type { SVGProps } from "react";
const SvgStarsLine = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M12.55 3.44c-.432-.931-.648-1.396-1.029-1.435-.38-.04-.674.373-1.262 1.198l-.152.214c-.166.234-.25.351-.37.422-.12.07-.263.087-.55.119l-.26.03c-1.01.112-1.514.168-1.664.52-.15.351.154.765.761 1.592l.158.214c.172.235.258.352.29.49.031.138.004.28-.05.564l-.05.259c-.192 1-.288 1.5 0 1.757.289.256.77.099 1.733-.215l.249-.081c.274-.09.41-.134.55-.12.14.015.266.086.519.23l.23.13c.89.506 1.335.759 1.663.566.328-.193.322-.704.31-1.725l-.004-.264c-.003-.29-.005-.436.05-.564.055-.129.16-.227.371-.422l.192-.178c.742-.688 1.113-1.032 1.027-1.408-.085-.375-.57-.534-1.54-.851L13.47 4.4c-.276-.09-.414-.135-.52-.23-.105-.093-.166-.225-.289-.49l-.111-.24Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M11 22c-.334-2.167-.8-7.2 0-10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 22c0-3.333 1.5-9 7.5-12.5"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        d="M5 13.268s.65.747 1.223.9c.573.155 1.51-.168 1.51-.168s-.749.65-.902 1.222c-.154.573.17 1.51.17 1.51s-.65-.748-1.223-.902c-.573-.153-1.51.17-1.51.17s.748-.65.901-1.223c.154-.573-.169-1.51-.169-1.51Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgStarsLine;