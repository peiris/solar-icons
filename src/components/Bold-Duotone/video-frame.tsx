import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrame = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.25 2.222c-1.223.194-2.102.558-2.786 1.243-.684.684-1.048 1.562-1.243 2.785H6.25V2.222ZM2.069 7.75C2.01 8.731 2 9.884 2 11.25h4.25v-3.5H2.069ZM2 12.75c.001 1.366.01 2.519.068 3.5H6.25v-3.5H2ZM2.221 17.75c.195 1.223.56 2.102 1.243 2.786.684.684 1.563 1.048 2.786 1.242V17.75H2.22ZM17.75 21.778c1.223-.194 2.101-.558 2.785-1.242.684-.684 1.049-1.563 1.243-2.786H17.75v4.028ZM21.931 16.25c.058-.981.067-2.134.069-3.5h-4.25v3.5h4.181ZM22 11.25c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5H22ZM21.778 6.25c-.194-1.223-.559-2.101-1.243-2.785-.684-.685-1.562-1.05-2.785-1.243V6.25h4.028Z"
      />
      <g fill="currentColor" opacity={0.5}>
        <path d="M7.75 21.931C8.906 22 10.3 22 12 22c1.7 0 3.094 0 4.25-.069V12.75h-8.5v9.181ZM16.25 2.069C15.094 2 13.7 2 12 2c-1.7 0-3.094 0-4.25.069v9.181h8.5V2.069Z" />
      </g>
    </svg>
  );
};
export default SvgVideoFrame;
