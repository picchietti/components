import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake, faSpider } from '@fortawesome/free-solid-svg-icons';

import './index.css';

/** Pass in an icon or let it default to a spinner. Default enables easter eggs in the months of October and December. Override the easter eggs by manually passing in spinner. */
function Loading(props) {
  const monthToIcon = {
    Oct: faSpider, // halloween
    Dec: faSnowflake // christmas
  };

  const month = moment().format('MMM');
  const icon = props.icon || monthToIcon[month] || 'spinner';

  return (
    <div styleName="loading">
      <FontAwesomeIcon icon={ icon } size="3x" pulse fixedWidth />
      <div styleName="text">Loading...</div>
    </div>
  );
}

Loading.propTypes = {
  /** A font awesome 5 icon passed to react-fontawesome's FontAwesomeIcon */
  icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object])
};

export default Loading;
