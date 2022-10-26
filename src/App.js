import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Redes from './routes/redes';
import Poap from './routes/poap';
import Tokens from './routes/tokens';
import Exchange from './routes/exchange';


function App() {
  return (
    <div className="App">
      <Router>
      <Container>
        <Row>
          <Col>
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Taller Scotiabank</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/redes">Conectar a Redes</Nav.Link>
                <Nav.Link href="/tokens">Tokens</Nav.Link>
                <Nav.Link href="/exchange">Exchange</Nav.Link>
                <Nav.Link href="/poap">Claim POAP</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          </Col>
        </Row>  
        <Row>
        <Col>
          <Routes>
            <Route path="/redes" element={<Redes />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/poap" element={<Poap />} />
          </Routes>
        </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}

export default App;
