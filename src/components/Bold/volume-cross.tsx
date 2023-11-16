import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeCross = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20.515 6.316a.75.75 0 0 1 .991.376c.468 1.035.994 2.768.994 5.308 0 2.192-.392 3.783-.8 4.844-.204.53-.41.925-.572 1.195a4.73 4.73 0 0 1-.289.425l-.007.01-.003.003-.002.002L20.25 18l.576.48a.75.75 0 0 1-1.156-.956l.003-.004.031-.041a3.27 3.27 0 0 0 .137-.212c.12-.199.288-.516.459-.961.342-.889.7-2.298.7-4.306 0-2.326-.48-3.849-.86-4.692a.75.75 0 0 1 .375-.992ZM18.414 9.266a.75.75 0 0 1 .887.582c.11.53.199 1.24.199 2.152 0 1.11-.132 1.923-.273 2.474-.071.275-.144.484-.203.631a2.977 2.977 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002s-.001.001-.657-.363l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087a3.66 3.66 0 0 0 .141-.447c.11-.424.227-1.111.227-2.101 0-.813-.08-1.421-.168-1.848a.75.75 0 0 1 .582-.886Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.78 3.53a.75.75 0 0 0-1.06-1.06l-4.45 4.449a11.265 11.265 0 0 0-.193-1.39c-.172-.788-.477-1.473-1.116-1.923a3.066 3.066 0 0 0-.769-.39c-.818-.28-1.631-.057-2.457.345-.814.395-1.8 1.046-3.032 1.857l-.267.176c-.447.295-.602.394-.76.464-.171.076-.35.13-.535.16-.171.03-.354.032-.89.032h-.162c-1.217 0-2.062-.001-2.814.347A3.962 3.962 0 0 0 1.548 8.22c-.392.729-.438 1.491-.504 2.575l-.008.13C1.014 11.294 1 11.658 1 12c0 .342.014.706.036 1.074l.008.13c.066 1.084.112 1.846.504 2.575a3.962 3.962 0 0 0 1.727 1.624c.61.283 1.283.336 2.166.345L2.72 20.47a.75.75 0 1 0 1.06 1.06l18-18ZM16.5 12a.75.75 0 0 0-1.255-.554l-.071.074-6 6.274A.778.778 0 0 0 9.34 19c1.039.68 1.899 1.225 2.631 1.549.743.328 1.48.489 2.222.236.272-.093.534-.226.769-.391.706-.497 1.005-1.28 1.167-2.18.159-.884.213-2.056.281-3.516l.003-.058c.052-1.115.088-2.088.088-2.64Z"
      />
    </svg>
  );
};
export default SvgVolumeCross;