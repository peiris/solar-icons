import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056ZM18 6l-1.05 1.05M5 5l2 2M17.05 18.05l-.55-.55M6 19.05 7.05 18" />
      <path d="M16.5 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <circle cx={9} cy={13} r={1} />
      <circle cx={19.5} cy={4.5} r={1.5} />
      <circle cx={1.5} cy={1.5} r={1.5} transform="matrix(-1 0 0 1 5 2)" />
      <path d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z" />
      <circle
        cx={1.5}
        cy={1.5}
        r={1.5}
        transform="matrix(1 0 0 -1 17.05 21.05)"
      />
      <circle cx={4.5} cy={20.5} r={1.5} transform="rotate(180 4.5 20.5)" />
      <path d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 13.5a1.5 1.5 0 1 0-.5-2.915v2.83c.156.055.325.085.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0h-2.83Z" />
    </svg>
  );
};
export default SvgVirus;