module.exports.lengthFilter = (string, len) => {
  if (string && typeof string === 'string' && string.length > len) {
    return `${string.substring(0, len)}...`;
  }
  return string;
};
