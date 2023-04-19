import * as ReactDOMClient from 'react-dom/client'
import './index.css';
import store from './services/store/excelFile'
import { Provider } from 'react-redux';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './services/store/excelFile';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
      <App />
  </Provider>,
);

reportWebVitals();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
