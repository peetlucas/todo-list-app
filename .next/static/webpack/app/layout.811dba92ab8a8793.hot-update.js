"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/redux/taskSlice.ts":
/*!********************************!*\
  !*** ./src/redux/taskSlice.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: function() { return /* binding */ addTask; },\n/* harmony export */   deleteTask: function() { return /* binding */ deleteTask; },\n/* harmony export */   editTask: function() { return /* binding */ editTask; },\n/* harmony export */   markOverdueTasks: function() { return /* binding */ markOverdueTasks; },\n/* harmony export */   selectTasks: function() { return /* binding */ selectTasks; },\n/* harmony export */   setTasks: function() { return /* binding */ setTasks; },\n/* harmony export */   toggleTask: function() { return /* binding */ toggleTask; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/localStorage */ \"(app-pages-browser)/./src/utils/localStorage.ts\");\n// src/store/tasksSlice.ts\n\n\nconst initialState = {\n    tasks: []\n};\nconst tasksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"tasks\",\n    initialState,\n    reducers: {\n        addTask: (state, action)=>{\n            state.tasks.push(action.payload);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        editTask: (state, action)=>{\n            state.tasks = state.tasks.map((task)=>task.id === action.payload.id ? {\n                    ...task,\n                    ...action.payload\n                } : task);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        toggleTask: (state, action)=>{\n            const task = state.tasks.find((t)=>t.id === action.payload);\n            if (task) {\n                task.isComplete = !task.isComplete;\n                (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n            }\n        },\n        deleteTask: (state, action)=>{\n            state.tasks = state.tasks.filter((task)=>task.id !== action.payload);\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        },\n        setTasks: (state, action)=>{\n            state.tasks = action.payload;\n        },\n        markOverdueTasks: (state)=>{\n            const currentTime = new Date().getTime();\n            state.tasks = state.tasks.map((task)=>{\n                if (task.dueDate && new Date(task.dueDate).getTime() < currentTime) {\n                    task.isComplete = true;\n                }\n                return task;\n            });\n            (0,_utils_localStorage__WEBPACK_IMPORTED_MODULE_0__.saveTasksToLocalStorage)(state.tasks);\n        }\n    }\n});\nconst { addTask, editTask, toggleTask, deleteTask, setTasks, markOverdueTasks } = tasksSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (tasksSlice.reducer);\n// Selector to get the tasks state\nconst selectTasks = (state)=>state.tasks.tasks;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9yZWR1eC90YXNrU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTBCO0FBQ29DO0FBRUU7QUFPaEUsTUFBTUUsZUFBMEI7SUFDOUJDLE9BQU8sRUFBRTtBQUNYO0FBRUEsTUFBTUMsYUFBYUosNkRBQVdBLENBQUM7SUFDN0JLLE1BQU07SUFDTkg7SUFDQUksVUFBVTtRQUNSQyxTQUFTLENBQUNDLE9BQU9DO1lBQ2ZELE1BQU1MLEtBQUssQ0FBQ08sSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1lBQy9CViw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7UUFDckM7UUFDQVMsVUFBVSxDQUFDSixPQUFPQztZQUNwQkQsTUFBTUwsS0FBSyxHQUFHSyxNQUFNTCxLQUFLLENBQUNVLEdBQUcsQ0FBQyxDQUFDQyxPQUM3QkEsS0FBS0MsRUFBRSxLQUFLTixPQUFPRSxPQUFPLENBQUNJLEVBQUUsR0FBRztvQkFBRSxHQUFHRCxJQUFJO29CQUFFLEdBQUdMLE9BQU9FLE9BQU87Z0JBQUMsSUFBSUc7WUFFbkViLDRFQUF1QkEsQ0FBQ08sTUFBTUwsS0FBSztRQUNqQztRQUNBYSxZQUFZLENBQUNSLE9BQU9DO1lBQ2xCLE1BQU1LLE9BQU9OLE1BQU1MLEtBQUssQ0FBQ2MsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVILEVBQUUsS0FBS04sT0FBT0UsT0FBTztZQUM1RCxJQUFJRyxNQUFNO2dCQUNSQSxLQUFLSyxVQUFVLEdBQUcsQ0FBQ0wsS0FBS0ssVUFBVTtnQkFDbENsQiw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7WUFDckM7UUFDRjtRQUNBaUIsWUFBWSxDQUFDWixPQUFPQztZQUNsQkQsTUFBTUwsS0FBSyxHQUFHSyxNQUFNTCxLQUFLLENBQUNrQixNQUFNLENBQUMsQ0FBQ1AsT0FBU0EsS0FBS0MsRUFBRSxLQUFLTixPQUFPRSxPQUFPO1lBQ3JFViw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7UUFDckM7UUFDQW1CLFVBQVUsQ0FBQ2QsT0FBT0M7WUFDaEJELE1BQU1MLEtBQUssR0FBR00sT0FBT0UsT0FBTztRQUM5QjtRQUNBWSxrQkFBa0IsQ0FBQ2Y7WUFDakIsTUFBTWdCLGNBQWMsSUFBSUMsT0FBT0MsT0FBTztZQUN0Q2xCLE1BQU1MLEtBQUssR0FBR0ssTUFBTUwsS0FBSyxDQUFDVSxHQUFHLENBQUMsQ0FBQ0M7Z0JBQzdCLElBQUlBLEtBQUthLE9BQU8sSUFBSSxJQUFJRixLQUFLWCxLQUFLYSxPQUFPLEVBQUVELE9BQU8sS0FBS0YsYUFBYTtvQkFDbEVWLEtBQUtLLFVBQVUsR0FBRztnQkFDcEI7Z0JBQ0EsT0FBT0w7WUFDVDtZQUNBYiw0RUFBdUJBLENBQUNPLE1BQU1MLEtBQUs7UUFDckM7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSSxPQUFPLEVBQUVLLFFBQVEsRUFBRUksVUFBVSxFQUFFSSxVQUFVLEVBQUVFLFFBQVEsRUFBQ0MsZ0JBQWdCLEVBQUcsR0FBR25CLFdBQVd3QixPQUFPLENBQUM7QUFDNUcsK0RBQWV4QixXQUFXeUIsT0FBTyxFQUFDO0FBRWxDLGtDQUFrQztBQUMzQixNQUFNQyxjQUFjLENBQUN0QixRQUFxQkEsTUFBTUwsS0FBSyxDQUFDQSxLQUFLLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHV4L3Rhc2tTbGljZS50cz8xY2U4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9zdG9yZS90YXNrc1NsaWNlLnRzXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vdXRpbHMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBJVGFzayB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgVGFza1N0YXRlIHtcbiAgdGFza3M6IElUYXNrW107XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogVGFza1N0YXRlID0ge1xuICB0YXNrczogW10sXG59O1xuXG5jb25zdCB0YXNrc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcInRhc2tzXCIsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBhZGRUYXNrOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVGFzaz4pID0+IHtcbiAgICAgIHN0YXRlLnRhc2tzLnB1c2goYWN0aW9uLnBheWxvYWQpO1xuICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUudGFza3MpO1xuICAgIH0sICAgIFxuICAgIGVkaXRUYXNrOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxJVGFzaz4pID0+IHtcbiAgc3RhdGUudGFza3MgPSBzdGF0ZS50YXNrcy5tYXAoKHRhc2spID0+XG4gICAgdGFzay5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQgPyB7IC4uLnRhc2ssIC4uLmFjdGlvbi5wYXlsb2FkIH0gOiB0YXNrXG4gICk7XG4gIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHN0YXRlLnRhc2tzKTsgICBcbiAgICB9LFxuICAgIHRvZ2dsZVRhc2s6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcbiAgICAgIGNvbnN0IHRhc2sgPSBzdGF0ZS50YXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICBpZiAodGFzaykge1xuICAgICAgICB0YXNrLmlzQ29tcGxldGUgPSAhdGFzay5pc0NvbXBsZXRlO1xuICAgICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZShzdGF0ZS50YXNrcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVUYXNrOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBzdGF0ZS50YXNrcyA9IHN0YXRlLnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gYWN0aW9uLnBheWxvYWQpO1xuICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUudGFza3MpO1xuICAgIH0sXG4gICAgc2V0VGFza3M6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPElUYXNrW10+KSA9PiB7XG4gICAgICBzdGF0ZS50YXNrcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgbWFya092ZXJkdWVUYXNrczogKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgc3RhdGUudGFza3MgPSBzdGF0ZS50YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSAmJiBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpLmdldFRpbWUoKSA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgIH0pO1xuICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2Uoc3RhdGUudGFza3MpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkVGFzaywgZWRpdFRhc2ssIHRvZ2dsZVRhc2ssIGRlbGV0ZVRhc2ssIHNldFRhc2tzLG1hcmtPdmVyZHVlVGFza3MsIH0gPSB0YXNrc1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCB0YXNrc1NsaWNlLnJlZHVjZXI7XG5cbi8vIFNlbGVjdG9yIHRvIGdldCB0aGUgdGFza3Mgc3RhdGVcbmV4cG9ydCBjb25zdCBzZWxlY3RUYXNrcyA9IChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS50YXNrcy50YXNrcztcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlIiwiaW5pdGlhbFN0YXRlIiwidGFza3MiLCJ0YXNrc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVGFzayIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJlZGl0VGFzayIsIm1hcCIsInRhc2siLCJpZCIsInRvZ2dsZVRhc2siLCJmaW5kIiwidCIsImlzQ29tcGxldGUiLCJkZWxldGVUYXNrIiwiZmlsdGVyIiwic2V0VGFza3MiLCJtYXJrT3ZlcmR1ZVRhc2tzIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImR1ZURhdGUiLCJhY3Rpb25zIiwicmVkdWNlciIsInNlbGVjdFRhc2tzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/redux/taskSlice.ts\n"));

/***/ })

});