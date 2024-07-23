import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"


const Layout = ({ children }) => {
  return (
    <div className='flex flex-col gap-32'>
      <div className='container-default'>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout