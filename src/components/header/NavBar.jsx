import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();
  const styleUnderline = 'text-primary underline decoration-2';

  return (
    <nav className="py-2">
      <ul className="flex items-center justify-start gap-7 font-bold underline-offset-8">
        <li>
          <Link
            to="/home"
            className={
              pathname === '/home' ? styleUnderline : ''
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/product-listing"
            className={
              pathname === '/product-listing' ? styleUnderline : ''
            }
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/product-view"
            className={
              pathname === '/product-view' ? styleUnderline : ''
            }
          >
            Categorias
          </Link>
        </li>
        <li>
          <Link
            to="/home" 
          >
            Meus Pedidos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
