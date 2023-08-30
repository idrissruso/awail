/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "browser-sync":
/*!*******************************!*\
  !*** external "browser-sync" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("browser-sync");

/***/ }),

/***/ "connect-flash":
/*!********************************!*\
  !*** external "connect-flash" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-flash");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("connect-mongo");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "./api/controllers/admins.js":
/*!***********************************!*\
  !*** ./api/controllers/admins.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAdmin: () => (/* binding */ createAdmin),\n/* harmony export */   deleteAdmin: () => (/* binding */ deleteAdmin),\n/* harmony export */   getAdmin: () => (/* binding */ getAdmin),\n/* harmony export */   getAdmins: () => (/* binding */ getAdmins),\n/* harmony export */   updateAdmin: () => (/* binding */ updateAdmin)\n/* harmony export */ });\n/* harmony import */ var _models_admin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/admin.js */ \"./api/models/admin.js\");\n\n\n// Get all admins\nconst getAdmins = async (req, res) => {\n  try {\n    const admins = await _models_admin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(admins);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new admin\nconst createAdmin = async (req, res) => {\n  const newAdmin = new _models_admin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newAdmin.save();\n    res.status(201).json(newAdmin);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific admin by ID\nconst getAdmin = async (req, res) => {\n  try {\n    const admin = await _models_admin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!admin) return res.status(404).json({\n      message: 'Admin not found'\n    });\n    res.status(200).json(admin);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific admin by ID\nconst deleteAdmin = async (req, res) => {\n  try {\n    const admin = await _models_admin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!admin) return res.status(404).json({\n      message: 'Admin not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific admin by ID\nconst updateAdmin = async (req, res) => {\n  try {\n    const admin = await _models_admin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!admin) return res.status(404).json({\n      message: 'Admin not found'\n    });\n    res.status(200).json(admin);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/admins.js?");

/***/ }),

/***/ "./api/controllers/attendee.js":
/*!*************************************!*\
  !*** ./api/controllers/attendee.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAttendee: () => (/* binding */ createAttendee),\n/* harmony export */   deleteAttendee: () => (/* binding */ deleteAttendee),\n/* harmony export */   getAttendee: () => (/* binding */ getAttendee),\n/* harmony export */   getAttendees: () => (/* binding */ getAttendees),\n/* harmony export */   getStudentAttendees: () => (/* binding */ getStudentAttendees),\n/* harmony export */   updateAttendee: () => (/* binding */ updateAttendee)\n/* harmony export */ });\n/* harmony import */ var _models_attendee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/attendee.js */ \"./api/models/attendee.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n// Get all attendees\nconst getAttendees = async (req, res) => {\n  try {\n    const attendees = await _models_attendee_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(attendees);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\nconst getStudentAttendees = async (req, res) => {\n  try {\n    const attendees = await _models_attendee_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      student: new mongoose__WEBPACK_IMPORTED_MODULE_1__.Types.ObjectId(req.params.id)\n    });\n    res.status(200).json(attendees);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new attendee\nconst createAttendee = async (req, res) => {\n  const newAttendee = new _models_attendee_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    ...req.body,\n    student: new mongoose__WEBPACK_IMPORTED_MODULE_1__.Types.ObjectId(req.body.student)\n  });\n  try {\n    await newAttendee.save();\n    res.status(201).json(newAttendee);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific attendee by ID\nconst getAttendee = async (req, res) => {\n  try {\n    const attendee = await attendee.findById(req.params.id);\n    if (!attendee) return res.status(404).json({\n      message: 'attendee not found'\n    });\n    res.status(200).json(attendee);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific attendee by ID\nconst deleteAttendee = async (req, res) => {\n  try {\n    const attendee = await attendee.findByIdAndDelete(req.params.id);\n    if (!attendee) return res.status(404).json({\n      message: 'attendee not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific attendee by ID\nconst updateAttendee = async (req, res) => {\n  try {\n    const attendee_ = await _models_attendee_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!attendee_) return res.status(404).json({\n      message: 'attendee not found'\n    });\n    res.status(200).json(attendee_);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/attendee.js?");

/***/ }),

/***/ "./api/controllers/blockedUsers.js":
/*!*****************************************!*\
  !*** ./api/controllers/blockedUsers.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBlockedUser: () => (/* binding */ createBlockedUser),\n/* harmony export */   deleteBlockedUser: () => (/* binding */ deleteBlockedUser),\n/* harmony export */   getBlockedUser: () => (/* binding */ getBlockedUser),\n/* harmony export */   getBlockedUsers: () => (/* binding */ getBlockedUsers)\n/* harmony export */ });\n/* harmony import */ var _models_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/blockedUsers.js */ \"./api/models/blockedUsers.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_1__.Router();\n\n// Get all blockedUsers\nconst getBlockedUsers = async (req, res) => {\n  try {\n    const blockedUsers = await _models_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(blockedUsers);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new blockedUser\nconst createBlockedUser = async (req, res) => {\n  const newBlockedUser = new _models_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newBlockedUser.save();\n    res.status(201).json(newBlockedUser);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific blockedUser by ID\nconst getBlockedUser = async (req, res) => {\n  try {\n    const blockedUser = await _models_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!blockedUser) return res.status(404).json({\n      message: 'BlockedUser not found'\n    });\n    res.status(200).json(blockedUser);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific blockedUser by ID\n\nconst deleteBlockedUser = async (req, res) => {\n  try {\n    const blockedUser = await _models_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!blockedUser) return res.status(404).json({\n      message: 'BlockedUser not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/blockedUsers.js?");

/***/ }),

