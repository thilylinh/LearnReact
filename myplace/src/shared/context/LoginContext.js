import { createContext } from 'react';

export const LoginContext = createContext({
    isLogin: false,
    userId: null,
    login: () => {},
    logout: () => {},
});