import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem, Row, Col } from "reactstrap";
const Header = () => {
    return (

        <>
            <Navbar
                className=" bg-nav"
                color="dark"
                dark
            >
                <Row className="w-100 d-flex">
                    <Col lg="2">
                        <NavbarBrand href="/">
                            <img
                                alt="logo"
                                src="/logo-white.svg"
                                style={{
                                    height: 40,
                                    width: 40
                                }}
                            />
                        </NavbarBrand>
                    </Col>
                    <Col lg="10" className="d-flex justify-content-end align-items-center">
                        <Nav navbar className="nav-text  mx-4">
                            <NavItem className="p-2">
                                <NavLink
                                    data-placement="bottom"
                                    rel="noopener noreferrer"
                                >
                                    <a href="#" rel='noreferrer' className="text-white">Home</a>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="nav-text  mx-4">
                            <NavItem className="p-2">
                                <NavLink
                                    data-placement="bottom"
                                    rel="noopener noreferrer"
                                >
                                    <a href="#home" rel='noreferrer' className="text-white">About</a>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="nav-text  mx-4">
                            <NavItem className="p-2">
                                <NavLink
                                    data-placement="bottom"
                                    rel="noopener noreferrer"
                                >
                                    <a href="#home" rel='noreferrer' className="text-white">Projects</a>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>


            </Navbar>
        </>

    )
}
export default Header;