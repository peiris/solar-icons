import * as React from "react";
import type { SVGProps } from "react";
const SvgMedalRibbon = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={9} r={7} fill="currentColor" opacity={0.3} />
      <path
        fill="currentColor"
        d="m7.546 14.4-.195.6-.637 2.323c-.628 2.292-.942 3.438-.523 4.065.147.22.344.396.573.513.652.332 1.66-.193 3.675-1.243.67-.35 1.006-.524 1.362-.562.133-.014.265-.014.398 0 .356.038.691.212 1.362.562 2.015 1.05 3.023 1.575 3.675 1.243.229-.117.426-.293.573-.513.42-.627.105-1.773-.523-4.065L16.649 15l-.195-.6c-1.21 1-2.762 1.6-4.454 1.6-1.692 0-3.244-.6-4.454-1.6Z"
      />
    </svg>
  );
};
export default SvgMedalRibbon;
