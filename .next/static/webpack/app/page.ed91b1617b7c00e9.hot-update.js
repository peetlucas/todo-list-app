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

/***/ "(app-pages-browser)/./src/components/AddTask.tsx":
/*!************************************!*\
  !*** ./src/components/AddTask.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/taskSlice */ \"(app-pages-browser)/./src/redux/taskSlice.ts\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ \"(app-pages-browser)/./node_modules/react-transition-group/esm/Transition.js\");\n/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuidv4 */ \"(app-pages-browser)/./node_modules/uuidv4/build/lib/uuidv4.js\");\n// AddTask.tsx\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AddTask = ()=>{\n    _s();\n    const [taskTitle, setTaskTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskDescription, setTaskDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskDueDate, setTaskDueDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [taskPriority, setTaskPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"medium\");\n    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const handleTitleChange = (event)=>{\n        setTaskTitle(event.target.value);\n    };\n    const handleDescriptionChange = (event)=>{\n        setTaskDescription(event.target.value);\n    };\n    const handleDueDateChange = (event)=>{\n        setTaskDueDate(event.target.value);\n    };\n    const handlePriorityChange = (event)=>{\n        setTaskPriority(event.target.value);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (taskTitle.trim()) {\n            const newTask = {\n                id: (0,uuidv4__WEBPACK_IMPORTED_MODULE_4__.uuid)(),\n                title: taskTitle,\n                description: taskDescription,\n                isComplete: false\n            };\n            dispatch((0,_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.addTask)(newTask));\n            setTaskTitle(\"\");\n            setTaskDescription(\"\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Triggering a reflow to ensure the transition is applied during initial display\n        setShowForm(false);\n        setTimeout(()=>setShowForm(true), 200);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        in: showForm,\n        timeout: 500,\n        unmountOnExit: true,\n        children: (state)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"transition-opacity \".concat(state === \"exiting\" ? \"opacity-0\" : \"opacity-100\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"flex mb-4 justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"Add Task\",\n                                        value: taskTitle,\n                                        onChange: handleTitleChange,\n                                        className: \"flex-1 py-2 px-4 w-full bg-slate-800 border border-white rounded-l-md\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"flex-1 py-2 px-4 text-sm w-full bg-slate-800 border border-white rounded-l-md block min-h-[auto]\",\n                                        placeholder: \"Description...\",\n                                        value: taskDescription,\n                                        onChange: handleDescriptionChange\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-purple-400 hover:bg-purple-300 text-white px-4 rounded-r-md ml-2\",\n                            children: \"Add Task\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\AddTask.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddTask, \"JGCj5/UijL8nU8G7c/NQv+VzKaw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = AddTask;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTask);\nvar _c;\n$RefreshReg$(_c, \"AddTask\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FkZFRhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsY0FBYzs7O0FBQ3FDO0FBQ1Q7QUFDRztBQUVPO0FBQ3RCO0FBRzlCLE1BQU1PLFVBQW9COztJQUN4QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxpQkFBaUJDLG1CQUFtQixHQUFHViwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNXLGFBQWFDLGVBQWUsR0FBR1osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNaUIsV0FBV2Ysd0RBQVdBO0lBRTVCLE1BQU1nQixvQkFBb0IsQ0FBQ0M7UUFDekJYLGFBQWFXLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQztJQUVBLE1BQU1DLDBCQUEwQixDQUFDSDtRQUMvQlQsbUJBQW1CUyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDdkM7SUFFQSxNQUFNRSxzQkFBc0IsQ0FBQ0o7UUFDM0JQLGVBQWVPLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQztJQUVBLE1BQU1HLHVCQUF1QixDQUFDTDtRQUM1QkwsZ0JBQWdCSyxNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDcEM7SUFFQSxNQUFNSSxlQUFlLENBQUNOO1FBQ3BCQSxNQUFNTyxjQUFjO1FBQ3BCLElBQUluQixVQUFVb0IsSUFBSSxJQUFJO1lBQ3BCLE1BQU1DLFVBQWlCO2dCQUNyQkMsSUFBSXhCLDRDQUFJQTtnQkFDUnlCLE9BQU92QjtnQkFDUHdCLGFBQWF0QjtnQkFDYnVCLFlBQVk7WUFDZDtZQUNBZixTQUFTZCx5REFBT0EsQ0FBQ3lCO1lBQ2pCcEIsYUFBYTtZQUNiRSxtQkFBbUI7UUFDckI7SUFDRjtJQUVBVCxnREFBU0EsQ0FBQztRQUNSLGlGQUFpRjtRQUNqRmUsWUFBWTtRQUNaaUIsV0FBVyxJQUFNakIsWUFBWSxPQUFPO0lBQ3RDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWiw4REFBVUE7UUFBQzhCLElBQUluQjtRQUFVb0IsU0FBUztRQUFLQyxhQUFhO2tCQUNsRCxDQUFDQyxzQkFDQSw4REFBQ0M7Z0JBQ0NDLFdBQVcsc0JBRVYsT0FEQ0YsVUFBVSxZQUFZLGNBQWM7MEJBR3RDLDRFQUFDRztvQkFBS0MsVUFBVWhCO29CQUFjYyxXQUFVOztzQ0FDdEMsOERBQUNHOzRCQUFLSCxXQUFVOzs4Q0FDZCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNJO3dDQUNDQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaeEIsT0FBT2Q7d0NBQ1B1QyxVQUFVNUI7d0NBQ1ZxQixXQUFVOzs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNRO3dDQUNDUixXQUFVO3dDQUNWTSxhQUFZO3dDQUNaeEIsT0FBT1o7d0NBQ1BxQyxVQUFVeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUloQiw4REFBQzBCOzRCQUNDSixNQUFLOzRCQUNMTCxXQUFVO3NDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0FwRk1qQzs7UUFNYUosb0RBQVdBOzs7S0FOeEJJO0FBc0ZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZFRhc2sudHN4P2QzOTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWRkVGFzay50c3hcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSAnLi4vcmVkdXgvdGFza1NsaWNlJztcbmltcG9ydCB7IElUYXNrIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJ3V1aWR2NCc7XG5pbXBvcnQgeyBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3V0aWxzL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IEFkZFRhc2s6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbdGFza1RpdGxlLCBzZXRUYXNrVGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFza0Rlc2NyaXB0aW9uLCBzZXRUYXNrRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFza0R1ZURhdGUsIHNldFRhc2tEdWVEYXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Rhc2tQcmlvcml0eSwgc2V0VGFza1ByaW9yaXR5XSA9IHVzZVN0YXRlKCdtZWRpdW0nKTtcbiAgY29uc3QgW3Nob3dGb3JtLCBzZXRTaG93Rm9ybV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IGhhbmRsZVRpdGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFRhc2tUaXRsZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHNldFRhc2tEZXNjcmlwdGlvbihldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUR1ZURhdGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VGFza0R1ZURhdGUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmlvcml0eUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0VGFza1ByaW9yaXR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0YXNrVGl0bGUudHJpbSgpKSB7XG4gICAgICBjb25zdCBuZXdUYXNrOiBJVGFzayA9IHtcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgdGl0bGU6IHRhc2tUaXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9O1xuICAgICAgZGlzcGF0Y2goYWRkVGFzayhuZXdUYXNrKSk7XG4gICAgICBzZXRUYXNrVGl0bGUoJycpO1xuICAgICAgc2V0VGFza0Rlc2NyaXB0aW9uKCcnKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUcmlnZ2VyaW5nIGEgcmVmbG93IHRvIGVuc3VyZSB0aGUgdHJhbnNpdGlvbiBpcyBhcHBsaWVkIGR1cmluZyBpbml0aWFsIGRpc3BsYXlcbiAgICBzZXRTaG93Rm9ybShmYWxzZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93Rm9ybSh0cnVlKSwgMjAwKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRyYW5zaXRpb24gaW49e3Nob3dGb3JtfSB0aW1lb3V0PXs1MDB9IHVubW91bnRPbkV4aXQ+XG4gICAgICB7KHN0YXRlKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2l0aW9uLW9wYWNpdHkgJHtcbiAgICAgICAgICAgIHN0YXRlID09PSAnZXhpdGluZycgPyAnb3BhY2l0eS0wJyA6ICdvcGFjaXR5LTEwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggbWItNCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIFRhc2tcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2tUaXRsZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUaXRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBweS0yIHB4LTQgdy1mdWxsIGJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtbC1tZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIHB5LTIgcHgtNCB0ZXh0LXNtIHctZnVsbCBiZy1zbGF0ZS04MDAgYm9yZGVyIGJvcmRlci13aGl0ZSByb3VuZGVkLWwtbWQgYmxvY2sgbWluLWgtW2F1dG9dXCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb24uLi5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rhc2tEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNDAwIGhvdmVyOmJnLXB1cnBsZS0zMDAgdGV4dC13aGl0ZSBweC00IHJvdW5kZWQtci1tZCBtbC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIFRhc2tcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvVHJhbnNpdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRhc2s7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwiYWRkVGFzayIsIlRyYW5zaXRpb24iLCJ1dWlkIiwiQWRkVGFzayIsInRhc2tUaXRsZSIsInNldFRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInNldFRhc2tEZXNjcmlwdGlvbiIsInRhc2tEdWVEYXRlIiwic2V0VGFza0R1ZURhdGUiLCJ0YXNrUHJpb3JpdHkiLCJzZXRUYXNrUHJpb3JpdHkiLCJzaG93Rm9ybSIsInNldFNob3dGb3JtIiwiZGlzcGF0Y2giLCJoYW5kbGVUaXRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSIsImhhbmRsZUR1ZURhdGVDaGFuZ2UiLCJoYW5kbGVQcmlvcml0eUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm5ld1Rhc2siLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpc0NvbXBsZXRlIiwic2V0VGltZW91dCIsImluIiwidGltZW91dCIsInVubW91bnRPbkV4aXQiLCJzdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AddTask.tsx\n"));

/***/ })

});