/***/ "./api/controllers/classes.js":
/*!************************************!*\
  !*** ./api/controllers/classes.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClass: () => (/* binding */ createClass),\n/* harmony export */   deleteClass: () => (/* binding */ deleteClass),\n/* harmony export */   getClass: () => (/* binding */ getClass),\n/* harmony export */   getClasses: () => (/* binding */ getClasses),\n/* harmony export */   updateClass: () => (/* binding */ updateClass)\n/* harmony export */ });\n/* harmony import */ var _models_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/class.js */ \"./api/models/class.js\");\n\n\n// Get all classes\nconst getClasses = async (req, res) => {\n  try {\n    const Classes = await _models_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(Classes);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new class\nconst createClass = async (req, res) => {\n  const newClass = new _models_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newClass.save();\n    res.status(201).json(newClass);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific class by ID\nconst getClass = async (req, res) => {\n  try {\n    const class_ = await _models_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!class_) return res.status(404).json({\n      message: 'class not found'\n    });\n    res.status(200).json(class_);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific class by ID\nconst deleteClass = async (req, res) => {\n  try {\n    const class_ = await _models_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!class_) return res.status(404).json({\n      message: 'Class not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific class by ID\nconst updateClass = async (req, res) => {\n  try {\n    const class_ = await _models_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!class_) return res.status(404).json({\n      message: 'Class not found'\n    });\n    res.status(200).json(class_);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/classes.js?");

/***/ }),

/***/ "./api/controllers/courses.js":
/*!************************************!*\
  !*** ./api/controllers/courses.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCourse: () => (/* binding */ createCourse),\n/* harmony export */   deleteCourse: () => (/* binding */ deleteCourse),\n/* harmony export */   getCourse: () => (/* binding */ getCourse),\n/* harmony export */   getCourses: () => (/* binding */ getCourses),\n/* harmony export */   updateCourse: () => (/* binding */ updateCourse)\n/* harmony export */ });\n/* harmony import */ var _models_course_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/course.js */ \"./api/models/course.js\");\n\n\n// Get all courses\nconst getCourses = async (req, res) => {\n  try {\n    const courses = await _models_course_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(courses);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new course\nconst createCourse = async (req, res) => {\n  const newCourse = new _models_course_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newCourse.save();\n    res.status(201).json(newCourse);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific course by ID\nconst getCourse = async (req, res) => {\n  try {\n    const course = await _models_course_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!course) return res.status(404).json({\n      message: 'Course not found'\n    });\n    res.status(200).json(course);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific course by ID\nconst deleteCourse = async (req, res) => {\n  try {\n    const course = await _models_course_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!course) return res.status(404).json({\n      message: 'Course not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific course by ID\nconst updateCourse = async (req, res) => {\n  try {\n    const course = await _models_course_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!course) return res.status(404).json({\n      message: 'Course not found'\n    });\n    res.status(200).json(course);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/courses.js?");

/***/ }),

/***/ "./api/controllers/fees.js":
/*!*********************************!*\
  !*** ./api/controllers/fees.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFee: () => (/* binding */ createFee),\n/* harmony export */   deleteFee: () => (/* binding */ deleteFee),\n/* harmony export */   getAllFees: () => (/* binding */ getAllFees),\n/* harmony export */   getFeeById: () => (/* binding */ getFeeById),\n/* harmony export */   getStudentFees: () => (/* binding */ getStudentFees),\n/* harmony export */   updateFee: () => (/* binding */ updateFee)\n/* harmony export */ });\n/* harmony import */ var _models_fees_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/fees.js */ \"./api/models/fees.js\");\n\n\n// Get all fees\nconst getAllFees = async (req, res) => {\n  try {\n    const fees = await _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(fees);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\nconst getStudentFees = async (req, res) => {\n  try {\n    const fees = await _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      student: req.params.id\n    });\n    res.status(200).json(fees);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new fee\nconst createFee = async (req, res) => {\n  const newFee = new _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    const savedFee = await newFee.save();\n    res.status(201).json(savedFee);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific fee by ID\nconst getFeeById = async (req, res) => {\n  try {\n    const fee = await _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!fee) {\n      return res.status(404).json({\n        message: 'Fee not found'\n      });\n    }\n    res.status(200).json(fee);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific fee by ID\nconst updateFee = async (req, res) => {\n  try {\n    const fee = await _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!fee) {\n      return res.status(404).json({\n        message: 'Fee not found'\n      });\n    }\n    res.status(200).json(fee);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific fee by ID\nconst deleteFee = async (req, res) => {\n  try {\n    const fee = await _models_fees_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!fee) {\n      return res.status(404).json({\n        message: 'Fee not found'\n      });\n    }\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/fees.js?");

/***/ }),

