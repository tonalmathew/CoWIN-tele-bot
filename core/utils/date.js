exports.utils = {
  getDate: () => {
    let date = new Date();
    return helpers.formateDate(date, "dd-mm-yyyy");
  },
};

let helpers = {
  formateDate: (date, format) => {
    return format
      .replace("dd", date.getDate())
      .replace("mm", date.getMonth())
      .replace("yyyy", date.getFullYear());
  },
};
