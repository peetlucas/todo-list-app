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

/***/ "(app-pages-browser)/./src/components/TasksList.tsx":
/*!**************************************!*\
  !*** ./src/components/TasksList.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/taskSlice */ \"(app-pages-browser)/./src/redux/taskSlice.ts\");\n/* harmony import */ var _AddTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddTask */ \"(app-pages-browser)/./src/components/AddTask.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var _components_Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Task */ \"(app-pages-browser)/./src/components/Task.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst TasksList = ()=>{\n    _s();\n    const tasks = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.selectTasks);\n    const [showAddTask, setShowAddTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"all\");\n    const [sortOrder, setSortOrder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"asc\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const handleToggleTask = (id)=>{\n        dispatch((0,_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.toggleTask)(id));\n    };\n    const handleDeleteTask = (id)=>{\n        dispatch((0,_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(id));\n    };\n    // useEffect(() => {\n    //   const storedTasks = getTasksFromLocalStorage();\n    //   if (storedTasks) {\n    //     dispatch(setTasks(storedTasks));\n    //   }\n    //   dispatch(markOverdueTasks());\n    // }, [dispatch]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const data = localStorage.getItem(\"tasks\");\n        try {\n            const tasks = data ? JSON.parse(data) : [];\n            console.log(data);\n            if (tasks && tasks.length > 0) {\n                dispatch((0,_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.setTasks)(tasks));\n                dispatch((0,_redux_taskSlice__WEBPACK_IMPORTED_MODULE_3__.markOverdueTasks)());\n            }\n        } catch (err) {\n            console.log(\"Error loading tasks from localStorage: \", err);\n        }\n    }, [\n        dispatch\n    ]);\n    const filteredTasks = tasks.filter((task)=>{\n        if (filter === \"completed\") return task.isComplete;\n        if (filter === \"uncompleted\") return !task.isComplete;\n        return true;\n    });\n    const sortedTasks = filteredTasks.sort((a, b)=>{\n        if (sortOrder === \"asc\") {\n            return new Date(a.dueDate || 0).getTime() - new Date(b.dueDate || 0).getTime();\n        }\n        return new Date(b.dueDate || 0).getTime() - new Date(a.dueDate || 0).getTime();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onAdd: ()=>setShowAddTask(!showAddTask),\n                showAdd: showAddTask\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                lineNumber: 71,\n                columnNumber: 8\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-3\",\n                children: showAddTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddTask__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 27\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: filter,\n                            onChange: (e)=>setFilter(e.target.value),\n                            className: \"bg-slate-800 border border-white rounded-md p-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"all\",\n                                    children: \"All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"completed\",\n                                    children: \"Completed\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"uncompleted\",\n                                    children: \"Uncompleted\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setSortOrder(sortOrder === \"asc\" ? \"desc\" : \"asc\"),\n                            className: \"bg-purple-400 ml-4 hover:bg-purple-300 text-white px-4 rounded-md\",\n                            children: [\n                                \"Sort by Due Date \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 30\n                                }, undefined),\n                                \" (\",\n                                sortOrder === \"asc\" ? \"Earliest First\" : \"Latest First\",\n                                \")\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"space-y-2\",\n                children: sortedTasks.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-500 flex items-center\",\n                    children: \"No tasks!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, undefined) : sortedTasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Task__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        task: task,\n                        handleDeleteTask: handleDeleteTask,\n                        handleToggleTask: handleToggleTask\n                    }, task.id, false, {\n                        fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 15\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Peter\\\\Documents\\\\Projects\\\\todo-list-app\\\\src\\\\components\\\\TasksList.tsx\",\n                lineNumber: 91,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TasksList, \"17Xfq6XajVpiaF41FYKzD/9QJ5w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = TasksList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TasksList);\nvar _c;\n$RefreshReg$(_c, \"TasksList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Rhc2tzTGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDSTtBQU8zQjtBQUNJO0FBQ1U7QUFDSjtBQUl0QyxNQUFNYSxZQUFzQjs7SUFDMUIsTUFBTUMsUUFBUVgsd0RBQVdBLENBQUNFLHlEQUFXQTtJQUNyQyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDZ0IsUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBLENBQWlCO0lBRTNELE1BQU1vQixXQUFXakIsd0RBQVdBO0lBRTVCLE1BQU1rQixtQkFBbUIsQ0FBQ0M7UUFDeEJGLFNBQVNmLDREQUFVQSxDQUFDaUI7SUFDdEI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0Q7UUFDeEJGLFNBQVNiLDREQUFVQSxDQUFDZTtJQUN0QjtJQUVBLG9CQUFvQjtJQUNwQixvREFBb0Q7SUFDcEQsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxNQUFNO0lBQ04sa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUVsQnJCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXVCLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztRQUVsQyxJQUFJO1lBQ0YsTUFBTWIsUUFBUVcsT0FBT0csS0FBS0MsS0FBSyxDQUFDSixRQUFRLEVBQUU7WUFDMUNLLFFBQVFDLEdBQUcsQ0FBQ047WUFDWixJQUFJWCxTQUFTQSxNQUFNa0IsTUFBTSxHQUFHLEdBQUc7Z0JBQy9CWCxTQUFTZCwwREFBUUEsQ0FBQ087Z0JBQ2xCTyxTQUFTWixrRUFBZ0JBO1lBQzNCO1FBQ0EsRUFBRSxPQUFPd0IsS0FBSztZQUNaSCxRQUFRQyxHQUFHLENBQUMsMkNBQTJDRTtRQUN6RDtJQUNGLEdBQUc7UUFBQ1o7S0FBUztJQUViLE1BQU1hLGdCQUFnQnBCLE1BQU1HLE1BQU0sQ0FBQyxDQUFDa0I7UUFDbEMsSUFBSWxCLFdBQVcsYUFBYSxPQUFPa0IsS0FBS0MsVUFBVTtRQUNsRCxJQUFJbkIsV0FBVyxlQUFlLE9BQU8sQ0FBQ2tCLEtBQUtDLFVBQVU7UUFDckQsT0FBTztJQUNUO0lBRUEsTUFBTUMsY0FBY0gsY0FBY0ksSUFBSSxDQUFDLENBQUNDLEdBQUdDO1FBQ3pDLElBQUlyQixjQUFjLE9BQU87WUFDdkIsT0FBTyxJQUFJc0IsS0FBS0YsRUFBRUcsT0FBTyxJQUFJLEdBQUdDLE9BQU8sS0FBSyxJQUFJRixLQUFLRCxFQUFFRSxPQUFPLElBQUksR0FBR0MsT0FBTztRQUM5RTtRQUNBLE9BQU8sSUFBSUYsS0FBS0QsRUFBRUUsT0FBTyxJQUFJLEdBQUdDLE9BQU8sS0FBSyxJQUFJRixLQUFLRixFQUFFRyxPQUFPLElBQUksR0FBR0MsT0FBTztJQUM5RTtJQUVBLHFCQUNFOzswQkFDRyw4REFBQ2hDLDBEQUFNQTtnQkFDSmlDLE9BQU8sSUFBTTVCLGVBQWUsQ0FBQ0Q7Z0JBQzdCOEIsU0FBUzlCOzs7Ozs7MEJBRVgsOERBQUMrQjtnQkFBSUMsV0FBVTswQkFDWmhDLDZCQUFlLDhEQUFDTCxnREFBT0E7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDb0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDOztzQ0FDRCw4REFBQ0M7NEJBQU9DLE9BQU9qQzs0QkFBUWtDLFVBQVUsQ0FBQ0MsSUFBTWxDLFVBQVVrQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQUdILFdBQVU7OzhDQUMzRSw4REFBQ087b0NBQU9KLE9BQU07OENBQU07Ozs7Ozs4Q0FDcEIsOERBQUNJO29DQUFPSixPQUFNOzhDQUFZOzs7Ozs7OENBQzFCLDhEQUFDSTtvQ0FBT0osT0FBTTs4Q0FBYzs7Ozs7Ozs7Ozs7O3NDQUc5Qiw4REFBQ0s7NEJBQU9DLFNBQVMsSUFBTXBDLGFBQWFELGNBQWMsUUFBUSxTQUFTOzRCQUFRNEIsV0FBVTs7Z0NBQW9FOzhDQUN0SSw4REFBQ1U7Ozs7O2dDQUFJO2dDQUFHdEMsY0FBYyxRQUFRLG1CQUFtQjtnQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlyRiw4REFBQ3VDO2dCQUFHWCxXQUFVOzBCQUNYVixZQUFZTCxNQUFNLEtBQUssa0JBQ3RCLDhEQUFDMkI7b0JBQUVaLFdBQVU7OEJBQWtDOzs7OztnQ0FFL0NWLFlBQVl1QixHQUFHLENBQUMsQ0FBQ3pCLHFCQUNmLDhEQUFDdkIsd0RBQUlBO3dCQUVIdUIsTUFBTUE7d0JBQ05YLGtCQUFrQkE7d0JBQ2xCRixrQkFBa0JBO3VCQUhiYSxLQUFLWixFQUFFOzs7Ozs7Ozs7Ozs7QUFVNUI7R0ExRk1WOztRQUNVVixvREFBV0E7UUFLUkMsb0RBQVdBOzs7S0FOeEJTO0FBNEZOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Rhc2tzTGlzdC50c3g/M2E3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIHNlbGVjdFRhc2tzLFxuICB0b2dnbGVUYXNrLFxuICBzZXRUYXNrcyxcbiAgZGVsZXRlVGFzayxcbiAgbWFya092ZXJkdWVUYXNrcyxcbn0gZnJvbSBcIi4uL3JlZHV4L3Rhc2tTbGljZVwiO1xuaW1wb3J0IEFkZFRhc2sgZnJvbSBcIi4vQWRkVGFza1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXNrXCI7XG5pbXBvcnQgeyBJVGFzayB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uL3V0aWxzL2xvY2FsU3RvcmFnZVwiO1xuXG5jb25zdCBUYXNrc0xpc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB0YXNrcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRhc2tzKTtcbiAgY29uc3QgW3Nob3dBZGRUYXNrLCBzZXRTaG93QWRkVGFza10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgnYWxsJyk7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZTwnYXNjJyB8ICdkZXNjJz4oJ2FzYycpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVUYXNrID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICBkaXNwYXRjaCh0b2dnbGVUYXNrKGlkKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlVGFzayA9IChpZDogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2goZGVsZXRlVGFzayhpZCkpO1xuICB9O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3Qgc3RvcmVkVGFza3MgPSBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgLy8gICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgLy8gICAgIGRpc3BhdGNoKHNldFRhc2tzKHN0b3JlZFRhc2tzKSk7XG4gIC8vICAgfVxuICAvLyAgIGRpc3BhdGNoKG1hcmtPdmVyZHVlVGFza3MoKSk7XG4gIC8vIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIik7XG5cbiAgICB0cnkgeyAgICAgIFxuICAgICAgY29uc3QgdGFza3MgPSBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IFtdO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBpZiAodGFza3MgJiYgdGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgZGlzcGF0Y2goc2V0VGFza3ModGFza3MpKTtcbiAgICAgIGRpc3BhdGNoKG1hcmtPdmVyZHVlVGFza3MoKSk7XG4gICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGxvYWRpbmcgdGFza3MgZnJvbSBsb2NhbFN0b3JhZ2U6ICcsIGVycik7XG4gICAgfSAgICBcbiAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgIGlmIChmaWx0ZXIgPT09ICdjb21wbGV0ZWQnKSByZXR1cm4gdGFzay5pc0NvbXBsZXRlO1xuICAgIGlmIChmaWx0ZXIgPT09ICd1bmNvbXBsZXRlZCcpIHJldHVybiAhdGFzay5pc0NvbXBsZXRlO1xuICAgIHJldHVybiB0cnVlO1xuICB9KTtcblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IGZpbHRlcmVkVGFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChzb3J0T3JkZXIgPT09ICdhc2MnKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYS5kdWVEYXRlIHx8IDApLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSB8fCAwKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShiLmR1ZURhdGUgfHwgMCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYS5kdWVEYXRlIHx8IDApLmdldFRpbWUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgIDxIZWFkZXJcbiAgICAgICAgICBvbkFkZD17KCkgPT4gc2V0U2hvd0FkZFRhc2soIXNob3dBZGRUYXNrKX1cbiAgICAgICAgICBzaG93QWRkPXtzaG93QWRkVGFza31cbiAgICAgICAgLz4gICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgICAge3Nob3dBZGRUYXNrICYmIDxBZGRUYXNrIC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBtYi00XCI+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17ZmlsdGVyfSBvbkNoYW5nZT17KGUpID0+IHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT1cImJnLXNsYXRlLTgwMCBib3JkZXIgYm9yZGVyLXdoaXRlIHJvdW5kZWQtbWQgcC0yXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29tcGxldGVkXCI+Q29tcGxldGVkPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidW5jb21wbGV0ZWRcIj5VbmNvbXBsZXRlZDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U29ydE9yZGVyKHNvcnRPcmRlciA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJyl9IGNsYXNzTmFtZT1cImJnLXB1cnBsZS00MDAgbWwtNCBob3ZlcjpiZy1wdXJwbGUtMzAwIHRleHQtd2hpdGUgcHgtNCByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICBTb3J0IGJ5IER1ZSBEYXRlIDxici8+ICh7c29ydE9yZGVyID09PSAnYXNjJyA/ICdFYXJsaWVzdCBGaXJzdCcgOiAnTGF0ZXN0IEZpcnN0J30pXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgIHtzb3J0ZWRUYXNrcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyXCI+Tm8gdGFza3MhPC9wPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBzb3J0ZWRUYXNrcy5tYXAoKHRhc2spID0+IChcbiAgICAgICAgICAgICAgPFRhc2tcbiAgICAgICAgICAgICAgICBrZXk9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgdGFzaz17dGFza31cbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVUYXNrPXtoYW5kbGVEZWxldGVUYXNrfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRvZ2dsZVRhc2s9e2hhbmRsZVRvZ2dsZVRhc2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+ICAgXG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrc0xpc3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZWxlY3RUYXNrcyIsInRvZ2dsZVRhc2siLCJzZXRUYXNrcyIsImRlbGV0ZVRhc2siLCJtYXJrT3ZlcmR1ZVRhc2tzIiwiQWRkVGFzayIsIkhlYWRlciIsIlRhc2siLCJUYXNrc0xpc3QiLCJ0YXNrcyIsInNob3dBZGRUYXNrIiwic2V0U2hvd0FkZFRhc2siLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJzb3J0T3JkZXIiLCJzZXRTb3J0T3JkZXIiLCJkaXNwYXRjaCIsImhhbmRsZVRvZ2dsZVRhc2siLCJpZCIsImhhbmRsZURlbGV0ZVRhc2siLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJlcnIiLCJmaWx0ZXJlZFRhc2tzIiwidGFzayIsImlzQ29tcGxldGUiLCJzb3J0ZWRUYXNrcyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJkdWVEYXRlIiwiZ2V0VGltZSIsIm9uQWRkIiwic2hvd0FkZCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInVsIiwicCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TasksList.tsx\n"));

/***/ })

});