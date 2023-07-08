import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';

export const Candidate = () => {
    return (
        <div>
            <Header />
            <Dashboard />
        </div>

    );
}