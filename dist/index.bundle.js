/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/App.css */ "./src/styles/App.css");
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav */ "./src/components/nav/nav.js");
/* harmony import */ var _PopupNews_PopupNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PopupNews/PopupNews */ "./src/components/PopupNews/PopupNews.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/reducers/app-reducer */ "./src/components/redux/reducers/app-reducer.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var App = function App(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      openNews = _useState2[0],
      setOpenNews = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    props.getAllNews();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_nav_nav__WEBPACK_IMPORTED_MODULE_2__.default, {
    openNews: openNews,
    setOpenNews: setOpenNews
  }), props.initialized && openNews ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopupNews_PopupNews__WEBPACK_IMPORTED_MODULE_3__.default, {
    openNews: openNews,
    setOpenNews: setOpenNews,
    news: props.news,
    getAllNews: props.getAllNews
  }) : null);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    initialized: state.app.initialized,
    news: state.app.news
  };
};

var AppContainer = (0,redux__WEBPACK_IMPORTED_MODULE_6__.compose)((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, {
  initializeApp: _redux_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__.initializeApp,
  getAllNews: _redux_reducers_app_reducer__WEBPACK_IMPORTED_MODULE_5__.getAllNews
}))(App);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContainer);

/***/ }),

/***/ "./src/components/PopupNews/PopupNews.jsx":
/*!************************************************!*\
  !*** ./src/components/PopupNews/PopupNews.jsx ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_popupNews_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/popupNews.css */ "./src/styles/popupNews.css");
/* harmony import */ var _public_img_btnSettingsClose_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/btnSettingsClose.png */ "./public/img/btnSettingsClose.png");
/* harmony import */ var _topContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topContent */ "./src/components/PopupNews/topContent.jsx");
/* harmony import */ var _scrollContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollContent */ "./src/components/PopupNews/scrollContent.jsx");
/* harmony import */ var _ReadMore_readMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReadMore/readMore */ "./src/components/PopupNews/ReadMore/readMore.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var PopupNews = function PopupNews(_ref) {
  var setOpenNews = _ref.setOpenNews,
      openNews = _ref.openNews,
      news = _ref.news,
      getAllNews = _ref.getAllNews;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(news.articles),
      _useState2 = _slicedToArray(_useState, 2),
      newsContent = _useState2[0],
      setNewsContent = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      TopItemsNews = _useState4[0],
      setTopItemsNews = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openReadMore = _useState6[0],
      setOpenReadMore = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      id = _useState8[0],
      setId = _useState8[1];

  console.log(newsContent);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getAllNews();
    setTopItemsNews(newsContent.splice(3));
  }, []);

  var openMoreAndFindItemId = function openMoreAndFindItemId(id) {
    setId(id);
    setOpenReadMore(!openReadMore);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, openReadMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReadMore_readMore__WEBPACK_IMPORTED_MODULE_5__.default, {
    openReadMore: openReadMore,
    setOpenReadMore: setOpenReadMore,
    id: id,
    news: news.articles
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "popupContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "textTitle"
  }, "NEWs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return setOpenNews(!openNews);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "close",
    src: _public_img_btnSettingsClose_png__WEBPACK_IMPORTED_MODULE_2__.default
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "scrollWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contentContainer"
  }, newsContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_topContent__WEBPACK_IMPORTED_MODULE_3__.default, {
    ItemsNews: TopItemsNews
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scrollContent__WEBPACK_IMPORTED_MODULE_4__.default, {
    ItemsNews: newsContent,
    openMoreAndFindItemId: openMoreAndFindItemId
  })) : null))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupNews);

/***/ }),

/***/ "./src/components/PopupNews/ReadMore/readMore.jsx":
/*!********************************************************!*\
  !*** ./src/components/PopupNews/ReadMore/readMore.jsx ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_popupNews_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/popupNews.css */ "./src/styles/popupNews.css");
/* harmony import */ var _public_img_btnSettingsClose_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/img/btnSettingsClose.png */ "./public/img/btnSettingsClose.png");




