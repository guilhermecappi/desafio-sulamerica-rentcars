import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Rent from './pages/Rent';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export function Routes(){
    const { user } = useContext(UserContext);

    return(
        <>
            {
                user.id ? 
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/alugar/:id" component={Rent} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
                :
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="*">
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            }
        </>
    )
}