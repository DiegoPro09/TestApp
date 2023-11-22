import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const CustomHeader = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor: 'rgba(362, 100, 100, 0.9'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color: 'white'}}>Test App in React-Bootstrap</Navbar.Brand>
      </Container>
    </Navbar>
  );
}