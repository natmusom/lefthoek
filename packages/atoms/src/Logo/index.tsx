/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { logoStyles } from "./styles";

type LogoProps = {
  /** optional href */
  href?: string;
  variant?: string;
  className?: string;
};
const InnerLogo: FunctionComponent<{
  variant?: string;
  className?: string;
}> = ({ variant = "skyBlue", className }) => {
  return (
    <svg
      className={className}
      sx={{ fill: ({ primaryColors }) => primaryColors[variant] }}
      viewBox="0 0 62 84"
    >
      <path d="M18.6 81.5L32.5 2.4L29.6 0L12 4.7L0 74.5L18.6 81.5Z" />
      <path d="M55.9 67.6L61.4 36.7L42.6 29.6L34.1 78.4L48.5 83.8L53.8 79.9L55.9 67.6Z" />
    </svg>
  );
};

const Logo: FunctionComponent<LogoProps> = ({
  href,
  className,
  variant = "brightGreen",
}) => {
  return href ? (
    <Link sx={logoStyles} className={className} to={href}>
      <InnerLogo variant={variant} />
    </Link>
  ) : (
    <InnerLogo sx={logoStyles} className={className} variant={variant} />
  );
};

export { Logo };
