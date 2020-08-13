/** @jsx jsx */
import { jsx, Text, Heading } from "theme-ui";
import { Link } from "gatsby";
import { FunctionComponent } from "react";
import { linkStyles, entryStyles, headingStyles } from "./styles";

export const NavLink: FunctionComponent<{
  title: string;
  className?: string;
  isHeading?: boolean;
  isActive?: boolean;
  closeMenus?: () => void;
  to: string;
}> = ({
  title,
  className,
  isActive = false,
  closeMenus,
  isHeading = false,
  to,
}) => {
  return (
    <Link key={title} sx={linkStyles} to={to}>
      {isHeading ? (
        <Heading
          className={className}
          sx={headingStyles({ level: 0, isActive })}
          onClick={closeMenus}
        >
          {title}
        </Heading>
      ) : (
        <Text className={className} sx={entryStyles({ isActive })}>
          {title}
        </Text>
      )}
    </Link>
  );
};
