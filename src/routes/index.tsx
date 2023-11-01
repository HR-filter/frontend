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
import FilterList from '../components/FilterList';
import CardSmall from '../components/CardSmall';
// import Registration from '../pages/Registration/Registration';
// import Login from '../pages/Login/Login';
import ProtectedRoute from '../HOC/ProtectedRoute';
import { ProtectedRouteProps } from '../HOC/ProtectedRoute';
import Registration from '../pages/Registration/Registration';
import Login from '../pages/Login/Login';
import Main from '../pages/Main';
import Favourite from '../pages/Favoutite';
import CardFull from '../components/CardFull';
import { demoResume } from '../assets/data/demoResume';

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
                <Root />
                {/* <ErrorBoundary /> */}
              </>
            }
          />
        }
        errorElement={<ErrorBoundary />}
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
              outlet={<Favourite />}
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
                  <FilterList />
                  <CardSmall
                    data={demoResume}
                    isViewed={false}
                    isFavourite={false}
                    pdfLink=""
                    onClickLike={() => console.log('test')}
                    onClickDetails={() => console.log('test')}
                    onClickTelegram={() => console.log('test')}
                    onClickEmail={() => console.log('test')}
                    onClickDownload={() => console.log('test')}
                  />
                  <CardFull
                    data={demoResume}
                    isFavourite={false}
                    pdfLink="http://ya.ru"
                    onClickLike={() => console.log('test')}
                    onClickTelegram={() => console.log('test')}
                    onClickEmail={() => console.log('test')}
                    onClickDownload={() => console.log('test')}
                    onClickClose={() => console.log('test')}
                  />
                </>
              }
            />
          }
        />
      </Route>
    </>,
  ),
  {
    basename: '/frontend/',
  },
);
export default router;
