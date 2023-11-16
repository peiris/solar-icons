import * as React from "react";
import type { SVGProps } from "react";
const SvgUserHeartRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={9} cy={6} r={4} stroke="currentColor" strokeWidth={1.5} />
      <ellipse
        cx={9}
        cy={17}
        stroke="currentColor"
        strokeWidth={1.5}
        rx={7}
        ry={4}
      />
      <path
        fill="currentColor"
        d="m17.089 12.539.455-.597-.456.597ZM18 8.644l-.532.528a.75.75 0 0 0 1.064 0L18 8.644Zm.912 3.895-.456-.597.456.597Zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204.471.513 1.077.93 1.474 1.232l.91-1.193ZM15.75 9.7c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.455 2.455 0 0 0 14.25 9.7h1.5Zm.884 3.435c.148.113.342.26.545.376.204.116.487.239.821.239v-1.5c.034 0 .017.011-.082-.044-.1-.056-.212-.14-.374-.264l-.91 1.193Zm2.732 0c.397-.303 1.003-.719 1.473-1.232.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19-.353.384-.791.681-1.278 1.052l.91 1.193ZM21.75 9.7c0-1-.585-1.875-1.44-2.253-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353.308.136.548.469.548.88h1.5Zm-3.294 2.242a3.584 3.584 0 0 1-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239.204-.115.398-.263.546-.376l-.91-1.193Z"
      />
    </svg>
  );
};
export default SvgUserHeartRounded;