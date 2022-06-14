import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <table> 
        <tbody>
          <tr>
            <td><label htmlFor={field.name}>{label}</label> </td>
            <td><input
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      /></td>
          </tr>
        </tbody>
      </table>
      
      
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}