/***/ "./api/controllers/grade.js":
/*!**********************************!*\
  !*** ./api/controllers/grade.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createGrade: () => (/* binding */ createGrade),\n/* harmony export */   deleteGrade: () => (/* binding */ deleteGrade),\n/* harmony export */   getGrade: () => (/* binding */ getGrade),\n/* harmony export */   getGrades: () => (/* binding */ getGrades),\n/* harmony export */   getStudentGrades: () => (/* binding */ getStudentGrades),\n/* harmony export */   updateGrade: () => (/* binding */ updateGrade)\n/* harmony export */ });\n/* harmony import */ var _models_grade_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/grade.js */ \"./api/models/grade.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\n\n\n// Get all grades\nconst getGrades = async (req, res) => {\n  try {\n    const grades = await _models_grade_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(grades);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\nconst getStudentGrades = async (req, res) => {\n  try {\n    const grades = await _models_grade_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n      student: new mongoose__WEBPACK_IMPORTED_MODULE_1__.Types.ObjectId(req.params.id)\n    });\n    res.status(200).json(grades);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new grade\nconst createGrade = async (req, res) => {\n  const newGrade = new _models_grade_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    ...req.body,\n    student: new mongoose__WEBPACK_IMPORTED_MODULE_1__.Types.ObjectId(req.body.student)\n  });\n  try {\n    await newGrade.save();\n    res.status(201).json(newGrade);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific grade by ID\nconst getGrade = async (req, res) => {\n  try {\n    const grade = await grade.findById(req.params.id);\n    if (!grade) return res.status(404).json({\n      message: 'grade not found'\n    });\n    res.status(200).json(grade);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific grade by ID\nconst deleteGrade = async (req, res) => {\n  try {\n    const grade = await grade.findByIdAndDelete(req.params.id);\n    if (!grade) return res.status(404).json({\n      message: 'grade not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific grade by ID\nconst updateGrade = async (req, res) => {\n  try {\n    const grade_ = await _models_grade_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!grade_) return res.status(404).json({\n      message: 'grade not found'\n    });\n    res.status(200).json(grade_);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/grade.js?");

/***/ }),

/***/ "./api/controllers/students.js":
/*!*************************************!*\
  !*** ./api/controllers/students.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStudent: () => (/* binding */ createStudent),\n/* harmony export */   deleteStudent: () => (/* binding */ deleteStudent),\n/* harmony export */   getStudent: () => (/* binding */ getStudent),\n/* harmony export */   getStudents: () => (/* binding */ getStudents),\n/* harmony export */   updateStudent: () => (/* binding */ updateStudent)\n/* harmony export */ });\n/* harmony import */ var _models_student_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/student.js */ \"./api/models/student.js\");\n\n\n// Get all students\nconst getStudents = async (req, res) => {\n  try {\n    const students = await _models_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(students);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new student\nconst createStudent = async (req, res) => {\n  const newStudent = new _models_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newStudent.save();\n    res.status(201).json(newStudent);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific student by ID\nconst getStudent = async (req, res) => {\n  try {\n    const student = await _models_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!student) return res.status(404).json({\n      message: 'Student not found'\n    });\n    res.status(200).json(student);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific student by ID\nconst deleteStudent = async (req, res) => {\n  try {\n    const student = await _models_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!student) return res.status(404).json({\n      message: 'Student not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific student by ID\nconst updateStudent = async (req, res) => {\n  try {\n    const student = await _models_student_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!student) return res.status(404).json({\n      message: 'Student not found'\n    });\n    res.status(200).json(student);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/students.js?");

/***/ }),

/***/ "./api/controllers/teachers.js":
/*!*************************************!*\
  !*** ./api/controllers/teachers.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTeacher: () => (/* binding */ createTeacher),\n/* harmony export */   deleteTeacher: () => (/* binding */ deleteTeacher),\n/* harmony export */   getTeacher: () => (/* binding */ getTeacher),\n/* harmony export */   getTeachers: () => (/* binding */ getTeachers),\n/* harmony export */   updateTeacher: () => (/* binding */ updateTeacher)\n/* harmony export */ });\n/* harmony import */ var _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/teacher.js */ \"./api/models/teacher.js\");\n\n\n// Get all teachers\nconst getTeachers = async (req, res) => {\n  try {\n    const teachers = await _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(teachers);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new teacher\nconst createTeacher = async (req, res) => {\n  const newTeacher = new _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newTeacher.save();\n    res.status(201).json(newTeacher);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific teacher by ID\nconst getTeacher = async (req, res) => {\n  try {\n    const teacher = await _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!teacher) return res.status(404).json({\n      message: 'Teacher not found'\n    });\n    res.status(200).json(teacher);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific teacher by ID\nconst deleteTeacher = async (req, res) => {\n  try {\n    const teacher = await _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!teacher) return res.status(404).json({\n      message: 'Teacher not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific teacher by ID\nconst updateTeacher = async (req, res) => {\n  try {\n    const teacher = await _models_teacher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!teacher) return res.status(404).json({\n      message: 'Teacher not found'\n    });\n    res.status(200).json(teacher);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/teachers.js?");

/***/ }),

