import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ArtForm, FormButton } from '../styled-components/main';

class AddForm extends React.Component {

  componentDidMount() {
    return this.props.isAdmin ? null : this.unRedirect();
  }

  state = {
    errors: [],
  }

  unRedirect = () => {
    this.props.history.push('/404')
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newArt = {
      description: this.desc.value,
      price: this.price.value,
      preview: [this.url.value],
      buildingType: this.bType.value,
      propertyType: this.pType.value,
      city: this.city.value,
      footage: this.foot.value,
      rating: this.rat.value,
    }

    axios.post('https://final-app-api.herokuapp.com/articles/add', { article: newArt })
      .then((response) => {
        if (response.data.article) {
          this.props.addItem(response.data.article);
          this.redirect(response.data.article.id);
        } else {
          this.setState({
            errors: response.data.message
          })
        }
      })
      .catch((errors) => {
        this.setState({
          errors: ['Opsie daisy API errors :(']
        })
      })
  }

  redirect(id) {
    this.props.history.push(`/show/${id}`);
  }

  render() {
    const errorsDisplay = this.state.errors.length > 0 ?
      <ul><span>Unable To add due to the following errors:</span>
        {this.state.errors.map((item) => <li key={item}>{item}</li>)}
      </ul>
      : null;
    return (
      <ArtForm onSubmit={this.handleSubmit}>
        <span>Add a real Estate</span>
        {errorsDisplay}
        <div>
          <input type="text" placeholder="description" ref={(input) => this.desc = input} />
        </div>
        <div>
          <input type="number" placeholder="price in $" ref={(input) => this.price = input} />
        </div>
        <div>
          <input type="text" placeholder="Valid Real Image url" ref={(input) => this.url = input} />
        </div>
        <div>
          <input type="text" placeholder="Building type" ref={(input) => this.bType = input} />
        </div>
        <div>
          <input type="text" placeholder="property type" ref={(input) => this.pType = input} />
        </div>
        <div>
          <input type="text" placeholder="city" ref={(input) => this.city = input} />
        </div>
        <div>
          <input type="number" placeholder="Footage" ref={(input) => this.foot = input} />
        </div>
        <div>
          <input type="number" min="0" max="5" placeholder="Your Honest Rating" ref={(input) => this.rat = input} />
        </div>
        <FormButton type="submit">add real estate</FormButton>
      </ArtForm>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.currentUser.user.admin
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
