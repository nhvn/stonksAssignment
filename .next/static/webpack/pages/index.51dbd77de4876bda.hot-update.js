"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DataTable.js":
/*!*********************************!*\
  !*** ./components/DataTable.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst DataTable = (param)=>{\n    let { initialData } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Fetch data whenever filters or pagination changes\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"https://665621609f970b3b36c4625e.mockapi.io/users?page=\".concat(currentPage, \"&search=\").concat(searchTerm));\n            setData(response.data);\n        };\n        fetchData();\n    }, [\n        currentPage,\n        searchTerm\n    ]);\n    const handlePageChange = (page)=>{\n        setCurrentPage(page);\n    };\n    const handleSearch = (event)=>{\n        setSearchTerm(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-4/5 mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full divide-y divide-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-gray-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\",\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\",\n                                    children: \"Username\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"bg-white divide-y divide-gray-200\",\n                        children: data.slice(0, 20).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap text-sm text-gray-500\",\n                                        children: item.id\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"px-6 py-4 whitespace-nowrap text-sm text-gray-500\",\n                                        children: item.username\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex items-center\",\n                children: Array.from({\n                    length: 5\n                }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-3 py-1 mx-1 rounded-md \".concat(currentPage === index + 1 ? \"bg-gray-500 text-white\" : \"bg-gray-200 text-gray-700\"),\n                        onClick: ()=>handlePageChange(index + 1),\n                        children: index + 1\n                    }, index + 1, false, {\n                        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500\",\n                    placeholder: \"Search by username\",\n                    value: searchTerm,\n                    onChange: handleSearch\n                }, void 0, false, {\n                    fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alannhan/Desktop/Stonks Frontend/components/DataTable.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DataTable, \"4kEMaEkE2nW++T9g74LGNbxAJD4=\");\n_c = DataTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DataTable);\nvar _c;\n$RefreshReg$(_c, \"DataTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGFUYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNsQjtBQUUxQixNQUFNRyxZQUFZO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUNHO0lBQ2pDLE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLFlBQVlDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFFN0Msb0RBQW9EO0lBQ3BERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFlBQVk7WUFDaEIsTUFBTUMsV0FBVyxNQUFNVixpREFBUyxDQUFDLDBEQUFnRk8sT0FBdEJGLGFBQVksWUFBcUIsT0FBWEU7WUFDakhILFFBQVFNLFNBQVNQLElBQUk7UUFDdkI7UUFFQU07SUFDRixHQUFHO1FBQUNKO1FBQWFFO0tBQVc7SUFFNUIsTUFBTUssbUJBQW1CLENBQUNDO1FBQ3hCUCxlQUFlTztJQUNqQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJQLGNBQWNPLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNsQztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU1ELFdBQVU7O2tDQUNmLDhEQUFDRTt3QkFBTUYsV0FBVTtrQ0FDZiw0RUFBQ0c7OzhDQUNDLDhEQUFDQztvQ0FBR0osV0FBVTs4Q0FBaUY7Ozs7Ozs4Q0FHL0YsOERBQUNJO29DQUFHSixXQUFVOzhDQUFpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS25HLDhEQUFDSzt3QkFBTUwsV0FBVTtrQ0FDZGhCLEtBQUtzQixLQUFLLENBQUMsR0FBRyxJQUFJQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ3RCLDhEQUFDTDs7a0RBQ0MsOERBQUNNO3dDQUFHVCxXQUFVO2tEQUFxRFEsS0FBS0UsRUFBRTs7Ozs7O2tEQUMxRSw4REFBQ0Q7d0NBQUdULFdBQVU7a0RBQXFEUSxLQUFLRyxRQUFROzs7Ozs7OytCQUZ6RUgsS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdEIsOERBQUNYO2dCQUFJQyxXQUFVOzBCQUNaWSxNQUFNQyxJQUFJLENBQUM7b0JBQUVDLFFBQVE7Z0JBQUUsR0FBRyxDQUFDQyxHQUFHQyxzQkFDN0IsOERBQUNDO3dCQUVDakIsV0FBVyw2QkFBZ0gsT0FBbkZkLGdCQUFnQjhCLFFBQVEsSUFBSSwyQkFBMkI7d0JBQy9GRSxTQUFTLElBQU16QixpQkFBaUJ1QixRQUFRO2tDQUV2Q0EsUUFBUTt1QkFKSkEsUUFBUTs7Ozs7Ozs7OzswQkFRbkIsOERBQUNqQjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ21CO29CQUNDQyxNQUFLO29CQUNMcEIsV0FBVTtvQkFDVnFCLGFBQVk7b0JBQ1p2QixPQUFPVjtvQkFDUGtDLFVBQVUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FuRU1iO0tBQUFBO0FBcUVOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGF0YVRhYmxlLmpzPzdhMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IERhdGFUYWJsZSA9ICh7IGluaXRpYWxEYXRhIH0pID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gRmV0Y2ggZGF0YSB3aGVuZXZlciBmaWx0ZXJzIG9yIHBhZ2luYXRpb24gY2hhbmdlc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzY2NTYyMTYwOWY5NzBiM2IzNmM0NjI1ZS5tb2NrYXBpLmlvL3VzZXJzP3BhZ2U9JHtjdXJyZW50UGFnZX0mc2VhcmNoPSR7c2VhcmNoVGVybX1gKTtcbiAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbY3VycmVudFBhZ2UsIHNlYXJjaFRlcm1dKTtcblxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKHBhZ2UpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTZWFyY2hUZXJtKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctNC81IG14LWF1dG9cIj5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxuICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgSURcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAgICB7ZGF0YS5zbGljZSgwLCAyMCkubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj57aXRlbS5pZH08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwIHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPntpdGVtLnVzZXJuYW1lfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgMX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMgcHktMSBteC0xIHJvdW5kZWQtbWQgJHtjdXJyZW50UGFnZSA9PT0gaW5kZXggKyAxID8gJ2JnLWdyYXktNTAwIHRleHQtd2hpdGUnIDogJ2JnLWdyYXktMjAwIHRleHQtZ3JheS03MDAnfWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2hhbmdlKGluZGV4ICsgMSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBweC0zIHB5LTEgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSB1c2VybmFtZVwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJEYXRhVGFibGUiLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwicGFnZSIsImhhbmRsZVNlYXJjaCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5Iiwic2xpY2UiLCJtYXAiLCJpdGVtIiwidGQiLCJpZCIsInVzZXJuYW1lIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DataTable.js\n"));

/***/ })

});