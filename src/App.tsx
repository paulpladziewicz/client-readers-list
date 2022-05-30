import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux-toolkit/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Auth,
  Home,
  Dashboard,
  LoginForm,
  RegisterForm,
  PageNotFound
} from 'components';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
