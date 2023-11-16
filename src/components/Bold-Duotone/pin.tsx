import * as React from "react";
import type { SVGProps } from "react";
const SvgPin = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="m16.219 4.838 2.964 2.967c2.012 2.014 3.018 3.021 2.784 4.107-.235 1.085-1.567 1.585-4.23 2.586l-1.845.693c-.713.268-1.07.402-1.345.64-.12.105-.229.223-.322.352-.212.297-.313.664-.515 1.4-.46 1.672-.69 2.508-1.239 2.821-.23.132-.492.2-.758.2-.63 0-1.243-.614-2.469-1.84l-1.466-1.468-1.079-1.08L5.285 14.8c-1.218-1.219-1.827-1.828-1.83-2.455a1.528 1.528 0 0 1 .203-.773c.313-.543 1.143-.772 2.803-1.23.737-.203 1.105-.304 1.402-.517.132-.096.253-.207.36-.332.236-.278.368-.637.63-1.355l.669-1.823c.987-2.693 1.48-4.04 2.568-4.28 1.089-.24 2.102.774 4.129 2.803Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="m3.302 21.776 4.476-4.48-1.079-1.08-4.476 4.48a.764.764 0 0 0 1.08 1.08Z"
      />
    </svg>
  );
};
export default SvgPin;
