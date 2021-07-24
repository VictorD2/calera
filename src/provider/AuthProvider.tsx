import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import app from 'firebase/app';

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<app.User | null>(null);

    useEffect(() => {
        const unsubscribe = app.auth().onAuthStateChanged((firebaseUser) => {
            setUser(firebaseUser);
        });
        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}