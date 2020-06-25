import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ArtForm, FormButton } from '../styled-components/main';
import DOMAIN from '../_helpers/api-source';

//class AddForm extends React.Component {
  const AddForm = ({logged, addItem, history}) => {
  const [errors, setErrors] = useState([]);
  const [formFields, setFormFields] = useState({
    description: '',
    price: null,
    preview: [],
    buildingType: '',
    propertyType: '',
    city: '',
    footage: null,
    rating: null,
  })
/* 
  componentDidMount() {
    return this.props.isAdmin ? null : this.unRedirect();
  } */
  const unRedirect = () => {
    history.push('/404')
  }

  const redirect = (id) => {
    history.push(`/show/${id}`);
  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${DOMAIN}/articles`, { article: formFields }, { withCredentials: true })
    .then((response) => {
      if (response.data.article) {
        addItem(response.data.article);
        redirect(response.data.article.id);
      } else {
        setErrors([response.data.message])
      }
    })
    .catch((errors) => {
      setErrors([...errors.response.data.message])
      })
    }
    
    
  const ErrorsDisplay = () => {
    return errors.length > 0 ?
    <div className="errors-list">
      <span>Unable To add due to the following errors:</span>
      <ul>
        {errors.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
    : null;
  }
  
  const handleFieldChange = (e) => {
    
    let {name, value} = e.target
    setFormFields((prevState) => {
      const tmp = {...prevState}
      if (Array.isArray(tmp[`${name}`])) {
        tmp[`${name}`].push(value);
      } else tmp[`${name}`] = value;
      return { ...tmp }
    })
  }

  if (!logged) unRedirect();

  return (
    <ArtForm onSubmit={handleSubmit}>
      <span>Add a real Estate</span>
      <ErrorsDisplay />
      <div>
        <input name="description" type="text" placeholder="description" value={formFields.description} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="price" type="number" placeholder="price in $" value={formFields.price} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="preview" type="text" placeholder="Valid Real Image url" value={formFields.preview} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="buildingType" type="text" placeholder="Building type" value={formFields.buildingType} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="propertyType" type="text" placeholder="property type" value={formFields.propertyType} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="city" type="text" placeholder="city" value={formFields.city} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="footage" type="number" placeholder="Footage" value={formFields.footage} onChange={handleFieldChange} />
      </div>
      <div>
        <input name="rating" type="number" min="0" max="5" placeholder="Your Honest Rating" value={formFields.rating} onChange={handleFieldChange} />
      </div>
      <FormButton type="submit">add real estate</FormButton>
    </ArtForm>
  )
}

const mapStateToProps = (state) => {
  return {
    logged: state.currentUser.logged_in
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (article) => {
    dispatch({
      type: 'ADD_ITEM',
      article
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
