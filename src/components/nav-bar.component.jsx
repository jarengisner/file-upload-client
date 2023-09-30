import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavComponent() {
  return (
    <Navbar expand='lg' bg='dark'>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Navbar.Brand style={{ color: 'white', fontSize: 24 }}>
          File Uploader
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
