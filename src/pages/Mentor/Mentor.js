import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';

export const Mentor = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/mentor/dashboard" component={Dashboard} />
                {/* <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegistrationPage />} />
                <Route path="mentor" element={<Mentor />} /> */}
                {/* <Route path="*" element={<NoPage />} /> */}
            </Switch>
        </div>

    );
}