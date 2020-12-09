import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {

  const HeaderStyles = styled.header`
    background: var(--secondary);
    height: 10vh;
    font-family: 'Oswald', serif;
    font-size: 3.5rem;

    nav {
      height: 100%;
    }

  
  `;

  const HeaderListStyles = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
    height: 100%;

    li {
      list-style-type: none;
      display: flex;
      padding: 0 3rem 0 0;
    }

    a {
      justify-content: center;
      align-items: center;
      text-decoration: none;
      &:hover {
        color: var(--white);
      }
    }

  
  `;

  return (
    <>
      <HeaderStyles>
        <nav>
          <HeaderListStyles>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </HeaderListStyles>
        </nav>
      </HeaderStyles>
    </>
  )

}

export default Header;