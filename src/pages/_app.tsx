import { Provider } from 'react-redux';
import store from '../redux/store';
import { NextPage } from 'next';
import { ThemeProvider } from '@material-ui/core/styles';
import LayoutContainer from '../components/Layout';
import theme from '../theme';

const App: NextPage<any> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
