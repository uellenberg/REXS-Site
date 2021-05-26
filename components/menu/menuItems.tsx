import MenuCategory from "./menuCategory";
import MenuLink from "./menuLink";
import React from "react";

const MenuItems = () => (
    <>
        <MenuCategory text="Docs"/>
        <MenuLink text="Getting Started" url="/docs/start" aria="Getting Started Page" pl="2%"/>
        <MenuLink text="Examples" url="/docs/start#examples" aria="Getting Started Page (Examples)" pl="6%"/>
        <MenuLink text="Functions" url="/docs/functions" aria="Functions Documentation" pl="2%"/>
        <MenuLink text="Match" url="/docs/functions#match" aria="Functions Documentation (Match)" pl="6%"/>
        <MenuLink text="Assert" url="/docs/functions#assert" aria="Functions Documentation (Assert)" pl="6%"/>
        <MenuLink text="Set" url="/docs/functions#set" aria="Functions Documentation (Set)" pl="6%"/>
        <MenuLink text="To" url="/docs/functions#to" aria="Functions Documentation (To)" pl="10%"/>
        <MenuLink text="Repeat" url="/docs/functions#repeat" aria="Functions Documentation (Repeat)" pl="6%"/>
        <MenuLink text="Or" url="/docs/functions#or" aria="Functions Documentation (Or)" pl="6%"/>
        <MenuLink text="OrPart" url="/docs/functions#orpart" aria="Functions Documentation (OrPart)" pl="10%"/>
        <MenuLink text="Flag" url="/docs/functions#flag" aria="Functions Documentation (Flag)" pl="6%"/>
        <MenuLink text="Before" url="/docs/functions#before" aria="Functions Documentation (Before)" pl="6%"/>
        <MenuLink text="After" url="/docs/functions#after" aria="Functions Documentation (After)" pl="6%"/>
    </>
);

export default MenuItems;