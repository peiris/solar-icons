import * as React from "react";
import type { SVGProps } from "react";
const SvgTurntableMusicNote = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m19.995-2c-.03-3.413-.219-5.295-1.46-6.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536M19 20v-8"
      />
      <circle cx={17} cy={20} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M22 15a3 3 0 0 1-3-3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
    </svg>
  );
};
export default SvgTurntableMusicNote;
