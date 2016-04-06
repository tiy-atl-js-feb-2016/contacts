import React, { PropTypes } from 'react';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
});
