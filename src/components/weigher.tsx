import * as React from "react";
import type { SVGProps } from "react";
const SvgWeigher = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4ZM8 18h8" />
      <path d="m16.412 9.97.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.247 0l-.426.07a2 2 0 0 0-1.528 2.716L7.59 9.97c.235.59.87.914 1.486.76 1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.487-.76ZM10.18 9.929l-.676-1.883" />
    </svg>
  );
};
export default SvgWeigher;
