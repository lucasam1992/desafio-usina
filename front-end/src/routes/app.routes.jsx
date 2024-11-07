import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import Film from '../pages/Film/film';
import AddMovie from '../pages/Film/addFilm';
import AddRecommendations from '../pages/Recommendations/addRecommendations';
import Recommendations from '../pages/Recommendations/recommendations';


const AppRoutes = () => (
  <Switch>
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
    <Route path='/films' component={Film} />
    <Route path='/add-movie' component={AddMovie} />
    <Route path='/recommendations/:id' component={AddRecommendations} />
    <Route path='/recommendations' component={Recommendations} />
    <Redirect to='/register' />
  </Switch>
);

export default AppRoutes;