/***/ "./api/controllers/users.js":
/*!**********************************!*\
  !*** ./api/controllers/users.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUser: () => (/* binding */ createUser),\n/* harmony export */   deleteUser: () => (/* binding */ deleteUser),\n/* harmony export */   deleteUserByRoleData: () => (/* binding */ deleteUserByRoleData),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   getUserByRoleData: () => (/* binding */ getUserByRoleData),\n/* harmony export */   getUserByUsername: () => (/* binding */ getUserByUsername),\n/* harmony export */   getUsers: () => (/* binding */ getUsers),\n/* harmony export */   updateUser: () => (/* binding */ updateUser)\n/* harmony export */ });\n/* harmony import */ var _models_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.js */ \"./api/models/user.js\");\n // Get all users\nconst getUsers = async (req, res) => {\n  try {\n    const users = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(users);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Create a new user\nconst createUser = async (req, res) => {\n  const newUser = new _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  try {\n    await newUser.save();\n    res.status(201).json(newUser);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific user by ID\nconst getUser = async (req, res) => {\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id);\n    if (!user) return res.status(404).json({\n      message: 'User not found'\n    });\n    res.status(200).json(user);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Get a specific user by username\n// Get a specific user by username\nconst getUserByUsername = async (req, res) => {\n  const username = req.params.username;\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      username: username\n    });\n    if (!user) {\n      return res.status(404).json({\n        message: 'User not found'\n      });\n    }\n    res.status(200).json(user);\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Delete a specific user by ID\nconst deleteUser = async (req, res) => {\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(req.params.id);\n    if (!user) return res.status(404).json({\n      message: 'User not found'\n    });\n    res.status(204).json();\n  } catch (err) {\n    res.status(500).json({\n      message: err.message\n    });\n  }\n};\n\n// Update a specific user by ID\nconst updateUser = async (req, res) => {\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    if (!user) return res.status(404).json({\n      message: 'User not found'\n    });\n    res.status(200).json(user);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\nconst deleteUserByRoleData = async (req, res) => {\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n      roleData: req.params.roleData\n    });\n    if (!user) return res.status(404).json({\n      message: 'User not found'\n    });\n    res.status(204).json(user);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\nconst getUserByRoleData = async (req, res) => {\n  try {\n    const user = await _models_user_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      roleData: req.params.roleData\n    });\n    if (!user) return res.status(404).json({\n      message: 'User not found'\n    });\n    res.status(200).json(user);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n\n//# sourceURL=webpack://awail/./api/controllers/users.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _routes_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/users.js */ \"./api/routes/users.js\");\n/* harmony import */ var _routes_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/classes.js */ \"./api/routes/classes.js\");\n/* harmony import */ var _routes_students_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/students.js */ \"./api/routes/students.js\");\n/* harmony import */ var _routes_courses_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/courses.js */ \"./api/routes/courses.js\");\n/* harmony import */ var _routes_teachers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/teachers.js */ \"./api/routes/teachers.js\");\n/* harmony import */ var _routes_admins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/admins.js */ \"./api/routes/admins.js\");\n/* harmony import */ var _routes_fees_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/fees.js */ \"./api/routes/fees.js\");\n/* harmony import */ var _routes_attendee_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/attendee.js */ \"./api/routes/attendee.js\");\n/* harmony import */ var _routes_blockedUsers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/blockedUsers.js */ \"./api/routes/blockedUsers.js\");\n/* harmony import */ var _routes_grade_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/grade.js */ \"./api/routes/grade.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.use('/', _routes_users_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/', _routes_classes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/', _routes_students_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/', _routes_courses_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nrouter.use('/', _routes_teachers_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nrouter.use('/', _routes_admins_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\nrouter.use('/', _routes_fees_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\nrouter.use('/', _routes_attendee_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\nrouter.use('/', _routes_blockedUsers_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\nrouter.use('/', _routes_grade_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/index.js?");

/***/ }),

/***/ "./api/models/admin.js":
/*!*****************************!*\
  !*** ./api/models/admin.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst adminSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  FullName: {\n    type: String,\n    required: [true, 'Please Provide a Full Name']\n  },\n  serial_number: {\n    type: String,\n    required: [true, 'Please Provide a serial number']\n  },\n  Email: {\n    type: String,\n    required: [true, 'Please Provide a Email']\n  },\n  Telephone: {\n    type: String,\n    required: [true, 'Please Provide a Telephone']\n  },\n  Role: {\n    type: String,\n    required: [true, 'Please Provide a Role']\n  },\n  gender: {\n    type: String,\n    required: [true, 'Please provide a gender']\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Admin || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Admin', adminSchema));\n\n//# sourceURL=webpack://awail/./api/models/admin.js?");

/***/ }),

/***/ "./api/models/attendee.js":
/*!********************************!*\
  !*** ./api/models/attendee.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst attendanceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  student: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Student',\n    required: [true, 'Please provide a student']\n  },\n  date: {\n    type: Date,\n    default: Date.now\n  },\n  status: {\n    type: String,\n    enum: ['Present', 'Absent'],\n    required: [true, 'Please provide a status']\n  },\n  explanation: {\n    type: String,\n    enum: ['Justified', 'Non-Justified']\n  }\n});\nattendanceSchema.index({\n  student: 1,\n  date: 1\n}, {\n  unique: true\n});\nconst Attendance = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Attendance || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Attendance', attendanceSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Attendance);\n\n//# sourceURL=webpack://awail/./api/models/attendee.js?");

/***/ }),

/***/ "./api/models/blockedUsers.js":
/*!************************************!*\
  !*** ./api/models/blockedUsers.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst blockedUsersSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  user: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'User',\n    required: [true, 'User is required']\n  }\n});\nconst BlockedUsers = mongoose__WEBPACK_IMPORTED_MODULE_0__.model('BlockedUsers', blockedUsersSchema) || mongoose__WEBPACK_IMPORTED_MODULE_0__.models.BlockedUsers;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockedUsers);\n\n//# sourceURL=webpack://awail/./api/models/blockedUsers.js?");

/***/ }),

/***/ "./api/models/class.js":
/*!*****************************!*\
  !*** ./api/models/class.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst classSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  class_name: {\n    type: String,\n    required: [true, 'Please Provide a class name']\n  },\n  class_schedule: [String]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Class || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Class', classSchema));\n\n//# sourceURL=webpack://awail/./api/models/class.js?");

/***/ }),

/***/ "./api/models/counter.js":
/*!*******************************!*\
  !*** ./api/models/counter.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst counterSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  _id: {\n    type: String,\n    required: true\n  },\n  sequence_value: {\n    type: Number,\n    default: 1\n  }\n});\nconst Counter = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Counter || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Counter', counterSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);\n\n//# sourceURL=webpack://awail/./api/models/counter.js?");

/***/ }),

