'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getCountryCodes = getCountryCodes;
exports.getCountryCodeForFlag = getCountryCodeForFlag;
// See the table of officially assigned ISO 3166-1 alpha-2 country codes:
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Current_codes
var SKIP_COUNTRIES = exports.SKIP_COUNTRIES = [
// "001" means "Non-Geographical Entity" ("No country", "International").
'001'];

function getCountryCodes(labels) {
	// Includes all country codes (excluding "ZZ" for "International").
	//
	// From ISO 3166-1:2006(E/F):
	//
	// 8.1.3   User-assigned code elements
	//
	// If users need code elements to represent country names not included
	// in this part of ISO 3166, the series of letters AA, QM to QZ, XA
	// to XZ, and ZZ, and the series AAA to AAZ, QMA to QZZ, XAA to XZZ,
	// and ZZA to ZZZ respectively, and the series of numbers 900 to 999
	// are available. These users should inform the ISO 3166/MA of such use.
	//
	return Object.keys(labels).filter(function (key) {
		return key.length === 2 && key.toUpperCase() === key && key !== 'ZZ' && SKIP_COUNTRIES.indexOf(key) < 0;
	});
}

function getCountryCodeForFlag(country) {
	switch (country) {
		// "Ascension Island".
		// The flag is missing for it:
		// https://lipis.github.io/flag-icon-css/flags/4x3/ac.svg
		// GitHub issue:
		// https://github.com/lipis/flag-icon-css/issues/537
		// Using "SH" flag as a temporary substitute
		// because previously "AC" and "TA" were parts of "SH".
		case 'AC':
			return 'SH';

		// "Tristan da Cunha".
		// The flag is missing for it:
		// https://lipis.github.io/flag-icon-css/flags/4x3/ta.svg
		// GitHub issue:
		// https://github.com/lipis/flag-icon-css/issues/537
		// Using "SH" flag as a temporary substitute
		// because previously "AC" and "TA" were parts of "SH".
		case 'TA':
			return 'SH';

		default:
			return country;
	}
}
//# sourceMappingURL=countries.js.map