import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Candidates } from './Candidates/Candidates';

export const Mentor = () => {
    return (
        <div>
            <Header />
            <Dashboard />
        </div>

    );
}