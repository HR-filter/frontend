import { Offline, Online } from 'react-detect-offline';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import ErrorBoundary from './ErrorBoundary';
import CheckboxLabel from '../ui/checkbox';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Online>
            <Root />
          </Online>
          <Offline>
            <ErrorBoundary />
          </Offline>
        </>
      }
      errorElement={<ErrorBoundary />}
    >
      {/* Main Page */}
      <Route index element={<p>Здесь мейн пейдж</p>} />

      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route
        path="test"
        element={<CheckboxLabel label="Тестовое поле" checked />}
      />
    </Route>,
  ),
);
export default router;
