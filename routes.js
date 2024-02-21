const fs = require('fs');
const path = require('path');
const { getMembers } = require('./members');
const { getUsers } = require('./users');

function getHomePage(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('This is the home page');
}

function getAboutPage(req, res) {
  const aboutData = {
    Status: 'success',
    Message: 'response success',
    Description: 'Exercise #03',
    Date: new Date().toISOString(),
    Data: getMembers()
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(aboutData, null, 2));
}

function getUsersPage(req, res) {
  const usersData = getUsers();

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(usersData, null, 2));
}

module.exports = { getHomePage, getAboutPage, getUsersPage };
