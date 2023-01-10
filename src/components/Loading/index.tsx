import { LoadingProps } from "../../types";

import { LoadingOverlayStyled } from "./Loading.styles";

export default function Loading({ width = 16 }: LoadingProps): JSX.Element {
  return (
    <svg
      height={width}
      stroke="currentColor"
      viewBox={"0 0 38 38"}
      width={width}
      xmlns={"http://www.w3.org/2000/svg"}>
      <g fill="none" fillRule="nonzero">
        <g strokeWidth="2" transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeOpacity=".3" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="0.8s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

export function LoadingOverlay({
  vertical = "top",
  horizontal = "right",
  width = 16,
  stroke = "currentColor",
}: LoadingProps): JSX.Element {
  return (
    <LoadingOverlayStyled horizontal={horizontal} vertical={vertical}>
      <Loading stroke={stroke} width={width} />
    </LoadingOverlayStyled>
  );
}
