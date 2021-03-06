/** @jsx jsx */
import { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import { jsx } from "theme-ui";
import { Basic } from "../Basic";
import { outerWrapperStyles } from "./styles";

const SectionCover: FunctionComponent<{
  children: ReactNode | ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, variant = "skyBlue", index }) => {
  return (
    <Basic
      variant={variant}
      className={className}
      index={index}
      sx={{
        ...outerWrapperStyles,
        color: variant === "midnight" ? "muted" : "accent",
      }}
    >
      {children}
    </Basic>
  );
};

export { SectionCover };
