import React from 'react';
import Layout from "../Layouts/Layout";

const Test = () => {
    return (
        <>
            <p>navigates without controller</p>
        </>
    );
};

Test.layout = (page) => <Layout children={page} />

export default Test;
