import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <Nav>
        <Nav.Item as="li">
        <Nav.Link className='nav' href="/Home">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link className='nav' href="/create">Create Record</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link className='nav' href="/read">Check Record</Nav.Link>
      </Nav.Item>


    </Nav>
  );
}

export default Navbar;