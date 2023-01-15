import React from 'react';
import { FieldValues } from 'react-hook-form';
import Form from './form';

const HomePage = () => {
  const _handleSubmitForm = (data: FieldValues) => {
    console.log(data);
  }
  return (
    <Form formSubmittedCallback={_handleSubmitForm} />
  )
}

export default HomePage;