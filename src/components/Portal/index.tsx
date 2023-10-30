import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
  isOpened: boolean;
}

const modalRoot = document.getElementById('modal');

const Portal: React.FC<PortalProps> = ({ children, isOpened }) => {
  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(children, modalRoot!);
};

export default Portal;
