webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  #canvas {\r\n    border: 2px dashed #cccccc;\r\n  }\r\n  .main-title{\r\n    margin-top: 10px;\r\n  }\r\n  .images-item {\r\n    width: 48%;\r\n    cursor: pointer;\r\n    -webkit-transition: .5s ease;\r\n    -webkit-transition: .5s ease;\r\n    padding: 3px;\r\n    max-width: 120px;\r\n  }\r\n  .images-item:hover {\r\n    opacity: 0.7;\r\n  }\r\n  .images-item-upload {\r\n    width: 80%;\r\n    cursor: pointer;\r\n    padding-bottom: 10px;\r\n    -webkit-transition: .5s ease;\r\n    -webkit-transition: .5s ease;\r\n  }\r\n  .images-item-upload:hover {\r\n    opacity: 0.7;\r\n  }\r\n  .custom-item {\r\n    border-bottom: 2px solid #f3f3f3;\r\n  }\r\n  .custom-item .custom-item-title {\r\n    color: #666666;\r\n    font-weight: 600;\r\n  }\r\n  .custom-item .custom-item-body {\r\n    padding: 10px 0;\r\n  }\r\n  .max-height{\r\n    overflow: auto;\r\n    max-height: 300px;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12 main-title\">\r\n            <h4>Github: <a href=\"https://github.com/kevoj/angular-editor-fabric-js\">angular-editor-fabric-js</a></h4>\r\n        </div>\r\n        <div class=\"col-xl-12\">\r\n            <div class=\"row\">\r\n                <div class=\"col-xl-12 text-right\">\r\n                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to image\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterize();\">\r\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to image</button>\r\n                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Export to SVG\" type=\"button\" class=\"btn btn-primary\" (click)=\"rasterizeSVG();\">\r\n                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export to SVG</button>\r\n                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Save in localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"saveCanvasToJSON();\">\r\n                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Save local</button>\r\n                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Load from localStorage\" type=\"button\" class=\"btn btn-primary\"\r\n                        (click)=\"loadCanvasFromJSON();\">\r\n                        <i class=\"fa fa-save\" aria-hidden=\"true\"></i> Load local</button>\r\n                    <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clean Canvas\" type=\"button\" class=\"btn btn-danger\" (click)=\"confirmClear();\">\r\n                        <i class=\"fa fa-ban\" aria-hidden=\"true\"></i> Clean</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Size</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.width\" (keyup)=\"changeSize()\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">\r\n                                    Width\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"size.height\" (keyup)=\"changeSize()\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\">\r\n                                    Height\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Add text</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"textString\">\r\n                        <div class=\"input-group-append\">\r\n                            <span class=\"input-group-text\">\r\n                                <button id=\"add-text\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Add text\" class=\"btn btn-primary\" (click)=\"addText()\">\r\n                                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Add images</div>\r\n                <div class=\"card-body max-height\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/pikachu.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/squirtle.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/bullbasaur.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/charmander.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/bellsprout.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/caterpie.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/dratini.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/eevee.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/jigglypuff.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/mankey.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/meowth.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/pidgey.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/psyduck.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/rattata.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/abra.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/snorlax.svg\">\r\n                    <img class=\"images-item\" (click)=\"getImgPolaroid($event)\" src=\"assets/img/zubat.svg\">\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Upload image</div>\r\n                <div class=\"card-body text-center\">\r\n                    <img id=\"testImage\" *ngIf=\"url\" class=\"images-item-upload\" [src]=\"url\" (click)=\"addImageOnCanvas(url);\">\r\n                    <input type=\"file\" (change)=\"readUrl($event);\">\r\n                    <br/>\r\n                    <br/>\r\n                    <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\r\n                        <div class=\"btn-group\" role=\"group\">\r\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeWhite(url);\">\r\n                                <i class=\"fa fa-times\" aria-hidden=\"true\"></i> Remove</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Add figure</div>\r\n                <div class=\"card-body text-center max-height\">\r\n                    <div class=\"btn-group btn-group-vertical\" role=\"group\" aria-label=\"...\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('rectangle');\">Rectangle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('square');\">Square</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('triangle');\">Triangle</button>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addFigure('circle');\">Circle</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-6\">\r\n            <canvas id=\"canvas\"></canvas>\r\n        </div>\r\n        <div class=\"col-xl-3\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Options</div>\r\n                <div class=\"card-body text-center\">\r\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete element\" type=\"button\" class=\"btn btn-outline-danger\" [disabled]=\"!selected\"\r\n                            (click)=\"removeSelected();\">\r\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to back\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                            (click)=\"sendToBack();\">\r\n                            <i class=\"fa fa-level-down\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Send to front\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                            (click)=\"bringToFront();\">\r\n                            <i class=\"fa fa-level-up\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Clone\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected || selected.type == 'group'\"\r\n                            (click)=\"clone();\">\r\n                            <i class=\"fa fa-clone\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Unselect\" type=\"button\" class=\"btn btn-outline-primary\" [disabled]=\"!selected\"\r\n                            (click)=\"cleanSelect()\">\r\n                            <i class=\"fa fa-remove\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\" *ngIf=\"!selected\">\r\n                <div class=\"card-header\">Canvas</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"custom-item\" *ngIf=\"!props.canvasImage\">\r\n                        <div class=\"custom-item-title\">Background Color</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.canvasFill\" [style.background]=\"props.canvasFill\"\r\n                                [value]=\"props.canvasFill\" (colorPickerChange)=\"setCanvasFill()\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\">\r\n                        <div class=\"custom-item-title\">Background Image (url)</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"http://example.jpg\" [(ngModel)]=\"props.canvasImage\" (keyup)=\"setCanvasImage()\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Custom</div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"custom-item\" *ngIf=\"selected  && selected.type == 'group'\">Group Selected</div>\r\n                    <div class=\"custom-item\" *ngIf=\"!selected\">No items selected</div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                        <div class=\"custom-item-title\">ID</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"props.id\" (keyup)=\"setId()\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && selected.type != 'group'\">\r\n                        <div class=\"custom-item-title\">Opacity</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"range\" [(ngModel)]=\"props.opacity\" (change)=\"setOpacity()\">{{props.opacity}}</div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor || selected && figureEditor\">\r\n                        <div class=\"custom-item-title\">Fill</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"text\" class=\"form-control\" [cpPosition]=\"'bottom'\" [(colorPicker)]=\"props.fill\" [style.background]=\"props.fill\"\r\n                                [value]=\"props.fill\" (colorPickerChange)=\"setFill()\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Font family</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <select [(ngModel)]=\"props.fontFamily\" class=\"form-control\" (change)=\"setFontFamily()\">\r\n                                <option value=\"arial\">Arial</option>\r\n                                <option value=\"helvetica\" selected>Helvetica</option>\r\n                                <option value=\"verdana\">Verdana</option>\r\n                                <option value=\"courier\">Courier</option>\r\n                                <option value=\"Roboto\">Roboto</option>\r\n                                <option value=\"Open Sans\">Open Sans</option>\r\n                                <option value=\"Zilla Slab\">Zilla Slab</option>\r\n                                <option value=\"Lato\">Lato</option>\r\n                                <option value=\"Bellefair\">Bellefair</option>\r\n                                <option value=\"Fresca\">Fresca</option>\r\n                                <option value=\"Raleway\">Raleway</option>\r\n                                <option value=\"Open Sans Condensed\">Open Sans Condensed</option>\r\n                                <option value=\"Indie Flower\">Indie Flower</option>\r\n                                <option value=\"Josefin Sans\">Josefin Sans</option>\r\n                                <option value=\"Inconsolata\">Inconsolata</option>\r\n                                <option value=\"Pacifico\">Pacifico</option>\r\n                                <option value=\"Gloria Hallelujah\">Gloria Hallelujah</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Text Align</div>\r\n                        <div class=\"custom-item-body text-center\">\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'left' }\" (click)=\"setTextAlign('left')\">\r\n                                    <i class=\"fa fa-align-left\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'center' }\" (click)=\"setTextAlign('center')\">\r\n                                    <i class=\"fa fa-align-center\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'right' }\" (click)=\"setTextAlign('right')\">\r\n                                    <i class=\"fa fa-align-right\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" [ngClass]=\"{'active': props.textAlign == 'justify' }\" (click)=\"setTextAlign('justify')\">\r\n                                    <i class=\"fa fa-align-justify\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Style</div>\r\n                        <div class=\"custom-item-body text-center\">\r\n                            <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontWeight }\" (click)=\"setBold()\">\r\n                                    <i class=\"fa fa-bold\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': props.fontStyle }\" (click)=\"setFontStyle()\">\r\n                                    <i class=\"fa fa-italic\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('underline') }\"\r\n                                    (click)=\"setTextDecoration('underline')\">\r\n                                    <i class=\"fa fa-underline\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('overline') }\"\r\n                                    (click)=\"setTextDecoration('overline')\">\r\n                                    <i class=\"fa fa-underline fa-flip-vertical\"></i>\r\n                                </button>\r\n                                <button type=\"button\" class=\"btn btn-primary btn-sm\" [ngClass]=\"{'active': hasTextDecoration('line-through') }\"\r\n                                    (click)=\"setTextDecoration('line-through')\">\r\n                                    <i class=\"fa fa-strikethrough\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Font Size</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"range\" [(ngModel)]=\"props.fontSize\" (change)=\"setFontSize()\" step=\"1\" min=\"1\" max=\"120\">{{props.fontSize}}</div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Line Height</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"range\" [(ngModel)]=\"props.lineHeight\" (change)=\"setLineHeight()\" step=\"0.1\" min=\"0\" max=\"10\">{{props.lineHeight}}</div>\r\n                    </div>\r\n                    <div class=\"custom-item\" *ngIf=\"selected && textEditor\">\r\n                        <div class=\"custom-item-title\">Char Spacing</div>\r\n                        <div class=\"custom-item-body\">\r\n                            <input type=\"range\" [(ngModel)]=\"props.charSpacing\" (change)=\"setCharSpacing()\" step=\"10\" min=\"-200\" max=\"800\">{{props.charSpacing}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-12\">\r\n            <br/>\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"rasterizeJSON()\">\r\n                        <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Render to json</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <pre>{{json}}</pre>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric__ = __webpack_require__("../../../../fabric/dist/fabric.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fabric___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fabric__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.props = {
            canvasFill: '#ffffff',
            canvasImage: '',
            id: null,
            opacity: null,
            fill: null,
            fontSize: null,
            lineHeight: null,
            charSpacing: null,
            fontWeight: null,
            fontStyle: null,
            textAlign: null,
            fontFamily: null,
            TextDecoration: ''
        };
        this.url = '';
        this.size = {
            width: 500,
            height: 800
        };
        this.globalEditor = false;
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // tslint:disable-next-line: comment-format
        //setup front side canvas
        this.canvas = new fabric.Canvas('canvas', {
            hoverCursor: 'pointer',
            selection: true,
            selectionBorderColor: 'blue'
        });
        this.canvas.on({
            'object:moving': function (e) { },
            'object:modified': function (e) { },
            'object:selected': function (e) {
                var selectedObject = e.target;
                _this.selected = selectedObject;
                selectedObject.hasRotatingPoint = true;
                selectedObject.transparentCorners = false;
                // selectedObject.cornerColor = 'rgba(255, 87, 34, 0.7)';
                _this.resetPanels();
                if (selectedObject.type !== 'group' && selectedObject) {
                    _this.getId();
                    _this.getOpacity();
                    switch (selectedObject.type) {
                        case 'rect':
                        case 'circle':
                        case 'triangle':
                            _this.figureEditor = true;
                            _this.getFill();
                            break;
                        case 'i-text':
                            _this.textEditor = true;
                            _this.getLineHeight();
                            _this.getCharSpacing();
                            _this.getBold();
                            _this.getFontStyle();
                            _this.getFill();
                            _this.getTextDecoration();
                            _this.getTextAlign();
                            _this.getFontFamily();
                            break;
                        case 'image':
                            console.log('image');
                            break;
                    }
                }
            },
            'selection:cleared': function (e) {
                _this.selected = null;
                _this.resetPanels();
            }
        });
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
        // get references to the html canvas element & its context
        // this.canvas.on('mouse:down', (e) => {
        // let canvasElement: any = document.getElementById('canvas');
        // console.log(canvasElement)
        // });
    };
    /*------------------------Block elements------------------------*/
    //Block "Size"
    AppComponent.prototype.changeSize = function (event) {
        this.canvas.setWidth(this.size.width);
        this.canvas.setHeight(this.size.height);
    };
    //Block "Add text"
    AppComponent.prototype.addText = function () {
        var textString = this.textString;
        var text = new fabric.IText(textString, {
            left: 10,
            top: 10,
            fontFamily: 'helvetica',
            angle: 0,
            fill: '#000000',
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: '',
            hasRotatingPoint: true
        });
        this.extend(text, this.randomId());
        this.canvas.add(text);
        this.selectItemAfterAdded(text);
        this.textString = '';
    };
    //Block "Add images"
    AppComponent.prototype.getImgPolaroid = function (event) {
        var _this = this;
        var el = event.target;
        fabric.Image.fromURL(el.src, function (image) {
            image.set({
                left: 10,
                top: 10,
                angle: 0,
                padding: 10,
                cornersize: 10,
                hasRotatingPoint: true,
                peloas: 12
            });
            image.setWidth(150);
            image.setHeight(150);
            _this.extend(image, _this.randomId());
            _this.canvas.add(image);
            _this.selectItemAfterAdded(image);
        });
    };
    //Block "Upload Image"
    AppComponent.prototype.addImageOnCanvas = function (url) {
        var _this = this;
        if (url) {
            fabric.Image.fromURL(url, function (image) {
                image.set({
                    left: 10,
                    top: 10,
                    angle: 0,
                    padding: 10,
                    cornersize: 10,
                    hasRotatingPoint: true
                });
                image.setWidth(200);
                image.setHeight(200);
                _this.extend(image, _this.randomId());
                _this.canvas.add(image);
                _this.selectItemAfterAdded(image);
            });
        }
    };
    AppComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target['result'];
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AppComponent.prototype.removeWhite = function (url) {
        this.url = '';
    };
    ;
    //Block "Add figure"
    AppComponent.prototype.addFigure = function (figure) {
        var add;
        switch (figure) {
            case 'rectangle':
                add = new fabric.Rect({
                    width: 200, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#3f51b5'
                });
                break;
            case 'square':
                add = new fabric.Rect({
                    width: 100, height: 100, left: 10, top: 10, angle: 0,
                    fill: '#4caf50'
                });
                break;
            case 'triangle':
                add = new fabric.Triangle({
                    width: 100, height: 100, left: 10, top: 10, fill: '#2196f3'
                });
                break;
            case 'circle':
                add = new fabric.Circle({
                    radius: 50, left: 10, top: 10, fill: '#ff5722'
                });
                break;
        }
        this.extend(add, this.randomId());
        this.canvas.add(add);
        this.selectItemAfterAdded(add);
    };
    /*Canvas*/
    AppComponent.prototype.cleanSelect = function () {
        this.canvas.deactivateAllWithDispatch().renderAll();
    };
    AppComponent.prototype.selectItemAfterAdded = function (obj) {
        this.canvas.deactivateAllWithDispatch().renderAll();
        this.canvas.setActiveObject(obj);
    };
    AppComponent.prototype.setCanvasFill = function () {
        if (!this.props.canvasImage) {
            this.canvas.backgroundColor = this.props.canvasFill;
            this.canvas.renderAll();
        }
    };
    AppComponent.prototype.extend = function (obj, id) {
        obj.toObject = (function (toObject) {
            return function () {
                return fabric.util.object.extend(toObject.call(this), {
                    id: id
                });
            };
        })(obj.toObject);
    };
    AppComponent.prototype.setCanvasImage = function () {
        var self = this;
        if (this.props.canvasImage) {
            this.canvas.setBackgroundColor({ source: this.props.canvasImage, repeat: 'repeat' }, function () {
                // self.props.canvasFill = '';
                self.canvas.renderAll();
            });
        }
    };
    AppComponent.prototype.randomId = function () {
        return Math.floor(Math.random() * 999999) + 1;
    };
    /*------------------------Global actions for element------------------------*/
    AppComponent.prototype.getActiveStyle = function (styleName, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return '';
        return (object.getSelectionStyles && object.isEditing)
            ? (object.getSelectionStyles()[styleName] || '')
            : (object[styleName] || '');
    };
    AppComponent.prototype.setActiveStyle = function (styleName, value, object) {
        object = object || this.canvas.getActiveObject();
        if (!object)
            return;
        if (object.setSelectionStyles && object.isEditing) {
            var style = {};
            style[styleName] = value;
            object.setSelectionStyles(style);
            object.setCoords();
        }
        else {
            object.set(styleName, value);
        }
        object.setCoords();
        this.canvas.renderAll();
    };
    AppComponent.prototype.getActiveProp = function (name) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return '';
        return object[name] || '';
    };
    AppComponent.prototype.setActiveProp = function (name, value) {
        var object = this.canvas.getActiveObject();
        if (!object)
            return;
        object.set(name, value).setCoords();
        this.canvas.renderAll();
    };
    AppComponent.prototype.clone = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            var clone = void 0;
            switch (activeObject.type) {
                case 'rect':
                    clone = new fabric.Rect(activeObject.toObject());
                    break;
                case 'circle':
                    clone = new fabric.Circle(activeObject.toObject());
                    break;
                case 'triangle':
                    clone = new fabric.Triangle(activeObject.toObject());
                    break;
                case 'i-text':
                    clone = new fabric.IText('', activeObject.toObject());
                    break;
                case 'image':
                    clone = fabric.util.object.clone(activeObject);
                    break;
            }
            if (clone) {
                clone.set({ left: 10, top: 10 });
                this.canvas.add(clone);
                this.selectItemAfterAdded(clone);
            }
        }
    };
    AppComponent.prototype.getId = function () {
        this.props.id = this.canvas.getActiveObject().toObject().id;
    };
    AppComponent.prototype.setId = function () {
        var val = this.props.id;
        var complete = this.canvas.getActiveObject().toObject();
        console.log(complete);
        this.canvas.getActiveObject().toObject = function () {
            complete.id = val;
            return complete;
        };
    };
    AppComponent.prototype.getOpacity = function () {
        this.props.opacity = this.getActiveStyle('opacity', null) * 100;
    };
    AppComponent.prototype.setOpacity = function () {
        this.setActiveStyle('opacity', parseInt(this.props.opacity) / 100, null);
    };
    AppComponent.prototype.getFill = function () {
        this.props.fill = this.getActiveStyle('fill', null);
    };
    AppComponent.prototype.setFill = function () {
        this.setActiveStyle('fill', this.props.fill, null);
    };
    AppComponent.prototype.getLineHeight = function () {
        this.props.lineHeight = this.getActiveStyle('lineHeight', null);
    };
    AppComponent.prototype.setLineHeight = function () {
        this.setActiveStyle('lineHeight', parseFloat(this.props.lineHeight), null);
    };
    AppComponent.prototype.getCharSpacing = function () {
        this.props.charSpacing = this.getActiveStyle('charSpacing', null);
    };
    AppComponent.prototype.setCharSpacing = function () {
        this.setActiveStyle('charSpacing', this.props.charSpacing, null);
    };
    AppComponent.prototype.getFontSize = function () {
        this.props.fontSize = this.getActiveStyle('fontSize', null);
    };
    AppComponent.prototype.setFontSize = function () {
        this.setActiveStyle('fontSize', parseInt(this.props.fontSize), null);
    };
    AppComponent.prototype.getBold = function () {
        this.props.fontWeight = this.getActiveStyle('fontWeight', null);
    };
    AppComponent.prototype.setBold = function () {
        this.props.fontWeight = !this.props.fontWeight;
        this.setActiveStyle('fontWeight', this.props.fontWeight ? 'bold' : '', null);
    };
    AppComponent.prototype.getFontStyle = function () {
        this.props.fontStyle = this.getActiveStyle('fontStyle', null);
    };
    AppComponent.prototype.setFontStyle = function () {
        this.props.fontStyle = !this.props.fontStyle;
        this.setActiveStyle('fontStyle', this.props.fontStyle ? 'italic' : '', null);
    };
    AppComponent.prototype.getTextDecoration = function () {
        this.props.TextDecoration = this.getActiveStyle('textDecoration', null);
    };
    AppComponent.prototype.setTextDecoration = function (value) {
        var iclass = this.props.TextDecoration;
        if (iclass.includes(value)) {
            iclass = iclass.replace(RegExp(value, "g"), "");
        }
        else {
            iclass += " " + value;
        }
        this.props.TextDecoration = iclass;
        this.setActiveStyle('textDecoration', this.props.TextDecoration, null);
    };
    AppComponent.prototype.hasTextDecoration = function (value) {
        return this.props.TextDecoration.includes(value);
    };
    AppComponent.prototype.getTextAlign = function () {
        this.props.textAlign = this.getActiveProp('textAlign');
    };
    AppComponent.prototype.setTextAlign = function (value) {
        this.props.textAlign = value;
        this.setActiveProp('textAlign', this.props.textAlign);
    };
    AppComponent.prototype.getFontFamily = function () {
        this.props.fontFamily = this.getActiveProp('fontFamily');
    };
    AppComponent.prototype.setFontFamily = function () {
        this.setActiveProp('fontFamily', this.props.fontFamily);
    };
    /*System*/
    AppComponent.prototype.removeSelected = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            this.canvas.remove(activeObject);
            // this.textString = '';
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            var self_1 = this;
            objectsInGroup.forEach(function (object) {
                self_1.canvas.remove(object);
            });
        }
    };
    AppComponent.prototype.bringToFront = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.bringToFront();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.bringToFront();
            });
        }
    };
    AppComponent.prototype.sendToBack = function () {
        var activeObject = this.canvas.getActiveObject(), activeGroup = this.canvas.getActiveGroup();
        if (activeObject) {
            activeObject.sendToBack();
            // activeObject.opacity = 1;
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            this.canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                object.sendToBack();
            });
        }
    };
    AppComponent.prototype.confirmClear = function () {
        if (confirm('Are you sure?')) {
            this.canvas.clear();
        }
    };
    AppComponent.prototype.rasterize = function () {
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            console.log(this.canvas.toDataURL('png'));
            //window.open(this.canvas.toDataURL('png'));
            var image = new Image();
            image.src = this.canvas.toDataURL('png');
            var w = window.open("");
            w.document.write(image.outerHTML);
        }
    };
    AppComponent.prototype.rasterizeSVG = function () {
        console.log(this.canvas.toSVG());
        // window.open(
        //   'data:image/svg+xml;utf8,' +
        //   encodeURIComponent(this.canvas.toSVG()));
        // console.log(this.canvas.toSVG())
        // var image = new Image();
        // image.src = this.canvas.toSVG()
        var w = window.open("");
        w.document.write(this.canvas.toSVG());
    };
    ;
    AppComponent.prototype.saveCanvasToJSON = function () {
        var json = JSON.stringify(this.canvas);
        localStorage.setItem('Kanvas', json);
        console.log('json');
        console.log(json);
    };
    AppComponent.prototype.loadCanvasFromJSON = function () {
        var _this = this;
        var CANVAS = localStorage.getItem('Kanvas');
        console.log('CANVAS');
        console.log(CANVAS);
        // and load everything from the same json
        this.canvas.loadFromJSON(CANVAS, function () {
            console.log('CANVAS untar');
            console.log(CANVAS);
            // making sure to render canvas at the end
            _this.canvas.renderAll();
            // and checking if object's "name" is preserved
            console.log('this.canvas.item(0).name');
            console.log(_this.canvas);
        });
    };
    ;
    AppComponent.prototype.rasterizeJSON = function () {
        this.json = JSON.stringify(this.canvas, null, 2);
    };
    AppComponent.prototype.resetPanels = function () {
        this.textEditor = false;
        this.imageEditor = false;
        this.figureEditor = false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__ = __webpack_require__("../../../../ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_color_picker__["a" /* ColorPickerModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map