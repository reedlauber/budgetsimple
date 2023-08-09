import React from 'react';

import { Block, H1 } from 'components/ui';

import Layout from 'features/Layout';

import Buttons from './components/Buttons';
import Typography from './components/Typography';

import './index.css';

interface PatternsSection {
  id: string;
  title: string;
  Component: React.FunctionComponent;
}

const SECTIONS: PatternsSection[] = [
  { id: 'typography', title: 'Typography', Component: Typography },
  { id: 'buttons', title: 'Buttons', Component: Buttons },
  // { id: 'colors', title: 'Colors', Component: null },
];

const PatternsView = () => {
  return (
    <Layout>
      <div className="layout-view">
        <H1>Patterns</H1>

        <Block isColumn offset offsetSize="lg">
          {SECTIONS.map(({ id, Component }) => <Component key={id} />)}
        </Block>
      </div>
    </Layout>
  );
};

export default PatternsView;
