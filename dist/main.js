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

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bg3-checklist/./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://bg3-checklist/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_quests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/quests */ \"./src/modules/quests.js\");\n\n\n\n\n(0,_modules_quests__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://bg3-checklist/./src/index.js?");

/***/ }),

/***/ "./src/modules/quests.js":
/*!*******************************!*\
  !*** ./src/modules/quests.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialise)\n/* harmony export */ });\n/* harmony import */ var _questData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questData.json */ \"./src/modules/questData.json\");\n\n\nconst main = _questData_json__WEBPACK_IMPORTED_MODULE_0__.acts[0].areas[0].quests;\nconst mainList = document.querySelector('section[data-area=\"Main Quests\"] > ul');\nconst rivington = _questData_json__WEBPACK_IMPORTED_MODULE_0__.acts[0].areas[1].quests;\nconst rivingtonList = document.querySelector('section[data-area=\"Rivington\"] > ul');\nconst lowerCity = _questData_json__WEBPACK_IMPORTED_MODULE_0__.acts[0].areas[2].quests;\nconst lowerCityList = document.querySelector('section[data-area=\"Lower City\"] > ul');\nconst hoh = _questData_json__WEBPACK_IMPORTED_MODULE_0__.acts[0].areas[3].quests;\nconst hohList = document.querySelector('section[data-area=\"House of Hope\"] > ul');\n\nfunction initialise() {\n  main.forEach((quest) => {\n    const checkbox = createQuestCheckbox(quest);\n    mainList.appendChild(checkbox);\n  });\n\n  rivington.forEach((quest) => {\n    const checkbox = createQuestCheckbox(quest);\n    rivingtonList.appendChild(checkbox);\n  });\n\n  lowerCity.forEach((quest) => {\n    const checkbox = createQuestCheckbox(quest);\n    lowerCityList.appendChild(checkbox);\n  });\n\n  hoh.forEach((quest) => {\n    const checkbox = createQuestCheckbox(quest);\n    hohList.appendChild(checkbox);\n  });\n\n  loadCheckboxStates();\n}\n\nfunction loadCheckboxStates() {\n  for (const quest of main) {\n    const checkbox = document.getElementById(quest.id);\n    if (checkbox) {\n      const savedState = localStorage.getItem(`quest_${quest.id}`);\n      if (savedState !== null) {\n        checkbox.checked = savedState === 'true';\n      }\n    }\n  }\n\n  for (const quest of rivington) {\n    const checkbox = document.getElementById(quest.id);\n    if (checkbox) {\n      const savedState = localStorage.getItem(`quest_${quest.id}`);\n      if (savedState !== null) {\n        checkbox.checked = savedState === 'true';\n      }\n    }\n  }\n\n  for (const quest of lowerCity) {\n    const checkbox = document.getElementById(quest.id);\n    if (checkbox) {\n      const savedState = localStorage.getItem(`quest_${quest.id}`);\n      if (savedState !== null) {\n        checkbox.checked = savedState === 'true';\n      }\n    }\n  }\n\n  for (const quest of hoh) {\n    const checkbox = document.getElementById(quest.id);\n    if (checkbox) {\n      const savedState = localStorage.getItem(`quest_${quest.id}`);\n      if (savedState !== null) {\n        checkbox.checked = savedState === 'true';\n      }\n    }\n  }\n}\n\nfunction saveCheckboxState(e) {\n  localStorage.setItem(`quest_${e.target.id}`, e.target.checked);\n}\n\nfunction createQuestCheckbox(quest) {\n  const input = document.createElement('input');\n  input.classList = 'checkbox';\n  input.id = quest.id;\n  input.name = quest.id;\n  input.type = 'checkbox';\n\n  input.addEventListener('change', (e) => saveCheckboxState(e));\n\n  const a = document.createElement('a');\n  a.href = quest.url;\n  a.target = '_blank';\n  a.textContent = quest.name;\n\n  const label = document.createElement('label');\n  label.classList = 'label';\n  label.htmlFor = quest.id;\n  label.appendChild(input);\n  label.appendChild(a);\n\n  const li = document.createElement('li');\n  li.appendChild(label);\n  return li;\n}\n\n\n//# sourceURL=webpack://bg3-checklist/./src/modules/quests.js?");

/***/ }),

