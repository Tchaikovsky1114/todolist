import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme, lightTheme } from './theme';

const queryclient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryclient}>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
