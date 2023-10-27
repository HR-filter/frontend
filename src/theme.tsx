import { createTheme } from '@mui/material/styles';
import './assets/fonts/fonts.css';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#5a9bff', // Основной синий цвет
      dark: '#1d6bf3', // Темный синий для активных элементов
      light: '#F1F6FF', // Светлый синий
    },
    secondary: {
      main: '#87cc9e', // Зеленый вторичный цвет
    },
    error: {
      main: '#ff0200', // Цвет ошибки
    },
    background: {
      default: '#ffffff', // Цвет фона по умолчанию
      paper: '#f9fafb', // Цвет фона бумаги
    },
    text: {
      primary: '#1a1b22', // Основной цвет текста
      secondary: '#797981', // Вторичный цвет текста
    },
    action: {
      disabledBackground: '#dde0e4', // Цвет для неактивного состояния. Подумать как можно назвать по-другому
    },
  },
  typography: {
    fontFamily: 'YS Text, Roboto, Inter, Arial, sans-serif', // Default font for most text
    fontSize: 16,
    h1: {
      fontFamily: 'YS Display, sans-serif', // Custom font for h1
    },
    button: {
      fontFamily: 'YS Text, sans-serif', // Custom font for buttons
    },
    // Add more font styles as needed
  },
  spacing: 4,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          fontFamily: 'YS Text, sans-serif', // Настройка шрифта для чекбокса
          // fontSize: '14px', // Размер шрифта для чекбокса
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: 'YS Text, sans-serif',
          fontWeight: 400,
          // fontSize: 14,
        },
      },
    },
  },
});

export default theme;
