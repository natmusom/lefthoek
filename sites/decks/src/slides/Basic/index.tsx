/** @jsx jsx */
import { FunctionComponent, ReactNodeArray } from "react";
import { jsx } from "theme-ui";
import { Background } from "@lefthoek/atoms";
import { outerWrapper } from "./styles";

const Basic: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, variant = "cipria" }) => {
  return (
    <Background
      variant={variant}
      className={className}
      sx={{ ...outerWrapper, color: variant === "midnight" ? "muted" : "text" }}
    >
      {children}
    </Background>
  );
};

export { Basic };
