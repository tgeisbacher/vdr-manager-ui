import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import TVShow from '../components/TVShow';

storiesOf('TVShow', module)
  .add('with simple text', () => <TVShow showTitle={'ORF1'} showSubtitle={'Frisch gekocht'} />)
  .add('with long subtitle', () => <TVShow showTitle={'ORF2'} showSubtitle={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}/>)
  .add('with specific Channelname', () => <TVShow showTitle={'ServusTV-133ÜÜ'} showSubtitle={'Das ist ein Test'} />)