export const rulesLogin = {
  email: [
    {
      required: true,
      message: "Please enter your email",
    },
    {
      regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Invalid email",
    },
  ],
  password: [
    {
      required: true,
      message: "Please enter your password",
    },
  ],
};
