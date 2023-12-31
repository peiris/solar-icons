import * as React from "react";
import type { SVGProps } from "react";
const SvgVirus = (props: SVGProps<SVGSVGElement>) => {
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
        d="M19 12.057A6.865 6.865 0 0 1 12.057 19C8.19 18.969 5.03 15.81 5 11.944A6.865 6.865 0 0 1 11.944 5c3.865.031 7.025 3.19 7.056 7.057Zm-4.5-1.807a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM8.25 9a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.25 13a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
        opacity={0.3}
      />
      <circle cx={19.5} cy={4.5} r={1.5} fill="currentColor" />
      <path
        fill="currentColor"
        d="m18.05 4.889-1.63 1.63a.754.754 0 0 0-.064.073c.386.313.74.666 1.053 1.052a.75.75 0 0 0 .071-.064l1.631-1.63a1.503 1.503 0 0 1-1.06-1.061Z"
        opacity={0.3}
      />
      <circle
        cx={1.5}
        cy={1.5}
        r={1.5}
        fill="currentColor"
        transform="matrix(1 0 0 -1 17.05 21.05)"
      />
      <path
        fill="currentColor"
        d="m9.63 18.55.248.7a2.25 2.25 0 0 0 4.244 0l.217-.613a7.044 7.044 0 0 1-4.708-.087ZM5.113 10.63a1.5 1.5 0 1 0 .04 2.72 7.066 7.066 0 0 1-.04-2.72ZM18.863 13.494a7.066 7.066 0 0 0-.047-2.983 1.5 1.5 0 1 1 .047 2.983ZM13.35 5.153a1.5 1.5 0 1 0-2.72-.04 7.066 7.066 0 0 1 2.72.04Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.1 19.161 15.85 17.91a6.868 6.868 0 0 0 1.17-.95l1.142 1.142a1.503 1.503 0 0 0-1.06 1.06Z"
      />
      <circle
        cx={2}
        cy={2}
        r={2}
        fill="currentColor"
        transform="matrix(-1 0 0 1 6 2)"
      />
      <path
        fill="currentColor"
        d="M4.781 5.842a2.007 2.007 0 0 0 1.06-1.06l1.69 1.688a.76.76 0 0 1 .037.04c-.39.314-.744.668-1.057 1.058a.756.756 0 0 1-.041-.037L4.78 5.84Z"
        opacity={0.3}
      />
      <circle
        cx={5}
        cy={20}
        r={2}
        fill="currentColor"
        transform="rotate(180 5 20)"
      />
      <path
        fill="currentColor"
        d="m5.815 18.174 1.27-1.27c.355.356.748.675 1.17.95l-1.399 1.4a2.007 2.007 0 0 0-1.04-1.08Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgVirus;