/***/ "./api/models/course.js":
/*!******************************!*\
  !*** ./api/models/course.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./api/models/counter.js\");\n\n\nconst courseSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  course_name: {\n    type: String,\n    required: [true, 'Please Provide a course name']\n  },\n  code: {\n    type: String\n  },\n  credits: {\n    type: Number,\n    required: [true, 'Please Provide a course credits']\n  }\n});\ncourseSchema.pre('save', async function (next) {\n  const course = this;\n  const counter = await _counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOneAndUpdate({\n    _id: 'C'\n  }, {\n    $inc: {\n      sequence_value: 1\n    }\n  }, {\n    new: true,\n    upsert: true\n  });\n  course.code = `C${counter.sequence_value.toString().padStart(3, '0')}`;\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Course || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Course', courseSchema));\n\n//# sourceURL=webpack://awail/./api/models/course.js?");

/***/ }),

/***/ "./api/models/fees.js":
/*!****************************!*\
  !*** ./api/models/fees.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst feeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  student: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Student',\n    required: [true, 'Please provide a student']\n  },\n  month: {\n    type: String,\n    required: [true, 'Please provide month']\n  },\n  amount: {\n    type: Number,\n    required: [true, 'Please provide amount']\n  },\n  payment_date: {\n    type: Date,\n    default: Date.now\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Fee || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Fee', feeSchema));\n\n//# sourceURL=webpack://awail/./api/models/fees.js?");

/***/ }),

/***/ "./api/models/grade.js":
/*!*****************************!*\
  !*** ./api/models/grade.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst gradeSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  student: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Student',\n    required: [true, 'Please provide a student'],\n    unique: true\n  },\n  exam: {\n    type: String,\n    enum: ['Exam 1', 'Exam 2', 'Exam 3'],\n    required: [true, 'Please provide an exam']\n  },\n  course: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Course',\n    required: [true, 'Please provide a course']\n  },\n  marks: {\n    type: Number,\n    min: 0,\n    max: 20\n  }\n});\ngradeSchema.index({\n  student: 1,\n  exam: 1\n}, {\n  unique: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Grade || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Grade', gradeSchema));\n\n//# sourceURL=webpack://awail/./api/models/grade.js?");

/***/ }),

/***/ "./api/models/student.js":
/*!*******************************!*\
  !*** ./api/models/student.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst StudentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  serial_number: {\n    type: String,\n    required: [true, 'Please provide a serial number']\n  },\n  fullName: {\n    type: String,\n    required: [true, 'Please provide a full name']\n  },\n  contact_info: {\n    email: {\n      type: String,\n      required: [true, 'Please provide a email']\n    },\n    phone: {\n      type: String,\n      required: [true, 'Please provide a phone']\n    },\n    address: {\n      type: String,\n      required: [true, 'Please provide a address']\n    }\n  },\n  gender: {\n    type: String,\n    required: [true, 'Please Provide a gender']\n  },\n  dateOfBirth: {\n    type: Date,\n    required: [true, 'Please Provide a date of birth']\n  },\n  parent: {\n    fullName: {\n      type: String,\n      required: [true, 'Please provide a full name']\n    },\n    contact_info: {\n      email: {\n        type: String,\n        required: [true, 'Please provide a email']\n      },\n      phone: {\n        type: String,\n        required: [true, 'Please provide a phone']\n      }\n    },\n    profession: {\n      type: String,\n      required: [true, 'Please provide a profession']\n    }\n  },\n  class: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Class',\n    required: [true, 'Please provide a class']\n  },\n  profileImage: {\n    type: String\n  },\n  profileImageType: {\n    type: String\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Student || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Student', StudentSchema));\n\n//# sourceURL=webpack://awail/./api/models/student.js?");

/***/ }),

/***/ "./api/models/teacher.js":
/*!*******************************!*\
  !*** ./api/models/teacher.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst teacherSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  serial_number: {\n    type: String,\n    required: [true, 'Please provide a serial number']\n  },\n  fullName: {\n    type: String,\n    required: [true, 'Please provide a full name']\n  },\n  contact_info: {\n    email: {\n      type: String,\n      required: [true, 'Please provide a email']\n    },\n    phone: {\n      type: String,\n      required: [true, 'Please provide a phone']\n    },\n    address: {\n      type: String,\n      required: [true, 'Please provide a address']\n    }\n  },\n  dateOfBirth: {\n    type: Date,\n    required: [true, 'Please Provide a date of birth']\n  },\n  gender: {\n    type: String,\n    required: [true, 'Please provide a gender']\n  },\n  qualification: {\n    type: String,\n    required: [true, 'Please provide a qualification']\n  },\n  course: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: 'Course',\n    required: [true, 'Please provide a course']\n  },\n  profileImage: {\n    type: String\n  },\n  profileImageType: {\n    type: String\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Teacher || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('Teacher', teacherSchema));\n\n//# sourceURL=webpack://awail/./api/models/teacher.js?");

/***/ }),

/***/ "./api/models/user.js":
/*!****************************!*\
  !*** ./api/models/user.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ \"./api/models/counter.js\");\n\n\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  username: {\n    type: String,\n    required: true,\n    unique: true\n  },\n  password: {\n    type: String,\n    required: true\n  },\n  role: {\n    type: String,\n    enum: ['Admin', 'Teacher', 'Student', 'Parent'],\n    required: true\n  },\n  roleData: {\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    refPath: 'role',\n    required: [true, 'please enter a user role']\n  },\n  profileImage: {\n    type: String\n  },\n  profileImageType: {\n    type: String\n  }\n});\nuserSchema.pre('save', async function (next) {\n  if (!this.isModified('password')) return next();\n  const hash = crypto__WEBPACK_IMPORTED_MODULE_1__.createHash('sha256');\n  hash.update(this.password);\n  this.password = hash.digest('hex');\n  try {\n    const roleCode = getRoleCode(this.role);\n    const counter = await _counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOneAndUpdate({\n      _id: roleCode\n    }, {\n      $inc: {\n        sequence_value: 1\n      }\n    }, {\n      new: true,\n      upsert: true\n    });\n    this.username = `${roleCode}${counter.sequence_value.toString().padStart(3, '0')}`;\n  } catch (error) {\n    return next(error);\n  }\n  next();\n});\nfunction getRoleCode(role) {\n  switch (role) {\n    case 'Admin':\n      return 'A';\n    case 'Teacher':\n      return 'T';\n    case 'Student':\n      return 'S';\n    case 'Parent':\n      return 'P';\n    default:\n      return '';\n  }\n}\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0__.model('User', userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n\n//# sourceURL=webpack://awail/./api/models/user.js?");

/***/ }),

