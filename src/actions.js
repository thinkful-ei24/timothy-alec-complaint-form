import { SubmissionError } from 'redux-form';

const API = 'https://us-central1-delivery-form-api.cloudfunctions.net/api/report';
export const MAKE_COMPLAINT = 'MAKE_COMPLAINT';

export function makeComplaint(complaint){
  return fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(complaint)
  })
  .then(res => normalizeResponseError(res))
  .then(res => res.json())
  .catch(err => {
    if(err.code === 404){
      new SubmissionError({ _error: err.message });
    }
  })
}

function normalizeResponseError(res){
  if(!res.ok){  
    return res.json()
      .then(res => {
        const err = new Error();
        err.code = res.code;
        err.message = res.message;
        return Promise.reject(err);
      })
  }
  return res;
}