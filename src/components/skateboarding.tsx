import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboarding = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m3 17 1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17" />
      <circle cx={7} cy={21} r={1} />
      <circle cx={17} cy={21} r={1} />
      <circle cx={19} cy={4} r={2} />
      <path d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5M16.5 10a8.246 8.246 0 0 0 4 0" />
    </svg>
  );
};
export default SvgSkateboarding;
