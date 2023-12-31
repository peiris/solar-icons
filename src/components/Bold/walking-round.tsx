import * as React from "react";
import type { SVGProps } from "react";
const SvgWalkingRound = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.93 9.267c.199-.01.392-.017.57-.017.554 0 1.154.062 1.694.14 1.521.218 2.673 1.34 3.134 2.722a.67.67 0 0 0 .746.449l1.803-.3a.75.75 0 1 1 .246 1.479l-1.803.3a2.17 2.17 0 0 1-2.415-1.454c-.307-.922-1.043-1.585-1.924-1.712a13.64 13.64 0 0 0-.805-.093l-.271 2.711c-.084.84-.094 1.062-.037 1.26.056.198.182.38.697 1.049l4.43 5.74a.75.75 0 1 1-1.188.917l-4.43-5.74a48.075 48.075 0 0 0-.07-.093c-.411-.53-.736-.951-.882-1.46-.145-.51-.092-1.038-.025-1.706l.012-.116.254-2.54c-1.673.273-2.916 1.846-2.916 3.697a.75.75 0 0 1-1.5 0c0-2.64 1.914-5.083 4.68-5.233Zm-.783 7.498a.75.75 0 0 1 .588.882 7.749 7.749 0 0 1-2.757 4.531l-.51.408a.75.75 0 0 1-.936-1.172l.509-.407a6.25 6.25 0 0 0 2.224-3.654.75.75 0 0 1 .882-.588Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWalkingRound;
