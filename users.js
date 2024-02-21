const fs = require('fs');
const path = require('path');

function getUsers() {
  const usersFilePath = path.join(__dirname, 'usersData.json');
  const usersData = fs.readFileSync(usersFilePath, 'utf8');
  return JSON.parse(usersData);
}

module.exports = { getUsers };
