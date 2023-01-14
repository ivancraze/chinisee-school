import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface IModalLayoutProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<IModalLayoutProps> = ({ children }) => {
  const isModalVisible = useSelector(
    (state: RootState) => state.modal.isModalVisible,
  );

  return (
    <div className={isModalVisible ? 'modal modal--active' : 'modal'}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default ModalLayout;
