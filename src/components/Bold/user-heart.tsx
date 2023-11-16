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
      <path
        fill="currentColor"
        d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM15.678 13.503c-.473.005-.914.023-1.298.074-.643.087-1.347.293-1.928.875-.582.581-.788 1.285-.874 1.928-.078.578-.078 1.284-.078 2.034v.172c0 .75 0 1.456.078 2.034.06.451.18.932.447 1.38H12c-8 0-8-2.015-8-4.5S7.582 13 12 13c1.326 0 2.577.181 3.678.503Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.513 21.487C14.025 22 14.85 22 16.5 22c1.65 0 2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5c0-1.65 0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987Zm2.014-1.51C14.825 19.474 14 18.883 14 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37l-.213-.153Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserHeart;
