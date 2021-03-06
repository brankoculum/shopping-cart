import React, { Component } from 'react';
import ProductForm from './ProductForm';

class ToggleableProductForm extends Component {
  state = {
    isOpen: false,
  }

  openForm = () => {
    this.setState({ isOpen: true });
  }

  closeForm = () => {
    this.setState({ isOpen: false })
  }

  generateAddForm = () => {
    if (this.state.isOpen) {
      return (<ProductForm
                formType="Add"
                submitAction={this.props.addProduct}
                cancelAction={this.closeForm}
              />)
    } else {
      return (
        <div className='add-form'>
          <a className='button add-product-button'
            onClick={this.openForm}
            >Add A Product
          </a>
        </div>
      );
    }
  }

  render() {
    return this.generateAddForm()
  }
}

export default ToggleableProductForm;
