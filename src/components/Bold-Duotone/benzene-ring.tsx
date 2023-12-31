import * as React from "react";
import type { SVGProps } from "react";
const SvgBenzeneRing = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 4c-.541 0-1.034.293-2.02.88L7.02 6.637c-.985.586-1.479.88-1.75 1.362C5 8.483 5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879.541 0 1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362.27-.483.27-1.069.27-2.241V10.24C19 9.07 19 8.483 18.73 8c-.271-.483-.765-.776-1.75-1.362l-2.96-1.759C13.036 4.293 12.542 4 12 4Zm4.384 11.144a.75.75 0 0 0-.768-1.288l-4 2.384a.75.75 0 0 0 .768 1.288l4-2.384Z"
        clipRule="evenodd"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M18.971 8.92c-.032-.382-.099-.665-.242-.92a1.762 1.762 0 0 0-.384-.464l3.24-2.16a.75.75 0 1 1 .831 1.248l-3.445 2.297ZM5.029 15.08c.032.382.099.665.242.92.096.172.22.32.385.464l-3.24 2.16a.75.75 0 1 1-.832-1.248l3.445-2.296ZM5.656 7.536A1.761 1.761 0 0 0 5.27 8c-.143.255-.21.538-.242.92L1.584 6.624a.75.75 0 0 1 .832-1.248l3.24 2.16Z" />
      </g>
    </svg>
  );
};
export default SvgBenzeneRing;
