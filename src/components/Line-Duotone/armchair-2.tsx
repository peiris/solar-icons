import * as React from "react";
import type { SVGProps } from "react";
const SvgArmchair2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.886 18h9.647c.617 0 .926 0 1.202-.039 1.126-.158 2.1-.785 2.624-1.69.129-.222.226-.483.421-1.006l1.12-3C22.315 11.15 21.387 10 20.073 10c-.81 0-1.534.453-1.81 1.134l-1 2.466c-.195.478-.292.717-.476.883-.1.091-.219.165-.349.219-.238.098-.522.098-1.091.098h-6.98c-.293 0-.44 0-.57-.027a1.2 1.2 0 0 1-.74-.463c-.072-.1-.122-.224-.222-.47l-1.098-2.706c-.276-.68-1-1.134-1.81-1.134-1.314 0-2.242 1.15-1.827 2.264l1.303 3.493.039.102c.497 1.265 1.823 2.12 3.323 2.14l.121.001Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6 12V8.571c0-2.155 0-3.232.703-3.902C7.406 4 8.537 4 10.8 4h2.4c2.263 0 3.394 0 4.097.67C18 5.338 18 6.415 18 8.57V12"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18 20v-2M6 20v-1.333"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgArmchair2;
