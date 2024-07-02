import PropTypes from 'prop-types';

const Logo = ({src}) => {
  return (
    <img src={src} alt="Logo" />
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Logo