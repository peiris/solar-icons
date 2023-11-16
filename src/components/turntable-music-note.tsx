import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMusicNote = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464 1.241 1.241 1.43 3.123 1.46 6.536M19 20v-8" />
      <circle cx={17} cy={20} r={2} />
      <path d="M22 15a3 3 0 0 1-3-3M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
    </svg>
  );
};
export default SvgTurntableMusicNote;
