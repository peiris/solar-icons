import * as React from "react";
import type { SVGProps } from "react";
const SvgBottle = (props: SVGProps<SVGSVGElement>) => {
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
        d="m16.156 3.317 2.178 1.313.283 3.528c.008.096.012.144.014.19.106 1.659-.535 3.272-1.735 4.365l-.139.123c-.069.06-.103.091-.136.121a8.045 8.045 0 0 0-2.468 4.3l-.251 1.108c-.334 1.472-.5 2.208-.851 2.67a2.514 2.514 0 0 1-2.24 1.003c-.565-.053-1.195-.432-2.454-1.191l-.673-.405c-1.26-.759-1.89-1.138-2.216-1.622a2.77 2.77 0 0 1-.288-2.525c.21-.549.737-1.068 1.792-2.105l.794-.78.13-.129a8.092 8.092 0 0 0 2.237-4.435c.016-.095.024-.143.033-.188.307-1.63 1.325-3.016 2.755-3.75l.165-.082 3.07-1.509Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.896 12.713a5.418 5.418 0 0 0 1.743-3.816l-1.596.533c-.881.293-1.851.12-2.576-.46a2.738 2.738 0 0 0-2.935-.31l-1.47.734-.041.02a8.073 8.073 0 0 1-2.125 3.867l-.13.128-.794.78c-1.055 1.038-1.583 1.557-1.792 2.105a2.77 2.77 0 0 0 .288 2.525c.327.485.957.864 2.216 1.623l.673.405c1.26.758 1.889 1.138 2.454 1.19a2.514 2.514 0 0 0 2.24-1.001c.35-.464.517-1.2.85-2.671l.252-1.108.041-.182a8.045 8.045 0 0 1 2.427-4.118l.136-.121.14-.123Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m16.155 3.317 2.179 1.313.46-.833c.133-.24.2-.36.205-.478a.506.506 0 0 0-.079-.296c-.064-.1-.181-.17-.416-.312l-.79-.476c-.251-.151-.377-.227-.501-.234a.506.506 0 0 0-.31.083c-.103.068-.174.196-.316.453l-.432.78Z"
      />
    </svg>
  );
};
export default SvgBottle;