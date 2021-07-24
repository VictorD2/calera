import React from 'react';
import app from 'firebase/app';

export const AuthContext = React.createContext<app.User | null>(null);