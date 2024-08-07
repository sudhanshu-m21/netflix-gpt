export const checkValidData = (email, password) => {
  // Corrected email regex
  const isValidEmail = /^[a-zA-Z0-9._±]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
    email
  );

  // Corrected password regex
  const isValidPassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,}$/.test(
      password
    );

  if (!isValidEmail) return "Email is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
