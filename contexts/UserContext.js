import { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = UserContext.Provider;

export default UserContext;
