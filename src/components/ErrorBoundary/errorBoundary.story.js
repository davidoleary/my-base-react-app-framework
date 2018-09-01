import React from 'react';
import { storiesOf } from '@storybook/react';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';

storiesOf('ErrorBoundary', module)
  .add('Example', () => (<ErrorBoundary>
    <BuggyComponent />
  </ErrorBoundary>));
