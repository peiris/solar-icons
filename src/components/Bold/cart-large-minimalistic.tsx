import * as React from "react";
import type { SVGProps } from "react";
const SvgCartLargeMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603.44.217.819.483 1.103.899.282.412.398.865.452 1.362.024.222.037.468.043.738h10.639c1.685 0 3.201 0 3.645.577.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742-.551.45-1.332.45-2.893.45H10.98c-2.789 0-4.183 0-5.05-.914C5.063 13.552 5 12.582 5 9.64V7.038c0-.74 0-1.235-.041-1.615-.04-.363-.11-.545-.2-.677-.088-.129-.221-.25-.525-.398-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957ZM7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
};
export default SvgCartLargeMinimalistic;