/***/ "./api/routes/admins.js":
/*!******************************!*\
  !*** ./api/routes/admins.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/admins.js */ \"./api/controllers/admins.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getAdmins', _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__.getAdmins);\nrouter.post('/createAdmin', _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__.createAdmin);\nrouter.get('/getAdmin/:id', _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__.getAdmin);\nrouter.delete('/deleteAdmin/:id', _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__.deleteAdmin);\nrouter.patch('/updateAdmin/:id', _controllers_admins_js__WEBPACK_IMPORTED_MODULE_1__.updateAdmin);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/admins.js?");

/***/ }),

/***/ "./api/routes/attendee.js":
/*!********************************!*\
  !*** ./api/routes/attendee.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/attendee.js */ \"./api/controllers/attendee.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_1__.Router();\nrouter.get('/getAttendees', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.getAttendees);\nrouter.get('/getAttendee/:id', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.getAttendee);\nrouter.post('/createAttendee', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.createAttendee);\nrouter.patch('/updateAttendee/:id', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.updateAttendee);\nrouter.delete('/deleteAttendee/:id', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.deleteAttendee);\nrouter.get('/getStudentAttendees/:id', _controllers_attendee_js__WEBPACK_IMPORTED_MODULE_0__.getStudentAttendees);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/attendee.js?");

/***/ }),

/***/ "./api/routes/blockedUsers.js":
/*!************************************!*\
  !*** ./api/routes/blockedUsers.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/blockedUsers.js */ \"./api/controllers/blockedUsers.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_1__.Router();\n\n// Get all blockedUsers\nrouter.get('/getBlockedUsers', _controllers_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__.getBlockedUsers);\nrouter.get('/getBlockedUser/:id', _controllers_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__.getBlockedUser);\nrouter.post('/createBlockedUser', _controllers_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__.createBlockedUser);\nrouter.delete('/deleteBlockedUser/:id', _controllers_blockedUsers_js__WEBPACK_IMPORTED_MODULE_0__.deleteBlockedUser);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/blockedUsers.js?");

/***/ }),

/***/ "./api/routes/classes.js":
/*!*******************************!*\
  !*** ./api/routes/classes.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/classes.js */ \"./api/controllers/classes.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getClasses', _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__.getClasses);\nrouter.post('/createClass', _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__.createClass);\nrouter.get('/getClass/:id', _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__.getClass);\nrouter.delete('/deleteClass/:id', _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__.deleteClass);\nrouter.patch('/updateClass/:id', _controllers_classes_js__WEBPACK_IMPORTED_MODULE_1__.updateClass);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/classes.js?");

/***/ }),

/***/ "./api/routes/courses.js":
/*!*******************************!*\
  !*** ./api/routes/courses.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/courses.js */ \"./api/controllers/courses.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getCourses', _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__.getCourses);\nrouter.get('/getCourse/:id', _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__.getCourse);\nrouter.post('/createCourse', _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__.createCourse);\nrouter.put('/updateCourse/:id', _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__.updateCourse);\nrouter.delete('/deleteCourse/:id', _controllers_courses_js__WEBPACK_IMPORTED_MODULE_1__.deleteCourse);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/courses.js?");

/***/ }),

/***/ "./api/routes/fees.js":
/*!****************************!*\
  !*** ./api/routes/fees.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/fees.js */ \"./api/controllers/fees.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_1__.Router();\nrouter.get('/getAllFees', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.getAllFees);\nrouter.get('/getFee/:id', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.getFeeById);\nrouter.post('/createFee', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.createFee);\nrouter.patch('/updateFee/:id', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.updateFee);\nrouter.delete('/deleteFee/:id', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.deleteFee);\nrouter.get('/getStudentFees/:id', _controllers_fees_js__WEBPACK_IMPORTED_MODULE_0__.getStudentFees);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/fees.js?");

/***/ }),

/***/ "./api/routes/grade.js":
/*!*****************************!*\
  !*** ./api/routes/grade.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/grade.js */ \"./api/controllers/grade.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_1__.Router();\nrouter.get('/getGrades', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.getGrades);\nrouter.get('/getGrade/:id', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.getGrade);\nrouter.post('/createGrade', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.createGrade);\nrouter.patch('/updateGrade/:id', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.updateGrade);\nrouter.delete('/deleteGrade/:id', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.deleteGrade);\nrouter.get('/getStudentGrades/:id', _controllers_grade_js__WEBPACK_IMPORTED_MODULE_0__.getStudentGrades);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/grade.js?");

/***/ }),

/***/ "./api/routes/students.js":
/*!********************************!*\
  !*** ./api/routes/students.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/students.js */ \"./api/controllers/students.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getStudents', _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__.getStudents);\nrouter.get('/getStudent/:id', _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__.getStudent);\nrouter.post('/createStudent', _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__.createStudent);\nrouter.patch('/updateStudent/:id', _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__.updateStudent);\nrouter.delete('/deleteStudent/:id', _controllers_students_js__WEBPACK_IMPORTED_MODULE_1__.deleteStudent);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/students.js?");

/***/ }),

