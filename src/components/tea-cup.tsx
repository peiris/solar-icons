import * as React from "react";
import type { SVGProps } from "react";
const SvgTeaCup = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2.315 12.698c-.05-.427-.075-.641-.064-.817a2 2 0 0 1 1.646-1.85c.174-.031.389-.031.82-.031h10.567c.43 0 .645 0 .819.03a2 2 0 0 1 1.646 1.85c.01.177-.014.39-.064.818l-.401 3.428A5.515 5.515 0 0 1 11.807 21H8.193a5.515 5.515 0 0 1-5.477-4.874l-.4-3.428Z" />
      <path d="M17 17h2a3 3 0 1 0 0-6h-1.5M10 2a1.414 1.414 0 0 0 0 2 1.414 1.414 0 0 1 0 2M5 7.5l.116-.116A1.44 1.44 0 0 0 5.25 5.5a1.441 1.441 0 0 1 .134-1.884L5.5 3.5M14.5 7.5l.116-.116A1.44 1.44 0 0 0 14.75 5.5a1.441 1.441 0 0 1 .134-1.884L15 3.5" />
    </svg>
  );
};
export default SvgTeaCup;
