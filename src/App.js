import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/navigation/NavigationBar';

import Welcome from './components/Welcome';
import Home from './components/home/Home';
import Recipes from './components/recipes/Recipes';
import CreateRecipe from './components/recipes/CreateRecipe';
import EditRecipe from './components/recipes/EditRecipe';
import RecipeDetails from './components/recipes/RecipeDetails';
import Account from './components/account/Account';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import CreateGroup from './components/groups/CreateGroup';
import GroupDetails from './components/groups/GroupDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/home' component={Home} />
            <Route exact path='/recipes' component={Recipes} />
            <Route exact path='/recipes/add' component={CreateRecipe} />
            <Route exact path='/recipes/:id' component={RecipeDetails} />
            <Route path='/recipes/:id/edit' component={EditRecipe} />
            <Route exact path='/account' component={Account} />
            <Route path='/account/:id' component={RecipeDetails} />
            <Route exact path='/group' component={CreateGroup} />
            <Route exact path='/group/join' component={CreateGroup} />
            <Route path='/group/:id' component={GroupDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
