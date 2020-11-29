import React, {Component} from 'react';
import {Input, Button, Row, Col} from 'reactstrap';

class AddIngredient extends Component {
  state = {...this.props.ingredient}

  onIngredientChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onDeleteIngredientClick = (e) => {
    e.preventDefault();
    this.props.deleteIngredient(this.state.id);
  }

  render() {
    const {
      ingredient,
      ingredientsGroup,
      deleteIngredient
    } = this.props;

    console.log(this.state);

    return(
      <div className="input-group" key={ingredient.id}>
        <Row className="no-gutters">
          <Col className="quantity-column" md={2}>
            <Input type="text" name="quantity" onChange={this.onIngredientChange} />
          </Col>
          <Col md={10}>
            <Input type="text" name="text" onChange={this.onIngredientChange} />
            <Button className="btn remove-ingredient" title="Remove ingredient" onClick={this.onDeleteIngredientClick}>&ndash;</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddIngredient;
