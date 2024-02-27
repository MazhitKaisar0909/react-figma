import React from 'react';
import { configHeader } from './configHeader';
import { StyledHeader, Nav, HeaderNavList, HeaderLogoWrapper } from './styled';
import { Container} from '../common/styled';
import HeaderLogo from '../icons/HeaderLogo';

const Header = () => {
  console.log(configHeader)
  return (
    <StyledHeader>
      <Container>
        <HeaderLogoWrapper>
          <HeaderLogo/>
        </HeaderLogoWrapper>
        <Nav>
          <HeaderNavList>
            {configHeader.map(item => (
              <li key={item.id}>
                <a style={{'color': '#fff', 'textDecoration': 'none'}} href={item.link}>
                  {item.text}
                </a>
              </li>
            ))}
          </HeaderNavList>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header