var ReadMore = function ReadMore(_ref) {
  var openReadMore = _ref.openReadMore,
      setOpenReadMore = _ref.setOpenReadMore,
      id = _ref.id,
      news = _ref.news;
  var currentItem = news.find(function (item) {
    return item.id === id;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "popupContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "textTitle"
  }, "NEWs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    onClick: function onClick() {
      return setOpenReadMore(!openReadMore);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "close",
    src: _public_img_btnSettingsClose_png__WEBPACK_IMPORTED_MODULE_2__.default
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "textMoreContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imgMore",
    src: currentItem.headerImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "textMore"
  }, currentItem.body)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReadMore);

/***/ }),

/***/ "./src/components/PopupNews/scrollContent.jsx":
/*!****************************************************!*\
  !*** ./src/components/PopupNews/scrollContent.jsx ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_popupNews_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/popupNews.css */ "./src/styles/popupNews.css");
/* harmony import */ var _public_img_dialogs_icon_like_green_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/img/dialogs_icon_like_green.png */ "./public/img/dialogs_icon_like_green.png");
/* harmony import */ var _public_img_dialogs_icon_like_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/img/dialogs_icon_like.png */ "./public/img/dialogs_icon_like.png");





var ScrollBlock = function ScrollBlock(_ref) {
  var item = _ref.item,
      openMoreAndFindItemId = _ref.openMoreAndFindItemId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ContentBlockSecond"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "imgBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: item.headerThumb
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "textBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.publicationDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, item.shortSummary)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "LikeAndMore"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "likes"
  }, item.likes.hasLiked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imgLike",
    src: _public_img_dialogs_icon_like_green_png__WEBPACK_IMPORTED_MODULE_2__.default
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "imgLike",
    src: _public_img_dialogs_icon_like_png__WEBPACK_IMPORTED_MODULE_3__.default
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "countLike"
  }, item.likes.amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "readMore",
    onClick: function onClick() {
      return openMoreAndFindItemId(item.id);
    }
  }, "Read More")));
};

var ScrollContent = function ScrollContent(_ref2) {
  var ItemsNews = _ref2.ItemsNews,
      openMoreAndFindItemId = _ref2.openMoreAndFindItemId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contextSecond"
  }, ItemsNews.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ScrollBlock, {
      key: item.id,
      item: item,
      openMoreAndFindItemId: openMoreAndFindItemId
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollContent);

/***/ }),

/***/ "./src/components/PopupNews/topContent.jsx":
/*!*************************************************!*\
  !*** ./src/components/PopupNews/topContent.jsx ***!
  \*************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles_popupNews_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/popupNews.css */ "./src/styles/popupNews.css");



var TobBlock = function TobBlock(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ContentBlock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ContentBlockImg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: item.headerThumb
  })));
};

var TopContent = function TopContent(_ref2) {
  var ItemsNews = _ref2.ItemsNews;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "contextFirst"
  }, ItemsNews.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(TobBlock, {
      key: item.id,
      item: item
    });
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopContent);

/***/ }),

/***/ "./src/components/api/api.js":
/*!***********************************!*\
  !*** ./src/components/api/api.js ***!
  \***********************************/
/*! namespace exports */
/*! export getNews [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNews": () => /* binding */ getNews
/* harmony export */ });
/* harmony import */ var _news_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.json */ "./src/components/api/news.json");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var url = _news_json__WEBPACK_IMPORTED_MODULE_0__.default;
var getNews = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getNews() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/components/nav/nav.js":
/*!***********************************!*\
  !*** ./src/components/nav/nav.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _public_img_icon_news_medium_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/img/icon_news_medium.png */ "./public/img/icon_news_medium.png");
/* harmony import */ var _styles_nav_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/nav.css */ "./src/styles/nav.css");




var Nav = function Nav(_ref) {
  var setOpenNews = _ref.setOpenNews,
      openNews = _ref.openNews;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnNews",
    onClick: function onClick() {
      setOpenNews(!openNews);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _public_img_icon_news_medium_png__WEBPACK_IMPORTED_MODULE_1__.default
  }), "Open News"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/components/redux/reducers/app-reducer.js":
/*!******************************************************!*\
  !*** ./src/components/redux/reducers/app-reducer.js ***!
  \******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getAllNews [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getItemNews [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializeApp [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializedSaccess [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializedSaccess": () => /* binding */ initializedSaccess,
