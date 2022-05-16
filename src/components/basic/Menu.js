import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBackground = styled.div`
transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
transition : transform 1s;
`;

const Icon = styled.span`
background-color : ${(props) => props.clicked ? "transparent" : "#f8f6f0"};
margin-left : ${(props) => props.clicked ? "1.5rem" : "0"};
@media screen and (max-width : 767px){
    margin-left : ${(props) => props.clicked ? "1rem" : "0"};
}


&::before{
    top: ${(props) => props.clicked ? "0" : "-0.8rem !important"};
    transform: ${(props) => props.clicked ? "rotate(135deg)" : "rotate(0)"};
}

&::after{
    top: ${(props) => props.clicked ? "0" : "0.8rem"};
    transform: ${(props) => props.clicked ? "rotate(-135deg)" : "rotate(0)"};
}
`;

const Navigation = styled.nav`
    height: ${(props) => (props.clicked ? "100vh": "0")};
    top: ${(props) => (props.clicked ? "0": "-20%")};
    opacity: ${(props) => (props.clicked ? "1": "0")};
`;

const List = styled.ul``;

const ItemLink = styled(NavLink)`
`;


function Menu() {

    const [click, setClick] = useState(false);
    const HandleClick = () => setClick(!click);

  return <>
    <label htmlFor="navi-toggle" className='menu-btn' onClick={HandleClick}> 
        <Icon clicked={click} className='menu-icon'> &nbsp; </Icon>
     </label>
    <NavBackground className='nav-bg' clicked={click} > &nbsp; </NavBackground>

    <Navigation clicked={click} className="menu-nav">
        <List className='menu-list'>
            <div>
            <li> <ItemLink className="menu-item" onClick={HandleClick} to="/"> Accueil </ItemLink> </li>
            <li> <ItemLink className="menu-item" onClick={HandleClick} to="/web-projects"> Projets WEB </ItemLink> </li>
            </div>
            <div>
            <li> <ItemLink className="menu-item" onClick={HandleClick} to="/portfolio"> Portfolio </ItemLink> </li>
            <li> <ItemLink className="menu-item" onClick={HandleClick} to="/contact"> Me Contacter </ItemLink> </li>
            </div>
        </List>
    </Navigation>
    
  </>
}

export default Menu;
