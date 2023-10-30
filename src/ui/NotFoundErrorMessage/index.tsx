import { FC } from 'react';
// import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import styles from './style.module.scss';

const NotFoundErrorMessage: FC = () => {
  return (
    <Alert severity="warning" sx={{ margin: '20px 0 0' }}>
      <AlertTitle
        sx={{
          padding: 0,
          margin: 0,
          'font-family': 'YS Text',
          'font-size': '18px',
          'font-style': 'normal',
          'font-weight': '500',
          'line-height': '24px',
        }}
      >
        По выбранным фильтрам ничего не найдено
      </AlertTitle>
      <p className={styles.alert}>
        Измените или сбросьте фильтры в панели справа
      </p>
    </Alert>
  );
};

export default NotFoundErrorMessage;
