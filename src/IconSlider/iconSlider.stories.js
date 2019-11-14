import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle, faTimesCircle, fas
} from '@fortawesome/free-solid-svg-icons';

import IconSlider from './';

library.add(
  fab,
  fas,
  faCheckCircle,
  faTimesCircle
);

const stories = storiesOf('IconSlider', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    component: IconSlider
  })
  .add('with knobs', () => (
    <IconSlider
      onIcon={
        select(
          'onIcon',
          {
            smile: 'smile',
            grin: 'grin',
            squint: 'grin-squint',
            'heart eyes': 'grin-hearts'
          },
          'smile'
        )
      }
      offIcon={
        select(
          'offIcon',
          {
            frown: 'frown',
            'big frown': 'frown-open',
            tear: 'sad-tear',
            angry: 'angry'
          },
          'frown'
        )
      }
      onText={text('onText', 'On')}
      offText={text('offText', 'Off')}
    />
  ))
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
  .add('with default on', () => (
    <IconSlider
      isOn={ true }
      onIcon={ faCheckCircle }
      offIcon={ faTimesCircle }
      onText="Missiles armed"
      offText="Missiles disarmed"
    />
  ))
  .add('without text', () => (
    <IconSlider
      onIcon="check-circle"
      offIcon="times-circle"
    />
  ))
  .add('with event handler', () => (
    <IconSlider
      onIcon="check-circle"
      offIcon="times-circle"
      handleChange={ (changedTo) => { changedTo && alert('Boo!'); } }
    />
  ));
