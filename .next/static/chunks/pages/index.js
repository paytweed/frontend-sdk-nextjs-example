/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnoamassulin%2FDesktop%2Ffrontend-sdk-nextjs-example%2Fpages%2Findex.tsx&page=%2F!":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnoamassulin%2FDesktop%2Ffrontend-sdk-nextjs-example%2Fpages%2Findex.tsx&page=%2F! ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm5vYW1hc3N1bGluJTJGRGVza3RvcCUyRmZyb250ZW5kLXNkay1uZXh0anMtZXhhbXBsZSUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/MDZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnoamassulin%2FDesktop%2Ffrontend-sdk-nextjs-example%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./components/Wallet/components/CreateWallet/index.tsx":
/*!*************************************************************!*\
  !*** ./components/Wallet/components/CreateWallet/index.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paytweed/frontend-sdk-react */ \"./node_modules/@paytweed/frontend-sdk-react/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CreateWallet = ()=>{\n    _s();\n    const [showSetPin, setShowPin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(\"\");\n    const onUserChange = async ()=>{\n        const body = JSON.stringify({\n            email: emailRef.current\n        });\n        await fetch(\"http://localhost:3010/user\", {\n            method: \"POST\",\n            body,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        setShowPin(true);\n    };\n    const onWalletCreated = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        window.location.href = \"/\";\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: showSetPin ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.Widget.Wallet.Create, {\n            onSuccess: onWalletCreated\n        }, void 0, false, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n            lineNumber: 21,\n            columnNumber: 19\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Welcome to Tweed Sandbox\"\n                }, void 0, false, {\n                    fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"please Enter your Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    placeholder: \"email\",\n                    onChange: (event)=>emailRef.current = event.target.value\n                }, void 0, false, {\n                    fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"submit\",\n                    onClick: onUserChange\n                }, void 0, false, {\n                    fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/components/CreateWallet/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(CreateWallet, \"FpwxHkGbDhtLqHf5t/oQy69lA/M=\");\n_c = CreateWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateWallet);\nvar _c;\n$RefreshReg$(_c, \"CreateWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhbGxldC9jb21wb25lbnRzL0NyZWF0ZVdhbGxldC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFDQTtBQUVyRCxNQUFNSSxlQUFlLElBQU07O0lBQ3ZCLE1BQU0sQ0FBQ0MsWUFBWUMsV0FBWSxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU1JLFdBQVdMLDZDQUFNQSxDQUFDO0lBQ3hCLE1BQU1NLGVBQWUsVUFBWTtRQUM3QixNQUFNQyxPQUFPQyxLQUFLQyxTQUFTLENBQUM7WUFBQ0MsT0FBT0wsU0FBU00sT0FBTztRQUFBO1FBQ3BELE1BQU1DLE1BQU0sOEJBQThCO1lBQUNDLFFBQVE7WUFBT047WUFBTU8sU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDbEg7UUFDSVYsV0FBVyxJQUFJO0lBQ25CO0lBRUEsTUFBTVcsa0JBQWtCaEIsa0RBQVdBLENBQUMsSUFBTTtRQUN0Q2lCLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCLEdBQUcsRUFBRTtJQUlQLHFCQUFPO2tCQUNOZiwyQkFBYSw4REFBQ0wsOEVBQW9CO1lBQUN1QixXQUFXTjs7Ozs7c0NBQzdDLDhEQUFDTzs7OEJBQ0MsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFNQyxhQUFZO29CQUFRQyxVQUFVLENBQUNDLFFBQVV2QixTQUFTTSxPQUFPLEdBQUdpQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs4QkFDckYsOERBQUNMO29CQUFNTSxNQUFLO29CQUFTQyxTQUFTMUI7Ozs7Ozs7Ozs7O3FCQUM1Qjs7QUFHVjtHQTFCTUo7S0FBQUE7QUE0Qk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxsZXQvY29tcG9uZW50cy9DcmVhdGVXYWxsZXQvaW5kZXgudHN4PzNhZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSBcIkBwYXl0d2VlZC9mcm9udGVuZC1zZGstcmVhY3RcIlxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBDcmVhdGVXYWxsZXQgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Nob3dTZXRQaW4sIHNldFNob3dQaW4gXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IGVtYWlsUmVmID0gdXNlUmVmKCcnKVxuICAgIGNvbnN0IG9uVXNlckNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtlbWFpbDogZW1haWxSZWYuY3VycmVudH0pXG4gICAgICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDEwL3VzZXJcIiwge21ldGhvZDogJ1BPU1QnLGJvZHksIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KVxuICAgICAgICBzZXRTaG93UGluKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3Qgb25XYWxsZXRDcmVhdGVkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgICAgfSwgW10pO1xuICAgIFxuXG5cbiAgICByZXR1cm4gPD5cbiAgICB7c2hvd1NldFBpbiA/IDxXaWRnZXQuV2FsbGV0LkNyZWF0ZSBvblN1Y2Nlc3M9e29uV2FsbGV0Q3JlYXRlZH0gLz5cbiAgICA6IDxkaXY+XG4gICAgICAgIDxoMT5XZWxjb21lIHRvIFR3ZWVkIFNhbmRib3g8L2gxPlxuICAgICAgICA8aDM+cGxlYXNlIEVudGVyIHlvdXIgRW1haWw8L2gzPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGVtYWlsUmVmLmN1cnJlbnQgPSBldmVudC50YXJnZXQudmFsdWV9IC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17b25Vc2VyQ2hhbmdlfSAvPlxuICAgIDwvZGl2Pn1cbiAgICA8Lz5cbiAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVdhbGxldCJdLCJuYW1lcyI6WyJXaWRnZXQiLCJ1c2VDYWxsYmFjayIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ3JlYXRlV2FsbGV0Iiwic2hvd1NldFBpbiIsInNldFNob3dQaW4iLCJlbWFpbFJlZiIsIm9uVXNlckNoYW5nZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJjdXJyZW50IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwib25XYWxsZXRDcmVhdGVkIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiV2FsbGV0IiwiQ3JlYXRlIiwib25TdWNjZXNzIiwiZGl2IiwiaDEiLCJoMyIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wallet/components/CreateWallet/index.tsx\n"));