/***/ "./src/modules/questData.json":
/*!************************************!*\
  !*** ./src/modules/questData.json ***!
  \************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"acts\":[{\"name\":\"Act 3\",\"areas\":[{\"name\":\"Main Quest\",\"quests\":[{\"id\":30001,\"name\":\"Confront the Elder Brain\",\"url\":\"https://bg3.wiki/wiki/Confront_the_Elder_Brain\"},{\"id\":30002,\"name\":\"Get Orin\\'s Netherstone\",\"url\":\"https://bg3.wiki/wiki/Get_Orin%27s_Netherstone\"},{\"id\":30003,\"name\":\"Get Gortash\\'s Netherstone\",\"url\":\"https://bg3.wiki/wiki/Get_Gortash%27s_Netherstone\"}]},{\"name\":\"Rivington\",\"quests\":[{\"id\":31001,\"name\":\"Deal with the Gnomes\",\"url\":\"https://bg3.wiki/wiki/Deal_with_the_Gnomes\"},{\"id\":31002,\"name\":\"Help the Devilish Ox\",\"url\":\"https://bg3.wiki/wiki/Help_the_Devilish_Ox\"},{\"id\":31003,\"name\":\"Find a way into Wyrm\\'s Rock Fortress\",\"url\":\"https://bg3.wiki/wiki/Find_a_way_into_Wyrm%27s_Rock_fortress\"},{\"id\":31004,\"name\":\"Find the Missing Letters\",\"url\":\"https://bg3.wiki/wiki/Find_the_Missing_Letters\"},{\"id\":31005,\"name\":\"Find the \\'Stern Librarian\\' Ffion\",\"url\":\"https://bg3.wiki/wiki/Find_the_%27Stern_Librarian%27_Ffion\"},{\"id\":31006,\"name\":\"Feed the Mind Flayer\",\"url\":\"https://bg3.wiki/wiki/Feed_the_Mind_Flayer\"},{\"id\":31007,\"name\":\"Free Counsellor Florrick\",\"url\":\"https://bg3.wiki/wiki/Free_Counselor_Florrick\"},{\"id\":31008,\"name\":\"Investigate the Suspicious Toys\",\"url\":\"https://bg3.wiki/wiki/Investigate_the_Suspicious_Toys\"},{\"id\":31009,\"name\":\"Solve the Open Hand Temple Murders\",\"url\":\"https://bg3.wiki/wiki/Solve_the_Open_Hand_Temple_Murders\"}]},{\"name\":\"Lower City\",\"quests\":[{\"id\":32001,\"name\":\"Aid the Underduke\",\"url\":\"https://bg3.wiki/wiki/Aid_the_Underduke\"},{\"id\":32002,\"name\":\"Avenge the Drowned\",\"url\":\"https://bg3.wiki/wiki/Avenge_the_Drowned\"},{\"id\":32003,\"name\":\"Avenge the Ironhands\",\"url\":\"https://bg3.wiki/wiki/Avenge_the_Ironhands\"},{\"id\":32003,\"name\":\"Save the Gondians\",\"url\":\"https://bg3.wiki/wiki/Save_the_Gondians\"},{\"id\":32004,\"name\":\"Find Mystic Carrion\\'s Servant\",\"url\":\"https://bg3.wiki/wiki/Find_Mystic_Carrion%27s_Servant\"},{\"id\":32005,\"name\":\"Help the Hag Survivors\",\"url\":\"https://bg3.wiki/wiki/Help_the_Hag_Survivors\"},{\"id\":32006,\"name\":\"Avenge the Hag Survivors\",\"url\":\"https://bg3.wiki/wiki/Avenge_the_Hag_Survivors\"},{\"id\":32007,\"name\":\"Find Dribbles the Clown\",\"url\":\"\"},{\"id\":32008,\"name\":\"Investigate the House of Grief\",\"url\":\"https://bg3.wiki/wiki/Investigate_the_House_of_Grief\"},{\"id\":32009,\"name\":\"Investigate Cazador\\'s Palace\",\"url\":\"https://bg3.wiki/wiki/Investigate_Cazador%27s_Palace\"},{\"id\":32010,\"name\":\"Rescue the Grand Duke\",\"url\":\"https://bg3.wiki/wiki/Rescue_the_Grand_Duke\"},{\"id\":32011,\"name\":\"Retrieve Omeluum\",\"url\":\"https://bg3.wiki/wiki/Retrieve_Omeluum\"},{\"id\":32012,\"name\":\"Return Rakath\\'s Gold\",\"url\":\"https://bg3.wiki/wiki/Return_Rakath%27s_Gold\"},{\"id\":32013,\"name\":\"Roveer\\'s Storehouse\",\"url\":\"https://bg3.wiki/wiki/Roveer%27s_Storehouse\"},{\"id\":32014,\"name\":\"Save Vanra\",\"url\":\"https://bg3.wiki/wiki/Save_Vanra\"},{\"id\":32015,\"name\":\"Stop the Presses\",\"url\":\"https://bg3.wiki/wiki/Stop_the_Presses\"},{\"id\":32016,\"name\":\"Visit the Emperor\\'s Old Hideout\",\"url\":\"https://bg3.wiki/wiki/Visit_the_Emperor%27s_Old_Hideout\"}]},{\"name\":\"House of Hope\",\"quests\":[{\"id\":33001,\"name\":\"Acquire the Gauntlets for Helsik\",\"url\":\"https://bg3.wiki/wiki/Acquire_the_Gauntlets_for_Helsik\"},{\"id\":33002,\"name\":\"Save Hope\",\"url\":\"https://bg3.wiki/wiki/Save_Hope\"}]}]}]}');\n\n//# sourceURL=webpack://bg3-checklist/./src/modules/questData.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;