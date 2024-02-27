import React from 'react';
import { Container } from '../common/styled';
import { configFooterContacts, configFooterRout } from './configFooter';
import FooterContactCard from './FooterContactCard';
import FooterRoutCard from './FooterRoutCard';
import { StyledFooter, FooterNav,} from './styled';

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterNav>
                    <ul>
                        {configFooterContacts.map(contact => (
                            <FooterContactCard key={contact.id} {...contact} />
                        ))}
                    </ul>

                    <p style={{ 'color': '#FFFF' }}>
                        CODEBEAR.
                    </p>

                    <ul>
                        {configFooterRout.map(rout =>
                        (
                            <FooterRoutCard key={rout.id} {...rout} />
                        )    
                        )}
                    </ul>
                </FooterNav>
            </Container>
        </StyledFooter>

    )
}

export default Footer