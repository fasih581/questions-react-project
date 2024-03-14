import * as yup from "yup";

export const regFormSchema = yup.object().shape({
  name: yup.string().required("Please Enter Name!"),
  email: yup.string().email("Please Enter a valid Email").required("Please Enter Email!"),
});
