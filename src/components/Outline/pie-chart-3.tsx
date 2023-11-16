import * as React from "react";
import type { SVGProps } from "react";
const SvgPieChart3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.52 1.868c-.604-.4-1.194-.516-1.843-.412-.553.089-1.153.342-1.796.614l-.067.029A10.75 10.75 0 1 0 21.9 16.186l.029-.067c.272-.643.526-1.242.614-1.796.104-.65-.012-1.239-.412-1.842-.43-.649-1.015-.963-1.726-1.104-.633-.127-1.425-.127-2.335-.127H16c-.964 0-1.612-.002-2.095-.066-.461-.062-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094V5.93c0-.91 0-1.702-.126-2.335-.142-.711-.456-1.296-1.104-1.726ZM8.398 3.48c.734-.31 1.164-.487 1.517-.543.276-.044.485-.012.776.181.246.164.38.36.462.77.094.47.097 1.11.097 2.112v2.052c0 .899 0 1.648.08 2.243.084.627.27 1.194.726 1.65.455.455 1.022.64 1.65.725.594.08 1.344.08 2.242.08H18c1.002 0 1.643.004 2.113.097.409.082.606.216.769.462.193.292.225.5.181.777-.056.352-.233.782-.543 1.516a9.252 9.252 0 0 1-10.325 5.47A9.25 9.25 0 0 1 8.398 3.48Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.687 1.589a.75.75 0 1 0-.374 1.452 9.267 9.267 0 0 1 6.646 6.646.75.75 0 1 0 1.452-.374 10.768 10.768 0 0 0-7.724-7.724Z"
      />
    </svg>
  );
};
export default SvgPieChart3;