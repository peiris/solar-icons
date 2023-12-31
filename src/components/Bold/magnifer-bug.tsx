import * as React from "react";
import type { SVGProps } from "react";
const SvgMagniferBug = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.857 11.947c0 .929.596 1.718 1.429 2.01v-3.194H8.857v1.184Zm4.164-2.605A2.143 2.143 0 0 0 11 7.921c-.933 0-1.727.593-2.02 1.421h4.04Zm.122 1.421h-1.429v3.195a2.133 2.133 0 0 0 1.429-2.01v-1.185Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0ZM8.19 7.86A3.572 3.572 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318.709.709 0 0 1-.319.953l-.679.338c.08.294.121.603.121.922v.236h.715c.394 0 .714.319.714.711 0 .392-.32.71-.714.71h-.715v.237c0 .32-.042.628-.12.922l.678.338a.709.709 0 0 1 .32.953.716.716 0 0 1-.959.318l-.68-.338A3.572 3.572 0 0 1 11 15.5a3.572 3.572 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318.709.709 0 0 1 .319-.953l.679-.338a3.54 3.54 0 0 1-.121-.922v-.236h-.715A.712.712 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237c0-.32.042-.628.12-.922l-.678-.338a.709.709 0 0 1-.32-.953.716.716 0 0 1 .959-.318l.68.338Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMagniferBug;
