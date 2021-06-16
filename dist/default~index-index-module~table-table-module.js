(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~index-index-module~table-table-module"],{

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <card cardTitle=\"basic table\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"bordered table\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"hover table\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n  <div class=\"col-md-6\">\n    <card cardTitle=\"striped table\">\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>FIRSTNAME</th>\n            <th>LASTNAME</th>\n            <th>USERNAME</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of default_data;let index = index\">\n            <td>{{index}}</td>\n            <td>{{item.first_name}}</td>\n            <td>{{item.last_name}}</td>\n            <td>{{item.user_name}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9iYXNpYy10YWJsZXMvQzpcXFVzZXJzXFxmYXJlc1xcRG93bmxvYWRzXFxkYXNoXFxuZy1waS1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFx0YWJsZVxcY29tcG9uZW50c1xcYmFzaWMtdGFibGVzXFxiYXNpYy10YWJsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS9jb21wb25lbnRzL2Jhc2ljLXRhYmxlcy9iYXNpYy10YWJsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/table/components/basic-tables/basic-tables.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasicTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesComponent", function() { return BasicTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicTablesComponent = /** @class */ (function () {
    function BasicTablesComponent() {
    }
    BasicTablesComponent.prototype.ngOnInit = function () {
        this.default_data = [
            { first_name: 'Steve', last_name: 'Jobs', user_name: '@steve' },
            { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
            { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
            { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
            { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
        ];
    };
    BasicTablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-tables',
            template: __webpack_require__(/*! ./basic-tables.component.html */ "./src/app/pages/table/components/basic-tables/basic-tables.component.html"),
            styles: [__webpack_require__(/*! ./basic-tables.component.scss */ "./src/app/pages/table/components/basic-tables/basic-tables.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasicTablesComponent);
    return BasicTablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/components/data-table-new/data-table-new.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table-new/data-table-new.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"My Projects\">\n      <button class=\"btn btn-warning\" (click)=\"newProject()\">Add Project </button>\n      <br>\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n        <tr>\n          <th>Project name</th>\n          <th>Domain name</th>\n          <th>AGE</th>\n          <th>STATE</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of tableData | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber};let index = index\">\n          <td>{{item.firstName}}</td>\n          <td>{{item.lastName}}</td>\n          <td>{{item.age}} days</td>\n          <td>\n            <span class=\"label label-success\">running</span>\n          </td>\n        </tr>\n        <tr>\n          <td>solitude</td>\n          <td *ngIf=\"newProject.state=='running'\">user1.serveron.xyz</td>\n          <td *ngIf=\"newProject.state!='running'\">---</td>\n          <td *ngIf=\"newProject.state=='running'\">0 days</td>\n          <td *ngIf=\"newProject.state!='running'\">---</td>\n          <td>\n            <span class=\"label label-{{newProject.label}}\">{{newProject.state}}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n                               autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n                               screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/table/components/data-table-new/data-table-new.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table-new/data-table-new.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination /deep/ .ngx-pagination a:hover,\n.my-pagination /deep/ .ngx-pagination .current {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between; }\n\n.pagination-wrapper .input-group {\n    width: 150px; }\n\n.pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n\n.pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination a,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #26253c; }\n\n.my-pagination /deep/ .ngx-pagination a:last-child,\n    .my-pagination /deep/ .ngx-pagination .current:last-child {\n      border: none; }\n\n.my-pagination /deep/ .ngx-pagination a:hover,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n\n.my-pagination /deep/ .ngx-pagination .disabled {\n    color: rgba(38, 37, 60, 0.4);\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLW5ldy9DOlxcVXNlcnNcXGZhcmVzXFxEb3dubG9hZHNcXGRhc2hcXG5nLXBpLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZVxcY29sb3Itc2NoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLW5ldy9DOlxcVXNlcnNcXGZhcmVzXFxEb3dubG9hZHNcXGRhc2hcXG5nLXBpLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxcc2hhcmVkXFx0aGVtZVxcbWl4aW4uc2NzcyIsInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlLW5ldy9DOlxcVXNlcnNcXGZhcmVzXFxEb3dubG9hZHNcXGRhc2hcXG5nLXBpLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXHRhYmxlXFxjb21wb25lbnRzXFxkYXRhLXRhYmxlLW5ld1xcZGF0YS10YWJsZS1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJBO0VBQ0ksZ0JBaEJTLEVBQUE7O0FBbUJiO0VDTUksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBREwvQzs7RUNFSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FERC9DO0VDRkksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBREcvQztFQ05JLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QURPL0M7RUNWSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FEVy9DO0VDZEksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBQy9CL0M7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiw4QkFBOEIsRUFBQTs7QUFKaEM7SUFNSSxZQUFZLEVBQUE7O0FBTmhCO01BU00sV0ZESztNRUVMLFlBQVksRUFBQTs7QUFWbEI7SUFjSSxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVUsRUFBQTs7QUFJZDtFQUNFLG9DRlpTO0VFYVQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlRnZCVztFRXdCWCxVQUFVLEVBQUE7O0FBTFo7O0lBUUksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsY0Z0QmdCLEVBQUE7O0FFUXBCOztNQWdCTSxZQUFZLEVBQUE7O0FBaEJsQjs7SUFxQkksZUFBZTtJQUVmLFdGbkNPLEVBQUE7O0FFWVg7SUEwQkksNEJGbENnQjtJRW1DaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUtbmV3L2RhdGEtdGFibGUtbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zaGFyZWQvdGhlbWUvY29uZlwiO1xyXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC5pbnB1dC1ncm91cCB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtc2l6ZTogJHNtLXRleHQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBhLFxyXG4gIC5jdXJyZW50IHtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICRmb250cy1jb2xvcjtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgYTpob3ZlcixcclxuICAuY3VycmVudCB7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcbiAgLmRpc2FibGVkIHtcclxuICAgIGNvbG9yOiByZ2JhKCRmb250cy1jb2xvciwgLjQpO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/table/components/data-table-new/data-table-new.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table-new/data-table-new.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DataTableNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableNewComponent", function() { return DataTableNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DataTableNewComponent = /** @class */ (function () {
    function DataTableNewComponent(router) {
        this.router = router;
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
        this.newProject = { state: "pending", label: "warning" };
    }
    DataTableNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        setTimeout(function () { _this.newProject.state = "running"; _this.newProject.label = "success"; }, 10000);
    };
    DataTableNewComponent.prototype.loadData = function () {
        this.tableData = [
            {
                id: 1,
                firstName: 'chat app',
                lastName: 'chat.serveron.xyz',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Ecommerce',
                lastName: 'shopify.serveron.xyz',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Bank app',
                lastName: 'biat.serveron.xyz',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            }
        ];
    };
    DataTableNewComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    DataTableNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table-new',
            template: __webpack_require__(/*! ./data-table-new.component.html */ "./src/app/pages/table/components/data-table-new/data-table-new.component.html"),
            styles: [__webpack_require__(/*! ./data-table-new.component.scss */ "./src/app/pages/table/components/data-table-new/data-table-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DataTableNewComponent);
    return DataTableNewComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/table.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/table/table.component.ts ***!
  \************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: "<router-outlet></router-outlet>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/table.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/table/table.module.ts ***!
  \*********************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table.routing */ "./src/app/pages/table/table.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/basic-tables/basic-tables.component */ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/pages/table/components/data-table/data-table.component.ts");
/* harmony import */ var _components_data_table_new_data_table_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/data-table-new/data-table-new.component */ "./src/app/pages/table/components/data-table-new/data-table-new.component.ts");







/* components */




var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _table_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            exports: [
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__["DataTableComponent"]
            ],
            declarations: [
                _table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_8__["BasicTablesComponent"],
                _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_9__["DataTableComponent"],
                _components_data_table_new_data_table_new_component__WEBPACK_IMPORTED_MODULE_10__["DataTableNewComponent"]
            ]
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "./src/app/pages/table/table.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/table/table.routing.ts ***!
  \**********************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "./src/app/pages/table/table.component.ts");
/* harmony import */ var _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basic-tables/basic-tables.component */ "./src/app/pages/table/components/basic-tables/basic-tables.component.ts");
/* harmony import */ var _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/data-table/data-table.component */ "./src/app/pages/table/components/data-table/data-table.component.ts");
/* harmony import */ var _components_data_table_new_data_table_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/data-table-new/data-table-new.component */ "./src/app/pages/table/components/data-table-new/data-table-new.component.ts");





var childRoutes = [
    {
        path: '',
        component: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: _components_basic_tables_basic_tables_component__WEBPACK_IMPORTED_MODULE_2__["BasicTablesComponent"] },
            { path: 'data-table', component: _components_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"] },
            { path: 'data-table-new', component: _components_data_table_new_data_table_new_component__WEBPACK_IMPORTED_MODULE_4__["DataTableNewComponent"] },
        ]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(childRoutes);


/***/ })

}]);
//# sourceMappingURL=default~index-index-module~table-table-module.js.map