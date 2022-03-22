import React from "react";
import {
  SidebarContainer,
  SideIconItem,
  SideIcon,
  SideMenu,
  SideLink,
  SideButtonWrap,
  SideButton,
} from "./Sidebar.style";
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <SideIconItem>
        <SideIcon onClick={toggle}/>
      </SideIconItem>
      <SideMenu>
        <SideLink to="/" onClick={toggle} >Pizza</SideLink>
        <SideLink to="/" onClick={toggle}>Dessert</SideLink>
        <SideLink to="/" onClick={toggle}>All Menu</SideLink>
      </SideMenu>
      <SideButtonWrap>
        <SideButton onClick={toggle}>Order Now</SideButton>
      </SideButtonWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
