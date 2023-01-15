import { ModalsType } from '../constants';

export interface IModalState {
  modalComponent: ModalsType | null;
  isModalVisible: boolean;
}
