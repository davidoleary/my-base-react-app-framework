import React from 'react';
import { storiesOf } from '@storybook/react';
import PersonCard from './PersonCard';

storiesOf('PersonCard', module)
  .add('Full', () => <PersonCard />)
  .add('Mini', () => <PersonCard mini />);
