import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "rsuite"

const Header = ({ siteTitle }) => (
  <Navbar style={{
    width: '100vw',
    position: 'fixed',
  }}>
    <Navbar.Header>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Navbar.Header>
    <Navbar.Body>
      <Nav>
        <Nav.Item componentClass={Link} to="/#work">
          Work
        </Nav.Item>
        <Nav.Item componentClass={Link} to="/#projects">
          Projects
        </Nav.Item>
        <Nav.Item componentClass={Link} to="/#about">
          About
        </Nav.Item>
        <Nav.Item componentClass={Link} to="/#contact">
          Contact
        </Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
