import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import Loading from './';

library.add(
  fab,
  fas
);

const stories = storiesOf('Loading', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    component: Loading
  })
  .add('with knobs', () => (
    <Loading
      icon={
        select(
          'icon',
          {
            squint: 'grin-squint',
            dizzy: 'dizzy'
          },
          'grin-squint'
        )
      }
    />
  ))
  .add('spooky halloween loading', () => {
    return (<Loading
      icon="spider"
    />);
  })
  .add('jolly christmas loading', () => (
    <Loading
      icon="snowflake"
    />
  ))
  .add('default', () => (
    <Loading />
  ));
