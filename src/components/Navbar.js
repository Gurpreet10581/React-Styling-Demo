// Styling Reactstrap and Radium 
import React from 'react';
import Radium from 'radium';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
} from 'reactstrap';

const style ={
  navbar:{
    backgroundColor: '#0B2249'
  },
  text:{
    color:'#F78A7E'
  },
  div:{
    backgroundColor: '#0B2249',
    color:'#F78A7E'

  },
  NavLink: {
    color: "white"
  },
  
}

class Sitebar extends React.Component {
  constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div style={style.div}>
          <Navbar style={style.navbar}>
            <NavbarBrand href="/" style={style.text}  >ORION</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem >
                    <NavLink href="/components/" style={style.NavLink}>SHOP</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={style.NavLink} >FAQ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={style.NavLink} >SUPPORT</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap" style={style.NavLink} >MAINTENANCE</NavLink>
                  </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}

export default Radium(Sitebar);