import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IconContext } from 'react-icons';

export const MainNav: FC = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <h1>Logo</h1>
        </a>
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <Link href="#">login</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-wrapper">
        <Link href="#">
          <a>
            <IconContext.Provider value={{ className: 'shopping-cart-icon' }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
          </a>
        </Link>
      </div>
    </header>
  );
};