/***/ "./api/routes/teachers.js":
/*!********************************!*\
  !*** ./api/routes/teachers.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/teachers.js */ \"./api/controllers/teachers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getTeachers', _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__.getTeachers);\nrouter.post('/createTeacher', _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__.createTeacher);\nrouter.get('/getTeacher/:id', _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__.getTeacher);\nrouter.delete('/deleteTeacher/:id', _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__.deleteTeacher);\nrouter.patch('/updateTeacher/:id', _controllers_teachers_js__WEBPACK_IMPORTED_MODULE_1__.updateTeacher);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/teachers.js?");

/***/ }),

/***/ "./api/routes/users.js":
/*!*****************************!*\
  !*** ./api/routes/users.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/users.js */ \"./api/controllers/users.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/getUsers', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.getUsers);\nrouter.post('/createUser', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.createUser);\nrouter.get('/getUser/:id', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.getUser);\nrouter.get('/getUserByUsername/:username', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.getUserByUsername);\nrouter.delete('/deleteUser/:id', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.deleteUser);\nrouter.patch('/updateUser/:id', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.updateUser);\nrouter.delete('/deleteUserByRoleData/:roleData', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.deleteUserByRoleData);\nrouter.get('/getUserByRoleData/:roleData', _controllers_users_js__WEBPACK_IMPORTED_MODULE_1__.getUserByRoleData);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./api/routes/users.js?");

/***/ }),

/***/ "./config/passport.js":
/*!****************************!*\
  !*** ./config/passport.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ \"passport-local\");\n/* harmony import */ var _api_models_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/models/user.js */ \"./api/models/user.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ \"crypto\");\n\n\n\n\npassport__WEBPACK_IMPORTED_MODULE_0__.use(new passport_local__WEBPACK_IMPORTED_MODULE_1__.Strategy(async (username, password, done) => {\n  console.log(username, password);\n  try {\n    const user = await _api_models_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      username: username\n    });\n    if (!user) return done(null, false, {\n      message: 'Incorrect username.'\n    });\n    const hash = crypto__WEBPACK_IMPORTED_MODULE_3__.createHash('sha256');\n    hash.update(password);\n    const hashedPassword = hash.digest('hex');\n    if (user.password !== hashedPassword) {\n      return done(null, false, {\n        message: 'Incorrect password.'\n      });\n    }\n    return done(null, user);\n  } catch (err) {\n    return done(err);\n  }\n}));\npassport__WEBPACK_IMPORTED_MODULE_0__.serializeUser((user, done) => {\n  done(null, user.id);\n});\npassport__WEBPACK_IMPORTED_MODULE_0__.deserializeUser(async (id, done) => {\n  try {\n    const user = await _api_models_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(id);\n    done(null, user);\n  } catch (err) {\n    done(err);\n  }\n});\n\n//# sourceURL=webpack://awail/./config/passport.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ \"url\");\n/* harmony import */ var browser_sync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! browser-sync */ \"browser-sync\");\n/* harmony import */ var _web_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/index.js */ \"./web/index.js\");\n/* harmony import */ var _api_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/index.js */ \"./api/index.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var connect_flash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! connect-flash */ \"connect-flash\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var _utils_getUSer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/getUSer.js */ \"./utils/getUSer.js\");\n/* harmony import */ var _config_passport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/passport.js */ \"./config/passport.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst secret = process.env.SESSION_SECRET;\nconst url = process.env.MONGODB_URI;\nconsole.log(url);\nconst bs = browser_sync__WEBPACK_IMPORTED_MODULE_3__.create();\nconst PORT = 3000;\nconst app = express__WEBPACK_IMPORTED_MODULE_0__();\n\n//connect to db\nmongoose__WEBPACK_IMPORTED_MODULE_6__.connect(url).then(() => {\n  console.log('Connected to the Database successfully');\n  app.listen(PORT, () => {\n    console.log(`Server running on port ${PORT}` + ' ' + `http://localhost:${PORT}/`);\n    bs.init({\n      proxy: `localhost:${PORT}`,\n      open: false,\n      files: ['./**/*.{html,js,css}']\n    });\n  });\n}).catch(err => {\n  console.log(err);\n});\n\n//view engine\napp.set('view engine', 'ejs');\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_1__.dirname((0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)(\"file:///I:/awail/main.js\"));\n\n//static files\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'src', 'sass')));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'src', 'assets', 'images')));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'src', 'assets', 'js')));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'src', 'assets', 'svg')));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__[\"static\"](path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'src', 'css')));\n\n//body parser\n\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.json({\n  limit: '50mb'\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0__.urlencoded({\n  limit: '50mb',\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_12__());\napp.use(connect_flash__WEBPACK_IMPORTED_MODULE_11__());\n\n//session config\napp.use(express_session__WEBPACK_IMPORTED_MODULE_7__({\n  secret: secret,\n  resave: false,\n  saveUninitialized: false,\n  store: new connect_mongo__WEBPACK_IMPORTED_MODULE_8__({\n    client: mongoose__WEBPACK_IMPORTED_MODULE_6__.connection.getClient()\n  }),\n  cookie: {\n    maxAge: 1000 * 60 * 60 // 1 hour\n  }\n}));\n\napp.use(passport__WEBPACK_IMPORTED_MODULE_9__.initialize());\napp.use(passport__WEBPACK_IMPORTED_MODULE_9__.session());\n\n//routes\napp.use('/', _web_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.use('/api', _api_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n\n//ajax\n\napp.get('/main/:file', async function (req, res) {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'views/main', req.params.file);\n  const user = await (0,_utils_getUSer_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(req.user?.roleData, req.user?.role);\n  res.render(filePath, {\n    admin: user,\n    loggedInUser: req.user\n  });\n});\n//app.get('/main/:file', function (req, res) {\n//  res.sendFile(path.join(__dirname, 'views/main', req.params.file))\n//})\n\napp.get('/teacher/main/:file', async function (req, res) {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_1__.join(__dirname, 'views/teacher/main', req.params.file);\n  const user = await (0,_utils_getUSer_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(req.user?.roleData, req.user?.role);\n  res.render(filePath, {\n    loggedInTeacher: user,\n    teacher: req.user,\n    messages: 'merhaba'\n  });\n});\n\n//error handling\napp.use((err, req, res, next) => {\n  res.json({\n    message: 'An error occurred',\n    url: req.url,\n    method: req.method,\n    errorStack: err.stack,\n    errorStatus: err.status,\n    errorStatusCode: err.statusCode,\n    errorMessage: err.message,\n    errorName: err.name\n  });\n});\n\n// functions\n\n//# sourceURL=webpack://awail/./main.js?");

