import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import BuyBox from "./BuyBox/BuyBox"


const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>
        {children}
      </main>
      <BuyBox />
      <Footer />
      
    </div>
  )
}

export default Layout