import * as React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import { CssBaseline } from '@material-ui/core';

type Props = {
  title?: string;
};

const LayoutContainer: React.FC<Props> = ({ children, title = 'Blog' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <CssBaseline />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </div>
);

export default LayoutContainer;

const Wrapper = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 2rem 0px;
  width: 100%;
`;
