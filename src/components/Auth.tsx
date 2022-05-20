import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'redux-toolkit/features/userSlice';
import { getJWT } from 'utils';
import axios from 'axios';
import { API_ROUTES } from 'constants/apiRoutes';

type Props = {
  children: React.ReactNode;
};

export const Auth: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.user);

  const token = getJWT();

  if (!token && isLoggedIn) dispatch(logout());

  if (token && !isLoggedIn) {
    axios
      .get(API_ROUTES.USER, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(login(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <>{children}</>;
};
