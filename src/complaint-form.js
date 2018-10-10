import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, fiveCharacters } from './validators';
import { makeComplaint } from './actions';

class ComplaintForm extends Component {
  
  onSubmit(values){
    this.props.dispatch(makeComplaint(values));
  }

  render(){
    return (
      <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
        <h1>Report a problem with your delivery</h1>
        <label htmlFor='trackingNumber'>Tracking number</label>
        <Field component='input' type='text' name='trackingNumber' validate={[required, nonEmpty, fiveCharacters]}/>
        <label htmlFor='issue'>What is your issue?</label>
        <Field component='select' name='issue' >
          <option>My delivery hasn't arrived</option>
          <option>The wrong item was delivered</option>
          <option>Part of my order was missing</option> 
          <option>Some of my order arrived damaged</option>
          <option>Other (give details below)</option>
        </Field>
        <label htmlFor='details'>Give more details (optional)</label>
        <Field component='textarea' name='details'/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'complaint'
})(ComplaintForm);

