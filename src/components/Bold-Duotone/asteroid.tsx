import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteroid = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2C6.477 2 2 6.477 2 12c0 .445.029.883.085 1.312a6 6 0 0 1 7.297 8.342c.835.226 1.712.346 2.618.346 4.879 0 8.941-3.494 9.823-8.116a6.002 6.002 0 0 1-3.505-9.636A9.959 9.959 0 0 0 12 2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M2.085 13.312a10.01 10.01 0 0 0 7.297 8.342 6 6 0 0 0-7.297-8.342ZM21.823 13.885c.116-.61.177-1.24.177-1.885a9.98 9.98 0 0 0-3.682-7.752 6.002 6.002 0 0 0 3.505 9.637ZM16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM13 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};
export default SvgAsteroid;
