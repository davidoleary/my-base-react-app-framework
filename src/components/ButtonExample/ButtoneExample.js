
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const ButtonExample = ({ handleClick, placeholder }) => {
  const list = placeholder.map(item => (<div key={item}>{item}</div>));

  return (<div>
    <Button onClick={handleClick}>Fire Action to store</Button>
    {list}
  </div>);
};

ButtonExample.propTypes = {
  handleClick: PropTypes.func.isRequired,
  placeholder: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ButtonExample;
