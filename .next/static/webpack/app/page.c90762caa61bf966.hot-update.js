"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/redux/taskSlice.ts":
/*!********************************!*\
  !*** ./src/redux/taskSlice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: function() { return /* binding */ addTask; },\n/* harmony export */   deleteTask: function() { return /* binding */ deleteTask; },\n/* harmony export */   editTask: function() { return /* binding */ editTask; },\n/* harmony export */   markOverdueTasks: function() { return /* binding */ markOverdueTasks; },\n/* harmony export */   selectTasks: function() { return /* binding */ selectTasks; },\n/* harmony export */   setTasks: function() { return /* binding */ setTasks; },\n/* harmony export */   toggleTask: function() { return /* binding */ toggleTask; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorage */ \"(app-pages-browser)/./src/utils/localStorage.ts\");\n// src/store/tasksSlice.ts\n\n\nconst initialState = {\n    tasks: []\n};\nconst tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"tasks\",\n    initialState,\n    reducers: {\n        addTask: (state, action)=>{\n            state.tasks.push(action.payload);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        editTask: (state, action)=>{\n            state.tasks = state.tasks.map((task)=>task.id === action.payload.id ? {\n                    ...task,\n                    ...action.payload\n                } : task);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        toggleTask: (state, action)=>{\n            const task = state.tasks.find((t)=>t.id === action.payload);\n            if (task) {\n                task.isComplete = !task.isComplete;\n                (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n            }\n        },\n        deleteTask: (state, action)=>{\n            state.tasks = state.tasks.filter((task)=>task.id !== action.payload);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        setTasks: (state, action)=>{\n            state.tasks = action.payload;\n        },\n        markOverdueTasks: (state)=>{\n            const currentTime = new Date().getTime();\n            state.tasks.forEach((task)=>{\n                if (task.dueDate) {\n                    const taskDueTime = new Date(task.dueDate).getTime();\n                    if (!task.isComplete && taskDueTime < currentTime) {\n                        task.isComplete = true;\n                    } else if (taskDueTime - currentTime <= 2 * 60 * 60 * 1000) {\n                        task.priority = \"high\";\n                    }\n                }\n            });\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        }\n    }\n});\nconst { addTask, editTask, toggleTask, deleteTask, setTasks, markOverdueTasks } = tasksSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasksSlice.reducer);\n// Selector to get the tasks state\nconst selectTasks = (state)=>state.tasks.tasks;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC90YXNrU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQ29DO0FBRUU7QUFPaEUsTUFBTUUsZUFBMEI7SUFDOUJDLE9BQU8sRUFBRTtBQUNYO0FBRUEsTUFBTUMsYUFBYUosNkRBQVdBLENBQUM7SUFDN0JLLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxTQUFTLENBQUNDLE9BQU9DO1lBQ2ZELE1BQU1MLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1lBQy9CViw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7UUFDckM7UUFDQVMsVUFBVSxDQUFDSixPQUFPQztZQUNwQkQsTUFBTUwsS0FBSyxHQUFHSyxNQUFNTCxLQUFLLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxPQUM3QkEsS0FBS0MsRUFBRSxLQUFLTixPQUFPRSxPQUFPLENBQUNJLEVBQUUsR0FBRztvQkFBRSxHQUFHRCxJQUFJO29CQUFFLEdBQUdMLE9BQU9FLE9BQU87Z0JBQUMsSUFBSUc7WUFFbkViLDRFQUF1QkEsQ0FBQ08sTUFBTUwsS0FBSztRQUNqQztRQUNBYSxZQUFZLENBQUNSLE9BQU9DO1lBQ2xCLE1BQU1LLE9BQU9OLE1BQU1MLEtBQUssQ0FBQ2MsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVILEVBQUUsS0FBS04sT0FBT0UsT0FBTztZQUM1RCxJQUFJRyxNQUFNO2dCQUNSQSxLQUFLSyxVQUFVLEdBQUcsQ0FBQ0wsS0FBS0ssVUFBVTtnQkFDbENsQiw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7WUFDckM7UUFDRjtRQUNBaUIsWUFBWSxDQUFDWixPQUFPQztZQUNsQkQsTUFBTUwsS0FBSyxHQUFHSyxNQUFNTCxLQUFLLENBQUNrQixNQUFNLENBQUMsQ0FBQ1AsT0FBU0EsS0FBS0MsRUFBRSxLQUFLTixPQUFPRSxPQUFPO1lBQ3JFViw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7UUFDckM7UUFDQW1CLFVBQVUsQ0FBQ2QsT0FBT0M7WUFDaEJELE1BQU1MLEtBQUssR0FBR00sT0FBT0UsT0FBTztRQUM5QjtRQUNBWSxrQkFBa0IsQ0FBQ2Y7WUFDakIsTUFBTWdCLGNBQWMsSUFBSUMsT0FBT0MsT0FBTztZQUN0Q2xCLE1BQU1MLEtBQUssQ0FBQ3dCLE9BQU8sQ0FBQyxDQUFDYjtnQkFDbkIsSUFBSUEsS0FBS2MsT0FBTyxFQUFFO29CQUNoQixNQUFNQyxjQUFjLElBQUlKLEtBQUtYLEtBQUtjLE9BQU8sRUFBRUYsT0FBTztvQkFDbEQsSUFBSSxDQUFDWixLQUFLSyxVQUFVLElBQUlVLGNBQWNMLGFBQWE7d0JBQ2pEVixLQUFLSyxVQUFVLEdBQUc7b0JBQ3BCLE9BQU8sSUFBSVUsY0FBY0wsZUFBZSxJQUFJLEtBQUssS0FBSyxNQUFNO3dCQUMxRFYsS0FBS2dCLFFBQVEsR0FBRztvQkFDbEI7Z0JBQ0Y7WUFDRjtZQUNBN0IsNEVBQXVCQSxDQUFDTyxNQUFNTCxLQUFLO1FBQ3JDO0lBQ0Y7QUFDRjtBQUVPLE1BQU0sRUFBRUksT0FBTyxFQUFFSyxRQUFRLEVBQUVJLFVBQVUsRUFBRUksVUFBVSxFQUFFRSxRQUFRLEVBQUNDLGdCQUFnQixFQUFHLEdBQUduQixXQUFXMkIsT0FBTyxDQUFDO0FBQzVHLCtEQUFlM0IsV0FBVzRCLE9BQU8sRUFBQztBQUVsQyxrQ0FBa0M7QUFDM0IsTUFBTUMsY0FBYyxDQUFDekIsUUFBcUJBLE1BQU1MLEtBQUssQ0FBQ0EsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC90YXNrU2xpY2UudHM/MWNlOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvc3RvcmUvdGFza3NTbGljZS50c1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgSVRhc2sgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFRhc2tTdGF0ZSB7XG4gIHRhc2tzOiBJVGFza1tdO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFRhc2tTdGF0ZSA9IHtcbiAgdGFza3M6IFtdLFxufTtcblxuY29uc3QgdGFza3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogXCJ0YXNrc1wiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgYWRkVGFzazogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVRhc2s+KSA9PiB7XG4gICAgICBzdGF0ZS50YXNrcy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHN0YXRlLnRhc2tzKTtcbiAgICB9LCAgICBcbiAgICBlZGl0VGFzazogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVRhc2s+KSA9PiB7XG4gIHN0YXRlLnRhc2tzID0gc3RhdGUudGFza3MubWFwKCh0YXNrKSA9PlxuICAgIHRhc2suaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkID8geyAuLi50YXNrLCAuLi5hY3Rpb24ucGF5bG9hZCB9IDogdGFza1xuICApO1xuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZShzdGF0ZS50YXNrcyk7ICAgXG4gICAgfSxcbiAgICB0b2dnbGVUYXNrOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBjb25zdCB0YXNrID0gc3RhdGUudGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gIXRhc2suaXNDb21wbGV0ZTtcbiAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUudGFza3MpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlVGFzazogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xuICAgICAgc3RhdGUudGFza3MgPSBzdGF0ZS50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHN0YXRlLnRhc2tzKTtcbiAgICB9LFxuICAgIHNldFRhc2tzOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVGFza1tdPikgPT4ge1xuICAgICAgc3RhdGUudGFza3MgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIG1hcmtPdmVyZHVlVGFza3M6IChzdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHN0YXRlLnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgICAgICAgIGNvbnN0IHRhc2tEdWVUaW1lID0gbmV3IERhdGUodGFzay5kdWVEYXRlKS5nZXRUaW1lKCk7XG4gICAgICAgICAgaWYgKCF0YXNrLmlzQ29tcGxldGUgJiYgdGFza0R1ZVRpbWUgPCBjdXJyZW50VGltZSkge1xuICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhc2tEdWVUaW1lIC0gY3VycmVudFRpbWUgPD0gMiAqIDYwICogNjAgKiAxMDAwKSB7XG4gICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gJ2hpZ2gnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZShzdGF0ZS50YXNrcyk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyBhZGRUYXNrLCBlZGl0VGFzaywgdG9nZ2xlVGFzaywgZGVsZXRlVGFzaywgc2V0VGFza3MsbWFya092ZXJkdWVUYXNrcywgfSA9IHRhc2tzU2xpY2UuYWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IHRhc2tzU2xpY2UucmVkdWNlcjtcblxuLy8gU2VsZWN0b3IgdG8gZ2V0IHRoZSB0YXNrcyBzdGF0ZVxuZXhwb3J0IGNvbnN0IHNlbGVjdFRhc2tzID0gKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnRhc2tzLnRhc2tzO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwic2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UiLCJpbml0aWFsU3RhdGUiLCJ0YXNrcyIsInRhc2tzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUYXNrIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsImVkaXRUYXNrIiwibWFwIiwidGFzayIsImlkIiwidG9nZ2xlVGFzayIsImZpbmQiLCJ0IiwiaXNDb21wbGV0ZSIsImRlbGV0ZVRhc2siLCJmaWx0ZXIiLCJzZXRUYXNrcyIsIm1hcmtPdmVyZHVlVGFza3MiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiZm9yRWFjaCIsImR1ZURhdGUiLCJ0YXNrRHVlVGltZSIsInByaW9yaXR5IiwiYWN0aW9ucyIsInJlZHVjZXIiLCJzZWxlY3RUYXNrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/taskSlice.ts\n"));

/***/ })

});