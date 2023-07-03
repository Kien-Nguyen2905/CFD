export const rulesForm = {
  name: [{ required: true, message: "Please enter your name" }],
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
  topic: [
    {
      required: true,
      message: "Please enter topic",
    },
  ],
  content: [
    {
      required: true,
      message: "Please enter content",
    },
  ],
};
