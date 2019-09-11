import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ProfileContainer from '../containers/ProfileContainer';
import News from '../pages/News';
import Home from '../pages/Home';
import LandingContainer from '../containers/LandingContainer';



const Routes = ({ setCurrentUser, history, currentUser }) => {
    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => {
            return currentUser
            ? <Component {...props} />
            : <Redirect to='/login' />
        }} />

    )
    
    return (
    <Switch>
        <Route exact path='/' component={ LandingContainer } />
        <Route path='/register' component={ Register } />
        <Route path='/about' component ={ AboutUs } />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} history={history} /> } />
        <PrivateRoute path='/profile' component ={ ProfileContainer } />
        <PrivateRoute path='/home' component={ Home } />
        <PrivateRoute path='/news' component={ News } />
    </Switch>
    

   );
        
    
    
    
};

export default withRouter(Routes);