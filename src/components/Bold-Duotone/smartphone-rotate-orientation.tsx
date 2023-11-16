import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneRotateOrientation = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.43 21.152c.847-.847.847-2.21.847-4.936s0-4.09-.847-4.936c-.45-.451-1.681-.66-2.982-.756-.892-.066-1.338-.1-1.646.187-.308.286-.308.754-.308 1.69v7.642c0 .937 0 1.405.31 1.691.308.286.754.252 1.644.183 1.3-.1 2.531-.314 2.982-.765Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.109 14.29a.723.723 0 0 0-1.446 0v3.855a.723.723 0 1 0 1.446 0v-3.856Z"
      />
      <path
        fill="currentColor"
        d="M2 8.506c0-2.726 0-4.09.847-4.936.847-.847 2.21-.847 4.936-.847h.964c2.726 0 4.09 0 4.936.847.847.846.847 2.21.847 4.936v7.71c0 2.727 0 4.09-.847 4.937-.847.847-2.21.847-4.936.847h-.964c-2.726 0-4.09 0-4.936-.847C2 20.306 2 18.943 2 16.217V8.506Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M5.856 4.892a.723.723 0 0 0 0 1.445h4.819a.723.723 0 0 0 0-1.445h-4.82ZM8.265 19.108a1.446 1.446 0 1 0 0-2.891 1.446 1.446 0 0 0 0 2.891Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.745 2.602a.723.723 0 0 1 .834-.592c3.084.525 5.42 3.24 5.42 6.496a.723.723 0 0 1-1.127.599l-1.446-.977a.723.723 0 0 1 .81-1.198l.096.065c-.556-1.84-2.101-3.237-3.996-3.56a.723.723 0 0 1-.591-.833Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartphoneRotateOrientation;
