import React, {Component} from 'react';
import firebase from 'firebase/app'
// import { storage } from 'firebase'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom';
import {Form, Container, Row, Col, Input, Label, FormGroup, FormText, Button, CardBody, Breadcrumb, BreadcrumbItem} from 'reactstrap';

// import AddIngredientsGroups from './ingredients/AddIngredientsGroups';
import AddIngredientsGroup from './ingredients/AddIngredientsGroup';

import AddStepsList from './AddStepsList';
import {createRecipe} from '../../store/actions/recipeActions';

class AddRecipe extends Component {
  state = {
    title: '',
    author: '',
    yield: '',
    totalTime: '',
    description: '',
    photos: [],
    ingredients: [
      {
        heading: '',
        id: Math.random(),
        list: [
          {
            quantity: 0,
            text: '',
            active: false,
            id: Math.random()
          }
        ]
      }
    ],
    steps: [
      {
        text: '',
        id: Math.random()
      }
    ],
    tips: ''
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFileUpload = (e) => {
    const image      = e.target.files[0];

    // Create a reference with an initial file path and name
    const storage = firebase.storage()
    const storageRef = storage.ref();
    const photoRef = storageRef.child('images/' + image.name);

    let photo = {
      primary: true,
      name: image.name,
      source: '',
      alt: '',
      caption: ''
    };

    // Upload the file and update the state with photo info
    photoRef.put(image).then((snapshot) => {
      // console.log(snapshot);
      photoRef.getDownloadURL().then((url) => {
        const photos = [];
        photo.source = url;
        photos.push(photo);
        this.setState({photos}, () => {
          console.log(this.state);
        });
      });
    });
  }

  imageUploaded = () => {
    console.log(this.state);
    console.log('image uploaded.');
  }

  // handlePhoto = (e) => {
  //   console.log(e.target.value);
  //   newPhoto = {
  //     ...this.state.photo,
  //   }
  // }

  // Ingredients Groups
  onAddIngredientsGroupClick = (e) => {
    e.preventDefault();
    const ingredientsGroup = {
      heading: '',
      id: Math.random(),
      list: [
        {
          quantity: '',
          text: '',
          active: false,
          id: Math.random()
        }
      ]
    };
    let ingredientsGroups = [...this.state.ingredients, ingredientsGroup];
    this.setState({
      ingredients: ingredientsGroups
    });
  }

  ingredientsChange = (newIngredientsGroup) => {
    const newIngredientsGroups = this.state.ingredients.map(ingredientsGroup => {
      if( ingredientsGroup.id === newIngredientsGroup.id ) {
        return {
          ...ingredientsGroup,
          heading: newIngredientsGroup.heading,
          list: newIngredientsGroup.list
        }
      } else {
        return {
          ...ingredientsGroup
        }
      }
    });
    this.setState({
      ...this.state,
      ingredients: newIngredientsGroups
    });
  }

  deleteIngredientsGroup = (id) => {
    let ingredientsGroups = this.state.ingredients.filter(ingredientsGroup => {
      return ingredientsGroup.id !== id
    });
    this.setState({
      ingredients: ingredientsGroups
    });
  }

  addPreparationStep = (e) => {
    e.preventDefault();
    let step = {
      text: '',
      id: Math.random()
    }

    let steps = [
      ...this.state.steps,
      step
    ]

    this.setState({
      steps
    });
  }

  updateStep = (id, text) => {
    let steps = this.state.steps.map(step => {
      if (id === step.id) {
        step.text = text;
      }
      return step;
    });
    this.setState({
      steps
    });
  }

  deleteStep = (e, stepId) => {
    e.preventDefault();
    let steps = this.state.steps.filter(step => {
      return step.id !== stepId
    });
    this.setState({
      steps
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createRecipe(this.state);
    this.props.history.push('/home');
  }

  render() {
    const { auth } = this.props;
    if ( !auth.uid ) return <Redirect to='/signin' />

    const ingredientsGroupsList = this.state.ingredients.map(ingredientsGroup => {
      if( ingredientsGroup ) {
        return (
          <AddIngredientsGroup ingredientsGroup={ingredientsGroup} deleteIngredientsGroup={this.deleteIngredientsGroup} ingredientsChange={this.ingredientsChange} key={ingredientsGroup.id}/>
        )
      } else {
        return null;
      }
    });

    return (
      <Container className="view add-recipe">
        <Breadcrumb className="breadcrumb-nav">
          <BreadcrumbItem><a href="/home">Home</a></BreadcrumbItem>
          <BreadcrumbItem active>Add a Recipe</BreadcrumbItem>
        </Breadcrumb>
        <div className="view-card">
          <Link to="/home" className="btn btn-card-cancel">Cancel</Link>
          <article className="card">
            <CardBody>
              <Row className="justify-content-center">
                <Col>
                  <h1>Add a Recipe</h1>
                  <div className="add-recipe-form">
                    <h2>Add Your Own Recipe</h2>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="title"><h3>Recipe Title</h3></Label>
                        <Input type="text" name="title" id="title" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="author"><h3>Author Name</h3></Label>
                        <Input type="text" name="author" id="author" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="yield"><h3>Yield</h3></Label>
                        <Input type="text" name="yield" id="yield" placeholder="e.g. One 8-inch pie" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="totalTime"><h3>Total Time</h3></Label>
                        <Input type="text" name="totalTime" id="totalTime" placeholder="e.g. 1 1/2 hours, plus cooling" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="description"><h3>Description</h3></Label>
                          <Input type="textarea" name="description" id="description" rows={5} onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup className="upload-photo-group">
                        <Label for="photo" className="upload-photo"><h3>Recipe Photo</h3></Label>
                        <FormText color="muted">
                          Upload a photo of your final masterpiece! Landscape orientation works best.
                        </FormText>
                        <Input type="file" name="photo" id="photo" onChange={this.handleFileUpload} />
                      </FormGroup>
                      <FormGroup>
                        <div className="ingredients-groups">
                          <h3>Ingredients List</h3>
                          { ingredientsGroupsList }
                          <Button color="secondary" outline className="btn add" onClick={this.onAddIngredientsGroupClick}>Add Ingredients Group</Button>
                        </div>
                      </FormGroup>
                      <FormGroup className="steps-groups">
                        <Label><h3>Preparation Steps</h3></Label>
                        <AddStepsList deleteStep={this.deleteStep} updateStep={this.updateStep} steps={this.state.steps} />
                        <div className="text-right">
                          <Button className="btn btn-outline-secondary add-step add" id="step" onClick={this.addPreparationStep}>Add Another Step</Button>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="tips"><h3>Recipe Tips</h3></Label>
                        <Input type="textarea" name="tips" id="tips" rows={5} onChange={this.handleChange} />
                      </FormGroup>
                      <div className="add-recipe-footer">
                        <Button color="primary" block>Save Recipe</Button>
                        <Link to="/home" className="btn btn-outline-secondary">Don't Save and Cancel</Link>
                      </div>

                    </Form>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </article>
        </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)
