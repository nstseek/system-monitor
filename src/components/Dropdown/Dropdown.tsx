import { ReactNode, useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownHeader,
} from "./Dropdown.styles";

export const Dropdown: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setIsOpen((prevVal) => !prevVal)}>
        <h3>{title}</h3>
        <h3 style={{ transform: `rotate(${isOpen ? -90 : 90}deg)` }}>{">"}</h3>
      </DropdownHeader>
      {isOpen ? <DropdownContent>{children}</DropdownContent> : null}
    </DropdownContainer>
  );
};
