"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatter = void 0;

var _getUserLocale = _interopRequireDefault(require("get-user-locale"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatterCache = {};
/* eslint-disable import/prefer-default-export */

/**
 * Gets Intl-based date formatter from formatter cache. If it doesn't exist in cache
 * just yet, it will be created on the fly.
 */

var getFormatter = function getFormatter(locale, options) {
  if (!locale) {
    // Default parameter is not enough as it does not protect us from null values
    // eslint-disable-next-line no-param-reassign
    locale = (0, _getUserLocale.default)();
  }

  var stringifiedOptions = JSON.stringify(options);

  if (!formatterCache[locale]) {
    formatterCache[locale] = {};
  }

  if (!formatterCache[locale][stringifiedOptions]) {
    formatterCache[locale][stringifiedOptions] = function (n) {
      return n.toLocaleString(locale, options);
    };
  }

  return formatterCache[locale][stringifiedOptions];
};

exports.getFormatter = getFormatter;