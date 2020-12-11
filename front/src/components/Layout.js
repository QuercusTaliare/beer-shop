import styled from 'styled-components';

import Footer from "./Footer";
import Header from "./Header";

const WrapperStyles = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem;

`;

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentStyles = styled.div`
  flex-grow: 1;

`;

const Layout = ({ children }) => {
  return (
    <>
      <ContainerStyles>
        <ContentStyles>
          <Header />
          <WrapperStyles>
            {children}
          </WrapperStyles>
        </ContentStyles>
        <Footer />
      </ContainerStyles>
      
    </>
  )
}

export default Layout;