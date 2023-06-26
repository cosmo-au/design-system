import { styled } from "../../stitches.config";

export const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$small",
  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.7,
      },
    },
  },

  width: "100%",
});
