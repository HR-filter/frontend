import { Link } from 'react-router-dom';
import Content from '../../components/Content';

export default function VacancyPage() {
  return (
    <>
      <Content />
      <Link to="/test">
        <button>Страница с тестовым компонентом</button>
      </Link>
    </>
  );
}
