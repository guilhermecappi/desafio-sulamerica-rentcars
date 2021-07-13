import React, { useState } from "react";
import { createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({} as UserContextData);

interface Values {
    name: string;
    email: string;
}

interface User extends Values{
    id: string;
}

interface ProviderProps{
    children: ReactNode;
}

interface UserContextData{
    user: User;
    logIn: (e: React.FormEvent) => void;
    logOut: () => void;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: Values;
    isLoading: boolean;
}

export function UserContextProvider({children}: ProviderProps){
    const [values, setValues] = useState<Values>({
        name: '',
        email: ''
    });

    const [user, setUser] = useState<User>(() => {
        //checar se o usuário está logado
        const loggedUser = localStorage.getItem('user');

        if(loggedUser){
            return JSON.parse(loggedUser);
        }

        return {} as User
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //pegar valores dos inputs
    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value, name } = e.target;
        
        setValues({
            ...values,
            [name]: value
        })
    }

    //função para fazer login
    async function logIn(e: React.FormEvent){
        e.preventDefault();
        setIsLoading(true);

        try{
            if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}/.test(values.email)){
                throw new Error("Email inválido.")
            }

            let user: Values = {
                ...values
            }
            const { data } = await api.post('/users', user);
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            setValues({
                name: '',
                email: ''
            });
        } catch (err){
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    }
    
    //função para fazer logout
    function logOut(){
        setUser({} as User);
        localStorage.removeItem('user');
    }

    return(
        <UserContext.Provider
            value={{
                logIn,
                logOut,
                user,
                isLoading,

                handleOnChange,
                values
            }}
        >
            { children }
        </UserContext.Provider>
    )
}