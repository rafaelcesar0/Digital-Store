import CardsFooter from './CardsFooter';
import Description from './Description';
import SocialIcons from './SocialIcons';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-10 bg-dark-gray text-white'>
      <div className='flex flex-row justify-center items-cente mt-10 w-full max-w-screen-xl mx-auto px-4'>
        <div className='mr-7 ml-7 '>
          <Description />
          <SocialIcons />
        </div>

        <div className='ml-7'>
          <CardsFooter />
        </div>

        <div className='mr-10 ml-7'>
          <Contact />
        </div>
      </div>

      <div className=''>
        <hr />
        <p className='flex justify-center items-center mt-5'>
          @ 2022 Digital College
        </p>
      </div>
    </footer>
  );
};

export default Footer;
