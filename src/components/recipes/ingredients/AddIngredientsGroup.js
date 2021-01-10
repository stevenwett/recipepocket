import React, {Component} from 'react';
import {Input, Button, Row, Col} from 'reactstrap';

// import AddIngredient from './AddIngredient';

class AddIngredientsGroup extends Component {
  state = {...this.props.ingredientsGroup}

  // Ingredients Groups
  onIngredientsGroupTitleChange = (e) => {
    e.preventDefault();
    this.setState({
      heading: e.target.value
    })
    this.props.ingredientsChange(this.state);
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
      quantity: 0,
      text: '',
      active: false,
      id: Math.random()
    };
    let ingredients = [...this.state.list, ingredient];
    this.setState({
      list: ingredients
    });
    this.props.ingredientsChange(this.state);
  }

  deleteIngredient = (id) => {
    let ingredients = this.state.list.filter(ingredient => {
      return ingredient.id !== id
    });
    this.setState({
      list: ingredients
    });
    this.props.ingredientsChange(this.state);
  }

  // onAddIngredientsChange = (e) => {
  //   this.props.ingredientsChange(this.state);
  // }

  onIngredientChange = (ingredientId, e) => {
    e.preventDefault();
    let value = e.target.value;
    if ("quantity" === e.target.name) {
      value = parseFloat(value);
    }

    const newIngredientList = this.state.list.map(ingredient => {
      if( ingredient.id === ingredientId ) {
        return {
          ...ingredient,
          [e.target.name]: value
        }
      } else {
        return {
          ...ingredient
        }
      }
    });
    this.setState({
      ...this.state,
      list: newIngredientList
    });
    this.props.ingredientsChange(this.state);
  }

  render() {
    const addIngredientsList = this.state.list.map(ingredient => {
      if ( ingredient ) {
        return (
          <div className="input-group" key={ingredient.id}>
            <Row className="no-gutters">
              <Col className="quantity-column" xs={4} sm={3}>
                <Input type="number" min={0} step={0.125} name="quantity" onChange={(e) => {this.onIngredientChange(ingredient.id, e)}} />
              </Col>
              <Col xs={8} sm={9}>
                <Input type="text" name="text" onChange={(e) => {this.onIngredientChange(ingredient.id, e)}} />
                <Button className="btn remove-ingredient" title="Remove ingredient" onClick={this.onDeleteIngredientClick}>&ndash;</Button>
              </Col>
            </Row>
          </div>
        )
      }
    });
    return (
      <div className="ingredients-group">
        <Input type="text" name="ingredientHeading" className="group-heading" placeholder="(Add Group Heading)" onChange={this.onIngredientsGroupTitleChange} />
        <Row className="no-gutters">
          <Col xs={4} sm={3}>
            <p className="h4">Quantity</p>
          </Col>
          <Col xs={8} sm={9}>
            <p className="h4">Ingredient</p>
          </Col>
        </Row>
        { addIngredientsList }
        <div className="ingredients-group-footer">
          <Button color="secondary" outline className="btn delete-ingredient-group" onClick={this.onDeleteIngredientsGroupClick}>Remove Group</Button>
          <Button color="secondary" outline className="btn add-ingredient add" onClick={this.onAddIngredientClick}>Add Ingredient</Button>
        </div>
      </div>
    )
  }
}

export default AddIngredientsGroup;
