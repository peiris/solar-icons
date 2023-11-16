import * as React from "react";
import type { SVGProps } from "react";
const SvgMuted = (props: SVGProps<SVGSVGElement>) => {
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
        d="M16.659 6c-.14-.798-.37-1.315-.792-1.628a2.113 2.113 0 0 0-.538-.29c-.992-.357-2.172.465-4.533 2.11l-.204.14c-.397.277-.595.415-.809.515a2.676 2.676 0 0 1-.66.21c-.231.04-.469.04-.944.04-1.276 0-1.914 0-2.47.272-.509.249-1.017.754-1.283 1.275-.291.57-.325 1.162-.394 2.348-.02.35-.032.692-.032 1.008 0 .316.012.658.032 1.008.069 1.186.103 1.778.394 2.348.266.521.774 1.026 1.282 1.275.557.272 1.195.272 2.47.272.476 0 .714 0 .944.04.228.041.45.112.661.21.214.1.412.238.81.514l.203.142c2.36 1.644 3.542 2.466 4.533 2.109.19-.069.374-.168.538-.29.422-.313.652-.83.792-1.628M20 9l-6 6m0-6 6 6"
      />
    </svg>
  );
};
export default SvgMuted;
