import React from "react";
import styles from 'styles/Globals.module.css';
import { Navbar } from "components";

type Props = {
    children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.globals}>
            <Navbar />
            {children}
        </div>
    );
}
