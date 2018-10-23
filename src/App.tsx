import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Home } from './home';
import { About } from './about';

import { createGlobalStyle, styled } from '../styled/styled_components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #212121;
    color: #fff;
    padding: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto 30px;
  max-width: 50em;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  justify-content: center;
`;

const App: React.SFC<{}> = () => (
  <React.Fragment>
    <Router history={createBrowserHistory()}>
      <div>
        <Container>
          <GlobalStyle />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Container>
      </div>
    </Router>
  </React.Fragment>
);

export { App };
