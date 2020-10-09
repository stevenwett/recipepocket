import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';

import NavigationBar from './components/navigation/NavigationBar';
import Welcome from './components/Welcome';
import Home from './components/home/Home';
import Recipes from './components/recipes/Recipes';
import AddRecipe from './components/recipes/AddRecipe';
import EditRecipe from './components/recipes/EditRecipe';
import RecipeDetails from './components/recipes/RecipeDetails';
import Account from './components/account/Account';
import AccountSetting from './components/account/AccountSetting';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="header">
            <NavigationBar />
          </header>
          <main className="main">
            <Switch>
              <Route exact path='/' component={Welcome} />
              <Route path='/home' component={Home} />
              <Route exact path='/recipes' component={Recipes} />
              <Route exact path='/recipes/add' component={AddRecipe} />
              <Route exact path='/recipes/:id' component={RecipeDetails} />
              <Route path='/recipes/:id/edit' component={EditRecipe} />
              <Route exact path='/account' component={Account} />
              <Route path='/account/:id' component={AccountSetting} />
              <Route path='/signin' component={SignIn} />
              <Route path='/signup' component={SignUp} />
            </Switch>
          </main>
          <footer className="footer">
            <Container>
              <Row className="no-gutters">
                <Col>&copy; { moment().year() } Steven Wett</Col>
              </Row>
            </Container>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
