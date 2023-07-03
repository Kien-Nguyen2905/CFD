export const rulesOrder = {
  name: [{ required: true, message: "Please enter your name" }],
  phone: [
    {
      required: true,
      message: "Please enter your numberphone",
    },
    {
      regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
      message: "Invalid phone",
    },
  ],
  type: [
    {
      required: true,
      message: "Please select a type",
    },
  ],
};