/* harmony export */   "getItemNews": () => /* binding */ getItemNews,
/* harmony export */   "initializeApp": () => /* binding */ initializeApp,
/* harmony export */   "getAllNews": () => /* binding */ getAllNews,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/api.js */ "./src/components/api/api.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var SET_INITIALIZED = "SET_INITIALIZED";
var GET_NEWS = "GET_NEWS";
var initialState = {
  initialized: false,
  news: []
};

var AppReducer = function AppReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_INITIALIZED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          initialized: true
        });
      }

    case GET_NEWS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          news: action.data
        });
      }

    default:
      return state;
  }
};

var initializedSaccess = function initializedSaccess() {
  return {
    type: SET_INITIALIZED
  };
};
var getItemNews = function getItemNews(data) {
  return {
    type: GET_NEWS,
    data: data
  };
};
var initializeApp = function initializeApp() {
  return function (dispatch) {
    dispatch(initializedSaccess());
  };
};
var getAllNews = function getAllNews() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_0__.getNews)();

            case 2:
              data = _context.sent;

              if (data.articles.length > 0) {
                dispatch(getItemNews(data));
                dispatch(initializeApp());
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppReducer);

/***/ }),

/***/ "./src/components/redux/redux-store.js":
/*!*********************************************!*\
  !*** ./src/components/redux/redux-store.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/app-reducer */ "./src/components/redux/reducers/app-reducer.js");



var reducers = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  app: _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_1__.default
});
var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(reducers, (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default));
window.store = store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App.js */ "./src/components/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_redux_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/redux/redux-store */ "./src/components/redux/redux-store.js");






