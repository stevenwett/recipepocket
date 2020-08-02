import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavigationBar from './components/layout/NavigationBar'
import Dashboard from './components/dashboard/Dashboard'
import RecipeDetails from './components/recipes/RecipeDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateRecipe from './components/recipes/CreateRecipe'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/recipe/:id' component={RecipeDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/add-recipe' component={CreateRecipe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
