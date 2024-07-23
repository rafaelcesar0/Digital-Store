import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import BuyBox from "./BuyBox/BuyBox"


const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main className="bg-light-gray-3">
        {children}
        <BuyBox />
      </main>
      
      <Footer />
      
    </div>
  )
}

export default Layout