// import axios from 'axios';
// import { API_URL } from '../constants';
//
// export class AuthService {
//
//   static register(request: IRegisterRequest) {
//     return axios.post(API_URL + '/platform/user/registration', request)
//   }
//
//   static login(request: ILoginRequest) {
//     return axios.post(API_URL + '/auth/login', request)
//       .then((response) => {
//         if (response.data.accessToken) {
//           localStorage.setItem('accessToken', JSON.stringify(response.data.token));
//         }
//
//         return response.data;
//       });
//   }
//
//   static logout(request: ILogoutRequest) {
//     localStorage.removeItem('accessToken');
//     return axios.post(API_URL + '/platform/user/registration', request)
//   }
//

// }
export {};
