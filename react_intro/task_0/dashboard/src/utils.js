const myDate = {
  getCurrentYear() {
    return new Date().getFullYear();
  },

  getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  },
};

export default myDate;
