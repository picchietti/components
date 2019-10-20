import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

/** A switch with an on/off state is displayed. Each state can have its own icon and text. */
function IconSlider(props) {
  const [on, setOn] = useState(props.isOn);

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
  /** Initial value of on or off */
  isOn: PropTypes.bool,
  /** A font awesome 5 icon passed to react-fontawesome's FontAwesomeIcon */
  onIcon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  /** A font awesome 5 icon passed to react-fontawesome's FontAwesomeIcon */
  offIcon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]).isRequired,
  /** Text or jsx to display next to the input */
  onText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Text or jsx to display next to the input */
  offText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Callback for when the value changes. Receives current value */
  handleChange: PropTypes.func
};

IconSlider.defaultProps = {
  isOn: false
};

export default IconSlider;
