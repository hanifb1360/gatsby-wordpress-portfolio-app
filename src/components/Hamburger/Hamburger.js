import React from "react"
import { HamburgerButton } from "./Hamburger.styles"
const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton>
    <img src={HambergerIcon} alt="menu-hamburger" />
  </HamburgerButton>
)

export default Hamburger