/***/ }),

/***/ "./components/Wallet/index.tsx":
/*!*************************************!*\
  !*** ./components/Wallet/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paytweed/frontend-sdk-react */ \"./node_modules/@paytweed/frontend-sdk-react/src/index.js\");\n/* harmony import */ var _components_CreateWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CreateWallet */ \"./components/Wallet/components/CreateWallet/index.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst WalletData = ()=>{\n    _s();\n    const { data: address , error: errorAddress , loading: loadingAdderess  } = _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useWalletAddress({\n        blockchainId: \"ethereum\"\n    });\n    const { data: cryptoBalance , error: errorBalance , loading: loadingBalance  } = _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useCryptoBalance();\n    const { data  } = _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useBlockchainList();\n    const sdk = _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useTweedFrontendSDK();\n    console.log(data);\n    if (loadingAdderess || loadingBalance) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 49\n    }, undefined);\n    if (errorAddress || errorBalance) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Error: \",\n            errorAddress || errorBalance\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 44\n    }, undefined);\n    const onLogout = async ()=>{\n        await sdk.wallet.logout();\n    };\n    const onSendTransaction = async ()=>{\n        const destinationAddress = await sdk.wallet.getAddress({\n            blockchainId: \"ethereum\"\n        });\n        await sdk.coin.sendToWallet({\n            walletAddress: destinationAddress,\n            cryptoCurrencyAmount: \"0\",\n            blockchainId: \"ethereum\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Address: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onSendTransaction,\n                children: \"Send Transaction\"\n            }, void 0, false, {\n                fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onLogout,\n                children: \"Dissconnect\"\n            }, void 0, false, {\n                fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WalletData, \"cnspEdZk1clFBE3dsdscDIwUjyE=\", false, function() {\n    return [\n        _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useWalletAddress,\n        _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useCryptoBalance,\n        _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useBlockchainList,\n        _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useTweedFrontendSDK\n    ];\n});\n_c = WalletData;\nconst Wallet = ()=>{\n    _s1();\n    const { data: walletExists , error , loading  } = _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useWalletExists();\n    const renderContent = ()=>{\n        if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n            lineNumber: 41,\n            columnNumber: 25\n        }, undefined);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error: \",\n                error\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 23\n        }, undefined);\n        return walletExists ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletData, {}, void 0, false, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/noamassulin/Desktop/frontend-sdk-nextjs-example/components/Wallet/index.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined);\n    };\n    return renderContent();\n};\n_s1(Wallet, \"Ge07ZJ/3eKnlZPEpqxMOkz8KN8Q=\", false, function() {\n    return [\n        _paytweed_frontend_sdk_react__WEBPACK_IMPORTED_MODULE_1__.hooks.useWalletExists\n    ];\n});\n_c1 = Wallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wallet);\nvar _c, _c1;\n$RefreshReg$(_c, \"WalletData\");\n$RefreshReg$(_c1, \"Wallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhbGxldC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxRDtBQUNBO0FBRXJELE1BQU1FLGFBQWEsSUFBTTs7SUFDdkIsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUVDLE9BQU9DLGFBQVksRUFBRUMsU0FBU0MsZ0JBQWUsRUFBRSxHQUFHUixnRkFBc0IsQ0FBQztRQUFDVSxjQUFjO0lBQVU7SUFDekgsTUFBTSxFQUFFUCxNQUFNUSxjQUFhLEVBQUVOLE9BQU9PLGFBQVksRUFBRUwsU0FBU00sZUFBYyxFQUFFLEdBQUdiLGdGQUFzQjtJQUNwRyxNQUFNLEVBQUNHLEtBQUksRUFBQyxHQUFHSCxpRkFBdUI7SUFDdEMsTUFBTWdCLE1BQU1oQixtRkFBeUI7SUFFckNrQixRQUFRQyxHQUFHLENBQUNoQjtJQUVaLElBQUlLLG1CQUFtQkssZ0JBQWdCLHFCQUFPLDhEQUFDTztrQkFBSTs7Ozs7O0lBQ25ELElBQUlkLGdCQUFnQk0sY0FBYyxxQkFBTyw4REFBQ1E7O1lBQUk7WUFBUWQsZ0JBQWdCTTs7Ozs7OztJQUV0RSxNQUFNUyxXQUFXLFVBQVk7UUFDM0IsTUFBTUwsSUFBSU0sTUFBTSxDQUFDQyxNQUFNO0lBQ3pCO0lBRUEsTUFBTUMsb0JBQW9CLFVBQVk7UUFDcEMsTUFBTUMscUJBQXFCLE1BQU1ULElBQUlNLE1BQU0sQ0FBQ0ksVUFBVSxDQUFDO1lBQUNoQixjQUFjO1FBQVU7UUFDL0UsTUFBTU0sSUFBSVcsSUFBSSxDQUFDQyxZQUFZLENBQUM7WUFBQ0MsZUFBZUo7WUFBb0JLLHNCQUFzQjtZQUFLcEIsY0FBYztRQUFVO0lBQ3RIO0lBS0EscUJBQ0U7OzBCQUNFLDhEQUFDVTs7b0JBQUk7b0JBQVVoQjs7Ozs7OzswQkFFZiw4REFBQzJCO2dCQUFPQyxTQUFTUjswQkFBbUI7Ozs7OzswQkFDcEMsOERBQUNPO2dCQUFPQyxTQUFTWDswQkFBVTs7Ozs7Ozs7QUFHakM7R0EvQk1uQjs7UUFDcUVGLGdGQUFzQlM7UUFDakJULGdGQUFzQmM7UUFDckZkLGlGQUF1QmU7UUFDMUJmLG1GQUF5QmlCOzs7S0FKakNmO0FBaUNOLE1BQU0rQixTQUFTLElBQU07O0lBQ25CLE1BQU0sRUFBRTlCLE1BQU0rQixhQUFZLEVBQUU3QixNQUFLLEVBQUVFLFFBQU8sRUFBRSxHQUFHUCwrRUFBcUI7SUFFcEUsTUFBTW9DLGdCQUFnQixJQUFNO1FBQzFCLElBQUk3QixTQUFTLHFCQUFPLDhEQUFDYTtzQkFBSTs7Ozs7O1FBQ3pCLElBQUlmLE9BQU8scUJBQU8sOERBQUNlOztnQkFBSTtnQkFBUWY7Ozs7Ozs7UUFDL0IsT0FBTzZCLDZCQUNMLDhEQUFDaEM7Ozs7c0NBRUQsOERBQUNELGdFQUFZQTs7OztxQkFDZDtJQUNIO0lBRUEsT0FBT21DO0FBQ1Q7SUFkTUg7O1FBQzJDakMsK0VBQXFCbUM7OztNQURoRUY7QUFnQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XYWxsZXQvaW5kZXgudHN4PzYxNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tIFwiQHBheXR3ZWVkL2Zyb250ZW5kLXNkay1yZWFjdFwiO1xuaW1wb3J0IENyZWF0ZVdhbGxldCBmcm9tIFwiLi9jb21wb25lbnRzL0NyZWF0ZVdhbGxldFwiO1xuXG5jb25zdCBXYWxsZXREYXRhID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IGFkZHJlc3MsIGVycm9yOiBlcnJvckFkZHJlc3MsIGxvYWRpbmc6IGxvYWRpbmdBZGRlcmVzcyB9ID0gaG9va3MudXNlV2FsbGV0QWRkcmVzcyh7YmxvY2tjaGFpbklkOiAnZXRoZXJldW0nfSk7XG4gIGNvbnN0IHsgZGF0YTogY3J5cHRvQmFsYW5jZSwgZXJyb3I6IGVycm9yQmFsYW5jZSwgbG9hZGluZzogbG9hZGluZ0JhbGFuY2UgfSA9IGhvb2tzLnVzZUNyeXB0b0JhbGFuY2UoKTtcbiAgY29uc3Qge2RhdGF9ID0gaG9va3MudXNlQmxvY2tjaGFpbkxpc3QoKVxuICBjb25zdCBzZGsgPSBob29rcy51c2VUd2VlZEZyb250ZW5kU0RLKClcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIGlmIChsb2FkaW5nQWRkZXJlc3MgfHwgbG9hZGluZ0JhbGFuY2UpIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gIGlmIChlcnJvckFkZHJlc3MgfHwgZXJyb3JCYWxhbmNlKSByZXR1cm4gPGRpdj5FcnJvcjoge2Vycm9yQWRkcmVzcyB8fCBlcnJvckJhbGFuY2V9PC9kaXY+O1xuXG4gIGNvbnN0IG9uTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNkay53YWxsZXQubG9nb3V0KClcbiAgfVxuICBcbiAgY29uc3Qgb25TZW5kVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGVzdGluYXRpb25BZGRyZXNzID0gYXdhaXQgc2RrLndhbGxldC5nZXRBZGRyZXNzKHtibG9ja2NoYWluSWQ6ICdldGhlcmV1bSd9KVxuICAgICBhd2FpdCBzZGsuY29pbi5zZW5kVG9XYWxsZXQoe3dhbGxldEFkZHJlc3M6IGRlc3RpbmF0aW9uQWRkcmVzcywgY3J5cHRvQ3VycmVuY3lBbW91bnQ6ICcwJywgYmxvY2tjaGFpbklkOiAnZXRoZXJldW0nfSlcbiAgfVxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+QWRkcmVzczoge2FkZHJlc3N9PC9kaXY+XG4gICAgICB7LyogPGRpdj5CYWxhbmNlIEVUSDoge2NyeXB0b0JhbGFuY2U/LkVUSC5tYXB9PC9kaXY+ICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblNlbmRUcmFuc2FjdGlvbn0+U2VuZCBUcmFuc2FjdGlvbjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dH0+RGlzc2Nvbm5lY3Q8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFdhbGxldCA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiB3YWxsZXRFeGlzdHMsIGVycm9yLCBsb2FkaW5nIH0gPSBob29rcy51c2VXYWxsZXRFeGlzdHMoKTtcblxuICBjb25zdCByZW5kZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+O1xuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RXJyb3I6IHtlcnJvcn08L2Rpdj47XG4gICAgcmV0dXJuIHdhbGxldEV4aXN0cyA/IChcbiAgICAgIDxXYWxsZXREYXRhIC8+XG4gICAgKSA6IChcbiAgICAgIDxDcmVhdGVXYWxsZXQgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiByZW5kZXJDb250ZW50KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYWxsZXQ7XG4iXSwibmFtZXMiOlsiaG9va3MiLCJDcmVhdGVXYWxsZXQiLCJXYWxsZXREYXRhIiwiZGF0YSIsImFkZHJlc3MiLCJlcnJvciIsImVycm9yQWRkcmVzcyIsImxvYWRpbmciLCJsb2FkaW5nQWRkZXJlc3MiLCJ1c2VXYWxsZXRBZGRyZXNzIiwiYmxvY2tjaGFpbklkIiwiY3J5cHRvQmFsYW5jZSIsImVycm9yQmFsYW5jZSIsImxvYWRpbmdCYWxhbmNlIiwidXNlQ3J5cHRvQmFsYW5jZSIsInVzZUJsb2NrY2hhaW5MaXN0Iiwic2RrIiwidXNlVHdlZWRGcm9udGVuZFNESyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJvbkxvZ291dCIsIndhbGxldCIsImxvZ291dCIsIm9uU2VuZFRyYW5zYWN0aW9uIiwiZGVzdGluYXRpb25BZGRyZXNzIiwiZ2V0QWRkcmVzcyIsImNvaW4iLCJzZW5kVG9XYWxsZXQiLCJ3YWxsZXRBZGRyZXNzIiwiY3J5cHRvQ3VycmVuY3lBbW91bnQiLCJidXR0b24iLCJvbkNsaWNrIiwiV2FsbGV0Iiwid2FsbGV0RXhpc3RzIiwidXNlV2FsbGV0RXhpc3RzIiwicmVuZGVyQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Wallet/index.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Wallet */ \"./components/Wallet/index.tsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_Wallet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFDekMsK0RBQWVBLDBEQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXYWxsZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2FsbGV0XCJcbmV4cG9ydCBkZWZhdWx0IFdhbGxldFxuIl0sIm5hbWVzIjpbIldhbGxldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fnoamassulin%2FDesktop%2Ffrontend-sdk-nextjs-example%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);