import { useState } from "react";
import { toast } from "react-hot-toast";

import { Icons } from "../../icons";
import { Button } from "../../index";
import { ICode } from "../../types";

import { CodeStyled, CodeFunctionStyled, CodeBlockStyled } from "./Code.styles";

export function Code(props: ICode): JSX.Element {
  const { children, css, ...rest } = props;
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy(): void {
    navigator?.clipboard?.writeText(children?.toString() || "");
    setIsCopied(true);
    toast("Copied to clipboard");
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <CodeStyled css={css}>
      <CodeBlockStyled {...rest}>{children}</CodeBlockStyled>
      <CodeFunctionStyled>
        <Button
          disabled={isCopied}
          icon={<Icons.ClipboardText />}
          small
          onClick={(): void => {
            handleCopy();
          }}>
          Copy
        </Button>
      </CodeFunctionStyled>
    </CodeStyled>
  );
}
