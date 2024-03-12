import React from 'react';
import { configHeader } from './configHeader';
import { StyledHeader, Nav, HeaderNavList, HeaderNavLogoWrapper, HeaderNavLink } from './styled';
import { Container } from '../common/styled';
import HeaderLogo from '../icons/HeaderLogo';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderNavLogoWrapper>
          <HeaderLogo />
            <Nav>
              <HeaderNavList>
                {configHeader.map(item => (
                  <li key={item.id}>
                    <HeaderNavLink href={item.link}>
                      {item.text}
                    </HeaderNavLink>
                  </li>
                ))}
              </HeaderNavList>
            </Nav>          
        </HeaderNavLogoWrapper>
      </Container>
    </StyledHeader>
  )
}

export default Header