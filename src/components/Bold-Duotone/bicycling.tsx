import * as React from "react";
import type { SVGProps } from "react";
const SvgBicycling = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M17 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m12.161 7.115.613.609c.91.903 1.226 1.2 1.606 1.356.38.157.813.17 2.095.17H18.5a.75.75 0 0 1 0 1.5h-2.167c-1.083 0-1.836 0-2.525-.283-.69-.284-1.223-.815-1.99-1.58l-.102-.1-.577-.573c-.409-.406-.66-.653-.86-.803a.765.765 0 0 0-.185-.11.766.766 0 0 0-.162.14c-.17.186-.372.473-.7.947l-1.228 1.767c-.334.482-.537.777-.652 1.007a.773.773 0 0 0-.076.204.774.774 0 0 0 .172.133c.218.135.546.28 1.083.515l1.516.66c.648.284 1.194.522 1.615.768.446.262.824.572 1.077 1.035.254.464.311.949.29 1.466-.019.487-.113 1.076-.224 1.774l-.064.401a.75.75 0 1 1-1.481-.236l.057-.359c.12-.752.198-1.252.214-1.64.015-.367-.033-.549-.108-.686-.075-.136-.202-.275-.52-.46-.334-.197-.797-.4-1.496-.705l-1.475-.644-.047-.02c-.476-.208-.905-.395-1.226-.593-.348-.215-.69-.515-.827-1-.137-.486-.004-.92.18-1.286.168-.336.435-.72.732-1.148l.028-.041L8 7.532l.028-.04c.291-.42.554-.798.806-1.07.275-.296.63-.57 1.125-.615.495-.045.893.16 1.217.402.298.222.624.546.986.906Z"
        clipRule="evenodd"
      />
      <g
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity={0.5}
      >
        <path d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
      </g>
    </svg>
  );
};
export default SvgBicycling;