import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Navigation>
            <StyledLink to="/Todo">ToDo</StyledLink>
            <StyledLink to="/Done">Done</StyledLink>
        </Navigation>
    );
};

export default Nav;

const Navigation = styled.nav`
    margin: 10px;
    display: flex;
    justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
    color: #2569ef;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #2569ef;
    border-radius: 3px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        background-color: #2569ef;
        color: #fff;
    }
`;
