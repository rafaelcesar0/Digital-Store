import Logo from './Logo'
import logoHeader from '../assets/logo-header.svg'


const Header = () => {
  return (
    <div>
      <Logo src={logoHeader} />
      Header
    </div>
  )
}

export default Header