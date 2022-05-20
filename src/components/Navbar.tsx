import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from 'redux-toolkit/features/userSlice';
import { NavLink } from "react-router-dom";
import styles from 'styles/Navbar.module.css';

export const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state: any) => state.user);

    const handleLogout = () => {
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/');
    };

    const renderAuthButtons = () => {
        if (isLoggedIn) {
            return (
                <ul className={styles.navLinks}>
                    <li><NavLink to="/register">Dashboard</NavLink></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            );
        }

        return (
            <ul className={styles.navLinks}>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        );
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>Reader<span>List</span></div>
            {renderAuthButtons()}
        </nav>
    );
}