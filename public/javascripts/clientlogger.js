!function n(o,r,e){function i(f,c){if(!r[f]){if(!o[f]){var u="function"==typeof require&&require;if(!c&&u)return u(f,!0);if(t)return t(f,!0);var l=new Error("Cannot find module '"+f+"'");throw l.code="MODULE_NOT_FOUND",l}var s=r[f]={exports:{}};o[f][0].call(s.exports,function(n){var r=o[f][1][n];return i(r?r:n)},s,s.exports,n,o,r,e)}return r[f].exports}for(var t="function"==typeof require&&require,f=0;f<e.length;f++)i(e[f]);return i}({1:[function(n,o,r){!function(){function n(n,e){$.post("http://localhost:3001/logger",{message:n,application:o,sessionId:r,level:e}).then(function(n){console.log(n)})}var o="",r="",e={info:"info",warn:"warn",error:"error"};this.logger={init:function(n){o="undefined"!=typeof n.application?n.application:"Test-Application",r="undefined"!=typeof n.sessionId?n.sessionId:"123456",console.log("init log")},info:function(o){console.log("log"),n(o,e.info)},warn:function(o){console.warn("warning"),n(o,e.warn)},error:function(o){console.error("error"),n(o,e.error)}}}()},{}]},{},[1]);