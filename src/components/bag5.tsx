import * as React from "react";
import type { SVGProps } from "react";
const SvgBag5 = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895.164.16.342.305.53.434C7.04 21 8.41 21 11.15 21h1.703c2.739 0 4.108 0 5.13-.7.19-.13.367-.276.53-.435.888-.865 1.157-2.208 1.694-4.894.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.853 6H11.15c-3.934 0-5.9 0-7.066 1.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z" />
      <circle cx={15} cy={10} r={1} />
      <circle cx={9} cy={10} r={1} />
      <path d="M9 6V5a3 3 0 1 1 6 0v1" />
    </svg>
  );
};
export default SvgBag5;
