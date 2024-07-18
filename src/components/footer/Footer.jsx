import CardsFooter from './CardsFooter';
import Description from './Description';
import SocialIcons from './SocialIcons';
import Contact from './Contact';




const Footer = () => {
  return (
    //usar o grid 
    <div className='grid grid-cols-3 grid-rows-1 pt-12 pl-10 pl-12 pb-5 bg-[var(--dark-gray)] text-[--white]'>
        
        <div className='mr-7 ml-7 '>
          <Description />
          <SocialIcons/>
        </div>

        <div className='ml-7'>
          <CardsFooter />
        </div>

        <div className='mr-10 ml-7'>
          <Contact />
        </div>

        <div className='col-span-4 mr-10 mt-10' >
          <hr />
          <p className='flex justify-center items-center mt-5'>@ 2022 Digital College</p>
        </div>
        

    </div>

    
  
  )
}

export default Footer;