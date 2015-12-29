'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
let subpy;
let apiUrl = 'http://localhost:5000';

app.on('window-all-closed', function() {
  app.quit();
});

app.on('quit', function() {
  subpy.kill('SIGINT');
});

app.on('ready', function() {
  subpy = require('child_process').spawn('python', [__dirname + '/api.py']);
  
  var openWindow = function () {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function() {
      mainWindow = null;
    });
  };
  
  var startUp = function () {
    require('request-promise')(apiUrl).then(function(){
      openWindow();
    }).catch(function(err) {
      startUp();
    });
  }
  
  //startUp();
  openWindow();

});

