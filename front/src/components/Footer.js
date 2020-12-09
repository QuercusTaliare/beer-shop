import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--secondary);
  padding: 2rem;
`;

const Footer = () => {

  return (
    <FooterStyles>
      <p>Created at <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Juno College</a></p>
    </FooterStyles>
  )
}

export default Footer;