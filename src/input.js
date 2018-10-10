import React from 'react';

export default function Input(props){

  let error;
  if(props.meta.touched && props.meta.error){
    error = <div>{props.meta.error}</div>
  }
  return (
    <div>
      {error}
      <input {...props.input } id={props.input.name}/>
    </div>
  );
}
