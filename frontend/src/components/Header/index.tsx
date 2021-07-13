import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { Container } from './styles'
import logotype from '../../assets/logotype.svg';

export function Header(){
    const { pathname } = useLocation();
    const { user, logOut } = useContext(UserContext);

    return(
        <>
            {
                pathname !== "/login"
                &&
                <Container>
                    <header>
                        <Link to="/">
                            <img src={logotype} alt="rentcars" />
                        </Link>
                        
                        {
                            user.id && 
                            <div className="user-options">
                                <span>Olá, <strong>{ user.name.split(' ')[0] }</strong></span>
                                <button onClick={logOut}>Sair</button>
                            </div>
                        }
                    
                    </header>
                </Container>
            }
        </>
    )
}