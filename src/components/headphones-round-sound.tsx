import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesRoundSound = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M22 17v-5c0-5.523-4.477-10-10-10S2 6.477 2 12v6" />
      <path d="M8 15.187c0-.578 0-.867-.069-1.097a1.529 1.529 0 0 0-1.095-1.059c-.225-.054-.5-.03-1.052.015-.956.079-1.435.118-1.825.27-.899.347-1.585 1.123-1.846 2.088C2 15.823 2 16.324 2 17.328v.186c0 1.03 0 1.544.123 1.979a3.102 3.102 0 0 0 1.588 1.944c.392.195.878.275 1.85.436.645.106.968.16 1.229.106a1.521 1.521 0 0 0 1.119-1C8 20.718 8 20.376 8 19.693v-4.506ZM16 15.187c0-.578 0-.867.069-1.097a1.53 1.53 0 0 1 1.095-1.059c.225-.054.5-.03 1.051.015.957.079 1.436.118 1.826.27.899.347 1.585 1.123 1.846 2.088.113.419.113.92.113 1.924v.186c0 1.03 0 1.544-.123 1.979a3.103 3.103 0 0 1-1.588 1.944c-.392.195-.878.275-1.85.436-.645.106-.968.16-1.229.106a1.521 1.521 0 0 1-1.119-1C16 20.718 16 20.376 16 19.693v-4.506ZM12 6.5v5M15 8v2M9 8v2" />
    </svg>
  );
};
export default SvgHeadphonesRoundSound;
