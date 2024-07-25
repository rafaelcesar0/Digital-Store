import ColorShoeButtons from './ColorShoeButtons';
import SizeShoeButtons from './SizeShoeButtons';

const ProductOptions = ({ sizeShoeButtons, styleColorsButtons }) => {
  return (
    <>
      <SizeShoeButtons sizeShoeButtons={sizeShoeButtons} />
      <ColorShoeButtons styleColorsButtons={styleColorsButtons} />
    </>
  );
};

export default ProductOptions;
