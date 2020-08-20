import React from 'react';
import styled from 'styled-components';
import Map from './components/organisms/Map';
import List from './components/organisms/PointBlock';

const Wrapper = styled.div`
  margin-top: 50px;
  padding: 50px;
  width: 850px;

  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const App = () => (
  <Wrapper>
    <Map />
    <List />
  </Wrapper>
);

export default App;
