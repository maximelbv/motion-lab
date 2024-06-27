import styled from "styled-components";
import { NavigationObject } from "../types/Constants";
import DropdownIcon from "../assets/icons/DropdownIcon";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ExternalLinkArrow from "./ExternalLinkArrow";

interface NavMenuProps {
  elements: NavigationObject[];
}

const StyledDropdown = styled.div`
  position: relative;
  & .dropdownButton {
    background: ${({ theme }) => theme.colors.element_bg};
    padding: ${({ theme }) => theme.spacing.L};
    border-radius: 50px;
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.element_stroke};
    & svg {
      & rect {
        fill: ${({ theme }) => theme.colors.genericElementColor};
      }
    }
  }
  & .dropdownMenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 60px;
    right: 0;
    background: ${({ theme }) => theme.colors.element_bg};
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.element_stroke};
    border-radius: 10px;
    width: 200px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    & a {
      color: inherit;
      padding: 10px;
      border-radius: 5px;
      &:hover {
        background: ${({ theme }) => theme.colors.element_bg_darker};
      }
    }
  }
  & .hidden {
    display: none;
  }
`;

const NavMenu = ({ elements }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <StyledDropdown ref={dropdownRef}>
      <button className="dropdownButton" onClick={handleClick}>
        <DropdownIcon />
      </button>
      <div className={`dropdownMenu ${isOpen ? "" : "hidden"}`}>
        {elements.map((menu) => (
          <Link
            key={menu.route}
            to={menu.route}
            target={menu.isExternal ? "_blank" : ""}
            onClick={() => setIsOpen(false)}
          >
            <span style={{ lineHeight: "1" }}>{menu.name}</span>
            {menu.isExternal && <ExternalLinkArrow />}
          </Link>
        ))}
      </div>
    </StyledDropdown>
  );
};

export default NavMenu;
