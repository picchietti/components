import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

function IconSlider(props) {
  const [on, setOn] = useState(props.isOn || false);

  const onOffClass = (on) ? 'on' : 'off';
  const icon = (on) ? props.onIcon : props.offIcon;
  const text = (on) ? props.onText : props.offText;

  const handleChange = () => {
    setOn(!on);
    props.handleChange && props.handleChange(!on);
  };

  return (
    <div styleName="icon-slider">
      <div styleName={ `slider ${onOffClass}` } onClick={ handleChange }>
        <FontAwesomeIcon icon={ icon } />
      </div>
      { text }
    </div>
  );
}

IconSlider.propTypes = {
  isOn: PropTypes.bool,
  onIcon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  offIcon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  onText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  offText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  handleChange: PropTypes.func
};

export default IconSlider;