var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
    store: _components_redux_redux_store__WEBPACK_IMPORTED_MODULE_4__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_2__.default, null));
};

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Main, null), document.getElementById("root"));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/App.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/App.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n*, *:before, *:after {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\ninput { \r\n    outline: none;\r\n}\r\ntable {\r\n     border-collapse: collapse; \r\n     border-spacing: 0; \r\n}\r\nimg { \r\n    border: 0; \r\n    max-width: 100%; \r\n}\r\na { \r\n    text-decoration: none; \r\n}\r\n\r\n.cont{\r\n    background-color: #1111;\r\n    /* background: url('../../public/img/dialogs_background_main_border.png') no-repeat; */\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/App.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,sBAAsB;AAC1B;AACA;IACI,aAAa;AACjB;AACA;KACK,yBAAyB;KACzB,iBAAiB;AACtB;AACA;IACI,SAAS;IACT,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,sFAAsF;IACtF,WAAW;IACX,aAAa;AACjB","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n*, *:before, *:after {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\ninput { \r\n    outline: none;\r\n}\r\ntable {\r\n     border-collapse: collapse; \r\n     border-spacing: 0; \r\n}\r\nimg { \r\n    border: 0; \r\n    max-width: 100%; \r\n}\r\na { \r\n    text-decoration: none; \r\n}\r\n\r\n.cont{\r\n    background-color: #1111;\r\n    /* background: url('../../public/img/dialogs_background_main_border.png') no-repeat; */\r\n    width: 100%;\r\n    height: 500px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css ***!
  \********************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_AlfaSlabOne_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/fonts/AlfaSlabOne-Regular.ttf */ "./src/assets/fonts/AlfaSlabOne-Regular.ttf");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_fonts_AlfaSlabOne_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'AlfaSlabOne';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}", "",{"version":3,"sources":["webpack://./src/styles/fonts.css"],"names":[],"mappings":"AAAA;IACI,0BAA0B;IAC1B,+DAAsE;AAC1E","sourcesContent":["@font-face {\r\n    font-family: 'AlfaSlabOne';\r\n    src: url(\"../assets/fonts/AlfaSlabOne-Regular.ttf\") format('truetype');\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css ***!
  \******************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes inimate__one {\r\n  0% {\r\n    transform: translate(-50%, -50%) skewY(5deg);\r\n  }\r\n  50% {\r\n    transform: translate(-50%, -50%) skewY(-5deg);\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) skewY(5deg);\r\n  }\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: rgb(223, 156, 32);\r\n    border-radius: 0 0 10px 10px;\r\n}\r\n.btnNews{\r\n    display: flex;\r\n    align-items: center;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border: none; \r\n    outline: none;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n.btnNews img{\r\n    margin-top: 35px;\r\n    width: 40px;\r\n    transform: translate(-50%, -50%);\r\n    animation: inimate__one 3s infinite;\r\n   \r\n}\r\n.btnNews:hover{\r\n    color: rgb(86, 86, 86);\r\n    -webkit-transition: all 0.75s ease 0s;\r\n    -moz-transition: all 0.75s ease 0s;\r\n    -o-transition: all 0.75s ease 0s;\r\n    transition: all 0.75s ease 0s;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/nav.css"],"names":[],"mappings":"AAAA;EACE;IACE,4CAA4C;EAC9C;EACA;IACE,6CAA6C;EAC/C;EACA;IACE,4CAA4C;EAC9C;AACF;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mCAAmC;IACnC,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,YAAY;IACZ,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,WAAW;IACX,gCAAgC;IAChC,mCAAmC;;AAEvC;AACA;IACI,sBAAsB;IACtB,qCAAqC;IACrC,kCAAkC;IAClC,gCAAgC;IAChC,6BAA6B;AACjC","sourcesContent":["@keyframes inimate__one {\r\n  0% {\r\n    transform: translate(-50%, -50%) skewY(5deg);\r\n  }\r\n  50% {\r\n    transform: translate(-50%, -50%) skewY(-5deg);\r\n  }\r\n  100% {\r\n    transform: translate(-50%, -50%) skewY(5deg);\r\n  }\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: rgb(223, 156, 32);\r\n    border-radius: 0 0 10px 10px;\r\n}\r\n.btnNews{\r\n    display: flex;\r\n    align-items: center;\r\n    color: #fff;\r\n    padding: 10px;\r\n    border: none; \r\n    outline: none;\r\n    border: 0;\r\n    background: transparent;\r\n}\r\n.btnNews img{\r\n    margin-top: 35px;\r\n    width: 40px;\r\n    transform: translate(-50%, -50%);\r\n    animation: inimate__one 3s infinite;\r\n   \r\n}\r\n.btnNews:hover{\r\n    color: rgb(86, 86, 86);\r\n    -webkit-transition: all 0.75s ease 0s;\r\n    -moz-transition: all 0.75s ease 0s;\r\n    -o-transition: all 0.75s ease 0s;\r\n    transition: all 0.75s ease 0s;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/popupNews.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/popupNews.css ***!
  \************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./fonts.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/fonts.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_img_dialogs_background_main_border_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/img/dialogs_background_main_border.png */ "./public/img/dialogs_background_main_border.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_fonts_css__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_public_img_dialogs_background_main_border_png__WEBPACK_IMPORTED_MODULE_4__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes swing {\r\n    20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 15deg);\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n    }\r\n     \r\n    40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n    -ms-transform: rotate3d(0, 0, 1, -10deg);\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n    }\r\n     \r\n    60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 5deg);\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n    }\r\n     \r\n    80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n    -ms-transform: rotate3d(0, 0, 1, -5deg);\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n    }\r\n     \r\n    100% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 0deg);\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n    }\r\n}\r\n     \r\n\r\n.popupContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 20%;\r\n    width: 900px;\r\n    height: 550px;\r\n    border-radius: 15px;\r\n    border: 5px solid rgb(223, 156, 32);\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: cover; \r\n}\r\n\r\n.scrollWrapper{\r\n    height: 450px; /* высота нашего блока */\r\n    width: 800px; /* ширина нашего блока */\r\n    margin-top: 5%;\r\n    background: none; /* цвет фона, белый */\r\n    overflow-y: scroll; /* прокрутка по вертикали */\r\n}\r\n::-webkit-scrollbar {\r\n    background-color: rgb(7, 7, 83);\r\n    border-radius: 10px;\r\n    width: 10px;\r\n    height: 100%;\r\n}\r\n::-webkit-scrollbar-thumb   {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contentContainer{\r\n    width: 750px;\r\n}\r\n\r\n.textTitle{\r\n    position: absolute;\r\n    color: rgb(159, 195, 240);\r\n    text-shadow: 0.06em 0.09em rgb(60, 105, 159);\r\n    font-size: 40px;  \r\n    font-weight:700;\r\n    top: -7%;\r\n    font-family: 'AlfaSlabOne', sans-serif;\r\n}\r\n\r\n.popupContainer span .close {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: -8px;\r\n}\r\n\r\n.popupContainer span .close:hover {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-transform-origin: top center;\r\n    -ms-transform-origin: top center;\r\n    transform-origin: top center;\r\n    -webkit-animation-name: swing;\r\n    animation-name: swing;\r\n}\r\n\r\n\r\n/* Content first */\r\n.contextFirst{\r\n    display: flex;\r\n    width: 740px;\r\n    margin-left: 5px;\r\n    justify-content: space-between;\r\n}\r\n.ContentBlock{\r\n    width: 240px;\r\n    height: 180px;\r\n    background-color: rgb(238, 230, 169);\r\n    border-radius: 10px;\r\n}\r\n.ContentBlockImg{\r\n    background-color: #fff;\r\n    width: inherit;\r\n    height: 160px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n.ContentBlockImg img{\r\n    background-size: cover;\r\n    width: inherit;\r\n    height: 160px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n/* Content second */\r\n.contextSecond{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 10px;\r\n}\r\n\r\n.ContentBlockSecond{\r\n    display: flex;\r\n    width: 99%;\r\n    height: 200px;\r\n    margin: 5px;\r\n    background-color: rgb(238, 230, 169);\r\n    border-radius: 10px;\r\n}\r\n\r\n.imgBlock{\r\n    background-color: #fff;\r\n    width: 230px;\r\n    height: inherit;\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n.imgBlock img{\r\n    width: 230px;\r\n    height: inherit;\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n\r\n.textBlock{\r\n    display: flex;\r\n    padding: 5px;\r\n    flex-direction: column;\r\n}\r\n\r\n.textBlock h2 {\r\n    font-size: 18px;\r\n    padding: 15px 5px 15px 5px;\r\n}\r\n\r\n.textBlock p {\r\n    width: 200px;\r\n    padding: 12px 5px 12px 5px;\r\n\r\n}\r\n\r\n/* LikeAndMore */\r\n\r\n.LikeAndMore{\r\n    display: flex;\r\n    margin-left: auto;\r\n    margin-right: 10px;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.LikeAndMore{\r\n    padding: 5px;\r\n}\r\n\r\n.likes{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    background-color: rgba(22, 22, 22, 0.299);\r\n    padding: 5px 25px 5px 5px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n.imgLike{\r\n    position: absolute;\r\n    left: 5px;\r\n    width: 25px;\r\n}\r\n.imgLike:hover{\r\n    width: 27px;\r\n}\r\n\r\n.countLike{\r\n    margin-top: 3px;\r\n    padding-left: 40px;\r\n}\r\n\r\n.readMore{\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n}\r\n\r\n.readMore:hover{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n/* textMoreContainer */\r\n\r\n.textMoreContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 5%;\r\n    width: 800px;\r\n    height: 450px;\r\n    border-radius: 15px;\r\n    border: 5px solid rgb(223, 156, 32);\r\n}\r\n\r\n.textMore{\r\n    width: 700px;\r\n    margin: 10px 0 0 20px; \r\n    font-size: 18px;\r\n    color: #fff;\r\n}\r\n\r\n.imgMore{\r\n    width: 100%;\r\n    height: auto;\r\n}", "",{"version":3,"sources":["webpack://./src/styles/popupNews.css"],"names":[],"mappings":"AACA;IACI;IACA,2CAA2C;IAC3C,uCAAuC;IACvC,mCAAmC;IACnC;;IAEA;IACA,4CAA4C;IAC5C,wCAAwC;IACxC,oCAAoC;IACpC;;IAEA;IACA,0CAA0C;IAC1C,sCAAsC;IACtC,kCAAkC;IAClC;;IAEA;IACA,2CAA2C;IAC3C,uCAAuC;IACvC,mCAAmC;IACnC;;IAEA;IACA,0CAA0C;IAC1C,sCAAsC;IACtC,kCAAkC;IAClC;AACJ;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mCAAmC;IACnC,yDAA4E;IAC5E,sBAAsB;AAC1B;;AAEA;IACI,aAAa,EAAE,wBAAwB;IACvC,YAAY,EAAE,wBAAwB;IACtC,cAAc;IACd,gBAAgB,EAAE,qBAAqB;IACvC,kBAAkB,EAAE,2BAA2B;AACnD;AACA;IACI,+BAA+B;IAC/B,mBAAmB;IACnB,WAAW;IACX,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,4CAA4C;IAC5C,eAAe;IACf,eAAe;IACf,QAAQ;IACR,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;;AAEA;IACI,8BAA8B;IAC9B,sBAAsB;IACtB,iCAAiC;IACjC,yBAAyB;IACzB,oCAAoC;IACpC,gCAAgC;IAChC,4BAA4B;IAC5B,6BAA6B;IAC7B,qBAAqB;AACzB;;;AAGA,kBAAkB;AAClB;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,8BAA8B;AAClC;AACA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,mBAAmB;AACvB;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,cAAc;IACd,aAAa;IACb,4BAA4B;AAChC;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,aAAa;IACb,WAAW;IACX,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,eAAe;IACf,4BAA4B;AAChC;AACA;IACI,YAAY;IACZ,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,0BAA0B;;AAE9B;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,yCAAyC;IACzC,yBAAyB;IACzB,mBAAmB;;AAEvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;AACA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA,sBAAsB;;AAEtB;IACI,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;AAChB","sourcesContent":["@import \"fonts.css\";\r\n@keyframes swing {\r\n    20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 15deg);\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n    }\r\n     \r\n    40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n    -ms-transform: rotate3d(0, 0, 1, -10deg);\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n    }\r\n     \r\n    60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 5deg);\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n    }\r\n     \r\n    80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n    -ms-transform: rotate3d(0, 0, 1, -5deg);\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n    }\r\n     \r\n    100% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n    -ms-transform: rotate3d(0, 0, 1, 0deg);\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n    }\r\n}\r\n     \r\n\r\n.popupContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 20%;\r\n    width: 900px;\r\n    height: 550px;\r\n    border-radius: 15px;\r\n    border: 5px solid rgb(223, 156, 32);\r\n    background-image: url('../../public/img/dialogs_background_main_border.png');\r\n    background-size: cover; \r\n}\r\n\r\n.scrollWrapper{\r\n    height: 450px; /* высота нашего блока */\r\n    width: 800px; /* ширина нашего блока */\r\n    margin-top: 5%;\r\n    background: none; /* цвет фона, белый */\r\n    overflow-y: scroll; /* прокрутка по вертикали */\r\n}\r\n::-webkit-scrollbar {\r\n    background-color: rgb(7, 7, 83);\r\n    border-radius: 10px;\r\n    width: 10px;\r\n    height: 100%;\r\n}\r\n::-webkit-scrollbar-thumb   {\r\n    background-color: #fff;\r\n    border-radius: 10px;\r\n}\r\n\r\n.contentContainer{\r\n    width: 750px;\r\n}\r\n\r\n.textTitle{\r\n    position: absolute;\r\n    color: rgb(159, 195, 240);\r\n    text-shadow: 0.06em 0.09em rgb(60, 105, 159);\r\n    font-size: 40px;  \r\n    font-weight:700;\r\n    top: -7%;\r\n    font-family: 'AlfaSlabOne', sans-serif;\r\n}\r\n\r\n.popupContainer span .close {\r\n    position: absolute;\r\n    top: -8px;\r\n    right: -8px;\r\n}\r\n\r\n.popupContainer span .close:hover {\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    -webkit-transform-origin: top center;\r\n    -ms-transform-origin: top center;\r\n    transform-origin: top center;\r\n    -webkit-animation-name: swing;\r\n    animation-name: swing;\r\n}\r\n\r\n\r\n/* Content first */\r\n.contextFirst{\r\n    display: flex;\r\n    width: 740px;\r\n    margin-left: 5px;\r\n    justify-content: space-between;\r\n}\r\n.ContentBlock{\r\n    width: 240px;\r\n    height: 180px;\r\n    background-color: rgb(238, 230, 169);\r\n    border-radius: 10px;\r\n}\r\n.ContentBlockImg{\r\n    background-color: #fff;\r\n    width: inherit;\r\n    height: 160px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n.ContentBlockImg img{\r\n    background-size: cover;\r\n    width: inherit;\r\n    height: 160px;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n/* Content second */\r\n.contextSecond{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin-top: 10px;\r\n}\r\n\r\n.ContentBlockSecond{\r\n    display: flex;\r\n    width: 99%;\r\n    height: 200px;\r\n    margin: 5px;\r\n    background-color: rgb(238, 230, 169);\r\n    border-radius: 10px;\r\n}\r\n\r\n.imgBlock{\r\n    background-color: #fff;\r\n    width: 230px;\r\n    height: inherit;\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n.imgBlock img{\r\n    width: 230px;\r\n    height: inherit;\r\n    border-radius: 10px 0 0 10px;\r\n}\r\n\r\n.textBlock{\r\n    display: flex;\r\n    padding: 5px;\r\n    flex-direction: column;\r\n}\r\n\r\n.textBlock h2 {\r\n    font-size: 18px;\r\n    padding: 15px 5px 15px 5px;\r\n}\r\n\r\n.textBlock p {\r\n    width: 200px;\r\n    padding: 12px 5px 12px 5px;\r\n\r\n}\r\n\r\n/* LikeAndMore */\r\n\r\n.LikeAndMore{\r\n    display: flex;\r\n    margin-left: auto;\r\n    margin-right: 10px;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.LikeAndMore{\r\n    padding: 5px;\r\n}\r\n\r\n.likes{\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    background-color: rgba(22, 22, 22, 0.299);\r\n    padding: 5px 25px 5px 5px;\r\n    border-radius: 10px;\r\n\r\n}\r\n\r\n.imgLike{\r\n    position: absolute;\r\n    left: 5px;\r\n    width: 25px;\r\n}\r\n.imgLike:hover{\r\n    width: 27px;\r\n}\r\n\r\n.countLike{\r\n    margin-top: 3px;\r\n    padding-left: 40px;\r\n}\r\n\r\n.readMore{\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n}\r\n\r\n.readMore:hover{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n/* textMoreContainer */\r\n\r\n.textMoreContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 5%;\r\n    width: 800px;\r\n    height: 450px;\r\n    border-radius: 15px;\r\n    border: 5px solid rgb(223, 156, 32);\r\n}\r\n\r\n.textMore{\r\n    width: 700px;\r\n    margin: 10px 0 0 20px; \r\n    font-size: 18px;\r\n    color: #fff;\r\n}\r\n\r\n.imgMore{\r\n    width: 100%;\r\n    height: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/fonts/AlfaSlabOne-Regular.ttf":
/*!**************************************************!*\
  !*** ./src/assets/fonts/AlfaSlabOne-Regular.ttf ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f53d46bc54f7a54ecfe489f153bbb71a.ttf");

/***/ }),

/***/ "./src/components/api/news.json":
/*!**************************************!*\
  !*** ./src/components/api/news.json ***!
  \**************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "src/components/api/news.json");

/***/ }),

/***/ "./public/img/btnSettingsClose.png":
/*!*****************************************!*\
  !*** ./public/img/btnSettingsClose.png ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/[1]-btnSettingsClose.png");

/***/ }),

