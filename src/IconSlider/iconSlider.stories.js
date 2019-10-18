import React from 'react';
import { storiesOf } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub, faGitlab
} from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle, faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

import IconSlider from './';

library.add(
  faGithub,
  faGitlab,
  faCheckCircle
);

storiesOf('IconSlider', module)
  .add('with git website icons', () => {
    const onIcon = ['fab', 'gitlab'];
    const offIcon = ['fab', 'github'];
    const onText = (
      <a
        href="https://gitlab.com/picchietti"
        target="_blank"
        rel="noopener noreferrer"
      >Gitlab</a>
    );
    const offText = (
      <a
        href="https://github.com/picchietti"
        target="_blank"
        rel="noopener noreferrer"
      >Github</a>
    );

    return (<IconSlider
      onIcon={ onIcon }
      offIcon={ offIcon }
      onText={ onText }
      offText={ offText }
    />);
  })
  .add('with status icons', () => (
    <IconSlider
      onIcon="check-circle"
      offIcon={ faTimesCircle }
      onText="Missiles armed"
      offText="Missiles disarmed"
    />
  ))
  .add('without text', () => (
    <IconSlider
      onIcon="check-circle"
      offIcon={ faTimesCircle }
    />
  ))
  .add('with event handler', () => (
    <IconSlider
      onIcon="check-circle"
      offIcon={ faTimesCircle }
      handleChange={ (changedTo) => { changedTo && alert('Boo!'); } }
    />
  ));
