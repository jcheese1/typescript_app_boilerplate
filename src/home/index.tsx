import * as React from 'react';

export interface HomeProps {
  compiler: string;
  framework: string;
}

export const Home: React.SFC<HomeProps> = ({ compiler, framework }) => (
  <div>
    Hello from {compiler} and {framework}!
  </div>
);

Home.defaultProps = {
  compiler: 'TypeScript',
  framework: 'React'
};