/***/ }),

/***/ "./utils/getUSer.js":
/*!**************************!*\
  !*** ./utils/getUSer.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n\nconst getUserById = async (id, role) => {\n  return await axios__WEBPACK_IMPORTED_MODULE_0__.get(`http://localhost:3000/api/get${role}/${id}`).then(res => {\n    return res.data;\n  }).catch(err => {\n    console.log(err);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserById);\n\n//# sourceURL=webpack://awail/./utils/getUSer.js?");

/***/ }),

/***/ "./web/index.js":
/*!**********************!*\
  !*** ./web/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _routes_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/home.js */ \"./web/routes/home.js\");\n/* harmony import */ var _routes_parent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/parent.js */ \"./web/routes/parent.js\");\n/* harmony import */ var _routes_admin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/admin.js */ \"./web/routes/admin.js\");\n/* harmony import */ var _routes_teacher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/teacher.js */ \"./web/routes/teacher.js\");\n\n\n\n\n\n\n//home page\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.use('/', _routes_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nrouter.use('/parent', _routes_parent_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nrouter.use('/admin', _routes_admin_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nrouter.use('/teacher', _routes_teacher_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./web/index.js?");

/***/ }),

/***/ "./web/routes/admin.js":
/*!*****************************!*\
  !*** ./web/routes/admin.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _utils_getUSer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getUSer.js */ \"./utils/getUSer.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/', async (req, res) => {\n  if (req.isAuthenticated() && req.user?.role === 'Admin') {\n    const user = await (0,_utils_getUSer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req.user.roleData, req.user.role);\n    return res.render('root.ejs', {\n      user: req.user,\n      admin: user\n    }); // Pass the user object to the template\n  }\n\n  res.redirect('/');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./web/routes/admin.js?");

/***/ }),

/***/ "./web/routes/home.js":
/*!****************************!*\
  !*** ./web/routes/home.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/', (req, res) => {\n  const flashMessage = req.flash('message');\n  const message = flashMessage.length > 0 ? flashMessage[0].message : false;\n  res.render('index.ejs', {\n    message: message\n  });\n});\nfunction checkRole(req, res, next) {\n  if (req.body.role.toUpperCase() !== req.user.role.toUpperCase()) {\n    req.logout(() => {\n      req.flash('message', {\n        message: 'Invalid path. Please choose a convenient role.'\n      });\n      res.redirect('/');\n    });\n  } else {\n    const user = req.user;\n    if (user.role === 'Admin') {\n      res.redirect('/admin');\n    } else if (user.role === 'Parent') {\n      res.redirect('/parent');\n    } else if (user.role === 'Teacher') {\n      res.redirect('/teacher');\n    } else {\n      req.logout(() => {\n        req.flash('message', {\n          message: 'Invalid path. Please choose a convenient role.'\n        });\n        res.redirect('/');\n      });\n    }\n  }\n}\n\n// POST route with Passport.js authentication\n// POST route with Passport.js authentication\nrouter.post('/', (req, res, next) => {\n  res.cookie('role', req.body.role, {\n    maxAge: 1000 * 60\n  } // 1 minute\n  );\n\n  passport__WEBPACK_IMPORTED_MODULE_1__.authenticate('local', (err, user, info) => {\n    if (err) {\n      return next(err);\n    }\n    if (!user) {\n      return res.render('index.ejs', {\n        message: info.message\n      });\n    }\n    req.logIn(user, err => {\n      if (err) {\n        return next(err);\n      }\n      checkRole(req, res, next);\n    });\n  })(req, res, next);\n});\n\n// logout route\nrouter.get('/logout', (req, res) => {\n  req.logout(() => {\n    res.redirect('/');\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./web/routes/home.js?");

/***/ }),

/***/ "./web/routes/parent.js":
/*!******************************!*\
  !*** ./web/routes/parent.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/', (req, res) => {\n  if (req.isAuthenticated() && req.user?.role === 'Parent') {\n    return res.render('parent/parent.ejs', {\n      user: req.user\n    });\n  }\n  res.redirect('/');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./web/routes/parent.js?");

/***/ }),

/***/ "./web/routes/teacher.js":
/*!*******************************!*\
  !*** ./web/routes/teacher.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var _utils_getUSer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/getUSer.js */ \"./utils/getUSer.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0__.Router();\nrouter.get('/', async (req, res) => {\n  if (req.isAuthenticated() && req.user?.role === 'Teacher') {\n    const loggedInTeacher = await (0,_utils_getUSer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req.user.roleData, req.user.role);\n    return res.render('teacher/teacher.ejs', {\n      teacher: req.user,\n      loggedInTeacher: loggedInTeacher\n    });\n  }\n  res.redirect('/');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://awail/./web/routes/teacher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;