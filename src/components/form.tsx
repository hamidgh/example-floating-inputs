import React from 'react';
import {FloatingMultipleSelectField, withForm, FloatingInputField, FloatingSelectField, RadioField} from 'floating-fields-with-react-hook-form/dist';

function Form(props: any) {
  const {register, errors, controller, control} = props;
  const requiredSelectionMessage: string = 'Select an option';
  const requiredInputMessage: string = 'Input value';

  return (
    <div className="form">
      <FloatingInputField
        required
        label="First name"
        formControlProps={register('firstName', {
          required: requiredInputMessage, maxLength: 80
        })}
        validationErrorMessage={errors['firstName']?.message}
      />
      <FloatingInputField
        required
        type="date"
        label="Date of birth"
        formControlProps={register('dateOfBirth', {
          required: requiredInputMessage
        })}
        validationErrorMessage={errors['dateOfBirth']?.message}
      />
      <FloatingSelectField
        required
        label="Country of birth"
        selectOptions={['United States', 'Italy', 'Egypt', 'Iran']}
        formControlProps={register('countryOfBirth', {
          required: requiredSelectionMessage})}
        validationErrorMessage={errors['countryOfBirth']?.message}
      />
      <FloatingMultipleSelectField
        isMulti
        control={control}
        controller={controller}
        selectLabel="Favorite color"
        selectName="favoriteColor"
        selectOptions={[{value: 'RED', label: 'Red'}, {value: 'BLUE', label: 'Blue'}]}
        formControlProps={register('favoriteColor', {
          required: requiredSelectionMessage})}
        validationErrorMessage={errors['favoriteColor']?.message}
      />
      <RadioField
        required
        inline
        fieldName="gender"
        label="Gender"
        options={[{name: 'Female', value: 'Female'}, {name: 'Male', value: 'Male'}]}
        register={register}
        validationErrorMessage={errors['gender']?.message}
      />
    </div>
  );
}

export default withForm(Form);