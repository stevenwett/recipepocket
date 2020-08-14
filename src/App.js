import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Dashboard from './components/dashboard/Dashboard';
import RecipeDetails from './components/recipes/RecipeDetails';
import CreateRecipe from './components/recipes/CreateRecipe';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import MyAccount from './components/auth/MyAccount';
import CreateGroup from './components/groups/CreateGroup';
import GroupDetails from './components/groups/GroupDetails';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/welcome' component={Welcome} />
            <Route exact path='/account' component={MyAccount} />
            <Route path='/account/:id' component={RecipeDetails} />
            <Route exact path='/group' component={CreateGroup} />
            <Route exact path='/group/join' component={CreateGroup} />
            <Route path='/group/:id' component={GroupDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/recipe' component={CreateRecipe} />
            <Route path='/recipe/:id' component={RecipeDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
