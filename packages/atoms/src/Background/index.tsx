/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { outerWrapperStyles } from "./styles";

const Background: FunctionComponent<{
  className?: string;
  variant?: string;
}> = ({ className, children, variant = "skyBlue" }) => (
  <Box className={className} sx={outerWrapperStyles({ variant })}>
    {children}
  </Box>
);

export { Background };
