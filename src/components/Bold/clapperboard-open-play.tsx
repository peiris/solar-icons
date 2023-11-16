import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardOpenPlay = (props: SVGProps<SVGSVGElement>) => {
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
        d="m14.841 8.095 3.408-.913c.224-.06.336-.09.425-.134a1 1 0 0 0 .555-.962c-.006-.098-.036-.21-.096-.435-.18-.673-.271-1.01-.402-1.275a3 3 0 0 0-2.887-1.666 2.837 2.837 0 0 0-.413.062c.02.083.025.17.014.258l-.604 5.065ZM9.15 4.444l4.768-1.278-.6 5.034a.748.748 0 0 0 .024.297l-4.78 1.28.605-5.064a.748.748 0 0 0-.017-.27Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 11H4v5c0 2.828 0 4.243.879 5.121C5.757 22 7.172 22 10 22h4c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-1c0-1.886 0-2.828-.586-3.414C18.828 11 17.886 11 16 11Zm-3.192 4.224c.795.569 1.192.854 1.192 1.276 0 .422-.397.707-1.192 1.276-.805.578-1.207.866-1.508.654-.3-.211-.3-.784-.3-1.93s0-1.719.3-1.93c.3-.213.703.076 1.508.653Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.04 9.882a.748.748 0 0 0 .023.297L4.001 11c-.484-1.805-.725-2.708-.517-3.484A3 3 0 0 1 4.26 6.17c.569-.568 1.471-.81 3.277-1.294l.103-.028-.6 5.034Z"
      />
    </svg>
  );
};
export default SvgClapperboardOpenPlay;
