import moment from 'moment';
import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const login = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email required'),
  password: yup.string().required('Password required').trim(),
});
export const order_Status = yup.object().shape({
  order_status:yup.mixed().required("Position Required")
});

export const signUp = yup.object().shape({
  firstName : yup.string().required("First name required").trim(),
  lastName : yup.string().required("Last name required").trim(),
  email: yup.string().email('Invalid email').required('Email required'),
  dob: yup.string()
      .required("DOB is Required")
      .test("DOB", "Minimum age 10 year", (value) => {
        return moment().diff(moment(value), "years") >= 10;
      }),
  pass : yup
  .string()
  .required("Password required")
  .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  ),
  mobile : yup.string().required("Mobile number required").trim().matches(phoneRegExp,"Invalid phone number").max(15),
  cnfPass : yup.string().required("Confirm password required").trim().oneOf([yup.ref('pass'),null],"Should match password")
});
export const forgotPassword = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email required'),
 });
 export const resetPassword = yup.object().shape({
  pass : yup.string().required("Password required").trim().max(15),
  cnfPass : yup.string().required("Confirm password required").trim().oneOf([yup.ref('pass'),null],"Should match password")
});

export const editProfile = yup.object().shape({
  firstName : yup.string().required("First name required").trim(),
  lastName : yup.string().required("Last name required").trim(),
  email: yup.string().email('Invalid email').required('Email required'),
  phone:yup.string().required("Phone number required").trim().matches(phoneRegExp,"Invalid phone number").max(15),
});

export const contactUs = yup.object().shape({
  name : yup.string().required("Name required").trim(),
  subject : yup.string().required("Subject required").trim(),
  email: yup.string().email('Invalid email').required('Email required'),
  msg:yup.string().required("msg required").trim().max(100)
});

export const reportIssue = yup.object().shape({
  reason : yup.string().required("Reason required"),
  msg:yup.string().required("msg required").trim().max(100)
});
export const amountModal = yup.object().shape({
  amount : yup.string().required("Amount required"),
  
});
export const rejectOrder = yup.object().shape({
  reason:yup.mixed().required("Position Required"),
  showReason: yup.boolean(),
  reasonInput: yup
      .string()
        .when("showReason", {
        is: true,
        then: yup.string().required("Reason Required")
      })
});


