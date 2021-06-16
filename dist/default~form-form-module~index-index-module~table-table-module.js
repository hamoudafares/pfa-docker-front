(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~form-form-module~index-index-module~table-table-module"],{

/***/ "./src/app/pages/table/components/data-table/data-table.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <card cardTitle=\"My Projects\">\n      <button class=\"btn btn-warning\" (click)=\"newProject()\">Add Project </button>\n      <br>\n      <table class=\"table table-bordered table-hover\">\n        <thead>\n          <tr>\n            <th>Project name</th>\n            <th>Website Link</th>\n            <th>Kibanna Link</th>\n            <th>AGE</th>\n            <th>STATE</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of tableData | paginate: { id: 'pager', itemsPerPage: pageSize, currentPage: pageNumber};let index = index\">\n            <td>{{item.firstName}}</td>\n            <td>http://{{item.lastName}}</td>\n            <td>http://kibanna.{{item.lastName}}</td>\n            <td>{{item.age}} days</td>\n            <td>\n              <span class=\"label label-success\">running</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <form class=\"pagination-wrapper\">\n        <div class=\"form-group pages\">\n          <pagination-controls class=\"my-pagination\" id=\"pager\" (pageChange)=\"pageChanged($event)\" maxSize=\"9\" directionLinks=\"true\"\n            autoHide=\"true\" previousLabel=\"Prev\" nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\"\n            screenReaderCurrentLabel=\"You're on page\">\n          </pagination-controls>\n        </div>\n        <div class=\"form-group options pages\">\n          <div class=\"input-group input-group-sm\">\n            <select class=\"form-control\" name=\"pageChangedName\" [(ngModel)]=\"pageSize\" (ngModelChange)=\"loadData()\">\n              <option>1</option>\n              <option>5</option>\n              <option>10</option>\n              <option>20</option>\n              <option>50</option>\n              <option>100</option>\n              <option>200</option>\n            </select>\n            <span class=\"input-group-addon addon-right\">Per Page</span>\n          </div>\n        </div>\n      </form>\n    </card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/table/components/data-table/data-table.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: #fff; }\n\n.bg-default {\n  background: linear-gradient(to top right, #999999, #b3b2b2);\n  background: -webkit-linear-gradient(to top right, #999999, #b3b2b2); }\n\n.bg-primary, .pagination-wrapper .input-group .input-group-addon, .my-pagination /deep/ .ngx-pagination a:hover,\n.my-pagination /deep/ .ngx-pagination .current {\n  background: linear-gradient(to top right, #fca400, #ffd17c);\n  background: -webkit-linear-gradient(to top right, #fca400, #ffd17c); }\n\n.bg-success {\n  background: linear-gradient(to top right, #16be9a, #42e697);\n  background: -webkit-linear-gradient(to top right, #16be9a, #42e697); }\n\n.bg-danger {\n  background: linear-gradient(to top right, #fa5167, #fda09c);\n  background: -webkit-linear-gradient(to top right, #fa5167, #fda09c); }\n\n.bg-warning {\n  background: linear-gradient(to top right, #ff7403, #fac980);\n  background: -webkit-linear-gradient(to top right, #ff7403, #fac980); }\n\n.bg-info {\n  background: linear-gradient(to top right, #2cc3ff, #15f8bf);\n  background: -webkit-linear-gradient(to top right, #2cc3ff, #15f8bf); }\n\n.pagination-wrapper {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between; }\n\n.pagination-wrapper .input-group {\n    width: 150px; }\n\n.pagination-wrapper .input-group .input-group-addon {\n      color: #fff;\n      border: none; }\n\n.pagination-wrapper .form-group {\n    height: auto;\n    margin: 0;\n    padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n  font-size: 12px;\n  padding: 0; }\n\n.my-pagination /deep/ .ngx-pagination a,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    text-decoration: none;\n    height: 35px;\n    text-align: center;\n    line-height: 33px;\n    margin: 0;\n    color: #26253c; }\n\n.my-pagination /deep/ .ngx-pagination a:last-child,\n    .my-pagination /deep/ .ngx-pagination .current:last-child {\n      border: none; }\n\n.my-pagination /deep/ .ngx-pagination a:hover,\n  .my-pagination /deep/ .ngx-pagination .current {\n    min-width: 30px;\n    color: #fff; }\n\n.my-pagination /deep/ .ngx-pagination .disabled {\n    color: rgba(38, 37, 60, 0.4);\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFibGUvY29tcG9uZW50cy9kYXRhLXRhYmxlL0M6XFxVc2Vyc1xcZmFyZXNcXERvd25sb2Fkc1xcZGFzaFxcbmctcGktYWRtaW4tbWFzdGVyL3NyY1xcYXBwXFxzaGFyZWRcXHRoZW1lXFxjb2xvci1zY2hlbWVzXFxfZGVmYXVsdC5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJsZS9jb21wb25lbnRzL2RhdGEtdGFibGUvQzpcXFVzZXJzXFxmYXJlc1xcRG93bmxvYWRzXFxkYXNoXFxuZy1waS1hZG1pbi1tYXN0ZXIvc3JjXFxhcHBcXHNoYXJlZFxcdGhlbWVcXG1peGluLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS9DOlxcVXNlcnNcXGZhcmVzXFxEb3dubG9hZHNcXGRhc2hcXG5nLXBpLWFkbWluLW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXHRhYmxlXFxjb21wb25lbnRzXFxkYXRhLXRhYmxlXFxkYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdCQWhCUyxFQUFBOztBQW1CYjtFQ01JLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QURML0M7O0VDRUksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBREQvQztFQ0ZJLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QURHL0M7RUNOSSwyREFBbUM7RUFHbkMsbUVBQTJDLEVBQUE7O0FETy9DO0VDVkksMkRBQW1DO0VBR25DLG1FQUEyQyxFQUFBOztBRFcvQztFQ2RJLDJEQUFtQztFQUduQyxtRUFBMkMsRUFBQTs7QUMvQi9DO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsOEJBQThCLEVBQUE7O0FBSmxDO0lBTVEsWUFBWSxFQUFBOztBQU5wQjtNQVNZLFdGREQ7TUVFQyxZQUFZLEVBQUE7O0FBVnhCO0lBY1EsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVLEVBQUE7O0FBSWxCO0VBQ0ksb0NGWk87RUVhUCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVGdkJTO0VFd0JULFVBQVUsRUFBQTs7QUFMZDs7SUFRUSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxjRnRCWSxFQUFBOztBRVFwQjs7TUFnQlksWUFBWSxFQUFBOztBQWhCeEI7O0lBcUJRLGVBQWU7SUFFZixXRm5DRyxFQUFBOztBRVlYO0lBMEJRLDRCRmxDWTtJRW1DWixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlL2NvbXBvbmVudHMvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW4nO1xuJGRlZmF1bHQtdGV4dDoxNHB4O1xuJHNtLXRleHQ6MTJweDtcbiRsZy10ZXh0OjE2cHg7XG4kYm9keS1iZzojZmZmO1xuJHNpZGViYXItYmc6IzQ2NTI5NDtcbiRzaWRlYmFyLWZvbnRzLWNvbG9yOiNmZmY7XG4kY2FyZC1iZzojZmZmO1xuJGNhcmQtYm9yZGVyOiNlNGUzZTM7XG4kd2hpdGU6I2ZmZjtcbiRibGFjazojMDAwO1xuJGJvcmRlci1jb2xvcjpyZ2JhKCRibGFjaywgLjEpO1xuJHRhYmxlLWJvcmRlci1jb2xvcjojZTZlNmU2O1xuJGZvbnRzLWNvbG9yOiMyNjI1M2M7XG4kcHJpbWFyeTojZmNhNDAwO1xuJHN1Y2Nlc3M6IzE2YmU5YTtcbiRkYW5nZXI6I2ZhNTE2NztcbiR3YXJuaW5nOiNmZjc0MDM7XG4kaW5mbzojMmNjM2ZmO1xuYm9keSB7XG4gICAgYmFja2dyb3VuZDogJGJvZHktYmc7XG59XG5cbi5iZy1kZWZhdWx0IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCBkYXJrZW4oJGNhcmQtYmcsIDQwJSksIGRhcmtlbigkY2FyZC1iZywgMzAlKSk7XG59XG5cbi5iZy1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkcHJpbWFyeSwgI2ZmZDE3Yyk7XG59XG5cbi5iZy1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAkc3VjY2VzcywgIzQyZTY5Nyk7XG59XG5cbi5iZy1kYW5nZXIge1xuICAgIEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICRkYW5nZXIsICNmZGEwOWMpO1xufVxuXG4uYmctd2FybmluZyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJHdhcm5pbmcsICNmYWM5ODApO1xufVxuXG4uYmctaW5mbyB7XG4gICAgQGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgJGluZm8sICMxNWY4YmYpO1xufSIsIkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC1vLWJveC1zaGFkb3c6ICRzaGFkb3c7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHNoYWRvdztcbn1cblxuQG1peGluIHRleHQtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgICB0ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtby10ZXh0LXNoYWRvdzogJHNoYWRvdztcbiAgICAtbW96LXRleHQtc2hhZG93OiAkc2hhZG93O1xuICAgIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRzaGFkb3c7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybS4uLikge1xuICAgIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcbiAgICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uLi4uKSB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gICAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRjb2xvci4uLikge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgkY29sb3IpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRjb2xvcik7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoJGNvbG9yKTtcbn1cblxuQG1peGluIGJvcmRlci1ncmFkaWVudCgkY29sb3IuLi4pIHtcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAyIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG4gICAgYm9yZGVyLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yKSAzIDM7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHdpZHRoLCAkaGVpZ2h0KSB7XG4gICAgd2lkdGg6ICR3aWR0aDtcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zaGFyZWQvdGhlbWUvY29uZlwiO1xuLnBhZ2luYXRpb24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXNpemU6ICRzbS10ZXh0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYSxcbiAgICAuY3VycmVudCB7XG4gICAgICAgIG1pbi13aWR0aDogMzBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6ICRmb250cy1jb2xvcjtcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhOmhvdmVyLFxuICAgIC5jdXJyZW50IHtcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICBAZXh0ZW5kIC5iZy1wcmltYXJ5O1xuICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAuZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogcmdiYSgkZm9udHMtY29sb3IsIC40KTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/table/components/data-table/data-table.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/data-table.component.ts ***!
  \***************************************************************************/
/*! exports provided: DataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableComponent", function() { return DataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tablesData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tablesData.service */ "./src/app/pages/table/components/data-table/tablesData.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DataTableComponent = /** @class */ (function () {
    function DataTableComponent(_tablesDataService, router) {
        this._tablesDataService = _tablesDataService;
        this.router = router;
        /* pagination Info */
        this.pageSize = 10;
        this.pageNumber = 1;
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DataTableComponent.prototype.loadData = function () {
        this.tableData = this._tablesDataService.DATA;
    };
    DataTableComponent.prototype.changeData = function () {
        this.tableData = [
            {
                id: 1,
                firstName: 'chat app',
                lastName: 'chat',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Ecommerce',
                lastName: 'shopify',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Bank app',
                lastName: 'biat',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 3,
                firstName: 'insat app',
                lastName: 'insat',
                username: '@twitter',
                email: 'sami@elleuch.tn',
                age: '0'
            }
        ];
    };
    DataTableComponent.prototype.pageChanged = function (pN) {
        this.pageNumber = pN;
    };
    DataTableComponent.prototype.newProject = function () {
        this.router.navigateByUrl('pages/form/form-layouts');
    };
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-data-table',
            template: __webpack_require__(/*! ./data-table.component.html */ "./src/app/pages/table/components/data-table/data-table.component.html"),
            providers: [_tablesData_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"]],
            styles: [__webpack_require__(/*! ./data-table.component.scss */ "./src/app/pages/table/components/data-table/data-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tablesData_service__WEBPACK_IMPORTED_MODULE_2__["TablesDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/pages/table/components/data-table/tablesData.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/table/components/data-table/tablesData.service.ts ***!
  \*************************************************************************/
/*! exports provided: TablesDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesDataService", function() { return TablesDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesDataService = /** @class */ (function () {
    function TablesDataService() {
        this.DATA = [
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
    }
    TablesDataService.prototype.addField = function () {
        this.DATA = [
            {
                id: 1,
                firstName: 'chat app',
                lastName: 'chat',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Ecommerce',
                lastName: 'shopify',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Bank app',
                lastName: 'biat',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 3,
                firstName: 'insat app',
                lastName: 'insat',
                username: '@twitter',
                email: 'sami@elleuch.tn',
                age: '0'
            }
        ];
    };
    TablesDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesDataService);
    return TablesDataService;
}());



/***/ })

}]);
//# sourceMappingURL=default~form-form-module~index-index-module~table-table-module.js.map