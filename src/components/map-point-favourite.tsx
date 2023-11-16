import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointFavourite = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
      <path d="m11.043 11.522-.454.597.454-.598ZM12 7.716l-.528.533a.75.75 0 0 0 1.056 0L12 7.716Zm.957 3.805.454.598-.454-.598ZM12 12v-.75.75Zm-.503-1.076c-.418-.317-.88-.714-1.23-1.133-.366-.44-.517-.792-.517-1.034h-1.5c0 .779.432 1.475.866 1.995.453.542 1.013 1.017 1.473 1.367l.908-1.195ZM9.75 8.757c0-.622.277-.886.5-.967.237-.087.693-.066 1.222.459l1.056-1.065c-.821-.815-1.865-1.14-2.79-.804-.94.341-1.488 1.267-1.488 2.377h1.5Zm3.66 3.362c.461-.35 1.021-.825 1.473-1.367.435-.52.867-1.216.867-1.995h-1.5c0 .242-.15.594-.518 1.034-.35.419-.81.816-1.229 1.133l.908 1.195Zm2.34-3.362c0-1.11-.548-2.036-1.488-2.377-.925-.336-1.969-.011-2.79.804l1.056 1.065c.529-.525.985-.546 1.222-.46.223.082.5.346.5.968h1.5Zm-5.16 3.362c.364.277.783.631 1.41.631v-1.5c-.02 0-.03.002-.084-.028a3.983 3.983 0 0 1-.42-.298l-.907 1.195Zm1.913-1.195a3.991 3.991 0 0 1-.419.298c-.053.03-.065.028-.084.028v1.5c.627 0 1.046-.354 1.41-.631l-.907-1.195Z" />
    </svg>
  );
};
export default SvgMapPointFavourite;
