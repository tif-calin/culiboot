import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > div:first-of-type {
    background-color: #fbfbfb;
    flex-grow: 1;
    padding: 0.5rem;
    border-radius: 0.25rem;
    --shadow-color: 0deg 0% 80%;
    box-shadow: var(--shadow-inset-medium), inset 0 0 2px hsl(var(--shadow-color));
  }
`;

interface Props {};

const HomePage = (_: Props): React.ReactElement => {
  return (
    <Page>
      <h2>Home Page</h2>
      <div>This is the home page</div>
    </Page>
  );
};

export default HomePage;
