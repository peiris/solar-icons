import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldNetwork = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 10.417c0-3.198 0-4.797.378-5.335.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22c-1.02 0-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991v-1.574Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 12a5 5 0 1 1-9.999 0A5 5 0 0 1 17 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.848 13.913c.1-.606.152-1.256.152-1.913s-.052-1.307-.152-1.913a7.9 7.9 0 0 0-.434-1.623c-.185-.464-.406-.832-.649-1.083C12.523 7.129 12.263 7 12 7s-.523.13-.765.38c-.243.252-.463.62-.65 1.084a7.9 7.9 0 0 0-.433 1.623c-.1.606-.152 1.256-.152 1.913s.052 1.307.152 1.913c.1.607.248 1.158.434 1.623.185.464.406.832.649 1.083.242.252.502.381.765.381s.523-.13.765-.38c.243-.252.463-.62.65-1.085a7.9 7.9 0 0 0 .433-1.622Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 12h10"
      />
    </svg>
  );
};
export default SvgShieldNetwork;