/***/ "./public/img/dialogs_background_main_border.png":
/*!*******************************************************!*\
  !*** ./public/img/dialogs_background_main_border.png ***!
  \*******************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/[1]-dialogs_background_main_border.png");

/***/ }),

/***/ "./public/img/dialogs_icon_like.png":
/*!******************************************!*\
  !*** ./public/img/dialogs_icon_like.png ***!
  \******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/[1]-dialogs_icon_like.png");

/***/ }),

/***/ "./public/img/dialogs_icon_like_green.png":
/*!************************************************!*\
  !*** ./public/img/dialogs_icon_like_green.png ***!
  \************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/[1]-dialogs_icon_like_green.png");

/***/ }),

/***/ "./public/img/icon_news_medium.png":
/*!*****************************************!*\
  !*** ./public/img/icon_news_medium.png ***!
  \*****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/[1]-icon_news_medium.png");

/***/ }),

/***/ "./src/styles/App.css":
/*!****************************!*\
  !*** ./src/styles/App.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/nav.css":
/*!****************************!*\
  !*** ./src/styles/nav.css ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/nav.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/popupNews.css":
/*!**********************************!*\
  !*** ./src/styles/popupNews.css ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popupNews_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popupNews.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/popupNews.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popupNews_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popupNews_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--e5e79e"],
/******/ 			["./src/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_css-loader_dist_runtime_api_js--e5e79e"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktaskgamepoint"] = self["webpackChunktaskgamepoint"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=index.bundle.js.map