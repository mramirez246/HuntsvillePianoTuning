export const errorToString = (error, genericErrorMsg = "Unknown error.") =>
  error?.response?.data?.msg ||
  error?.response?.data?.message ||
  error?.message ||
  error?.msg ||
  genericErrorMsg;
