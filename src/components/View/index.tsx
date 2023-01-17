import { breakpoints, darkTheme } from "../../stitches.config";
import { ViewProps } from "../../types";

import { ViewStyled, ViewContainerStyled } from "./View.styles";

export function View(props: ViewProps): JSX.Element {
  const { container, inverted, top, bottom, css, children, noPrint } = props;

  return (
    <ViewStyled
      className={inverted ? darkTheme.toString() : undefined}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(noPrint && {
          [breakpoints.special.print]: {
            display: "none",
          },
        }),
        ...css,
      }}>
      <ViewContainerStyled container={container}>{children}</ViewContainerStyled>
    </ViewStyled>
  );
}