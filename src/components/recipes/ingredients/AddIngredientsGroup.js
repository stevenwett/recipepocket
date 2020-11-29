import React, {Component} from 'react';
import {Input, Button, Row, Col} from 'reactstrap';

import AddIngredient from './AddIngredient';

class AddIngredientsGroup extends Component {
  state = {...this.props.ingredientsGroup}

  // Ingredients Groups
  onIngredientsGroupTitleChange = (e) => {
    e.preventDefault();
    this.setState({
      heading: e.target.value
    })
  }

  onAddIngredientsGroupClick = (e) => {
    e.preventDefault();
  }

  onDeleteIngredientsGroupClick = (e) => {
    e.preventDefault();
    this.props.deleteIngredientsGroup(this.state.id);
  }

  // Ingredients
  onAddIngredientClick = (e) => {
    e.preventDefault();
    const ingredient = {
      quantity: '',
      text: '',
      active: false,
      id: Math.random()
    };
    let ingredients = [...this.state.list, ingredient];
    this.setState({
      list: ingredients
    });
  }

  deleteIngredient = (id) => {
    let ingredients = this.state.list.filter(ingredient => {
      return ingredient.id !== id
    });
    this.setState({
      list: ingredients
    });
  }

  render() {
    console.log(this.state);
    const addIngredientsList = this.state.list.map(ingredient => {
      if ( ingredient ) {
        return (
          <AddIngredient ingredient={ingredient} deleteIngredient={this.deleteIngredient} key={ingredient.id}/>
        )
      }
    });
    return (
      <div className="ingredients-group">
        <Input type="text" name="ingredientHeading" className="group-heading" placeholder="(Add Group Heading)" onChange={this.onIngredientsGroupTitleChange} />
        <Row className="no-gutters">
          <Col md={2}>
            <p className="h4">Qty</p>
          </Col>
          <Col md={10}>
            <p className="h4">Ingredient</p>
          </Col>
        </Row>
        { addIngredientsList }
        <div className="text-right ingredients-group-footer">
          <Button color="secondary" outline className="btn delete-ingredient-group" onClick={this.onDeleteIngredientsGroupClick}>Remove Group</Button>
          <Button color="secondary" outline className="btn add-ingredient add" onClick={this.onAddIngredientClick}>Add Ingredient</Button>
        </div>
      </div>
    )
  }
}

export default AddIngredientsGroup;
