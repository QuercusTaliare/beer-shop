import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header = () => {

  const HeaderStyles = styled.header`
    background: var(--secondary);
    padding: 1.5rem 0;

  
  `;

  const HeaderListStyles = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 0;

    li {
      list-style-type: none;
    }

    a {
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