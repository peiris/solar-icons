import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563.495-.095h.001l.014-.003.074-.018c.068-.017.175-.046.315-.091.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.939.247-.512.4-.928.49-1.21a5.388 5.388 0 0 0 .109-.389l.003-.014.095-.496-2.563-2.563a6.796 6.796 0 0 0-9.611 0ZM17.419 7.807l-.032.103c-.11.343-.288.824-.568 1.404-.56 1.162-1.525 2.718-3.156 4.349-1.632 1.631-3.187 2.597-4.349 3.157a10.893 10.893 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61l-2.59-2.592Z"
      />
    </svg>
  );
};
export default SvgPill;
