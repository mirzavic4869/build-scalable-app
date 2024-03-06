import React from 'react';
import logo from '../../assets/images/header-logo.png';
import styled from 'styled-components';

const Container = styled.div`
  margin: 1rem;
  padding: 0.5rem;
`;

const Header = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="logo" />
        <h1>DinoTes App</h1>
      </Container>
    </>
  );
};

export default Header;
