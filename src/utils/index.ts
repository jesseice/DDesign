export const replaceUpperCaseWithDashAndLowercase = (input: string) => {
  return input.replace(/[A-Z]/g, function (match) {
    return "-" + match.toLowerCase();
  });
};
