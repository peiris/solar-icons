import * as React from "react";
import type { SVGProps } from "react";
const SvgDonutBitten = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.5 7 16 5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m19 7 1-1"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m12 5-1-1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m10.5 7-1.366.366M7 5 6 4"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m6.792 9.144-.585-1.288"
      />
      <path
        fill="currentColor"
        d="m12.5 22 .034.75a.75.75 0 0 0 .569-1.196L12.5 22Zm.444-2.372.446.603-.446-.603Zm6.535-4.833-.446-.603.446.603Zm-4.86 4.06.603-.446-.603.446Zm.7-2.85.446.603-.446-.603Zm2.93.165.604-.446-.604.446Zm3.378-1.453-.487.57a.75.75 0 0 0 1.208-.367l-.721-.203Zm-3.043 1.906-.603.446a.75.75 0 0 0 1.133.084l-.53-.53Zm.101-.102.53.53a.75.75 0 0 0 .21-.654l-.74.124Zm-4.066 2.77-.225.715a.75.75 0 0 0 .755-.185l-.53-.53Zm.185-.185.53.53a.75.75 0 0 0 .073-.976l-.603.446ZM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5ZM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5ZM12 2.75A9.25 9.25 0 0 1 21.25 12h1.5c0-5.937-4.813-10.75-10.75-10.75v1.5Zm1.103 18.804c-.233-.315-.2-.963.287-1.323l-.892-1.206c-1.117.826-1.353 2.404-.601 3.421l1.206-.892Zm2.12-3.145c-.296-.4-.237-1.224.542-1.8l-.892-1.207c-1.225.907-1.793 2.633-.857 3.9l1.206-.893Zm.542-1.8c.78-.577 1.586-.392 1.881.007l1.206-.892c-.936-1.265-2.753-1.228-3.979-.322l.892 1.206Zm4.16-1.211c.496-.367 1-.293 1.215-.11l.973-1.142c-.867-.739-2.162-.633-3.08.046l.892 1.206ZM21.25 12c0 .872-.12 1.715-.345 2.514l1.443.406c.262-.93.402-1.909.402-2.92h-1.5Zm-8.784 9.25c-.134.007-.264 0-.466 0v1.5c.11 0 .36.007.534 0l-.068-1.5Zm5.18-4.634.335.453 1.206-.892-.335-.453-1.206.892Zm1.78-.219c-.047-.274.086-.694.499-.999l-.892-1.206c-.791.585-1.24 1.536-1.087 2.453l1.48-.248Zm-.312.756.102-.101-1.06-1.061-.102.101 1.06 1.061Zm-5.724 3.078c.357-.265.745-.306 1.004-.225l.45-1.43c-.767-.242-1.648-.068-2.346.449l.892 1.206Zm.626-.93.185.25 1.206-.891-.185-.25-1.206.891Zm1.133.52.186-.185-1.061-1.06-.185.185 1.06 1.06Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5M16 15.5c-.5-.5-1.529-.861-2-1.276"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m16.65 8.977.066 1.412"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20.678 10.085 19 11.563M5.665 12.641 6.5 11.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m3.683 10.35-.079-1.412"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgDonutBitten;