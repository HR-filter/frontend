// import React, { useEffect, MouseEvent, KeyboardEvent } from 'react';
// import classnames from 'classnames';
// import classes from './style.module.scss';
// import CardFull from '../CardFull';
// import demoResume from '../../assets/data/demoResume';

// interface PopupWithFormProps {
//   id: string;
//   isOpen?: boolean;
//   onClose?: () => void;
// }

// const PopupWithForm: React.FC<PopupWithFormProps> = ({
//   id = '0',
//   isOpen = false,
//   onClose = () => {},
// }) => {
//   const getPopupClasses = classnames(classes.popup, {
//     [classes.popup_opened]: isOpen,
//   });

//   useEffect(() => {
//     console.log(id);
//   }, []);

//   useEffect(() => {
//     function handleEscClose(evt: Event) {
//       const keyboardEvent = evt as unknown as KeyboardEvent;
//       if (keyboardEvent.key === 'Escape') {
//         onClose();
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscClose);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscClose);
//     };
//   }, [isOpen, onClose]);

//   const handleCloseByOverlay = (e: MouseEvent) => {
//     if ((e.target as HTMLElement).classList.contains(classes.popup)) {
//       onClose();
//     }
//   };

//   return (
//     <section className={getPopupClasses} onClick={handleCloseByOverlay}>
//       <div className={classes.popup__form}>
//         <CardFull
//           // TODO: прокинуть пропсом id и по id найти через апи данные для этой карты
//           data={demoResume}
//           isViewed={true}
//           isFavourite={true}
//           pdfLink="http://ya.ru"
//           onClickLike={() => console.log('test')}
//           onClickTelegram={() => console.log('test')}
//           onClickEmail={() => console.log('test')}
//           onClickDownload={() => console.log('test')}
//           onClickClose={onClose}
//         />
//       </div>
//     </section>
//   );
// };

// export default PopupWithForm;
