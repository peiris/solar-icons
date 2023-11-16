import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHeart = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={11} cy={6} r={4} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.513 21.487C15.025 22 15.85 22 17.5 22c1.65 0 2.475 0 2.987-.513C21 20.975 21 20.15 21 18.5c0-1.65 0-2.475-.513-2.987C19.975 15 19.15 15 17.5 15c-1.65 0-2.475 0-2.987.513C14 16.025 14 16.85 14 18.5c0 1.65 0 2.475.513 2.987Zm2.014-1.51C15.824 19.474 15 18.883 15 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37l-.213-.153Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.594 21.563a1.28 1.28 0 0 1-.081-.076C14 20.975 14 20.15 14 18.5c0-1.65 0-2.475.513-2.987C15.025 15 15.85 15 17.5 15h.43c-1.383-1.345-3.969-2.25-6.93-2.25-4.418 0-8 2.015-8 4.5s0 4.5 8 4.5c1.443 0 2.625-.066 3.594-.187Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgUserHeart;
