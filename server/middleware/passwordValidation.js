const bcrypt = require('bcryptjs');

module.exports = {
  comparePassword: async (incomingPassword, userPassword) => {
    try {
      let comparedPassword = await bcrypt.compare(
        incomingPassword,
        userPassword
      );
      if (comparedPassword) {
        return comparedPassword;
      } else {
        throw error(403,'username or password invalid');
      }
    } catch (err) {
      next(err);
    }
  },
};