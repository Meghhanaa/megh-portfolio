import React from 'react';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    border: 0.1px solid #854CE6;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.bg_secondary};
    margin: 2%;
`;

const ContactInfo = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.text_primary};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 960px) {
        padding: 0px;
    }
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
    @media (max-width: 660px) {
        align-items: center;
    }

`;

const index = () => {
    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                    Feel free to reach out to me through the following contact details.
                </Desc>
                <ContactSection>
                    <ContactDetails>
                        <ContactInfo href="tel:9993804738">
                            <PhoneIcon />Reach me @: 9993804738
                        </ContactInfo>
                        <ContactInfo href="mailto:meghanatamrakar0123@gmail.com">
                            <EmailIcon />Email me @: meghanatamrakar0123@gmail.com
                        </ContactInfo>
                    </ContactDetails>
                </ContactSection>
            </Wrapper>
        </Container>
    )
}

export default index;
