import React from 'react';
import DatePicker from 'react-datepicker'

export const renderDatePicker = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
      <DatePicker {...input} {...custom} autoOk={true} dateForm='MM/DD/YYYY' onChange={(event, value) => input.onChange(value)} />
  );
};