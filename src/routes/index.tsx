import { Offline, Online } from 'react-detect-offline';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
// import VacancyPage from '../pages/VacancyPage';
import ErrorBoundary from './ErrorBoundary';
import CheckboxLabel from '../ui/checkbox/index';
import SearchBar from '../ui/search-bar';
import CardInfo from '../components/CardInfo';
import FilterList from '../components/FilterList';
import CardSmall from '../components/CardSmall';
// import Registration from '../pages/Registration/Registration';
// import Login from '../pages/Login/Login';
import ProtectedRoute from '../HOC/ProtectedRoute';
import { ProtectedRouteProps } from '../HOC/ProtectedRoute';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import demoUserData from '../assets/data/demoUser';
import { SimpleSlide } from '../components/SimpleSlide';
import Main from '../pages/Main';

const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
  isAuthenticated: true,
  authenticationPath: '/signin',
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Registration />} />
      <Route
        path="/"
        element={

          <ProtectedRoute
            {...defaultProtectedRouteProps}
            outlet={
              <>
                <Online>
                  <Root />
                </Online>
                <Offline>
                  <ErrorBoundary />
                </Offline>
              </>
            }
          />

        }
      >
        <Route
          path="/"
          element={
            <ProtectedRoute {...defaultProtectedRouteProps} outlet={<Main />} />
          }
        />
        <Route
          path="/favourite"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<p>Здесь собранная страница favourite</p>}
            />
          }
        />
        <Route
          path="/test"
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={
                <>
                  <SearchBar value="Поиск" />
                  <CheckboxLabel title="Тестовое поле" label="111" />
                  <CardInfo userData={demoUserData} />
                  <FilterList />
                  <SimpleSlide />
                  <CardSmall />
                </>
              }
            />
          }
        />
      </Route>
    </>,
  ),
);
export default router;
