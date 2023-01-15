import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import AuthModal from './modals/AuthModal/';
import { ModalsType } from '../../constants';

const ModalLayout: React.FC = () => {
  const isModalVisible = useSelector(
    (state: RootState) => state.modal.isModalVisible,
  );
  const modalComponent = useSelector(
    (state: RootState) => state.modal.modalComponent,
  );

  const modalRenderer = (modalComponent: ModalsType): JSX.Element => {
    switch (modalComponent) {
      case ModalsType.authModal:
        return <AuthModal />;
      default:
        return <></>;
    }
  };

  return (
    <div className={isModalVisible ? 'modal modal--active' : 'modal'}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          {modalRenderer(modalComponent as ModalsType)}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
