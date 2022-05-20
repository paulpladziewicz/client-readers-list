import React, { useState, useEffect } from "react";
import { Layout } from 'components';
import { API_ROUTES } from 'constants/apiRoutes';

export const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_ROUTES.NY_BEST_SELLERS)
            .then(res => res.json())
            .then(data => {
                setBooks(data.results.books);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Layout>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
        </Layout>
    );
}