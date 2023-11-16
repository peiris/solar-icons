import * as React from "react";
import type { SVGProps } from "react";
const SvgSkateboardingRound = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M21 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.21 6.047a5.019 5.019 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516 3.518 3.518 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272l2.107-1.317ZM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25H17.42c.92 0 1.799-.391 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M8 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3ZM11.53 14.53a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602-.106.044-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171.417-.173.736-.493 1.095-.854l.074-.073.621-.622Z" />
      </g>
    </svg>
  );
};
export default SvgSkateboardingRound;
