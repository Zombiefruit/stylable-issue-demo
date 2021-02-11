import React from 'react';
import { st, classes } from './app.st.css';
import { BlueHeader } from './header';

export interface AppProps {
    className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
    return (
        <main className={st(classes.root, className)}>
            <BlueHeader className={classes.header} />
        </main>
    );
};
