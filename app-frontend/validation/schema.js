import * as yup from "yup";

const charRegexp = /^[a-zA-Z ]*$/;

export const userInfoValidationSchema = yup
  .object({
    firstName: yup
      .string()
      .matches(charRegexp, "First name should not contain numbers")
      .required("First name is a required field"),
    lastName: yup
      .string()
      .matches(charRegexp, "Last name should not contain numbers")
      .required("Last name is a required field"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .positive("Age should be positive")
      .required("Age is a required field"),
  })
  .required();

export const userContactsValidationSchema = yup
  .object({
    phone: yup.string().required("Phone number is a required field"),
    email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
  })
  .required();

export const orderDetailsValidationSchema = yup
  .object({
    seat: yup.string().required("Seat is a required field"),
    food: yup.string().required("Food is a required field"),
    allergies: yup.string().required("Allergies is a required field"),
  })
  .required();
