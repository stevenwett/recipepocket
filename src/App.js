import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import MyAccount from './components/auth/MyAccount';
import AddRecipe from './components/recipes/AddRecipe';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/recipe/:id' component={RecipeDetails} />
            <Route path='/welcome' component={Welcome} />
            <Route exact path='/account' component={MyAccount} />
            <Route path='/account/:id' component={RecipeDetails} />
            <Route exact path='/shared-set' component={RecipeDetails} />
            <Route path='/shared-set/:id' component={RecipeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/add-recipe' component={AddRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
