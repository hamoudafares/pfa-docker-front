(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon-icon-module"],{

/***/ "./src/app/pages/icon/icon.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/icon/icon.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block animated fadeIn\">\n  <div class=\"row\">\n    <label class=\"control-label col-md-12\">Font Awesome</label>\n    <div class=\"col-md-1 icon-box\" *ngFor=\"let i of iconItem\" title=\"fa fa-{{i}}\">\n      <span class=\"fa fa-{{i}} icon\"></span>\n      <span>{{i}}</span>\n    </div>\n    <a href=\"https://fontawesome.com/icons\" target=\"_blank\" class=\"btn btn-link\">More Icons→</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/icon/icon.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/icon/icon.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-box {\n  margin: 20px 0;\n  height: auto;\n  min-height: 100px;\n  text-align: center;\n  font-size: 12px; }\n  .icon-box .icon {\n    display: block;\n    margin: 10px 0;\n    width: 100%;\n    font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaWNvbi9DOlxcVXNlcnNcXGZhcmVzXFxEb3dubG9hZHNcXGRhc2hcXG5nLXBpLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGljb25cXGljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0VBTG5CO0lBT1EsY0FBYztJQUNkLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tYm94IHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBtaW4taGVpZ2h0OjEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/icon/icon.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/icon/icon.component.ts ***!
  \**********************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconComponent = /** @class */ (function () {
    function IconComponent() {
        this.iconItem = [
            'bug',
            'area-chart',
            'bar-chart',
            'bar-chart-o',
            'line-chart',
            'pie-chart',
            'cog',
            'cogs',
            'file',
            'bell',
            'calendar',
            'check',
            'close',
            'comment',
            'comments',
            'database',
            'image',
            'navicon',
            'home',
            'print',
            'star',
            'tag',
            'tags',
            'user',
            'file',
            'file-o',
            'file-text-o',
            'file-word-o',
            'file-excel-o',
            'file-powerpoint-o',
            'file-pdf-o',
            'file-code-o',
            'file-audio-o',
            'file-image-o',
            'file-video-o',
            'file-zip-o',
        ];
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/pages/icon/icon.component.html"),
            styles: [__webpack_require__(/*! ./icon.component.scss */ "./src/app/pages/icon/icon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/pages/icon/icon.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/icon/icon.module.ts ***!
  \*******************************************/
/*! exports provided: IconModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconModule", function() { return IconModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icon_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon.routing */ "./src/app/pages/icon/icon.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon.component */ "./src/app/pages/icon/icon.component.ts");






var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _icon_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            declarations: [
                _icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]
            ]
        })
    ], IconModule);
    return IconModule;
}());



/***/ }),

/***/ "./src/app/pages/icon/icon.routing.ts":
/*!********************************************!*\
  !*** ./src/app/pages/icon/icon.routing.ts ***!
  \********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.component */ "./src/app/pages/icon/icon.component.ts");


var childRoutes = [
    {
        path: '',
        component: _icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=icon-icon-module.js.map