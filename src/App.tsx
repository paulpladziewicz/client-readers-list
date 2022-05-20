import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux-toolkit/store';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Auth, Home, LoginForm, RegisterForm} from "components";

const App = () => {
    return (
        <Provider store={store}>
            <Auth>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<LoginForm />} />
                        <Route path="register" element={<RegisterForm />} />
                    </Routes>
                </BrowserRouter>
            </Auth>
        </Provider>
    );
};

export default App;