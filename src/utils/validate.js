export const validate = (form, rules) => {
  const errorList = {};
  for (const objectKey in rules) {
    for (const rule of rules[objectKey]) {
      if (rule.required) {
        if (!!!form[objectKey]?.trim()) {
          errorList[objectKey] = rule.message;
          break;
        }
      }
      if (rule?.regex instanceof RegExp) {
        if (!rule.regex.test(form[objectKey])) {
          errorList[objectKey] = rule.message;
        }
      }
    }
  }
  return errorList;
};
