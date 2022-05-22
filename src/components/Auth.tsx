import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from 'redux-toolkit/features/userSlice';
import axios from 'axios';
import { API_ROUTES } from 'constants/apiRoutes';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export const Auth: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: any) => state.user);

  const token = localStorage.getItem('token');

  // Logout, if token is manually removed
  addEventListener('storage', (event) => {
    if (!token) {
      dispatch(logout());
      return navigate('/');
    }

    axios
      .get(API_ROUTES.USER, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        return <>{children}</>;
      })
      .catch(() => {
        localStorage.removeItem('token');
      });
  });

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
      .catch(() => {
        localStorage.removeItem('token');
      });
  }

  return <>{children}</>;
};
