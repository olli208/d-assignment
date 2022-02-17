import styled, { useTheme } from "styled-components";

import { theme } from "../theme/theme";
import { Logo } from "./Logo";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.spacing[theme.view].layout_05} ${
      theme.spacing[theme.view].layout_09
    }`};
`;

const NavBarMenuItem = styled.span`
  &:not(:last-of-type) {
    padding-right: ${({ theme }) => theme.spacing["xl"].layout_06};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.display.black};
  }
`;

NavBarContainer.defaultProps = {
  theme: theme,
};

NavBarMenuItem.defaultProps = {
  theme: theme,
};

const NavBarMenu = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <NavBarMenuItem>
          <a href="#">{item}</a>
        </NavBarMenuItem>
      ))}
    </div>
  );
};

export const NavBar = () => {
  const theme = useTheme();
  return (
    <NavBarContainer>
      <Logo view={theme.view} />
      <NavBarMenu
        items={["Outboard Motor", "Inboard Motor", "About", "Contact"]}
      />
    </NavBarContainer>
  );
};
