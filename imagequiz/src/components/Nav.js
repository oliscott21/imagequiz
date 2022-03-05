import { Navbar, NavItem, Nav, NavLink } from "react-bootstrap";


const NavMenu = (props) => {
  return (
    <Navbar bg="light" className="na">
      <Navbar.Brand href="#">React</Navbar.Brand>
      <Nav className="ms-auto">
        {
        props.user ?
        <>
          <Navbar.Text>
            Signed in as {props.user}
          </Navbar.Text>
        </>
        :
          <>
            <Nav.Link href="#/register">
              Register
            </Nav.Link>
            <Nav.Link href="#/login">
              Login
            </Nav.Link>
          </>
        }
      </Nav>
    </Navbar>
  );
}

export default NavMenu;
