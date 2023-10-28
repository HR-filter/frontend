import { Offline, Online } from 'react-detect-offline';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './root';
import VacancyPage from '../pages/VacancyPage';
import ErrorBoundary from './ErrorBoundary';
import CheckboxLabel from '../ui/checkbox/index';
import SearchBar from '../ui/search-bar';
import FilterList from '../components/FilterList';
// import Registration from '../pages/Registration/Registration';
// import Login from '../pages/Login/Login';

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
      // errorElement={<ErrorBoundary />}
    >
      {/* Main Page */} // тут пока не знаю. надо узнать, что обычно
      отображается на главной. возможно уже роут с фильтрами сразу
      {/* <Route index element={<p>Здесь мейн пейдж</p>} /> */}
      <Route
        index
        path="/candidate"
        element={<p>Здесь собранная страница фильтр по кандидатам</p>}
      />
      <Route index path="/vacancy" element={<VacancyPage />} />
      <Route
        index
        path="/favourite"
        element={<p>Здесь собранная страница favourite</p>}
      />
      {/*  Роут для проверки своих компонентов в адресной строке ввест /test */}
      <Route
        path="/test"
        element={
          <>
            <SearchBar value="Поиск" />
            <CheckboxLabel title="Тестовое поле" label="111" />
            <FilterList />
          </>
        }
      />
    </Route>,
  ),
);
export default router;
