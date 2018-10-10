import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, nonEmpty, fiveCharacters, allNumbers } from './validators';
import { makeComplaint } from './actions';
import Input from './input';

class ComplaintForm extends Component {
  
  onSubmit(values){
    return this.props.dispatch(makeComplaint(values));
  }

  render(){
    const success = this.props.submitSucceeded ? <div>Report submitted successfully</div> : '';
    const error = this.props.error ? <div>{this.props.error}</div> : '';
    console.log('err', error);

    return (
      <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
        <h1>Report a problem with your delivery</h1>
        { success }
        { error }
        <label htmlFor='trackingNumber'>Tracking number</label>
        <Field component={Input} type='text' name='trackingNumber' validate={[required, nonEmpty, fiveCharacters, allNumbers]}/>
        <label htmlFor='issue'>What is your issue?</label><br/>
        <Field component='select' name='issue' validate={[required]}>
          <option value='not-delivered' >My delivery hasn't arrived</option>
          <option value='wrong-item'>The wrong item was delivered</option>
          <option value='missing-part'>Part of my order was missing</option> 
          <option value='damaged'>Some of my order arrived damaged</option>
          <option value='other'>Other (give details below)</option>
        </Field><br/>
        <label htmlFor='details'>Give more details (optional)</label><br/>
        <Field component='textarea' name='details'/>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'complaint',
  initialValues: {
    issue: 'not-delivered'
  }
})(ComplaintForm);

