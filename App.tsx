import * as React from 'react';
import { Child } from './Child';
import { Container } from './Container';
import './style.css';

import { FlexCenter } from './FlexBox/FlexBox';

export default function App() {
  return (
    <Container>
      <FlexCenter>
        <Child>Child 1</Child>
        <Child>Child 2</Child>
      </FlexCenter>
    </Container>
  );
}
