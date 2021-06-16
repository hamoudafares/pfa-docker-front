(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-editor-module"],{

/***/ "./src/app/pages/editor/editor.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/editor/editor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<card cardTitle=\"pell editor\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <pell-editor [defaultContent]=\"defaultContent\" (content)=\"onContentChange($event)\"></pell-editor>\n    </div>\n    <div class=\"col-md-6\">\n      <div id=\"text-output\"></div>\n    </div>\n  </div>\n</card>\n"

/***/ }),

/***/ "./src/app/pages/editor/editor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/editor/editor.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/editor/editor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/editor/editor.component.ts ***!
  \**************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditorComponent = /** @class */ (function () {
    function EditorComponent() {
        this.defaultContent = '<h3>Friday favorites - Homemade pizza</h3><p><br></p><p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right</p><p> now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p><img src="http://f10.baidu.com/it/u=870634439,1838112237&amp;fm=72">';
    }
    EditorComponent.prototype.ngOnInit = function () {
        document.getElementById('text-output').innerHTML = this.defaultContent;
    };
    EditorComponent.prototype.onContentChange = function (event) {
        document.getElementById('text-output').innerHTML = event;
    };
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/pages/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/pages/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/pages/editor/editor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.module.ts ***!
  \***********************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editor_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.routing */ "./src/app/pages/editor/editor.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.component */ "./src/app/pages/editor/editor.component.ts");







var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _editor_routing__WEBPACK_IMPORTED_MODULE_4__["routing"]
            ],
            declarations: [
                _editor_component__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"]
            ]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/pages/editor/editor.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/editor/editor.routing.ts ***!
  \************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.component */ "./src/app/pages/editor/editor.component.ts");


var childRoutes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=editor-editor-module.js.map