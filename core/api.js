const axios = require("axios");
const apiPaths = require("./paths.js");

exports.api = {
  getAppointMentBasedOnPinCode: async (pincode, date) => {
    console.log(apiPaths.baseUrl);
    const getAppointMentDetailsPath = `${apiPaths.baseUrl}appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`;

    console.log(getAppointMentDetailsPath);
    try {
      const sessionData = await axios.default.get(getAppointMentDetailsPath);
      if (sessionData.status == 200) {
        return sessionData.data;
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};
