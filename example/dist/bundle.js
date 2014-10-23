/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, Please, console*/
	/*eslint no-console:0 no-use-before-define:0*/

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {

	    //<webpack>
	    __webpack_require__(3);
	    __webpack_require__(12);
	    __webpack_require__(6);
	    __webpack_require__(4);
	    //</webpack>

	    // please-js
	    //require('pleasejs/Please');

	    // Fast-click
	    var FastClick = __webpack_require__(10);
	    FastClick.attach(document.body);

	    // import dependencies
	    var Engine = __webpack_require__(14);
	    var ViewSequence = __webpack_require__(15);
	    var Surface = __webpack_require__(16);
	    var Modifier = __webpack_require__(17);
	    var Transform = __webpack_require__(18);
	    var ScrollView = __webpack_require__(8);
	    var TableLayout = __webpack_require__(2);
	    var LayoutController = __webpack_require__(9);
	    var Lagometer = __webpack_require__(5);

	    // Local data
	    var i;
	    var j;

	    // create the main context
	    var mainContext = Engine.createContext();

	    // create scrollview
	    var viewSequence = new ViewSequence();
	    var scrollView = new ScrollView({
	        layout: TableLayout,
	        layoutOptions: {
	            // callback that is called by the layout-function to check
	            // whether a node is a section
	            isSectionCallback: function(renderNode) {
	                return renderNode.options.isSection;
	            },
	            isPullToRefreshCallback: function(renderNode) {
	                return renderNode.isPullToRefresh;
	            }
	        },
	        dataSource: viewSequence,
	        useContainer: true
	    });
	    mainContext.add(scrollView);

	    // create view-sequence containing items
	    viewSequence.push(_createPullToRefreshCell());
	    for (j = 1; j <= 10; j++) {
	        var title = 'This is a sticky section ' + j;
	        if (j === 1) {
	            title = 'Try pull down to refresh!';
	        }
	        viewSequence.push(_createSection(title));
	        for (i = 1 ; i <= 5; i++) {
	            viewSequence.push(_createCell(i));
	        }
	    }
	    viewSequence.push(_createPullToRefreshCell());

	    /**
	     * Create pull to refresh cell
	     */
	    function _createPullToRefreshCell(index) {
	        var surface = new Surface({
	            classes: ['pull-to-refresh']
	        });
	        surface.isPullToRefresh = true;
	        return surface;
	    }

	    /**
	     * Creates a simple cell
	     */
	    function _createCell(index) {
	        return new LayoutController({
	            size: [undefined, 50],
	            layout: {dock: [
	                ['fill', 'back'],
	                ['left', undefined, 20],
	                ['right', undefined, 20],
	                ['fill', 'text', 1]
	            ]},
	            dataSource: {
	                back: new Surface({
	                    classes: ['cell-back']
	                }),
	                text: new Surface({
	                    content: 'My celly2',
	                    classes: ['cell-text']
	                })
	            }
	        });
	    }

	    /**
	     * Creates a section
	     */
	    function _createSection(text) {
	        return new LayoutController({
	            size: [undefined, 50],
	            isSection: true,
	            layout: {dock: [
	                ['fill', 'back'],
	                ['left', undefined, 20],
	                ['right', undefined, 20],
	                ['fill', 'text', 1]
	            ]},
	            dataSource: {
	                back: new Surface({
	                    classes: ['section-back']
	                }),
	                text: new Surface({
	                    content: text,
	                    classes: ['section-text']
	                })
	            }
	        });
	    }

	    /**
	     * Lagometer
	     */
	    var lagometerMod = new Modifier({
	        size: [100, 100],
	        align: [1.0, 0.0],
	        origin: [1.0, 0.0],
	        transform: Transform.translate(-10, 70, 1000)
	    });
	    var lagometer = new Lagometer({
	        size: lagometerMod.getSize()
	    });
	    //mainContext.add(lagometerMod).add(lagometer);
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/

	/**
	 * Lays out a sections and cells and makes the section stick to the top (or left) side
	 * of the scollview.
	 *
	 * |options|type|description|
	 * |---|---|---|
	 * |`[isSectionCallback]`|Function|Callback that is called in order to check if a render-node is a section rather than a cell.|
	 * |`[itemSize]`|Number|Height or width in pixels of an item (used when renderNode has no size)|
	 *
	 * Example:
	 *
	 * ```javascript
	 * var TableLayout = require('famous-flex-tablelayout/TableLayout');
	 *
	 * new LayoutController({
	 *   layout: TableLayout,
	 *   layoutOptions: {
	 *     isSectionCallback: _isSection,
	 *   },
	 *   dataSource: [
	 *     // first section
	 *     _createSection(),
	 *     _createCell(),
	 *     _createCell(),
	 *     // second section
	 *     _createSection(),
	 *     _createCell(),
	 *   ]
	 * })
	 *
	 * function _createCell() {
	 *   return new Surface({
	 *     size: [undefined, 50],
	 *     content: 'my cell'
	 *   });
	 * }
	 *
	 * function _createSection() {
	 *   var section = new Surface({
	 *     size: [undefined, 30],
	 *     content: 'my sticky section'
	 *   });
	 *   section.isSection = true; // mark renderNode as section
	 *   return section;
	 * }
	 *
	 * function _isSection(renderNode) {
	 *   return renderNode.isSection;
	 * }
	 * ```
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(19);

	    // Define capabilities of this layout function
	    var capabilities = {
	        sequence: true,
	        direction: [Utility.Direction.Y, Utility.Direction.X],
	        scrolling: true,
	        trueSize: true,
	        sequentialScrollingOptimized: true,
	        debug: {
	            testPrev: false
	        }
	    };

	    // Layout function
	    function TableLayout(context, options) {

	        // Prepare
	        var size = context.size;
	        var direction = context.direction;
	        var offset = context.scrollOffset;
	        var node;
	        var nodeSize;
	        var itemSize;
	        var set;
	        var lastSectionBeforeVisibleCell;
	        var firstVisibleCell;
	        var lastCellOffsetInFirstVisibleSection;
	        var firstCell;
	        var firstCellOffset;
	        var lastCell;
	        var lastCellOffset;

	        //
	        // Determine item-size or use true=size
	        //
	        if ((options.itemSize === true) || !options.hasOwnProperty('itemSize')) {
	            itemSize = true;
	        }
	        else {
	            itemSize = (options.itemSize === undefined) ? size[direction] : options.itemSize;
	        }

	        //
	        // Process all next nodes
	        //
	        while (offset < context.scrollEnd) {
	            node = context.next();
	            if (!node) {
	                break;
	            }
	            nodeSize = (itemSize === true) ? context.resolveSize(node, size)[direction] : itemSize;

	            //
	            // Detect the first and last cell
	            //
	            if (!firstCell) {
	                firstCell = node;
	                firstCellOffset = offset;
	                if (options.isPullToRefreshCallback && options.isPullToRefreshCallback(context.getRenderNode(firstCell))) {
	                    nodeSize = 0;
	                }
	            }
	            lastCell = node;
	            lastCellOffset = offset;

	            //
	            // Position node
	            //
	            set = {
	                size: direction ? [size[0], nodeSize] : [nodeSize, size[1]],
	                translate: direction ? [0, offset, 0] : [offset, 0, 0],
	                scrollLength: nodeSize
	            };
	            context.set(node, set);
	            offset += nodeSize;

	            //
	            // Keep track of the last section before the first visible cell
	            //
	            if (options.isSectionCallback && options.isSectionCallback(context.getRenderNode(node))) {
	                if (!firstVisibleCell) {
	                    lastSectionBeforeVisibleCell = node;
	                } else if (lastCellOffsetInFirstVisibleSection === undefined) {
	                    lastCellOffsetInFirstVisibleSection = offset - nodeSize;
	                }
	            } else if (!firstVisibleCell && (offset >= 0)) {
	                firstVisibleCell = node;
	            }
	        }
	        if (!lastCell) {
	            lastCell = context.next();
	            lastCellOffset = offset;
	        }

	        //
	        // Process previous nodes
	        //
	        offset = context.scrollOffset;
	        while (offset > context.scrollStart) {
	            node = context.prev();
	            if (!node) {
	                break;
	            }

	            //
	            // Keep track of the last section before the first visible cell
	            //
	            if (options.isSectionCallback && options.isSectionCallback(context.getRenderNode(node))) {
	                if (!lastSectionBeforeVisibleCell) {
	                    lastSectionBeforeVisibleCell = node;
	                }
	            } else if (offset >= 0) {
	                firstVisibleCell = node;
	                if (lastSectionBeforeVisibleCell) {
	                    lastCellOffsetInFirstVisibleSection = offset;
	                }
	                lastSectionBeforeVisibleCell = undefined;
	            }

	            //
	            // Position node
	            //
	            nodeSize = options.itemSize || context.resolveSize(node, size)[direction];
	            set = {
	                size: direction ? [size[0], nodeSize] : [nodeSize, size[1]],
	                translate: direction ? [0, offset - nodeSize, 0] : [offset - nodeSize, 0, 0],
	                scrollLength: nodeSize
	            };
	            context.set(node, set);
	            offset -= nodeSize;

	            //
	            // Detect the first and last cell
	            //
	            firstCell = node;
	            firstCellOffset = offset;
	            if (!lastCell) {
	                lastCell = node;
	                lastCell = offset;
	            }
	        }

	        //
	        // When no first section is in the scrollable range, then
	        // look back further in search for the that section
	        //
	        if (node && !lastSectionBeforeVisibleCell && options.isSectionCallback) {
	            node = context.prev();
	            while (node && !lastSectionBeforeVisibleCell) {
	                if (options.isSectionCallback && options.isSectionCallback(context.getRenderNode(node))) {
	                    lastSectionBeforeVisibleCell = node;
	                    nodeSize = options.itemSize || context.resolveSize(node, size)[direction];
	                    set = {
	                        size: direction ? [size[0], nodeSize] : [nodeSize, size[1]],
	                        translate: direction ? [0, offset - nodeSize, 0] : [offset - nodeSize, 0, 0]
	                    };
	                    context.set(node, set);
	                }
	                else {
	                    node = context.prev();
	                }
	            }
	        }

	        //
	        // Reposition "last section before first visible cell" to the top of the layout
	        //
	        if (lastSectionBeforeVisibleCell) {
	            var translate = lastSectionBeforeVisibleCell.set.translate;
	            translate[direction] = 0;
	            translate[2] = 1; // put section on top, so that it overlays cells
	            if ((lastCellOffsetInFirstVisibleSection !== undefined) &&
	                (lastSectionBeforeVisibleCell.set.size[direction] > lastCellOffsetInFirstVisibleSection)) {
	                translate[direction] = lastCellOffsetInFirstVisibleSection - lastSectionBeforeVisibleCell.set.size[direction];
	            }
	            context.set(lastSectionBeforeVisibleCell, {
	                size: lastSectionBeforeVisibleCell.set.size,
	                translate: translate,
	                scrollLength: lastSectionBeforeVisibleCell.set.scrollLength
	            });
	        }

	        //
	        // Reposition "pull to refresh" renderable at the top
	        //
	        if (firstCell && (firstCellOffset > 0) &&
	           options.isPullToRefreshCallback && options.isPullToRefreshCallback(context.getRenderNode(firstCell))) {
	            firstCell.set.translate[direction] = 0;
	            firstCell.set.size[direction] = firstCellOffset;
	            context.set(firstCell, {
	                size: firstCell.set.size,
	                translate: firstCell.set.translate,
	                scrollLength: firstCell.set.scrollLength
	            });
	        }

	        //
	        // Reposition "pull to refresh" renderable at the bottom
	        //
	        if (lastCell && (lastCellOffset < context.size[direction]) &&
	           options.isPullToRefreshCallback && options.isPullToRefreshCallback(context.getRenderNode(lastCell))) {
	            lastCell.set.translate[direction] = lastCellOffset;
	            lastCell.set.size[direction] = context.size[direction] - lastCellOffset;
	            context.set(lastCell, {
	                size: lastCell.set.size,
	                translate: lastCell.set.translate,
	                scrollLength: 0
	            });
	        }
	    }

	    TableLayout.Capabilities = capabilities;
	    TableLayout.Name = 'TableLayout';
	    TableLayout.Description = 'Layout for sections and cells';
	    module.exports = TableLayout;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*jslint browser:true, nomen:true, vars:true, plusplus:true*/
	/*global define*/

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    'use strict';

	    // import dependencies
	    var Engine = __webpack_require__(14);
	    var CanvasSurface = __webpack_require__(30);
	    var View = __webpack_require__(23);

	    /**
	     * @class Lagometer
	     * @extends View
	     * @constructor
	     * @param {Object} [options] Configuration options
	     */
	    function Lagometer(options) {
	        View.apply(this, arguments);

	        // Create sample-buffer
	        this.samples = [];
	        this.sampleIndex = 0;
	        this.Samples = this.options.size[0];

	        // Install render-handlers
	        Engine.on('prerender', this._onEngineRender.bind(this, true));
	        Engine.on('postrender', this._onEngineRender.bind(this, false));

	        // Create drawing canvas
	        this.canvas = new CanvasSurface(this.options.canvasSurface);
	        this.add(this.canvas);
	    }
	    Lagometer.prototype = Object.create(View.prototype);
	    Lagometer.prototype.constructor = Lagometer;

	    Lagometer.DEFAULT_OPTIONS = {
	        size: [100, 100],
	        min: 0,
	        max: 34,
	        backgroundColor: 'rgba(200, 0, 0, 0.8)',
	        borderColor: 'rgba(255, 0, 0, 0.8)',
	        textColor: 'rgba(255, 255, 255, 0.8)',
	        font: '28px Arial',
	        frameColor: '#00FF00',
	        scriptColor: '#BBBBFF',
	        canvasSurface: {
	            properties: {
	                'pointer-events': 'none'
	            }
	        }
	    };

	    /**
	     * @method _onEngineRender
	     */
	    Lagometer.prototype._onEngineRender = function(pre) {
	        var currentTime = Date.now();
	        if (pre) {

	            // Determine the time that was spent between two 'animation-frames'
	            if (this.lastTime !== undefined) {
	                this.frameTime = currentTime - this.lastTime;
	                if (this.maxFrameTime === undefined) {
	                    this.maxFrameTime = this.frameTime;
	                }
	                this.maxFrameTime = Math.max(this.frameTime, this.maxFrameTime);
	                if (this.minFrameTime === undefined) {
	                    this.minFrameTime = this.frameTime;
	                }
	                this.minFrameTime = Math.min(this.frameTime, this.minFrameTime);
	            }
	            this.lastTime = currentTime;

	        } else if (this.frameTime !== undefined) {

	            // Determine the time that was spent in the script
	            this.scriptTime = currentTime - this.lastTime;
	            if (this.maxScriptTime === undefined) {
	                this.maxScriptTime = this.scriptTime;
	            }
	            this.maxScriptTime = Math.max(this.scriptTime, this.maxScriptTime);
	            if (this.minScriptTime === undefined) {
	                this.minScriptTime = this.scriptTime;
	            }
	            this.minScriptTime = Math.min(this.scriptTime, this.minScriptTime);

	            // Create sample
	            var sample = {
	                lastTime: this.lastTime,
	                frameTime: this.frameTime,
	                scriptTime: this.scriptTime
	            };
	            var maxSamples = this.options.size[0] * 2;
	            if (this.samples.length < maxSamples) {
	                this.sampleIndex = this.samples.length;
	                this.samples.push(sample);
	            }
	            else {
	                this.sampleIndex = (this.sampleIndex + 1) % maxSamples;
	                this.samples[this.sampleIndex] = sample;
	            }
	        }
	    };

	    /**
	     * @method _drawSamples
	     */
	    Lagometer.prototype._drawSamples = function(draw) {

	        draw.context.beginPath();
	        var i;
	        var bufferIndex = draw.index;
	        var size = draw.size;
	        var yScale =  size[1] / (draw.max - draw.min);
	        for (i = 0; i < draw.buffer.length; i++) {
	            var x = size[0] - i;
	            var sample = draw.buffer[bufferIndex][draw.property];
	            var y = size[1] - ((sample - draw.min) * yScale);
	            if (i === 0) {
	                draw.context.moveTo(x, y);
	            }
	            else {
	                draw.context.lineTo(x, y);
	            }
	            bufferIndex--;
	            if (bufferIndex < 0) {
	                bufferIndex = draw.buffer.length - 1;
	                }
	        }
	        draw.context.lineWidth = 1;
	        draw.context.strokeStyle = draw.color;
	        draw.context.stroke();
	    };

	    /**
	     * @method _getFPS
	     */
	    Lagometer.prototype._getFPS = function(count) {
	        count = Math.min(count, this.samples.length);
	        var bufferIndex = this.sampleIndex;
	        var i;
	        var fps = 0;
	        for (i = 0; i < count; i++) {
	            var sample = this.samples[bufferIndex];
	            fps += sample.frameTime;
	            bufferIndex--;
	            if (bufferIndex < 0) {
	                bufferIndex = this.samples.length - 1;
	            }
	        }
	        return 1000 / (fps / count);
	    };

	    /**
	     * Renders the view.
	     *
	     * @method render
	     * @private
	     * @ignore
	     */
	    Lagometer.prototype.render = function render() {
	        var context = this.canvas.getContext('2d');
	        var size = this.getSize();
	        var canvasSize = [size[0] * 2, size[1] * 2];

	        // Update canvas size
	        if (!this._cachedSize ||
	            (this._cachedSize[0] !== size[0]) ||
	            (this._cachedSize[1] !== size[1]) ||
	            (this._cachedCanvasSize[0] !== canvasSize[0]) ||
	            (this._cachedCanvasSize[1] !== canvasSize[1])) {
	            this._cachedSize = size;
	            this._cachedCanvasSize = canvasSize;
	            this.canvas.setSize(size, canvasSize);
	        }

	        // Clear background
	        context.clearRect(0, 0, canvasSize[0], canvasSize[1]);
	        context.fillStyle = this.options.backgroundColor;
	        context.fillRect(0, 0, canvasSize[0], canvasSize[1]);
	        context.lineWidth = 1;
	        context.strokeStyle = this.options.borderColor;
	        context.strokeRect(0, 0, canvasSize[0], canvasSize[1]);

	        // Calculate min/max
	        var min = this.options.min;
	        var max = this.options.max;
	        //var min = Math.min(this.minFrameTime, this.minScriptTime);
	        //var max = Math.max(this.maxFrameTime, this.maxScriptTime);
	        /*var range = max - min;
	        var i;
	        if (this.samples.length) {
	            min = this.samples[0].frameTime;
	            max = this.samples[0].frameTime;
	            for (i = 0; i < this.samples.length; i++) {
	                min = Math.min(min, this.samples[i].frameTime);
	                max = Math.max(max, this.samples[i].frameTime);
	            }
	            min = 0;
	        }*/

	        // Prepare text drawing
	        context.fillStyle = this.options.textColor;
	        context.font = this.options.font;

	        // Draw fps (calculated over last 20 frames)
	        var fps = Math.round(this._getFPS(20));
	        context.fillText(fps + ' fps', canvasSize[0] - 84, 26);

	        // Draw frame-times
	        this._drawSamples({
	            context: context,
	            size: canvasSize,
	            buffer: this.samples,
	            index: this.sampleIndex,
	            min: min,
	            max: max,
	            property: 'frameTime',
	            color: this.options.frameColor
	        });

	        // Draw script-times
	        this._drawSamples({
	            context: context,
	            size: canvasSize,
	            buffer: this.samples,
	            index: this.sampleIndex,
	            min: min,
	            max: max,
	            property: 'scriptTime',
	            color: this.options.scriptColor
	        });

	        // Call super
	        return this._node.render();
	    };

	    module.exports = Lagometer;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(11)
		// The css code:
		(__webpack_require__(7));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"body, div {\n    font-family: \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n    font-weight: normal;\n}\nbody {\n  background: white;\n}\n\n.pull-to-refresh {\n  z-index: 0;\n  background-image: url("+__webpack_require__(49)+");\n  background-repeat: no-repeat no-repeat;\n  -background-position: center top 20px;\n  background-position: center center;\n  background-size: 40px auto;\n}\n\n.section-back {\n  z-index: 10;\n  background: rgba(200, 200, 200, 0.95);\n  border-bottom: 1px solid #aaaaaa;\n}\n\n.section-text {\n  z-index: 11;\n  line-height: 50px;\n  font-weight: bold;\n}\n\n.cell-back {\n  z-index: 1;\n  background: white;\n  border-bottom: 1px solid #aaaaaa;\n}\n\n.cell-text {\n  z-index: 2;\n  line-height: 50px;\n}";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/
	/*eslint no-use-before-define:0, no-console:0 */

	/**
	 * Work in progress - do not use.
	 *
	 * Inherited from: [FlowLayoutController](./FlowLayoutController.md)
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    //var LayoutUtility = require('./LayoutUtility');
	    var FlowLayoutController = __webpack_require__(29);
	    var FlowLayoutNode = __webpack_require__(28);
	    var LayoutNodeManager = __webpack_require__(27);
	    var ContainerSurface = __webpack_require__(34);
	    var Transform = __webpack_require__(18);
	    var EventHandler = __webpack_require__(25);
	    var Group = __webpack_require__(35);
	    var Vector = __webpack_require__(37);
	    var PhysicsEngine = __webpack_require__(38);
	    var Particle = __webpack_require__(39);
	    var Drag = __webpack_require__(40);
	    var Spring = __webpack_require__(41);
	    var ScrollSync = __webpack_require__(42);

	    /**
	     * Boudary reached detection
	     */
	    var Bounds = {
	        NONE: 0,
	        PREV: 1, // top
	        NEXT: 2, // bottom
	        BOTH: 3
	    };

	    /**
	     * Source of the spring
	     */
	    var SpringSource = {
	        NONE: 'none',
	        NEXTBOUNDS: 'next-bounds', // top
	        PREVBOUNDS: 'prev-bounds', // bottom
	        MINSIZE: 'minimal-size',
	        GOTOSEQUENCE: 'goto-sequence',
	        GOTOPREVDIRECTION: 'goto-prev-direction',
	        GOTONEXTDIRECTION: 'goto-next-direction',
	        SNAPPREV: 'snap-prev', // paginated: true
	        SNAPNEXT: 'snap-next'  // paginated: true
	    };

	    /**
	     * @class
	     * @param {Object} options Options.
	     * @alias module:ScrollView
	     */
	    function ScrollView(options, createNodeFn) {
	        FlowLayoutController.call(this, ScrollView.DEFAULT_OPTIONS, new LayoutNodeManager(FlowLayoutNode, _initLayoutNode.bind(this)));
	        if (options) {
	            this.setOptions(options);
	        }

	        // Scrolling
	        this._scroll = {
	            activeTouches: [],
	            // physics-engine to use for scrolling
	            pe: new PhysicsEngine(),
	            // particle that represents the scroll-offset
	            particle: new Particle({
	                position: [0, 0]
	            }),
	            // drag-force that slows the particle down after a "flick"
	            dragForce: new Drag(this.options.scrollDrag),
	            // spring
	            springValue: undefined,
	            springForce: new Spring(this.options.scrollSpring),
	            springEndState: new Vector([0, 0, 0]),
	            // group
	            groupStart: 0,
	            // delta
	            scrollDelta: 0,
	            normalizedScrollDelta: 0,
	            scrollForce: 0,
	            scrollForceCount: 0
	        };

	        // Diagnostics
	        this._debug = {
	            layoutCount: 0
	        };

	        // Create groupt for faster rendering
	        this.group = new Group();
	        this.group.add({render: _innerRender.bind(this)});

	        // Configure physics engine with particle and drag
	        this._scroll.pe.addBody(this._scroll.particle);
	        this._scroll.dragForceId = this._scroll.pe.attach(this._scroll.dragForce, this._scroll.particle);
	        this._scroll.springForce.setOptions({ anchor: this._scroll.springEndState });

	        // Setup input event handler
	        this._eventInput = new EventHandler();
	        EventHandler.setInputHandler(this, this._eventInput);

	        // Listen to touch events
	        this._eventInput.on('touchstart', _touchStart.bind(this));
	        this._eventInput.on('touchmove', _touchMove.bind(this));
	        this._eventInput.on('touchend', _touchEnd.bind(this));
	        this._eventInput.on('touchcancel', _touchEnd.bind(this));

	        // Listen to mouse-wheel events
	        this._scrollSync = new ScrollSync(this.options.scrollSync);
	        this._eventInput.pipe(this._scrollSync);
	        //this._scrollSync.on('start', _moveStart.bind(this, this._scrollSync));
	        this._scrollSync.on('update', _scrollUpdate.bind(this));
	        //this._scrollSync.on('end', _moveEnd.bind(this, this._scrollSync));

	        // Embed in container surface if neccesary
	        if (this.options.useContainer) {
	            this.container = new ContainerSurface({
	                properties: {overflow : 'hidden'}
	            });

	            // Create container surface, which has one child, which just returns
	            // the entity-id of this scrollview. This causes the Commit function
	            // of this scrollview to be called
	            this.container.add({
	                render: function() {
	                    return this.id;
	                }.bind(this)
	            });

	            // Pipe events received in container to this scrollview
	            this.subscribe(this.container);
	            EventHandler.setInputHandler(this.container, this);
	            EventHandler.setOutputHandler(this.container, this);
	        }
	    }
	    ScrollView.prototype = Object.create(FlowLayoutController.prototype);
	    ScrollView.prototype.constructor = ScrollView;
	    ScrollView.Bounds = Bounds;

	    ScrollView.DEFAULT_OPTIONS = {
	        //insertSpec: undefined,
	        //removeSpec: undefined,
	        useContainer: false,
	        offsetRounding: 1.0,
	        scrollDrag: {
	            strength : 0.001
	        },
	        scrollSpring: {
	            dampingRatio: 1.0,
	            period: 500
	        },
	        scrollSync: {
	            scale: 0.1
	        },
	        paginated: false,
	        //paginationEnergyThresshold: 0.001,
	        reverse: false,
	        touchMoveDirectionThresshold: undefined, // 0..1
	        logging: false,
	        scrollCallback: undefined //function(offset, force)
	    };

	    var oldSetOptions = ScrollView.prototype.setOptions;
	    /**
	     * Patches the ScrollView instance's options with the passed-in ones.
	     *
	     * @param {Options} options An object of configurable options for the FlowLayoutController instance.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @param {Spec} [options.insertSpec] Size, transform, opacity... to use when inserting new renderables into the scene.
	     * @param {Spec} [options.removeSpec] Size, transform, opacity... to use when removing renderables from the scene.
	     * @param {Object} [options.nodeSpring] Spring options to use when transitioning between states
	     * @return {FlowLayoutController} this
	     */
	    ScrollView.prototype.setOptions = function(options) {
	        oldSetOptions.call(this, options);
	        // todo - all other options
	        return this;
	    };

	    /**
	     * Called whenever a layout-node is created/re-used. Initializes
	     * the node with the `insertSpec` if it has been defined and enabled
	     * locking of the x/y translation so that the x/y position of the renderable
	     * is immediately updated when the user scrolls the view.
	     */
	    function _initLayoutNode(node, spec) {
	        /*if (node.setOptions) {
	            node.setOptions({
	                spring: this.options.nodeSpring
	            });
	        }*/
	        if (!spec && this.options.insertSpec) {
	            node.setSpec(this.options.insertSpec);
	        }
	        if (node.setDirectionLock) {
	            node.setDirectionLock(this._direction, 1);
	        }
	    }

	    /**
	     * Helper function for logging debug statements to the console.
	     */
	    function _log(args) {
	        if (!this.options.logging) {
	            return;
	        }
	        var message = this._debug.layoutCount + ': ';
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            if ((arg instanceof Object) || (arg instanceof Array)) {
	                message += JSON.stringify(arg);
	            }
	            else {
	                message += arg;
	            }
	        }
	        console.log(message);
	    }

	    /**
	     * Helper function to aid development and find bugs.
	     */
	    function _verifyIntegrity(phase, scrollOffset) {
	        /*phase = phase ? ' (' + phase + ')' : '';
	        if ((scrollOffset !== undefined) && isNaN(scrollOffset)) {
	            throw 'invalid scrollOffset: ' + scrollOffset + phase;
	        }
	        if (isNaN(this._scroll.particle.getVelocity1D(0))) {
	            throw 'invalid particle velocity: ' + this._scroll.particle.getVelocity1D(0) + phase;
	        }
	        if (isNaN(this._scroll.particle.getPosition1D(0))) {
	            throw 'invalid particle position: ' + this._scroll.particle.getPosition1D(0) + phase;
	        }*/
	    }

	    /**
	     * Sets the value for the spring, or set to `undefined` to disable the spring
	     */
	    function _updateSpring() {
	        var springValue = this._scroll.scrollForceCount ? undefined : this._scroll.springPosition;
	        if (springValue !== undefined) {
	            springValue = _roundScrollOffset.call(this, springValue);
	        }
	        if (this._scroll.springValue !== springValue) {
	            this._scroll.springValue = springValue;
	            if (springValue === undefined) {
	                if (this._scroll.springForceId !== undefined) {
	                    this._scroll.pe.detach(this._scroll.springForceId);
	                    this._scroll.springForceId = undefined;
	                    _log.call(this, 'disabled spring');
	                }
	            }
	            else {
	                if (this._scroll.springForceId === undefined) {
	                    this._scroll.springForceId = this._scroll.pe.attach(this._scroll.springForce, this._scroll.particle);
	                }
	                this._scroll.springEndState.set1D(springValue);
	                this._scroll.pe.wake();
	                _log.call(this, 'setting spring to: ', springValue, ' (', this._scroll.springSource, ')');
	            }
	        }
	    }

	    /**
	     * Called whenever the user starts moving the scroll-view, using
	     * touch gestures.
	     */
	    function _touchStart(event) {
	        //_log.call(this, 'touchStart');
	        //this._eventOutput.emit('touchstart', event);

	        // Remove any touches that are no longer active
	        var oldTouchesCount = this._scroll.activeTouches.length;
	        var i = 0;
	        var touchFound;
	        while (i < this._scroll.activeTouches.length) {
	            var activeTouch = this._scroll.activeTouches[i];
	            touchFound = false;
	            for (var j = 0; j < event.touches.length; j++) {
	                var touch = event.touches[j];
	                if (touch.identifier === activeTouch.id) {
	                    touchFound = true;
	                    break;
	                }
	            }
	            if (!touchFound) {
	                //_log.cal(this, 'removing touch with id: ', activeTouch.id);
	                this._scroll.activeTouches.splice(i, 1);
	            }
	            else {
	                i++;
	            }
	        }

	        // Process touch
	        for (i = 0; i < event.touches.length; i++) {
	            var changedTouch = event.touches[i];
	            touchFound = false;
	            for (j = 0; j < this._scroll.activeTouches.length; i++) {
	                if (this._scroll.activeTouches[j].id === changedTouch.identifier) {
	                    touchFound = true;
	                    break;
	                }
	            }
	            if (!touchFound) {
	                var current = [changedTouch.clientX, changedTouch.clientY];
	                var time = Date.now();
	                this._scroll.activeTouches.push({
	                    id: changedTouch.identifier,
	                    start: current,
	                    current: current,
	                    prev: current,
	                    time: time,
	                    prevTime: time
	                });
	            }
	        }

	        // The first time a touch new touch gesture has arrived, emit event
	        if (!oldTouchesCount && this._scroll.activeTouches.length) {
	            this.applyScrollForce(0);
	            this._scroll.touchDelta = 0;
	            if (this.options.scrollCallback) {
	                this.options.scrollCallback(0, 1);
	            }
	            //this._eventOutput.emit('scrollstart', this._scroll.activeTouches[0]);
	        }
	    }

	    /**
	     * Called whenever the user is moving his/her fingers to scroll the view.
	     * Updates the moveOffset so that the scroll-offset on the view is updated.
	     */
	    function _touchMove(event) {
	        //_log.call(this, 'touchMove');
	        //this._eventOutput.emit('touchmove', event);

	        // Process the touch event
	        var primaryTouch;
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var changedTouch = event.changedTouches[i];
	            for (var j = 0; j < this._scroll.activeTouches.length; j++) {
	                var touch = this._scroll.activeTouches[j];
	                if (touch.id === changedTouch.identifier) {

	                    // When a thresshold is configured, check whether the move operation (x/y ratio)
	                    // lies within the thresshold. A move of 10 pixels x and 10 pixels y is considered 45 deg,
	                    // which corresponds to a thresshold of 0.5.
	                    var moveDirection = Math.atan2(
	                        Math.abs(changedTouch.clientY - touch.prev[1]),
	                        Math.abs(changedTouch.clientX - touch.prev[0])) / (Math.PI / 2.0);
	                    var directionDiff = Math.abs(this._direction - moveDirection);
	                    if ((this.options.touchMoveDirectionThresshold === undefined) || (directionDiff <= this.options.touchMoveDirectionThresshold)){
	                        touch.prev = touch.current;
	                        touch.current = [changedTouch.clientX, changedTouch.clientY];
	                        touch.prevTime = touch.time;
	                        touch.direction = moveDirection;
	                        touch.time = Date.now();
	                        primaryTouch = (j === 0) ? touch : undefined;
	                    }
	                }
	            }
	        }

	        // Update move offset and emit event
	        if (primaryTouch) {
	            var delta = primaryTouch.current[this._direction] - primaryTouch.start[this._direction];
	            if (this.options.scrollCallback) {
	                delta = this.options.scrollCallback(delta, 2);
	            }
	            this.updateScrollForce(this._scroll.touchDelta, delta);
	            this._scroll.touchDelta = delta;
	            //this._eventOutput.emit('scrollmove', this._scroll.activeTouches[0]);
	        }
	    }

	    /**
	     * Called whenever the user releases his fingers and the touch gesture
	     * has completed. This will set the new position and if the user used a 'flick'
	     * gesture give the scroll-offset particle a velocity and momentum into a
	     * certain direction.
	     */
	    function _touchEnd(event) {
	        //_log.call(this, 'touchEnd');
	        //this._eventOutput.emit('touchend', event);

	        // Remove touch
	        var primaryTouch = this._scroll.activeTouches.length ? this._scroll.activeTouches[0] : undefined;
	        for (var i = 0; i < event.changedTouches.length; i++) {
	            var changedTouch = event.changedTouches[i];
	            for (var j = 0; j < this._scroll.activeTouches.length; j++) {
	                var touch = this._scroll.activeTouches[j];
	                if (touch.id === changedTouch.identifier) {

	                    // Remove touch
	                    this._scroll.activeTouches.splice(j, 1);

	                    // When a different touch now becomes the primary touch, update
	                    // its start position to match the current move offset.
	                    if ((j === 0) && this._scroll.activeTouches.length) {
	                        var newPrimaryTouch = this._scroll.activeTouches[0];
	                        newPrimaryTouch.start[0] = newPrimaryTouch.current[0] - (touch.current[0] - touch.start[0]);
	                        newPrimaryTouch.start[1] = newPrimaryTouch.current[1] - (touch.current[1] - touch.start[1]);
	                    }
	                    break;
	                }
	            }
	        }

	        // Wait for all fingers to be released from the screen before resetting the move-spring
	        if (this._scroll.activeTouches.length) {
	            return;
	        }

	        // Determine velocity and add to particle
	        var velocity = 0;
	        var diffTime = Date.now() - primaryTouch.prevTime;
	        if (diffTime > 0) {
	            var diffOffset = primaryTouch.current[this._direction] - primaryTouch.prev[this._direction];
	            velocity = diffOffset / diffTime;
	        }

	        // Execute callback
	        var delta = this._scroll.touchDelta;
	        if (this.options.scrollCallback) {
	            delta = this.options.scrollCallback(delta, 3, velocity);
	        }

	        // Release scroll force
	        this.releaseScrollForce(delta, velocity);
	        this._scroll.touchDelta = 0;

	        // Emit end event
	        //this._eventOutput.emit('scrollend', primaryTouch);
	    }

	    /**
	     * Called whenever the user is scrolling the view using either a mouse
	     * scroll wheel or a track-pad.
	     */
	    function _scrollUpdate(event) {
	        var offset = Array.isArray(event.delta) ? event.delta[this._direction] : event.delta;
	        if (this.options.scrollCallback) {
	            offset = this.options.scrollCallback(offset, 0);
	        }
	        this.scroll(offset);
	    }

	    /**
	     * Helper function which rounds the scroll-offset to ensure it reaches an end-state and doesn't
	     * move infinitely.
	     */
	    function _roundScrollOffset(scrollOffset) {
	        return Math.round(scrollOffset / this.options.offsetRounding) * this.options.offsetRounding;
	    }

	    /**
	     * Updates the scroll offset particle.
	     */
	    function _setParticle(position, velocity, phase) {
	        if (position !== undefined) {
	            var oldPosition = this._scroll.particle.getPosition1D();
	            this._scroll.particle.setPosition1D(position);
	            _log.call(this, 'setParticle.position: ', position, ' (old: ', oldPosition, ', delta: ', position - oldPosition, ', phase: ', phase, ')');
	        }
	        if (velocity !== undefined) {
	            var oldVelocity = this._scroll.particle.getVelocity1D();
	            if (oldVelocity !== velocity) {
	                this._scroll.particle.setVelocity1D(velocity);
	                _log.call(this, 'setParticle.velocity: ', velocity, ' (old: ', oldVelocity, ', delta: ', velocity - oldVelocity, ', phase: ', phase, ')');
	            }
	        }
	    }

	    /**
	     * Get the in-use scroll-offset.
	     */
	    function _calcScrollOffset(normalize) {

	        // When moving using touch-gestures, make the offset stick to the
	        // finger. When the bounds is exceeded, decrease the scroll distance
	        // by two.
	        var scrollOffset = this._scroll.particle.getPosition1D();

	        if (this._scroll.scrollDelta || this._scroll.normalizedScrollDelta) {
	            scrollOffset += this._scroll.scrollDelta + this._scroll.normalizedScrollDelta;
	            if (((this._scroll.boundsReached & Bounds.PREV) && (scrollOffset > this._scroll.springPosition)) ||
	               ((this._scroll.boundsReached & Bounds.NEXT) && (scrollOffset < this._scroll.springPosition)) ||
	               (this._scroll.boundsReached === Bounds.BOTH)) {
	                scrollOffset = this._scroll.springPosition;
	            }
	            if (normalize) {
	                if (!this._scroll.scrollDelta) {
	                    this._scroll.normalizedScrollDelta = 0;
	                    _setParticle.call(this, scrollOffset, undefined, '_calcScrollOffset');
	                }
	                this._scroll.normalizedScrollDelta += this._scroll.scrollDelta;
	                this._scroll.scrollDelta = 0;
	            }
	        }

	        if (this._scroll.scrollForceCount) {
	            if (this._scroll.springPosition !== undefined) {
	                scrollOffset = (scrollOffset + this._scroll.scrollForce + this._scroll.springPosition) / 2.0;
	            }
	            else {
	                scrollOffset += this._scroll.scrollForce;
	            }
	        }

	        //_log.call(this, 'scrollOffset: ', scrollOffset, ', particle:', this._scroll.particle.getPosition1D(), ', moveToPosition: ', this._scroll.moveToPosition, ', springPosition: ', this._scroll.springPosition);
	        return _roundScrollOffset.call(this, scrollOffset);
	    }

	    /**
	     * Helper function that calculates the prev layed out height.
	     */
	    function _calcPrevHeight() {
	        var height = 0;
	        this._nodes.forEach(function(node) {
	            if ((node.scrollLength === undefined) || node.trueSizeRequested) {
	                height = undefined; // can't determine height
	                return true;
	            }
	            height += node.scrollLength;
	        }.bind(this), false);
	        return height;
	    }

	    /**
	     * Helper function that calculates the next layed out height.
	     */
	    function _calcNextHeight() {
	        var height = 0;
	        this._nodes.forEach(function(node) {
	            if ((node.scrollLength === undefined) || node.trueSizeRequested) {
	                height = undefined; // can't determine height
	                return true;
	            }
	            height += node.scrollLength;
	        }.bind(this), true);
	        return height;
	    }

	    /**
	     * Normalizes the scroll-offset so that scroll-offset is as close
	     * to 0 as can be. This function modifies the scrollOffset and the
	     * viewSeuqnce so that the least possible view-sequence nodes
	     * need to be rendered.
	     *
	     * I.e., when the scroll-offset is changed, e.g. by scrolling up
	     * or down, then renderables may end-up outside the visible range.
	     */
	    function _calcBounds(size, scrollOffset) {

	        // Local data
	        var prevHeight;
	        var nextHeight;

	        // 1. Check whether primary boundary has been reached
	        if (this.options.reverse) {
	            nextHeight = _calcNextHeight.call(this);
	            if ((nextHeight !== undefined) && ((scrollOffset + nextHeight) <= size[this._direction])) {
	                this._scroll.boundsReached = Bounds.NEXT;
	                this._scroll.springPosition = size[this._direction] - nextHeight;
	                this._scroll.springSource = SpringSource.NEXTBOUNDS;
	                return;
	            }
	            prevHeight = _calcPrevHeight.call(this);
	        }
	        else {
	            prevHeight = _calcPrevHeight.call(this);
	            if ((prevHeight !== undefined) && ((scrollOffset - prevHeight) >= 0)) {
	                this._scroll.boundsReached = Bounds.PREV;
	                this._scroll.springPosition = prevHeight;
	                this._scroll.springSource = SpringSource.PREVBOUNDS;
	                return;
	            }
	            nextHeight = _calcNextHeight.call(this);
	        }

	        // 2. When the rendered height is smaller than the total height,
	        //    then lock to the primary bounds
	        var totalHeight;
	        if ((nextHeight !== undefined) && (prevHeight !== undefined)) {
	            totalHeight = prevHeight + nextHeight;
	        }
	        if ((totalHeight !== undefined) && (totalHeight <= size[this._direction])) {
	            this._scroll.boundsReached = Bounds.BOTH;
	            this._scroll.springPosition = this.options.reverse ? size[this._direction] - nextHeight : prevHeight;
	            this._scroll.springSource = SpringSource.MINSIZE;
	            return;
	        }

	        // 3. Check if secondary bounds has been reached
	        if (this.options.reverse) {
	            if ((prevHeight !== undefined) && ((scrollOffset - prevHeight) >= 0)) {
	                this._scroll.boundsReached = Bounds.PREV;
	                this._scroll.springPosition = prevHeight;
	                this._scroll.springSource = SpringSource.PREVBOUNDS;
	                return;
	            }
	        }
	        else {
	            if ((nextHeight !== undefined) && ((scrollOffset + nextHeight) <= size[this._direction])){
	                this._scroll.boundsReached = Bounds.NEXT;
	                this._scroll.springPosition = size[this._direction] - nextHeight;
	                this._scroll.springSource = SpringSource.NEXTBOUNDS;
	                return;

	            }
	        }

	        // No bounds reached
	        this._scroll.boundsReached = Bounds.NONE;
	        this._scroll.springPosition = undefined;
	        this._scroll.springSource = SpringSource.NONE;
	    }

	    /**
	     * Calculates the scrollto-offset to which the spring is set.
	     */
	    function _calcScrollToOffset(size, scrollOffset) {
	        if (!this._scroll.scrollToSequence) {
	            return;
	        }

	        // 1. When boundary is reached, stop scrolling in that direction
	        if ((this._scroll.boundsReached === Bounds.BOTH) ||
	            (!this._scroll.scrollToDirection && (this._scroll.boundsReached === Bounds.PREV)) ||
	            (this._scroll.scrollToDirection && (this._scroll.boundsReached === Bounds.NEXT))) {
	            this._scroll.scrollToSequence = undefined;
	            return;
	        }

	        // 2. Find the node to scroll to
	        var foundNode;
	        var scrollToOffset = 0;
	        this._nodes.forEach(function(node) {
	            if (node.scrollLength === undefined) {
	                return true;
	            }
	            if (node._viewSequence === this._scroll.scrollToSequence) {
	                foundNode = node;
	                return true;
	            }
	            scrollToOffset -= node.scrollLength;
	        }.bind(this), true);
	        if (!foundNode) {
	            scrollToOffset = 0;
	            this._nodes.forEach(function(node) {
	                if (node.scrollLength === undefined) {
	                    return true;
	                }
	                scrollToOffset += node.scrollLength;
	                if (node._viewSequence === this._scroll.scrollToSequence) {
	                    foundNode = node;
	                    return true;
	                }
	            }.bind(this), false);
	        }
	        if (foundNode) {
	            this._scroll.springPosition = scrollToOffset;
	            this._scroll.springSource = SpringSource.GOTOSEQUENCE;
	            return;
	        }

	        // 3. When node not found, set the spring to a position into that direction
	        if (this._scroll.scrollToDirection) {
	            this._scroll.springPosition = scrollOffset - size[this._direction];
	            this._scroll.springSource = SpringSource.GOTOPREVDIRECTION;
	        }
	        else {
	            this._scroll.springPosition = scrollOffset + size[this._direction];
	            this._scroll.springSource = SpringSource.GOTONEXTDIRECTION;
	        }
	    }

	    /**
	     * Snaps to a page when paginanation is enabled and the energy of the particle
	     * is below the thesshold.
	     */
	    function _snapToPage(size, scrollOffset) {

	        // Check whether pagination is active
	        if (!this.options.paginated ||
	            this._scroll.scrollForceCount ||
	            (Math.abs(this._scroll.particle.getEnergy()) > this.options.paginationEnergyThresshold) ||
	            (this._scroll.springPosition !== undefined)) {
	            return;
	        }

	        // Local data
	        var pageOffset = scrollOffset;
	        var pageLength;
	        var hasNext;

	        // Lookup page in previous direction
	        var bound = this.options.reverse ? size[this._direction] : 0;
	        this._nodes.forEach(function(node) {
	            if (node.scrollLength !== 0) {
	                if ((pageOffset <= bound) || (node.scrollLength === undefined)) {
	                    return true;
	                }
	                hasNext = (pageLength !== undefined);
	                pageLength = node.scrollLength;
	                pageOffset -= node.scrollLength;
	            }
	        }.bind(this), false);

	        // Lookup page in next direction
	        if (pageLength === undefined) {
	            this._nodes.forEach(function(node) {
	                if (node.scrollLength !== 0) {
	                    if (node.scrollLength === undefined) {
	                        return true;
	                    }
	                    hasNext = (pageLength !== undefined);
	                    if (hasNext) {
	                        if ((pageOffset + pageLength) > bound) {
	                            return true;
	                        }
	                        pageOffset += pageLength;
	                    }
	                    pageLength = node.scrollLength;
	                }
	            }.bind(this), true);
	        }
	        if (!pageLength) {
	            return;
	        }

	        // Determine snap spring-position
	        var boundOffset = pageOffset - bound;
	        var snapSpringPosition;
	        if (!hasNext || (Math.abs(boundOffset) < Math.abs(boundOffset + pageLength))) {
	            snapSpringPosition = (scrollOffset - pageOffset) + (this.options.reverse ? size[this._direction] : 0);
	            if (snapSpringPosition !== this._scroll.springPosition) {
	                //_log.call(this, 'setting snap-spring to #1: ', snapSpringPosition, ', previous: ', this._scroll.springPosition);
	                this._scroll.springPosition = snapSpringPosition;
	                this._scroll.springSource = SpringSource.SNAPPREV;
	            }
	        }
	        else {
	            snapSpringPosition = (scrollOffset - (pageOffset + pageLength)) + (this.options.reverse ? size[this._direction] : 0);
	            if (snapSpringPosition !== this._scroll.springPosition) {
	                //_log.call(this, 'setting snap-spring to #2: ', snapSpringPosition, ', previous: ', this._scroll.springPosition);
	                this._scroll.springPosition = snapSpringPosition;
	                this._scroll.springSource = SpringSource.SNAPNEXT;
	            }
	        }
	    }

	    /**
	     * Normalizes the view-sequence node so that the view-sequence is near to 0.
	     */
	    function _normalizePrevViewSequence(size, scrollOffset, baseOffset) {
	        var normalizedCount = 0;
	        var normalizedLength = 0;
	        this._nodes.forEach(function(node) {
	            if ((node.scrollLength === undefined) || node.trueSizeRequested) {
	                return true;
	            }
	            if (scrollOffset < baseOffset){
	                return true;
	            }
	            this._viewSequence = node._viewSequence;
	            scrollOffset -= node.scrollLength;
	            normalizedLength -= node.scrollLength;
	            normalizedCount++;
	        }.bind(this), false);
	        if (normalizedCount) {
	            _log.call(this, 'normalized ', normalizedCount, ' prev node(s) with length: ', normalizedLength, ', scrollOffset: ', scrollOffset);
	        }
	        return scrollOffset;
	    }
	    function _normalizeNextViewSequence(size, scrollOffset, baseOffset) {
	        var prevScrollLength;
	        var normalizedCount = 0;
	        var normalizedLength = 0;
	        this._nodes.forEach(function(node) {
	            if ((node.scrollLength === undefined) || node.trueSizeRequested) {
	                return true;
	            }
	            if (prevScrollLength !== undefined) {
	                if ((scrollOffset + prevScrollLength) >= baseOffset){
	                    return true;
	                }
	                this._viewSequence = node._viewSequence;
	                scrollOffset += prevScrollLength;
	                normalizedLength += prevScrollLength;
	                normalizedCount++;
	            }
	            prevScrollLength = node.scrollLength;
	        }.bind(this), true);
	        if (normalizedCount) {
	            _log.call(this, 'normalized ', normalizedCount, ' next node(s) with length: ', normalizedLength, ', scrollOffset: ', scrollOffset);
	        }
	        return scrollOffset;
	    }
	    function _normalizeViewSequence(size, scrollOffset) {

	        // Check whether normalisation is disabled
	        if (this._layout.capabilities && this._layout.capabilities.debug &&
	            (this._layout.capabilities.debug.normalize !== undefined) &&
	            !this._layout.capabilities.debug.normalize) {
	            return scrollOffset;
	        }

	        // Don't normalize when forces are at work
	        if (this._scroll.scrollForceCount) {
	            return scrollOffset;
	        }

	        // Determine base offset (by default 0 = top/left), but may be overwriten
	        // by the layout function to test layout in the prev-direction.
	        var baseOffset = 0; // top/left
	        if (this._layout.capabilities && this._layout.capabilities.debug && this._layout.capabilities.debug.testPrev) {
	            baseOffset = size[this._direction];
	        }

	        // 1. Normalize in primary direction
	        var normalizedScrollOffset = scrollOffset;
	        if (this.options.reverse) {
	            normalizedScrollOffset = _normalizeNextViewSequence.call(this, size, scrollOffset, baseOffset);
	        }
	        else {
	            normalizedScrollOffset = _normalizePrevViewSequence.call(this, size, scrollOffset, baseOffset);
	        }

	        // 2. Normalize in secondary direction
	        if (normalizedScrollOffset === scrollOffset) {
	            if (this.options.reverse) {
	                normalizedScrollOffset = _normalizePrevViewSequence.call(this, size, scrollOffset, baseOffset);
	            }
	            else {
	                normalizedScrollOffset = _normalizeNextViewSequence.call(this, size, scrollOffset, baseOffset);
	            }
	        }

	        // Adjust particle and springs
	        if (normalizedScrollOffset !== scrollOffset) {
	            var delta = normalizedScrollOffset - scrollOffset;

	            // Adjust particle
	            _setParticle.call(this, this._scroll.particle.getPosition1D() + delta, undefined, 'normalize');

	            // Adjust scroll spring
	            if (this._scroll.springPosition !== undefined) {
	                this._scroll.springPosition += delta;
	            }

	            // Adjust group offset
	            if (this._layout.capabilities.sequentialScrollingOptimized) {
	                this._scroll.groupStart -= delta;
	            }
	        }
	        return normalizedScrollOffset;
	    }

	        /*function _getVisiblePercentage(spec) {
	        var specLeft = spec.transform[12];
	        var specTop = spec.transform[13];
	        var specSize = spec.size;
	        var left = Math.max(0, specLeft);
	        var top = Math.max(0, specTop);
	        var right = Math.min(this._contextSizeCache[0], specLeft + specSize[0]);
	        var bottom = Math.min(this._contextSizeCache[1], specTop + specSize[1]);
	        var width = right - left;
	        var height = bottom - top;
	        var volume = width * height;
	        var totalVolume = spec.size[0] * spec.size[1];
	        return totalVolume ? (volume / totalVolume) : 0;
	    }

	    function _getVisibleItem(spec) {
	        return {
	            spec: {
	                opacity: spec.opacity,
	                align: spec.align,
	                origin: spec.origin,
	                size: spec.size,
	                transform: spec.transform
	            },
	            renderNode: spec.renderNode,
	            visiblePerc: _getVisiblePercentage.call(this, spec)
	        };
	    }*/

	    /**
	     * Get the first visible item that meets the visible percentage criteria.
	     * The percentage indicates how many pixels should at least visible before
	     * the renderable is considered visible.
	     * `visible percentage = (width * height) / (visible width * visible height)`
	     *
	     * @param {Number} [visiblePerc] percentage in the range of 0..1 (default: 0.99)
	     * @return {Object} item object or undefined
	     */
	    ScrollView.prototype.getFirstVisibleItem = function(visiblePerc) {
	        var scrollOffset = _calcScrollOffset.call(this);
	        var next = scrollOffset <= 0;
	        var foundNode;
	        this._nodes.forEach(function(node) {
	            if (node.scrollLength === undefined) {
	                return true;
	            }
	            scrollOffset += next ? node.scrollLength : -node.scrollLength;
	            if ((next && (scrollOffset > 0)) ||
	                (!next && (scrollOffset <= 0))) {
	                foundNode = node;
	                return true;
	            }
	        }, next);
	        return foundNode ? foundNode._viewSequence : undefined;
	    };

	    /**
	     * Helper function that scrolls the view towards a view-sequence node.
	     */
	    function _scrollToSequence(viewSequence, next) {
	        this._scroll.scrollToSequence = viewSequence;
	        this._scroll.scrollToDirection = next;
	        this._scroll.scrollDirty = true;
	    }

	    /**
	     * Moves to the next node in the viewSequence.
	     *
	     * @param {Number} [amount] Amount of nodes to move
	     */
	    function _goToPage(amount) {

	        // Get current scroll-position. When a previous call was made to
	        // `scroll' or `scrollTo` and that node has not yet been reached, then
	        // the amount is accumalated onto that scroll target.
	        var viewSequence = this._scroll.scrollToSequence || this.getFirstVisibleItem() || this._viewSequence;
	        if (!viewSequence) {
	            return;
	        }

	        // When the first renderable is partially shown, then treat `-1` (previous)
	        // as `show the current renderable fully`.
	        if (!this._scroll.scrollToSequence && (amount < 0) && (_calcScrollOffset.call(this) < 0)){
	            amount += 1;
	        }

	        // Find scroll target
	        for (var i = 0; i < Math.abs(amount); i++) {
	            var nextViewSequence = (amount > 0) ? viewSequence.getNext() : viewSequence.getPrevious();
	            if (nextViewSequence) {
	                viewSequence = nextViewSequence;
	            }
	            else {
	                break;
	            }
	        }
	        _scrollToSequence.call(this, viewSequence, amount >= 0);
	    }

	    /**
	     * Halts all scrolling going on. In essence this function sets
	     * the velocity to 0 and cancels any `goToXxx` operation that
	     * was applied.
	     *
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.halt = function() {
	        this._scroll.scrollToSequence = undefined;
	        _setParticle.call(this, undefined, 0, 'halt');
	        return this;
	    };

	    /**
	     * Applies a permanent scroll-force (offset) until it is released.
	     * When the cumulative scroll-offset lies outside the allowed bounds
	     * a strech effect is used, and the offset beyond the bounds is
	     * substracted by halve. This function should always be accompanied
	     * by a call to `releaseScrollForce`.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchstart` event.
	     *
	     * @param {Number} offset Scroll offset to add to the current
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.applyScrollForce = function(offset) {
	        this.halt();
	        this._scroll.scrollForceCount++;
	        this._scroll.scrollForce += offset;
	        return this;
	    };

	    /**
	     * Updates a existing scroll-force previously applied by calling
	     * `applyScrollForce`.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchmove` event.
	     *
	     * @param {Number} [prevOffset] Previous offset
	     * @param {Number} [newOffset] New offset
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.updateScrollForce = function(prevOffset, newOffset) {
	        this.halt();
	        newOffset -= prevOffset;
	        this._scroll.scrollForce += newOffset;
	        return this;
	    };

	    /**
	     * Releases a scroll-force and sets the velocity.
	     *
	     * This method is used for instance when using touch gestures to move
	     * the scroll offset and corresponds to the `touchend` event.
	     *
	     * @param {Number} offset Scroll offset to release
	     * @param {Number} [velocity] Velocity to apply after which the view keeps scrolling
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.releaseScrollForce = function(offset, velocity) {
	        this.halt();
	        if (this._scroll.scrollForceCount === 1) {
	            var scrollOffset = _calcScrollOffset.call(this);
	            _setParticle.call(this, scrollOffset, velocity, 'releaseScrollForce');
	            this._scroll.pe.wake();
	            this._scroll.scrollForce = 0;
	            this._scroll.scrollDirty = true;
	        }
	        else {
	            this._scroll.scrollForce -= offset;
	        }
	        this._scroll.scrollForceCount--;
	        return this;
	    };

	    /**
	     * Checks whether the scrollview can scroll the given offset.
	     * When the scrollView can scroll the whole offset, then
	     * the return value is the same as the offset. If it cannot
	     * scroll the entire offset, the return value is the number of
	     * pixels that can be scrolled.
	     *
	     * @return {Number} number of pixels the view can scroll or offset
	     */
	    ScrollView.prototype.canScroll = function(offset) {

	        // Calculate height in both directions
	        var scrollOffset = _calcScrollOffset.call(this);
	        var prevHeight = _calcPrevHeight.call(this);
	        var nextHeight = _calcNextHeight.call(this);

	        // When the rendered height is smaller than the total height,
	        // then no scrolling whatsover is allowed.
	        var totalHeight;
	        if ((nextHeight !== undefined) && (prevHeight !== undefined)) {
	            totalHeight = prevHeight + nextHeight;
	        }
	        if ((totalHeight !== undefined) && (totalHeight <= this._contextSizeCache[this._direction])) {
	            return 0; // no scrolling at all allowed
	        }

	        // Determine the offset that we can scroll
	        if ((offset < 0) && (nextHeight !== undefined)) {
	            var nextOffset = this._contextSizeCache[this._direction] - (scrollOffset + nextHeight);
	            return Math.min(nextOffset, offset);
	        } else if ((offset > 0) && (prevHeight !== undefined)) {
	            var prevOffset = -(scrollOffset - prevHeight);
	            return Math.min(prevOffset, offset);
	        }
	        return offset;
	    };

	    /**
	     * Scrolls the view by the specified offset.
	     *
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.scroll = function(offset) {
	        this.halt();
	        this._scroll.scrollDelta += offset;
	        return this;
	    };

	    /**
	     * Checks whether any boundaries have been reached.
	     *
	     * @return {ScrollView.Bounds} Either, Bounds.PREV, Bounds.NEXT, Bounds.BOTH or Bounds.NONE
	     */
	    ScrollView.prototype.getBoundsReached = function() {
	        return this._scroll.boundsReached;
	    };

	    /**
	     * Scroll to the previous page, making it visible.
	     *
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.goToPreviousPage = function() {
	        _goToPage.call(this, -1);
	        return this;
	    };

	    /**
	     * Scroll to the next page, making it visible.
	     *
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.goToNextPage = function() {
	        _goToPage.call(this, 1);
	        return this;
	    };

	    /**
	     * Scroll to the given renderable in the datasource.
	     *
	     * @param {RenderNode} node renderable to scroll to
	     * @return {ScrollView} this
	     */
	    ScrollView.prototype.goToRenderNode = function(node) {

	        // Verify arguments and state
	        if (!this._viewSequence || !node) {
	            return this;
	        }

	        // Check current node
	        if (this._viewSequence.get() === node) {
	            _scrollToSequence.call(this, this._viewSequence, true);
	            return this;
	        }

	        // Find the sequence-node that we want to scroll to.
	        // We look at both directions at the same time.
	        // The first match that is encountered, that direction is chosen.
	        var nextSequence = this._viewSequence.getNext();
	        var prevSequence = this._viewSequence.getPrevious();
	        while ((nextSequence || prevSequence) && (nextSequence !== this._viewSequence)){
	            var nextNode = nextSequence ? nextSequence.get() : undefined;
	            if (nextNode === node) {
	                _scrollToSequence.call(this, nextSequence, true);
	                break;
	            }
	            var prevNode = prevSequence ? prevSequence.get() : undefined;
	            if (prevNode === node) {
	                _scrollToSequence.call(this, prevSequence, false);
	                break;
	            }
	            nextSequence = nextNode ? nextSequence.getNext() : undefined;
	            prevSequence = prevNode ? prevSequence.getPrevious() : undefined;
	        }
	        return this;
	    };

	    /**
	     * Executes the layout and updates the state of the scrollview.
	     */
	    function _layout(size, scrollOffset, nested) {
	        _verifyIntegrity.call(this, 'layout', scrollOffset);

	        // Track the number of times the layout-function was executed
	        this._debug.layoutCount++;
	        //_log.call(this, 'Layout, scrollOffset: ', scrollOffset, ', particle: ', this._scroll.particle.getPosition1D());

	        // Prepare for layout
	        var layoutContext = this._nodes.prepareForLayout(
	            this._viewSequence,     // first node to layout
	            this._nodesById, {      // so we can do fast id lookups
	                size: size,
	                direction: this._direction,
	                scrollOffset: scrollOffset,
	                scrollStart: scrollOffset - size[this._direction],
	                scrollEnd: scrollOffset +  (size[this._direction] * 2)
	            }
	        );
	        _verifyIntegrity.call(this, 'prepareLayout');

	        // Layout objects
	        if (this._layout.function) {
	            this._layout.function(
	                layoutContext,          // context which the layout-function can use
	                this._layout.options    // additional layout-options
	            );
	        }
	        _verifyIntegrity.call(this, 'layout.function', scrollOffset);

	        // Mark non-invalidated nodes for removal
	        this._nodes.removeNonInvalidatedNodes(this.options.removeSpec);
	        _verifyIntegrity.call(this, 'removeNonInvalidatedNodes', scrollOffset);

	        // Check whether the bounds have been reached
	        _calcBounds.call(this, size, scrollOffset);
	        _verifyIntegrity.call(this, 'calcBounds', scrollOffset);

	        // Update scroll-to spring
	        _calcScrollToOffset.call(this, size, scrollOffset);
	        _verifyIntegrity.call(this, 'calcScrollToOffset', scrollOffset);

	        // When pagination is enabled, snap to page
	        _snapToPage.call(this, size, scrollOffset);
	        _verifyIntegrity.call(this, 'snapToPage', scrollOffset);

	        // If the bounds have changed, and the scroll-offset would be different
	        // than before, then re-layout entirely using the new offset.
	        var newScrollOffset = _calcScrollOffset.call(this, true);
	        if (!nested && (newScrollOffset !== scrollOffset)) {
	            _log.call(this, 'offset changed, re-layouting... (', scrollOffset, ' != ', newScrollOffset, ')');
	            return _layout.call(this, size, newScrollOffset, true);
	        }

	        // Calculate the spec-output
	        var result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	        _verifyIntegrity.call(this, 'buildSpecAndDestroyUnrenderedNodes', scrollOffset);
	        this._specs = result.specs;
	        if (result.modified || true) {
	            this._eventOutput.emit('reflow', {
	                target: this
	            });
	        }

	        // Normalize scroll offset so that the current viewsequence node is as close to the
	        // top as possible and the layout function will need to process the least amount
	        // of renderables.
	        scrollOffset = _normalizeViewSequence.call(this, size, scrollOffset);
	        _verifyIntegrity.call(this, 'normalizeViewSequence', scrollOffset);

	        // Update spring
	        _updateSpring.call(this);
	        _verifyIntegrity.call(this, 'setSpring', scrollOffset);

	        return scrollOffset;
	    }

	    /**
	     * Override of the setDirection function to detect whether the
	     * direction has changed. If so, the directionLock on the nodes
	     * is updated.
	     */
	    var oldSetDirection = ScrollView.prototype.setDirection;
	    ScrollView.prototype.setDirection = function(direction) {
	        var oldDirection = this._direction;
	        oldSetDirection.call(this, direction);
	        if (oldDirection !== this._direction) {
	            this._nodes.forEach(function(node) {
	                if (node.setDirectionLock) {
	                    node.setDirectionLock(this._direction, 0);
	                }
	            }.bind(this));
	        }
	    };

	    /**
	     * Inner render function of the Group
	     */
	    function _innerRender() {
	        var specs;
	        var i;

	        // When sequential scrolling is optimized, translate the spec back
	        // to a sequential position so that the matrix is unchanged and
	        // famo.s doesn't have to update the matrix in the DOM.
	        if (this._layout.capabilities.sequentialScrollingOptimized) {
	            specs = [];
	            var scrollOffset = this._scrollOffsetCache;
	            var translate = [0, 0, 0];
	            translate[this._direction] = -this._scroll.groupStart - scrollOffset;
	            for (i = 0; i < this._specs.length; i++) {
	                var spec = this._specs[i];
	                var transform = Transform.thenMove(spec.transform, translate);
	                /*var newSpec = spec._windowSpec;
	                if (!newSpec) {
	                    newSpec = {};
	                    spec._windowSpec = newSpec;
	                }*/
	                var newSpec = {};
	                newSpec.origin = spec.origin;
	                newSpec.align = spec.align;
	                newSpec.opacity = spec.opacity;
	                newSpec.size = spec.size;
	                newSpec.transform = transform;
	                newSpec.target = spec.renderNode.render();
	                newSpec.scrollOffset = scrollOffset;
	                /*if (spec._translatedSpec) {
	                    if (!LayoutUtility.isEqualSpec(newSpec, spec._translatedSpec)) {
	                        var diff = LayoutUtility.getSpecDiffText(newSpec, spec._translatedSpec);
	                        _log.call(this, diff + ' (scrollOffset: ' + spec._translatedSpec.scrollOffset + ' != ' + scrollOffset + ', groupStart: ' + this._scroll.groupStart + ')');
	                    }
	                }
	                else {
	                    _log.call(this, 'new spec rendered');
	                }*/
	                spec._translatedSpec = newSpec;
	                specs.push(newSpec);
	            }
	        }
	        else {

	            // Call render on all nodes
	            specs = this._specs;
	            for (i = 0; i < specs.length; i++) {
	                specs[i].target = specs[i].renderNode.render();
	            }
	        }
	        return specs;
	    }

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ScrollView.prototype.commit = function commit(context) {
	        var size = context.size;
	        var scrollOffset = _calcScrollOffset.call(this, true);

	        // When the size or layout function has changed, reflow the layout
	        if (size[0] !== this._contextSizeCache[0] ||
	            size[1] !== this._contextSizeCache[1] ||
	            this._isDirty ||
	            this._scroll.scrollDirty ||
	            this._nodes._trueSizeRequested ||
	            this._scrollOffsetCache !== scrollOffset) {

	            // Emit start event
	            var eventData = {
	                target: this,
	                oldSize: this._contextSizeCache,
	                size: size,
	                oldScrollOffset: this._scrollOffsetCache,
	                scrollOffset: scrollOffset,
	                dirty: this._isDirty,
	                trueSizeRequested: this._nodes._trueSizeRequested
	            };
	            this._eventOutput.emit('layoutstart', eventData);

	            // When the layout has changed, and we are not just scrolling,
	            // disable the locked state of the layout-nodes so that they
	            // can freely transition between the old and new state.
	            if (this._isDirty) {
	                this._nodes.forEach(function(node) {
	                    if (node.setDirectionLock) {
	                        node.setDirectionLock(this._direction, 0);
	                    }
	                }.bind(this));
	            }

	            // Update state
	            this._contextSizeCache[0] = size[0];
	            this._contextSizeCache[1] = size[1];
	            this._scrollOffsetCache = scrollOffset;
	            this._isDirty = false;
	            this._scroll.scrollDirty = false;

	            // Perform layout
	            scrollOffset = _layout.call(this, size, scrollOffset);
	            this._scrollOffsetCache = scrollOffset;

	            // Emit end event
	            this._eventOutput.emit('layoutend', eventData);
	        }
	        else {

	            // Update output and optionally emit event
	            var result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._specs = result.specs;
	            if (result.modified) {
	                this._eventOutput.emit('reflow', {
	                    target: this
	                });
	            }
	        }

	        // When renderables are layed out sequentiall (e.g. a ListLayout or
	        // CollectionLayout), then offset the renderables onto the Group
	        // and move the group offset instead. This creates a very big performance gain
	        // as the renderables don't have to be repositioned for every change
	        // to the scrollOffset. For layouts that don't layout sequence, disable
	        // this behavior as it will be decremental to the performance.
	        var transform = context.transform;
	        if (this._layout.capabilities.sequentialScrollingOptimized) {
	            var windowOffset = scrollOffset + this._scroll.groupStart;
	            transform = this._direction ? Transform.translate(0, windowOffset, 0) : Transform.translate(windowOffset, 0, 0);
	            transform = Transform.multiply(context.transform, transform);
	        }

	        // Return the spec
	        return {
	            transform: transform,
	            size: size,
	            opacity: context.opacity,
	            origin: context.origin,
	            target: this.group.render()
	        };
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    ScrollView.prototype.render = function render() {
	        if (this.container) {
	            return this.container.render.apply(this.container, arguments);
	        }
	        else {
	            return this.id;
	        }
	    };

	    module.exports = ScrollView;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * LayoutController lays out renderables according to a layout-
	 * function and a data-source.
	 *
	 * The LayoutController is the most basic and lightweight version
	 * of a controller/view laying out renderables according to a
	 * layout-function.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Utility = __webpack_require__(19);
	    var Entity = __webpack_require__(33);
	    var ViewSequence = __webpack_require__(15);
	    var OptionsManager = __webpack_require__(24);
	    var EventHandler = __webpack_require__(25);
	    var LayoutUtility = __webpack_require__(26);
	    var LayoutNodeManager = __webpack_require__(27);
	    var LayoutNode = __webpack_require__(28);
	    var Transform = __webpack_require__(18);
	    __webpack_require__(36);

	    /**
	     * @class
	     * @param {Object} options Options.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @alias module:LayoutController
	     */
	    function LayoutController(options, nodeManager) {

	        // Commit
	        this.id = Entity.register(this);
	        this._isDirty = true;
	        this._contextSizeCache = [0, 0];
	        this._commitOutput = {};

	        // Setup event handlers
	        this._eventOutput = new EventHandler();
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        // Data-source
	        //this._dataSource = undefined;
	        //this._nodesById = undefined;
	        //this._viewSequence = undefined;

	        // Layout
	        this._layout = {
	            //function: undefined,
	            //literal: undefined,
	            //capabilities: undefined,
	            options: Object.create({})
	        };
	        //this._direction = undefined;
	        this._layout.optionsManager = new OptionsManager(this._layout.options);
	        this._layout.optionsManager.on('change', function() {
	            this._isDirty = true;
	        }.bind(this));

	        // Create node manager that manages result LayoutNode instances
	        this._nodes = nodeManager || new LayoutNodeManager(LayoutNode);

	        // Create options
	        this.options = Object.create({});
	        this._optionsManager = new OptionsManager(this.options);
	        this.setDirection(undefined);
	        if (options) {
	            this.setOptions(options);
	        }
	    }

	    /**
	     * Patches the LayoutController instance's options with the passed-in ones.
	     *
	     * @param {Options} options An object of configurable options for the LayoutController instance.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setOptions = function setOptions(options) {
	        this._optionsManager.setOptions(options);
	        if (options.dataSource) {
	            this.setDataSource(options.dataSource);
	        }
	        if (options.layout || options.layoutOptions) {
	            this.setLayout(options.layout, options.layoutOptions);
	        }
	        if (options.direction !== undefined) {
	            this.setDirection(options.direction);
	        }
	        return this;
	    };

	    /**
	     * Sets the collection of renderables which are layed out according to
	     * the layout-function.
	     *
	     * The data-source can be either an Array, ViewSequence or Object
	     * with key/value pairs.
	     *
	     * @param {Array|Object|ViewSequence} dataSource Array, ViewSequence or Object.
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setDataSource = function(dataSource) {
	        this._dataSource = dataSource;
	        this._nodesById = undefined;
	        if (dataSource instanceof Array) {
	            this._viewSequence = new ViewSequence(dataSource);
	        } else if (dataSource instanceof ViewSequence) {
	            this._viewSequence = dataSource;
	        } else if (dataSource instanceof Object){
	            this._nodesById = dataSource;
	        }
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Get the data-source.
	     *
	     * @return {Array|ViewSequence|Object} data-source
	     */
	    LayoutController.prototype.getDataSource = function() {
	        return this._dataSource;
	    };

	    /**
	     * Set the new layout.
	     *
	     * @param {Function|Object} layout Layout function or layout-literal
	     * @param {Object} [options] Options to pass in to the layout-function
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setLayout = function(layout, options) {

	        // Set new layout funtion
	        if (layout instanceof Function) {
	            this._layout.function = layout;
	            this._layout.capabilities = layout.Capabilities;
	            this._layout.literal = undefined;

	        // If the layout is an object, treat it as a layout-literal
	        } else if (layout instanceof Object) {
	            this._layout.literal = layout;
	            this._layout.capabilities = undefined; // todo - derive from literal somehow?
	            var helperName = Object.keys(layout)[0];
	            var Helper = LayoutUtility.getRegisteredHelper(helperName);
	            this._layout.function = Helper ? function(context, options) {
	                var helper = new Helper(context, options);
	                helper.parse(layout[helperName]);
	            } : undefined;
	        }
	        else {
	            this._layout.function = undefined;
	            this._layout.capabilities = undefined;
	            this._layout.literal = undefined;
	        }

	        // Update options
	        if (options) {
	            this.setLayoutOptions(options);
	        }

	        // Update direction
	        this.setDirection(this._configuredDirection);
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Get the current layout.
	     *
	     * @return {Function|Object} Layout function or layout literal
	     */
	    LayoutController.prototype.getLayout = function() {
	        return this._layout.literal || this._layout.function;
	    };

	    /**
	     * Set the options for the current layout. Use this function after
	     * `setLayout` to update one or more options for the layout-function.
	     *
	     * @param {Object} [options] Options to pass in to the layout-function
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setLayoutOptions = function(options) {
	        this._layout.optionsManager.setOptions(options);
	        return this;
	    };

	    /**
	     * Get the current layout options.
	     *
	     * @return {Object} Layout options
	     */
	    LayoutController.prototype.getLayoutOptions = function() {
	        return this._layout.options;
	    };

	    /**
	     * Calculates the actual in-use direction based on the given direction
	     * and supported capabilities of the layout-function.
	     */
	    function _getActualDirection(direction) {

	        // When the direction is configured in the capabilities, look it up there
	        if (this._layout.capabilities && this._layout.capabilities.direction) {

	            // Multiple directions are supported
	            if (Array.isArray(this._layout.capabilities.direction)) {
	                for (var i = 0; i < this._layout.capabilities.direction.length; i++) {
	                    if (this._layout.capabilities.direction[i] === direction) {
	                        return direction;
	                    }
	                }
	                return this._layout.capabilities.direction[0];
	            }

	            // Only one direction is supported, we must use that
	            else {
	                return this._layout.capabilities.direction;
	            }
	        }

	        // Use Y-direction as a fallback
	        return (direction === undefined) ? Utility.Direction.Y : direction;
	    }

	    /**
	     * Set the direction of the layout. When no direction is set, the default
	     * direction of the layout function is used.
	     *
	     * @param {Utility.Direction} direction Direction (e.g. Utility.Direction.X)
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.setDirection = function(direction) {
	        this._configuredDirection = direction;
	        var newDirection = _getActualDirection.call(this, direction);
	        if (newDirection !== this._direction) {
	            this._direction = newDirection;
	            this._isDirty = true;
	        }
	    };

	    /**
	     * Get the direction (e.g. Utility.Direction.Y). By default, this function
	     * returns the direction that was configured by setting `setDirection`. When
	     * the direction has not been set, `undefined` is returned.
	     *
	     * When no direction has been set, the first direction is used that is specified
	     * in the capabilities of the layout-function. To obtain the actual in-use direction,
	     * use `getDirection(true)`. This method returns the actual in-use direction and
	     * never returns undefined.
	     *
	     * @param {Boolean} [actual] Set to true to obtain the actual in-use direction
	     * @return {Utility.Direction} Direction or undefined
	     */
	    LayoutController.prototype.getDirection = function(actual) {
	        return actual ? this._direction : this._configuredDirection;
	    };

	    /**
	     * Get the spec (size, transform, etc..) for the given renderable or
	     * Id.
	     *
	     * @param {Renderable|String} node Renderabe or Id to look for
	     * @return {Spec} spec or undefined
	     */
	    LayoutController.prototype.getSpec = function(node) {
	        if (!node) {
	            return undefined;
	        }
	        if ((node instanceof String) || (typeof node === 'string')) {
	            if (!this._nodesById) {
	               return undefined;
	            }
	            node = this._nodesById[node];
	            if (!node) {
	                return undefined;
	            }

	            // If the result was an array, return that instead
	            if (node instanceof Array) {
	                return node;
	            }
	        }
	        for (var i = 0; i < this._commitOutput.target.length; i++) {
	            var spec = this._commitOutput.target[i];
	            if (spec.renderNode === node) {
	                return spec;
	            }
	        }
	        return undefined;
	    };

	    /**
	     * Forces a reflow of the layout the next render cycle.
	     *
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.reflowLayout = function() {
	        this._isDirty = true;
	        return this;
	    };

	    /**
	     * Inserts a renderable into the data-source.
	     *
	     * The optional argument `insertSpec` is only used by 'FlowLayoutController' and
	     * `ScrollLayoutController`. When specified, the renderable is inserted using an
	     * animation starting with size, origin, opacity, transform, etc... as specified
	     * in `insertSpec'.
	     *
	     * @param {Number|String} indexOrId Index within dataSource array or id (String)
	     * @param {Object} renderable Renderable to add to the data-source
	     * @param {Spec} [insertSpec] Size, transform, etc.. to start with when inserting
	     * @return {FlowLayoutController} this
	     */
	    LayoutController.prototype.insert = function(indexOrId, renderable, insertSpec) {

	        // Add the renderable in case of an id (String)
	        if ((indexOrId instanceof String) || (typeof indexOrId === 'string')) {

	            // Create data-source if neccesary
	            if (this._dataSource === undefined) {
	                this._dataSource = {};
	                this._nodesById = this._dataSource;
	            }

	            // Insert renderable
	            this._nodesById[indexOrId] = renderable;
	        }

	        // Add the renderable using an index
	        else {

	            // Create data-source if neccesary
	            if (this._dataSource === undefined) {
	                this._dataSource = [];
	                this._viewSequence = new ViewSequence(this._dataSource);
	            }

	            // Using insert in this way, only works when the data-source is an array
	            if (!(this._dataSource instanceof Array)) {
	                LayoutUtility.error('LayoutController.insert(index) only works when the dataSource is an array');
	                return this;
	            }

	            // Insert into array
	            if (indexOrId < 0) {
	                this._dataSource.push(renderable);
	            }
	            else {
	                this._dataSource.splice(indexOrId, 0, renderable);
	            }
	        }

	        // When a custom insert-spec was specified, store that in the layout-node
	        if (insertSpec) {
	            this._nodes.insertNode(this._nodes.createNode(renderable, insertSpec));
	        }

	        // Force a reflow
	        this._isDirty = true;

	        return this;
	    };

	    /**
	     * Removes a renderable from the data-source.
	     *
	     * The optional argument `removeSpec` is only used by 'FlowLayoutController' and
	     * `ScrollLayoutController`. When specified, the renderable is removed using an
	     * animation ending at the size, origin, opacity, transform, etc... as specified
	     * in `removeSpec'.
	     *
	     * @param {Number|String} indexOrId Index within dataSource array or id (String)
	     * @param {Spec} [removeSpec] Size, transform, etc.. to end with when removing
	     * @return {LayoutController} this
	     */
	    LayoutController.prototype.remove = function(indexOrId, removeSpec) {

	        // Remove the renderable in case of an id (String)
	        var renderNode;
	        if ((indexOrId instanceof String) || (typeof indexOrId === 'string')) {

	            // Find and remove renderable from data-source
	            renderNode = this._nodesById[indexOrId];
	            if (renderNode) {
	                delete this._nodesById[indexOrId];
	            }
	        }

	        // Remove the renderable using an index
	        else {

	            // Using remove in this way, only works when the data-source is an array
	            if (!(this._dataSource instanceof Array)) {
	                LayoutUtility.error('LayoutController.remove(index) only works when the dataSource is an array');
	                return this;
	            }

	            // Remove from array
	            renderNode = this._dataSource.splice(indexOrId, 1)[0];
	        }

	        // When a custom remove-spec was specified, store that in the layout-node
	        if (renderNode && removeSpec) {
	            var node = this._nodes.getNodeByRenderNode(renderNode);
	            if (node) {
	                node.remove(removeSpec || this.options.removeSpec);
	            }
	        }

	        // Force a reflow
	        if (renderNode) {
	            this._isDirty = true;
	        }

	        return this;
	    };

	    /**
	     * Return size of contained element or `undefined` when size is not defined.
	     *
	     * @return {Array.Number} [width, height]
	     */
	    LayoutController.prototype.getSize = function() {
	        return this.options.size;
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {Object} Render spec for this component
	     */
	    LayoutController.prototype.render = function render() {
	        return this.id;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    LayoutController.prototype.commit = function commit(context) {
	        var transform = context.transform;
	        var origin = context.origin;
	        var size = context.size;
	        var opacity = context.opacity;

	        // When the size or layout function has changed, reflow the layout
	        if (size[0] !== this._contextSizeCache[0] ||
	            size[1] !== this._contextSizeCache[1] ||
	            this._isDirty ||
	            this._nodes._trueSizeRequested){

	            // Emit start event
	            var eventData = {
	                target: this,
	                oldSize: this._contextSizeCache,
	                size: size,
	                dirty: this._isDirty,
	                trueSizeRequested: this._nodes._trueSizeRequested
	            };
	            this._eventOutput.emit('layoutstart', eventData);

	            // Update state
	            this._contextSizeCache[0] = size[0];
	            this._contextSizeCache[1] = size[1];
	            this._isDirty = false;

	            // Prepare for layout
	            var layoutContext = this._nodes.prepareForLayout(
	                this._viewSequence,     // first node to layout
	                this._nodesById, {      // so we can do fast id lookups
	                    size: size,
	                    direction: this._direction
	                }
	            );

	            // Layout objects
	            if (this._layout.function) {
	                this._layout.function(
	                    layoutContext,          // context which the layout-function can use
	                    this._layout.options    // additional layout-options
	                );
	            }

	            // Update output and optionally emit event
	            var result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._commitOutput.target = result.specs;
	            if (result.modified || true) {
	                this._eventOutput.emit('reflow', {
	                    target: this
	                });
	            }

	            // Emit end event
	            this._eventOutput.emit('layoutend', eventData);
	        }

	        // Render child-nodes every commit
	        for (var i = 0; i < this._commitOutput.target.length; i++) {
	            this._commitOutput.target[i].target = this._commitOutput.target[i].renderNode.render();
	        }

	        // Return
	        if (size) {
	            transform = Transform.moveThen([-size[0]*origin[0], -size[1]*origin[1], 0], transform);
	        }
	        this._commitOutput.size = size;
	        this._commitOutput.opacity = opacity;
	        this._commitOutput.transform = transform;
	        return this._commitOutput;
	    };

	    module.exports = LayoutController;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @version 1.0.3
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} options The options to override the defaults
	 */
	function FastClick(layer, options) {
		'use strict';
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}


	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0(+?) requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		'use strict';
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		'use strict';
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		'use strict';
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {
		'use strict';

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		'use strict';
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		'use strict';
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
		'use strict';

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		'use strict';
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		'use strict';
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		'use strict';
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {
		'use strict';

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		'use strict';
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		'use strict';
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {
		'use strict';

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		'use strict';
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		'use strict';
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		'use strict';
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} options The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		'use strict';
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			'use strict';
			return FastClick;
		}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		return function() {
			head.removeChild(styleElement);
		};
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(11)
		// The css code:
		(__webpack_require__(13));
	// Hot Module Replacement
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/.\n *\n * Owner: mark@famo.us\n * @license MPL 2.0\n * @copyright Famous Industries, Inc. 2014\n */\n\n.famous-root {\n    width: 100%;\n    height: 100%;\n    margin: 0px;\n    padding: 0px;\n    overflow: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-container, .famous-group {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    bottom: 0px;\n    right: 0px;\n    overflow: visible;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    pointer-events: none;\n}\n\n.famous-group {\n    width: 0px;\n    height: 0px;\n    margin: 0px;\n    padding: 0px;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n}\n\n.famous-surface {\n    position: absolute;\n    -webkit-transform-origin: center center;\n    transform-origin: center center;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    pointer-events: auto;\n}\n\n.famous-container-group {\n    position: relative;\n    width: 100%;\n    height: 100%;\n}\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * The singleton object initiated upon process
	     *   startup which manages all active Context instances, runs
	     *   the render dispatch loop, and acts as a listener and dispatcher
	     *   for events.  All methods are therefore static.
	     *
	     *   On static initialization, window.requestAnimationFrame is called with
	     *     the event loop function.
	     *
	     *   Note: Any window in which Engine runs will prevent default
	     *     scrolling behavior on the 'touchmove' event.
	     *
	     * @static
	     * @class Engine
	     */
	    var Context = __webpack_require__(31);
	    var EventHandler = __webpack_require__(25);
	    var OptionsManager = __webpack_require__(24);

	    var Engine = {};

	    var contexts = [];
	    var nextTickQueue = [];
	    var deferQueue = [];

	    var lastTime = Date.now();
	    var frameTime;
	    var frameTimeLimit;
	    var loopEnabled = true;
	    var eventForwarders = {};
	    var eventHandler = new EventHandler();

	    var options = {
	        containerType: 'div',
	        containerClass: 'famous-container',
	        fpsCap: undefined,
	        runLoop: true,
	        appMode: true
	    };
	    var optionsManager = new OptionsManager(options);

	    /** @const */
	    var MAX_DEFER_FRAME_TIME = 10;

	    /**
	     * Inside requestAnimationFrame loop, step() is called, which:
	     *   calculates current FPS (throttling loop if it is over limit set in setFPSCap),
	     *   emits dataless 'prerender' event on start of loop,
	     *   calls in order any one-shot functions registered by nextTick on last loop,
	     *   calls Context.update on all Context objects registered,
	     *   and emits dataless 'postrender' event on end of loop.
	     *
	     * @static
	     * @private
	     * @method step
	     */
	    Engine.step = function step() {
	        var currentTime = Date.now();

	        // skip frame if we're over our framerate cap
	        if (frameTimeLimit && currentTime - lastTime < frameTimeLimit) return;

	        var i = 0;

	        frameTime = currentTime - lastTime;
	        lastTime = currentTime;

	        eventHandler.emit('prerender');

	        // empty the queue
	        for (i = 0; i < nextTickQueue.length; i++) nextTickQueue[i].call(this);
	        nextTickQueue.splice(0);

	        // limit total execution time for deferrable functions
	        while (deferQueue.length && (Date.now() - currentTime) < MAX_DEFER_FRAME_TIME) {
	            deferQueue.shift().call(this);
	        }

	        for (i = 0; i < contexts.length; i++) contexts[i].update();

	        eventHandler.emit('postrender');
	    };

	    // engage requestAnimationFrame
	    function loop() {
	        if (options.runLoop) {
	            Engine.step();
	            window.requestAnimationFrame(loop);
	        }
	        else loopEnabled = false;
	    }
	    window.requestAnimationFrame(loop);

	    //
	    // Upon main document window resize (unless on an "input" HTML element):
	    //   scroll to the top left corner of the window,
	    //   and for each managed Context: emit the 'resize' event and update its size.
	    // @param {Object=} event document event
	    //
	    function handleResize(event) {
	        for (var i = 0; i < contexts.length; i++) {
	            contexts[i].emit('resize');
	        }
	        eventHandler.emit('resize');
	    }
	    window.addEventListener('resize', handleResize, false);
	    handleResize();

	    /**
	     * Initialize famous for app mode
	     *
	     * @static
	     * @private
	     * @method initialize
	     */
	    function initialize() {
	        // prevent scrolling via browser
	        window.addEventListener('touchmove', function(event) {
	            event.preventDefault();
	        }, true);
	        document.body.classList.add('famous-root');
	        document.documentElement.classList.add('famous-root');
	    }
	    var initialized = false;

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Engine.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(Engine);
	        else return eventHandler.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Engine.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(Engine);
	        else return eventHandler.unpipe(target);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @static
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Engine.on = function on(type, handler) {
	        if (!(type in eventForwarders)) {
	            eventForwarders[type] = eventHandler.emit.bind(eventHandler, type);
	            if (document.body) {
	                document.body.addEventListener(type, eventForwarders[type]);
	            }
	            else {
	                Engine.nextTick(function(type, forwarder) {
	                    document.body.addEventListener(type, forwarder);
	                }.bind(this, type, eventForwarders[type]));
	            }
	        }
	        return eventHandler.on(type, handler);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Engine.emit = function emit(type, event) {
	        return eventHandler.emit(type, event);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @static
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Engine.removeListener = function removeListener(type, handler) {
	        return eventHandler.removeListener(type, handler);
	    };

	    /**
	     * Return the current calculated frames per second of the Engine.
	     *
	     * @static
	     * @method getFPS
	     *
	     * @return {Number} calculated fps
	     */
	    Engine.getFPS = function getFPS() {
	        return 1000 / frameTime;
	    };

	    /**
	     * Set the maximum fps at which the system should run. If internal render
	     *    loop is called at a greater frequency than this FPSCap, Engine will
	     *    throttle render and update until this rate is achieved.
	     *
	     * @static
	     * @method setFPSCap
	     *
	     * @param {Number} fps maximum frames per second
	     */
	    Engine.setFPSCap = function setFPSCap(fps) {
	        frameTimeLimit = Math.floor(1000 / fps);
	    };

	    /**
	     * Return engine options.
	     *
	     * @static
	     * @method getOptions
	     * @param {string} key
	     * @return {Object} engine options
	     */
	    Engine.getOptions = function getOptions(key) {
	        return optionsManager.getOptions(key);
	    };

	    /**
	     * Set engine options
	     *
	     * @static
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.fpsCap]  maximum fps at which the system should run
	     * @param {boolean} [options.runLoop=true] whether the run loop should continue
	     * @param {string} [options.containerType="div"] type of container element.  Defaults to 'div'.
	     * @param {string} [options.containerClass="famous-container"] type of container element.  Defaults to 'famous-container'.
	     */
	    Engine.setOptions = function setOptions(options) {
	        return optionsManager.setOptions.apply(optionsManager, arguments);
	    };

	    /**
	     * Creates a new Context for rendering and event handling with
	     *    provided document element as top of each tree. This will be tracked by the
	     *    process-wide Engine.
	     *
	     * @static
	     * @method createContext
	     *
	     * @param {Node} el will be top of Famo.us document element tree
	     * @return {Context} new Context within el
	     */
	    Engine.createContext = function createContext(el) {
	        if (!initialized && options.appMode) Engine.nextTick(initialize);

	        var needMountContainer = false;
	        if (!el) {
	            el = document.createElement(options.containerType);
	            el.classList.add(options.containerClass);
	            needMountContainer = true;
	        }
	        var context = new Context(el);
	        Engine.registerContext(context);
	        if (needMountContainer) {
	            Engine.nextTick(function(context, el) {
	                document.body.appendChild(el);
	                context.emit('resize');
	            }.bind(this, context, el));
	        }
	        return context;
	    };

	    /**
	     * Registers an existing context to be updated within the run loop.
	     *
	     * @static
	     * @method registerContext
	     *
	     * @param {Context} context Context to register
	     * @return {FamousContext} provided context
	     */
	    Engine.registerContext = function registerContext(context) {
	        contexts.push(context);
	        return context;
	    };

	    /**
	     * Returns a list of all contexts.
	     *
	     * @static
	     * @method getContexts
	     * @return {Array} contexts that are updated on each tick
	     */
	    Engine.getContexts = function getContexts() {
	        return contexts;
	    };

	    /**
	     * Removes a context from the run loop. Note: this does not do any
	     *     cleanup.
	     *
	     * @static
	     * @method deregisterContext
	     *
	     * @param {Context} context Context to deregister
	     */
	    Engine.deregisterContext = function deregisterContext(context) {
	        var i = contexts.indexOf(context);
	        if (i >= 0) contexts.splice(i, 1);
	    };

	    /**
	     * Queue a function to be executed on the next tick of the
	     *    Engine.
	     *
	     * @static
	     * @method nextTick
	     *
	     * @param {function(Object)} fn function accepting window object
	     */
	    Engine.nextTick = function nextTick(fn) {
	        nextTickQueue.push(fn);
	    };

	    /**
	     * Queue a function to be executed sometime soon, at a time that is
	     *    unlikely to affect frame rate.
	     *
	     * @static
	     * @method defer
	     *
	     * @param {Function} fn
	     */
	    Engine.defer = function defer(fn) {
	        deferQueue.push(fn);
	    };

	    optionsManager.on('change', function(data) {
	        if (data.id === 'fpsCap') Engine.setFPSCap(data.value);
	        else if (data.id === 'runLoop') {
	            // kick off the loop only if it was stopped
	            if (!loopEnabled && data.value) {
	                loopEnabled = true;
	                window.requestAnimationFrame(loop);
	            }
	        }
	    });

	    module.exports = Engine;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Helper object used to iterate through items sequentially. Used in
	     *   views that deal with layout.  A ViewSequence object conceptually points
	     *   to a node in a linked list.
	     *
	     * @class ViewSequence
	     *
	     * @constructor
	     * @param {Object|Array} options Options object, or content array.
	     * @param {Number} [options.index] starting index.
	     * @param {Number} [options.array] Array of elements to populate the ViewSequence
	     * @param {Object} [options._] Optional backing store (internal
	     * @param {Boolean} [options.loop] Whether to wrap when accessing elements just past the end
	     *   (or beginning) of the sequence.
	     */
	    function ViewSequence(options) {
	        if (!options) options = [];
	        if (options instanceof Array) options = {array: options};

	        this._ = null;
	        this.index = options.index || 0;

	        if (options.array) this._ = new (this.constructor.Backing)(options.array);
	        else if (options._) this._ = options._;

	        if (this.index === this._.firstIndex) this._.firstNode = this;
	        if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;

	        if (options.loop !== undefined) this._.loop = options.loop;

	        if (options.trackSize !== undefined) this._.trackSize = options.trackSize;

	        this._previousNode = null;
	        this._nextNode = null;
	    }

	    // constructor for internal storage
	    ViewSequence.Backing = function Backing(array) {
	        this.array = array;
	        this.firstIndex = 0;
	        this.loop = false;
	        this.firstNode = null;
	        this.lastNode = null;
	        this.cumulativeSizes = [[0, 0]];
	        this.sizeDirty = true;
	        this.trackSize = false;
	    };

	    // Get value "i" slots away from the first index.
	    ViewSequence.Backing.prototype.getValue = function getValue(i) {
	        var _i = i - this.firstIndex;
	        if (_i < 0 || _i >= this.array.length) return null;
	        return this.array[_i];
	    };

	    // Set value "i" slots away from the first index.
	    ViewSequence.Backing.prototype.setValue = function setValue(i, value) {
	        this.array[i - this.firstIndex] = value;
	    };

	    // Get sequence size from backing up to index
	    // TODO: remove from viewSequence with proper abstraction
	    ViewSequence.Backing.prototype.getSize = function getSize(index) {
	        return this.cumulativeSizes[index];
	    };

	    // Calculates cumulative size
	    // TODO: remove from viewSequence with proper abstraction
	    ViewSequence.Backing.prototype.calculateSize = function calculateSize(index) {
	        index = index || this.array.length;
	        var size = [0, 0];
	        for (var i = 0; i < index; i++) {
	            var nodeSize = this.array[i].getSize();
	            if (!nodeSize) return undefined;
	            if (size[0] !== undefined) {
	                if (nodeSize[0] === undefined) size[0] = undefined;
	                else size[0] += nodeSize[0];
	            }
	            if (size[1] !== undefined) {
	                if (nodeSize[1] === undefined) size[1] = undefined;
	                else size[1] += nodeSize[1];
	            }
	            this.cumulativeSizes[i + 1] = size.slice();
	        }
	        this.sizeDirty = false;
	        return size;
	    };

	    // After splicing into the backing store, restore the indexes of each node correctly.
	    ViewSequence.Backing.prototype.reindex = function reindex(start, removeCount, insertCount) {
	        if (!this.array[0]) return;

	        var i = 0;
	        var index = this.firstIndex;
	        var indexShiftAmount = insertCount - removeCount;
	        var node = this.firstNode;

	        // find node to begin
	        while (index < start - 1) {
	            node = node.getNext();
	            index++;
	        }
	        // skip removed nodes
	        var spliceStartNode = node;
	        for (i = 0; i < removeCount; i++) {
	            node = node.getNext();
	            if (node) node._previousNode = spliceStartNode;
	        }
	        var spliceResumeNode = node ? node.getNext() : null;
	        // generate nodes for inserted items
	        spliceStartNode._nextNode = null;
	        node = spliceStartNode;
	        for (i = 0; i < insertCount; i++) node = node.getNext();
	        index += insertCount;
	        // resume the chain
	        if (node !== spliceResumeNode) {
	            node._nextNode = spliceResumeNode;
	            if (spliceResumeNode) spliceResumeNode._previousNode = node;
	        }
	        if (spliceResumeNode) {
	            node = spliceResumeNode;
	            index++;
	            while (node && index < this.array.length + this.firstIndex) {
	                if (node._nextNode) node.index += indexShiftAmount;
	                else node.index = index;
	                node = node.getNext();
	                index++;
	            }
	        }
	        if (this.trackSize) this.sizeDirty = true;
	    };

	    /**
	     * Return ViewSequence node previous to this node in the list, respecting looping if applied.
	     *
	     * @method getPrevious
	     * @return {ViewSequence} previous node.
	     */
	    ViewSequence.prototype.getPrevious = function getPrevious() {
	        var len = this._.array.length;
	        if (!len) {
	            this._previousNode = null;
	        }
	        else if (this.index === this._.firstIndex) {
	            if (this._.loop) {
	                this._previousNode = this._.lastNode || new (this.constructor)({_: this._, index: this._.firstIndex + len - 1});
	                this._previousNode._nextNode = this;
	            }
	            else {
	                this._previousNode = null;
	            }
	        }
	        else if (!this._previousNode) {
	            this._previousNode = new (this.constructor)({_: this._, index: this.index - 1});
	            this._previousNode._nextNode = this;
	        }
	        return this._previousNode;
	    };

	    /**
	     * Return ViewSequence node next after this node in the list, respecting looping if applied.
	     *
	     * @method getNext
	     * @return {ViewSequence} previous node.
	     */
	    ViewSequence.prototype.getNext = function getNext() {
	        var len = this._.array.length;
	        if (!len) {
	            this._nextNode = null;
	        }
	        else if (this.index === this._.firstIndex + len - 1) {
	            if (this._.loop) {
	                this._nextNode = this._.firstNode || new (this.constructor)({_: this._, index: this._.firstIndex});
	                this._nextNode._previousNode = this;
	            }
	            else {
	                this._nextNode = null;
	            }
	        }
	        else if (!this._nextNode) {
	            this._nextNode = new (this.constructor)({_: this._, index: this.index + 1});
	            this._nextNode._previousNode = this;
	        }
	        return this._nextNode;
	    };

	    /**
	     * Return index of the provided item in the backing array
	     *
	     * @method indexOf
	     * @return {Number} index or -1 if not found
	     */
	    ViewSequence.prototype.indexOf = function indexOf(item) {
	        return this._.array.indexOf(item);
	    };

	    /**
	     * Return index of this ViewSequence node.
	     *
	     * @method getIndex
	     * @return {Number} index
	     */
	    ViewSequence.prototype.getIndex = function getIndex() {
	        return this.index;
	    };

	    /**
	     * Return printable version of this ViewSequence node.
	     *
	     * @method toString
	     * @return {string} this index as a string
	     */
	    ViewSequence.prototype.toString = function toString() {
	        return '' + this.index;
	    };

	    /**
	     * Add one or more objects to the beginning of the sequence.
	     *
	     * @method unshift
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.unshift = function unshift(value) {
	        this._.array.unshift.apply(this._.array, arguments);
	        this._.firstIndex -= arguments.length;
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	    /**
	     * Add one or more objects to the end of the sequence.
	     *
	     * @method push
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.push = function push(value) {
	        this._.array.push.apply(this._.array, arguments);
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	    /**
	     * Remove objects from the sequence
	     *
	     * @method splice
	     * @param {Number} index starting index for removal
	     * @param {Number} howMany how many elements to remove
	     * @param {...Object} value arguments array of objects
	     */
	    ViewSequence.prototype.splice = function splice(index, howMany) {
	        var values = Array.prototype.slice.call(arguments, 2);
	        this._.array.splice.apply(this._.array, [index - this._.firstIndex, howMany].concat(values));
	        this._.reindex(index, howMany, values.length);
	    };

	    /**
	     * Exchange this element's sequence position with another's.
	     *
	     * @method swap
	     * @param {ViewSequence} other element to swap with.
	     */
	    ViewSequence.prototype.swap = function swap(other) {
	        var otherValue = other.get();
	        var myValue = this.get();
	        this._.setValue(this.index, otherValue);
	        this._.setValue(other.index, myValue);

	        var myPrevious = this._previousNode;
	        var myNext = this._nextNode;
	        var myIndex = this.index;
	        var otherPrevious = other._previousNode;
	        var otherNext = other._nextNode;
	        var otherIndex = other.index;

	        this.index = otherIndex;
	        this._previousNode = (otherPrevious === this) ? other : otherPrevious;
	        if (this._previousNode) this._previousNode._nextNode = this;
	        this._nextNode = (otherNext === this) ? other : otherNext;
	        if (this._nextNode) this._nextNode._previousNode = this;

	        other.index = myIndex;
	        other._previousNode = (myPrevious === other) ? this : myPrevious;
	        if (other._previousNode) other._previousNode._nextNode = other;
	        other._nextNode = (myNext === other) ? this : myNext;
	        if (other._nextNode) other._nextNode._previousNode = other;

	        if (this.index === this._.firstIndex) this._.firstNode = this;
	        else if (this.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = this;
	        if (other.index === this._.firstIndex) this._.firstNode = other;
	        else if (other.index === this._.firstIndex + this._.array.length - 1) this._.lastNode = other;
	        if (this._.trackSize) this._.sizeDirty = true;
	    };

	   /**
	     * Return value of this ViewSequence node.
	     *
	     * @method get
	     * @return {Object} value of thiss
	     */
	    ViewSequence.prototype.get = function get() {
	        return this._.getValue(this.index);
	    };

	   /**
	     * Call getSize() on the contained View.
	     *
	     * @method getSize
	     * @return {Array.Number} [width, height]
	     */
	    ViewSequence.prototype.getSize = function getSize() {
	        var target = this.get();
	        return target ? target.getSize() : null;
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     * Specifically, this will render the value at the current index.
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    ViewSequence.prototype.render = function render() {
	        if (this._.trackSize && this._.sizeDirty) this._.calculateSize();
	        var target = this.get();
	        return target ? target.render.apply(target, arguments) : null;
	    };

	    module.exports = ViewSequence;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var ElementOutput = __webpack_require__(32);

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on target div
	     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        ElementOutput.call(this);

	        this.options = {};

	        this.properties = {};
	        this.attributes = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;

	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._trueSizeCheck = true;

	        this._dirtyClasses = [];

	        if (options) this.setOptions(options);

	        this._currentTarget = null;
	    }
	    Surface.prototype = Object.create(ElementOutput.prototype);
	    Surface.prototype.constructor = Surface;
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';

	    /**
	     * Set HTML attributes on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setAttributes
	    * @param {Object} attributes property dictionary of "key" => "value"
	     */
	    Surface.prototype.setAttributes = function setAttributes(attributes) {
	        for (var n in attributes) {
	            if (n === 'style') throw new Error('Cannot set styles via "setAttributes" as it will break Famo.us.  Use "setProperties" instead.');
	            this.attributes[n] = attributes[n];
	        }
	        this._attributesDirty = true;
	    };

	    /**
	     * Get HTML attributes on this Surface.
	     *
	     * @method getAttributes
	     *
	     * @return {Object} Dictionary of this Surface's attributes.
	     */
	    Surface.prototype.getAttributes = function getAttributes() {
	        return this.attributes;
	    };

	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @chainable
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	        return this;
	    };

	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };

	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @chainable
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @chainable
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Toggle CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method toggleClass
	     * @param {string} className name of class to toggle
	     */
	    Surface.prototype.toggleClass = function toggleClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this.removeClass(className);
	        } else {
	            this.addClass(className);
	        }
	        return this;
	    };

	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @chainable
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	        return this;
	    };

	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };

	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @chainable
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	        return this;
	    };

	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };

	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @chainable
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.attributes) this.setAttributes(options.attributes);
	        if (options.content) this.setContent(options.content);
	        return this;
	    };

	    //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }

	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }

	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }

	    // Apply values of all Famous-managed attributes to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyAttributes(target) {
	        for (var n in this.attributes) {
	            target.setAttribute(n, this.attributes[n]);
	        }
	    }

	    // Clear all Famous-managed attributes from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupAttributes(target) {
	        for (var n in this.attributes) {
	            target.removeAttribute(n);
	        }
	    }

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        this.attach(target);
	        this._opacity = null;
	        this._currentTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._attributesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._originDirty = true;
	        this._transformDirty = true;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currentTarget) this.setup(context.allocator);
	        var target = this._currentTarget;
	        var size = context.size;

	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this._attributesDirty) {
	            _applyAttributes.call(this, target);
	            this._attributesDirty = false;
	            this._trueSizeCheck = true;
	        }

	        if (this.size) {
	            var origSize = context.size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined) size[0] = origSize[0];
	            if (size[1] === undefined) size[1] = origSize[1];
	            if (size[0] === true || size[1] === true) {
	                if (size[0] === true && (this._trueSizeCheck || this._size[0] === 0)) {
	                    var width = target.offsetWidth;
	                    if (this._size && this._size[0] !== width) {
	                        this._size[0] = width;
	                        this._sizeDirty = true;
	                    }
	                    size[0] = width;
	                } else {
	                    if (this._size) size[0] = this._size[0];
	                }
	                if (size[1] === true && (this._trueSizeCheck || this._size[1] === 0)) {
	                    var height = target.offsetHeight;
	                    if (this._size && this._size[1] !== height) {
	                        this._size[1] = height;
	                        this._sizeDirty = true;
	                    }
	                    size[1] = height;
	                } else {
	                    if (this._size) size[1] = this._size[1];
	                }
	                this._trueSizeCheck = false;
	            }
	        }

	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];

	            this._sizeDirty = true;
	        }

	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }

	            this._eventOutput.emit('resize');
	        }

	        if (this._contentDirty) {
	            this.deploy(target);
	            this._eventOutput.emit('deploy');
	            this._contentDirty = false;
	            this._trueSizeCheck = true;
	        }

	        ElementOutput.prototype.commit.call(this, context);
	    };

	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currentTarget;
	        this._eventOutput.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.opacity = '';
	        target.style.width = '';
	        target.style.height = '';
	        _cleanupStyles.call(this, target);
	        _cleanupAttributes.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        this.detach(target);
	        this._currentTarget = null;
	        allocator.deallocate(target);
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };

	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize() {
	        return this._size ? this._size : this.size;
	    };

	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @chainable
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	        return this;
	    };

	    module.exports = Surface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(18);

	    /* TODO: remove these dependencies when deprecation complete */
	    var Transitionable = __webpack_require__(43);
	    var TransitionableTransform = __webpack_require__(44);

	    /**
	     *
	     *  A collection of visual changes to be
	     *    applied to another renderable component. This collection includes a
	     *    transform matrix, an opacity constant, a size, an origin specifier.
	     *    Modifier objects can be added to any RenderNode or object
	     *    capable of displaying renderables.  The Modifier's children and descendants
	     *    are transformed by the amounts specified in the Modifier's properties.
	     *
	     * @class Modifier
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Transform} [options.transform] affine transformation matrix
	     * @param {Number} [options.opacity]
	     * @param {Array.Number} [options.origin] origin adjustment
	     * @param {Array.Number} [options.size] size to apply to descendants
	     */
	    function Modifier(options) {
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;

	        /* TODO: remove this when deprecation complete */
	        this._legacyStates = {};

	        this._output = {
	            transform: Transform.identity,
	            opacity: 1,
	            origin: null,
	            align: null,
	            size: null,
	            proportions: null,
	            target: null
	        };

	        if (options) {
	            if (options.transform) this.transformFrom(options.transform);
	            if (options.opacity !== undefined) this.opacityFrom(options.opacity);
	            if (options.origin) this.originFrom(options.origin);
	            if (options.align) this.alignFrom(options.align);
	            if (options.size) this.sizeFrom(options.size);
	            if (options.proportions) this.proportionsFrom(options.proportions);
	        }
	    }

	    /**
	     * Function, object, or static transform matrix which provides the transform.
	     *   This is evaluated on every tick of the engine.
	     *
	     * @method transformFrom
	     *
	     * @param {Object} transform transform provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.transformFrom = function transformFrom(transform) {
	        if (transform instanceof Function) this._transformGetter = transform;
	        else if (transform instanceof Object && transform.get) this._transformGetter = transform.get.bind(transform);
	        else {
	            this._transformGetter = null;
	            this._output.transform = transform;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or number to provide opacity, in range [0,1].
	     *
	     * @method opacityFrom
	     *
	     * @param {Object} opacity provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.opacityFrom = function opacityFrom(opacity) {
	        if (opacity instanceof Function) this._opacityGetter = opacity;
	        else if (opacity instanceof Object && opacity.get) this._opacityGetter = opacity.get.bind(opacity);
	        else {
	            this._opacityGetter = null;
	            this._output.opacity = opacity;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide origin, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method originFrom
	     *
	     * @param {Object} origin provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.originFrom = function originFrom(origin) {
	        if (origin instanceof Function) this._originGetter = origin;
	        else if (origin instanceof Object && origin.get) this._originGetter = origin.get.bind(origin);
	        else {
	            this._originGetter = null;
	            this._output.origin = origin;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide align, as [x,y],
	     *   where x and y are in the range [0,1].
	     *
	     * @method alignFrom
	     *
	     * @param {Object} align provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.alignFrom = function alignFrom(align) {
	        if (align instanceof Function) this._alignGetter = align;
	        else if (align instanceof Object && align.get) this._alignGetter = align.get.bind(align);
	        else {
	            this._alignGetter = null;
	            this._output.align = align;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide size, as [width, height].
	     *
	     * @method sizeFrom
	     *
	     * @param {Object} size provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.sizeFrom = function sizeFrom(size) {
	        if (size instanceof Function) this._sizeGetter = size;
	        else if (size instanceof Object && size.get) this._sizeGetter = size.get.bind(size);
	        else {
	            this._sizeGetter = null;
	            this._output.size = size;
	        }
	        return this;
	    };

	    /**
	     * Set function, object, or numerical array to provide proportions, as [percent of width, percent of height].
	     *
	     * @method proportionsFrom
	     *
	     * @param {Object} proportions provider object
	     * @return {Modifier} this
	     */
	    Modifier.prototype.proportionsFrom = function proportionsFrom(proportions) {
	        if (proportions instanceof Function) this._proportionGetter = proportions;
	        else if (proportions instanceof Object && proportions.get) this._proportionGetter = proportions.get.bind(proportions);
	        else {
	            this._proportionGetter = null;
	            this._output.proportions = proportions;
	        }
	        return this;
	    };

	     /**
	     * Deprecated: Prefer transformFrom with static Transform, or use a TransitionableTransform.
	     * @deprecated
	     * @method setTransform
	     *
	     * @param {Transform} transform Transform to transition to
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setTransform = function setTransform(transform, transition, callback) {
	        if (transition || this._legacyStates.transform) {
	            if (!this._legacyStates.transform) {
	                this._legacyStates.transform = new TransitionableTransform(this._output.transform);
	            }
	            if (!this._transformGetter) this.transformFrom(this._legacyStates.transform);

	            this._legacyStates.transform.set(transform, transition, callback);
	            return this;
	        }
	        else return this.transformFrom(transform);
	    };

	    /**
	     * Deprecated: Prefer opacityFrom with static opacity array, or use a Transitionable with that opacity.
	     * @deprecated
	     * @method setOpacity
	     *
	     * @param {Number} opacity Opacity value to transition to.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOpacity = function setOpacity(opacity, transition, callback) {
	        if (transition || this._legacyStates.opacity) {
	            if (!this._legacyStates.opacity) {
	                this._legacyStates.opacity = new Transitionable(this._output.opacity);
	            }
	            if (!this._opacityGetter) this.opacityFrom(this._legacyStates.opacity);

	            return this._legacyStates.opacity.set(opacity, transition, callback);
	        }
	        else return this.opacityFrom(opacity);
	    };

	    /**
	     * Deprecated: Prefer originFrom with static origin array, or use a Transitionable with that origin.
	     * @deprecated
	     * @method setOrigin
	     *
	     * @param {Array.Number} origin two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setOrigin = function setOrigin(origin, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.origin) {

	            if (!this._legacyStates.origin) {
	                this._legacyStates.origin = new Transitionable(this._output.origin || [0, 0]);
	            }
	            if (!this._originGetter) this.originFrom(this._legacyStates.origin);

	            this._legacyStates.origin.set(origin, transition, callback);
	            return this;
	        }
	        else return this.originFrom(origin);
	    };

	    /**
	     * Deprecated: Prefer alignFrom with static align array, or use a Transitionable with that align.
	     * @deprecated
	     * @method setAlign
	     *
	     * @param {Array.Number} align two element array with values between 0 and 1.
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setAlign = function setAlign(align, transition, callback) {
	        /* TODO: remove this if statement when deprecation complete */
	        if (transition || this._legacyStates.align) {

	            if (!this._legacyStates.align) {
	                this._legacyStates.align = new Transitionable(this._output.align || [0, 0]);
	            }
	            if (!this._alignGetter) this.alignFrom(this._legacyStates.align);

	            this._legacyStates.align.set(align, transition, callback);
	            return this;
	        }
	        else return this.alignFrom(align);
	    };

	    /**
	     * Deprecated: Prefer sizeFrom with static origin array, or use a Transitionable with that size.
	     * @deprecated
	     * @method setSize
	     * @param {Array.Number} size two element array of [width, height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setSize = function setSize(size, transition, callback) {
	        if (size && (transition || this._legacyStates.size)) {
	            if (!this._legacyStates.size) {
	                this._legacyStates.size = new Transitionable(this._output.size || [0, 0]);
	            }
	            if (!this._sizeGetter) this.sizeFrom(this._legacyStates.size);

	            this._legacyStates.size.set(size, transition, callback);
	            return this;
	        }
	        else return this.sizeFrom(size);
	    };

	    /**
	     * Deprecated: Prefer proportionsFrom with static origin array, or use a Transitionable with those proportions.
	     * @deprecated
	     * @method setProportions
	     * @param {Array.Number} proportions two element array of [percent of width, percent of height]
	     * @param {Transitionable} transition Valid transitionable object
	     * @param {Function} callback callback to call after transition completes
	     * @return {Modifier} this
	     */
	    Modifier.prototype.setProportions = function setProportions(proportions, transition, callback) {
	        if (proportions && (transition || this._legacyStates.proportions)) {
	            if (!this._legacyStates.proportions) {
	                this._legacyStates.proportions = new Transitionable(this._output.proportions || [0, 0]);
	            }
	            if (!this._proportionGetter) this.proportionsFrom(this._legacyStates.proportions);

	            this._legacyStates.proportions.set(proportions, transition, callback);
	            return this;
	        }
	        else return this.proportionsFrom(proportions);
	    };

	    /**
	     * Deprecated: Prefer to stop transform in your provider object.
	     * @deprecated
	     * @method halt
	     */
	    Modifier.prototype.halt = function halt() {
	        if (this._legacyStates.transform) this._legacyStates.transform.halt();
	        if (this._legacyStates.opacity) this._legacyStates.opacity.halt();
	        if (this._legacyStates.origin) this._legacyStates.origin.halt();
	        if (this._legacyStates.align) this._legacyStates.align.halt();
	        if (this._legacyStates.size) this._legacyStates.size.halt();
	        if (this._legacyStates.proportions) this._legacyStates.proportions.halt();
	        this._transformGetter = null;
	        this._opacityGetter = null;
	        this._originGetter = null;
	        this._alignGetter = null;
	        this._sizeGetter = null;
	        this._proportionGetter = null;
	    };

	    /**
	     * Deprecated: Prefer to use your provided transform or output of your transform provider.
	     * @deprecated
	     * @method getTransform
	     * @return {Object} transform provider object
	     */
	    Modifier.prototype.getTransform = function getTransform() {
	        return this._transformGetter();
	    };

	    /**
	     * Deprecated: Prefer to determine the end state of your transform from your transform provider
	     * @deprecated
	     * @method getFinalTransform
	     * @return {Transform} transform matrix
	     */
	    Modifier.prototype.getFinalTransform = function getFinalTransform() {
	        return this._legacyStates.transform ? this._legacyStates.transform.getFinal() : this._output.transform;
	    };

	    /**
	     * Deprecated: Prefer to use your provided opacity or output of your opacity provider.
	     * @deprecated
	     * @method getOpacity
	     * @return {Object} opacity provider object
	     */
	    Modifier.prototype.getOpacity = function getOpacity() {
	        return this._opacityGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided origin or output of your origin provider.
	     * @deprecated
	     * @method getOrigin
	     * @return {Object} origin provider object
	     */
	    Modifier.prototype.getOrigin = function getOrigin() {
	        return this._originGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided align or output of your align provider.
	     * @deprecated
	     * @method getAlign
	     * @return {Object} align provider object
	     */
	    Modifier.prototype.getAlign = function getAlign() {
	        return this._alignGetter();
	    };

	    /**
	     * Deprecated: Prefer to use your provided size or output of your size provider.
	     * @deprecated
	     * @method getSize
	     * @return {Object} size provider object
	     */
	    Modifier.prototype.getSize = function getSize() {
	        return this._sizeGetter ? this._sizeGetter() : this._output.size;
	    };

	    /**
	     * Deprecated: Prefer to use your provided proportions or output of your proportions provider.
	     * @deprecated
	     * @method getProportions
	     * @return {Object} proportions provider object
	     */
	    Modifier.prototype.getProportions = function getProportions() {
	        return this._proportionGetter ? this._proportionGetter() : this._output.proportions;
	    };

	    // call providers on tick to receive render spec elements to apply
	    function _update() {
	        if (this._transformGetter) this._output.transform = this._transformGetter();
	        if (this._opacityGetter) this._output.opacity = this._opacityGetter();
	        if (this._originGetter) this._output.origin = this._originGetter();
	        if (this._alignGetter) this._output.align = this._alignGetter();
	        if (this._sizeGetter) this._output.size = this._sizeGetter();
	        if (this._proportionGetter) this._output.proportions = this._proportionGetter();
	    }

	    /**
	     * Return render spec for this Modifier, applying to the provided
	     *    target component.  This is similar to render() for Surfaces.
	     *
	     * @private
	     * @method modify
	     *
	     * @param {Object} target (already rendered) render spec to
	     *    which to apply the transform.
	     * @return {Object} render spec for this Modifier, including the
	     *    provided target
	     */
	    Modifier.prototype.modify = function modify(target) {
	        _update.call(this);
	        this._output.target = target;
	        return this._output;
	    };

	    module.exports = Modifier;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};

	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };

	    /**
	     * Fast-multiply two or more Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };

	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };

	    /**
	     * Return a Transform atrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };

	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };

	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        if (y === undefined) y = x;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta

	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;

	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, Math.tan(theta), 0, 0, Math.tan(psi), 1, 0, 0, 0, Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };

	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };

	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };

	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };

	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }

	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {

	        // QR decomposition via Householder reflections
	        //FIRST ITERATION

	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v

	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }

	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry

	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);

	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry

	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);

	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);

	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }

	        return result;
	    };

	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);

	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };

	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };

	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };

	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };

	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;

	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };

	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };

	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

	    module.exports = Transform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};

	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };

	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };

	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };

	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };

	    /*
	     *  Deep clone an object.
	     *  @param b {Object} Object to clone
	     *  @return a {Object} Cloned object.
	     */
	    Utility.clone = function clone(b) {
	        var a;
	        if (typeof b === 'object') {
	            a = (b instanceof Array) ? [] : {};
	            for (var key in b) {
	                if (typeof b[key] === 'object' && b[key] !== null) {
	                    if (b[key] instanceof Array) {
	                        a[key] = new Array(b[key].length);
	                        for (var i = 0; i < b[key].length; i++) {
	                            a[key][i] = Utility.clone(b[key][i]);
	                        }
	                    }
	                    else {
	                      a[key] = Utility.clone(b[key]);
	                    }
	                }
	                else {
	                    a[key] = b[key];
	                }
	            }
	        }
	        else {
	            a = b;
	        }
	        return a;
	    };

	    module.exports = Utility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	
	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2011-06-15
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

	(function (view) {

	"use strict";

	var
	      classListProp = "classList"
	    , protoProp = "prototype"
	    , elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
	    , objCtr = Object
	    , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	    }
	    , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	              i = 0
	            , len = this.length
	        ;
	        for (; i < len; i++) {
	            if (i in this && this[i] === item) {
	                return i;
	            }
	        }
	        return -1;
	    }
	    // Vendors: please allow content code to instantiate DOMExceptions
	    , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	    }
	    , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	            throw new DOMEx(
	                  "SYNTAX_ERR"
	                , "An invalid or illegal string was specified"
	            );
	        }
	        if (/\s/.test(token)) {
	            throw new DOMEx(
	                  "INVALID_CHARACTER_ERR"
	                , "String contains an invalid character"
	            );
	        }
	        return arrIndexOf.call(classList, token);
	    }
	    , ClassList = function (elem) {
	        var
	              trimmedClasses = strTrim.call(elem.className)
	            , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	            , i = 0
	            , len = classes.length
	        ;
	        for (; i < len; i++) {
	            this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	            elem.className = this.toString();
	        };
	    }
	    , classListProto = ClassList[protoProp] = []
	    , classListGetter = function () {
	        return new ClassList(this);
	    }
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
	    return this[i] || null;
	};
	classListProto.contains = function (token) {
	    token += "";
	    return checkTokenAndGetIndex(this, token) !== -1;
	};
	classListProto.add = function (token) {
	    token += "";
	    if (checkTokenAndGetIndex(this, token) === -1) {
	        this.push(token);
	        this._updateClassName();
	    }
	};
	classListProto.remove = function (token) {
	    token += "";
	    var index = checkTokenAndGetIndex(this, token);
	    if (index !== -1) {
	        this.splice(index, 1);
	        this._updateClassName();
	    }
	};
	classListProto.toggle = function (token) {
	    token += "";
	    if (checkTokenAndGetIndex(this, token) === -1) {
	        this.add(token);
	    } else {
	        this.remove(token);
	    }
	};
	classListProto.toString = function () {
	    return this.join(" ");
	};

	if (objCtr.defineProperty) {
	    var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	    };
	    try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	    } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	            classListPropDesc.enumerable = false;
	            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	    }
	} else if (objCtr[protoProp].__defineGetter__) {
	    elemCtrProto.__defineGetter__(classListProp, classListGetter);
	}

	}(self));

	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	if (!Function.prototype.bind) {
	    Function.prototype.bind = function (oThis) {
	        if (typeof this !== "function") {
	            // closest thing possible to the ECMAScript 5 internal IsCallable function
	            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
	        }

	        var aArgs = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP = function () {},
	        fBound = function () {
	            return fToBind.apply(this instanceof fNOP && oThis
	                ? this
	                : oThis,
	                aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	        fNOP.prototype = this.prototype;
	        fBound.prototype = new fNOP();

	        return fBound;
	    };
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// adds requestAnimationFrame functionality
	// Source: http://strd6.com/2011/05/better-window-requestanimationframe-shim/

	window.requestAnimationFrame || (window.requestAnimationFrame =
	  window.webkitRequestAnimationFrame ||
	  window.mozRequestAnimationFrame    ||
	  window.oRequestAnimationFrame      ||
	  window.msRequestAnimationFrame     ||
	  function(callback, element) {
	    return window.setTimeout(function() {
	      callback(+new Date());
	  }, 1000 / 60);
	});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(25);
	    var OptionsManager = __webpack_require__(24);
	    var RenderNode = __webpack_require__(45);
	    var Utility = __webpack_require__(19);

	    /**
	     * Useful for quickly creating elements within applications
	     *   with large event systems.  Consists of a RenderNode paired with
	     *   an input EventHandler and an output EventHandler.
	     *   Meant to be extended by the developer.
	     *
	     * @class View
	     * @uses EventHandler
	     * @uses OptionsManager
	     * @uses RenderNode
	     * @constructor
	     */
	    function View(options) {
	        this._node = new RenderNode();

	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();
	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        this.options = Utility.clone(this.constructor.DEFAULT_OPTIONS || View.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);

	        if (options) this.setOptions(options);
	    }

	    View.DEFAULT_OPTIONS = {}; // no defaults

	    /**
	     * Look up options value by key
	     * @method getOptions
	     *
	     * @param {string} key key
	     * @return {Object} associated object
	     */
	    View.prototype.getOptions = function getOptions(key) {
	        return this._optionsManager.getOptions(key);
	    };

	    /*
	     *  Set internal options.
	     *  No defaults options are set in View.
	     *
	     *  @method setOptions
	     *  @param {Object} options
	     */
	    View.prototype.setOptions = function setOptions(options) {
	        this._optionsManager.patch(options);
	    };

	    /**
	     * Add a child renderable to the view.
	     *   Note: This is meant to be used by an inheriting class
	     *   rather than from outside the prototype chain.
	     *
	     * @method add
	     * @return {RenderNode}
	     * @protected
	     */
	    View.prototype.add = function add() {
	        return this._node.add.apply(this._node, arguments);
	    };

	    /**
	     * Alias for add
	     * @method _add
	     */
	    View.prototype._add = View.prototype.add;

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {number} Render spec for this component
	     */
	    View.prototype.render = function render() {
	        return this._node.render();
	    };

	    /**
	     * Return size of contained element.
	     *
	     * @method getSize
	     * @return {Array.Number} [width, height]
	     */
	    View.prototype.getSize = function getSize() {
	        if (this._node && this._node.getSize) {
	            return this._node.getSize.apply(this._node, arguments) || this.options.size;
	        }
	        else return this.options.size;
	    };

	    module.exports = View;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(25);

	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }

	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };

	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }

	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };

	    /**
	     * Look up value by key or get the full options hash
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object or full options hash
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return key ? this._value[key] : this._value;
	    };

	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = OptionsManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventEmitter = __webpack_require__(46);

	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);

	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions

	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;

	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };

	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };

	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);

	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);

	        return target;
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;

	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    module.exports = EventHandler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/
	/*eslint no-console:0*/

	/**
	 * Utility class for famous-flex.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * @class
	     * @alias module:LayoutUtility
	     */
	    function LayoutUtility() {
	    }
	    LayoutUtility.registeredHelpers = {};

	    var Capabilities = {
	        SEQUENCE: 1,
	        DIRECTION_X: 2,
	        DIRECTION_Y: 4,
	        SCROLLING: 8
	    };
	    LayoutUtility.Capabilities = Capabilities;

	    /**
	     *  Normalizes the margins argument.
	     *
	     *  @param {Array.Number} margins
	     */
	    LayoutUtility.normalizeMargins = function(margins) {
	        if (!margins) {
	            return [0, 0, 0, 0];
	        } else if (!Array.isArray(margins)) {
	            return [margins, margins, margins, margins];
	        } else if (margins.length === 0) {
	            return [0, 0, 0, 0];
	        } else if (margins.length === 1) {
	            return [margins[0], margins[0], margins[0], margins[0]];
	        } else if (margins.length === 2) {
	            return [margins[0], margins[1], margins[0], margins[1]];
	        }
	        else {
	            return margins;
	        }
	    };

	    /**
	     * Makes a (shallow) copy of a spec.
	     *
	     * @param {Spec} spec Spec to clone
	     * @return {Spec} cloned spec
	     */
	    LayoutUtility.cloneSpec = function(spec) {
	        var clone = {};
	        if (spec.opacity !== undefined) {
	            clone.opacity = spec.opacity;
	        }
	        if (spec.size !== undefined) {
	            clone.size = spec.size.slice(0);
	        }
	        if (spec.transform !== undefined) {
	            clone.transform = spec.transform.slice(0);
	        }
	        if (spec.origin !== undefined) {
	            clone.origin = spec.origin.slice(0);
	        }
	        if (spec.align !== undefined) {
	            clone.align = spec.align.slice(0);
	        }
	        return clone;
	    };

	    /**
	     * Clears the contents of a spec.
	     *
	     * @param {Spec} spec Spec to clear
	     * @return {Spec} spec
	     */
	    LayoutUtility.clearSpec = function(spec) {
	        delete spec.opacity;
	        delete spec.size;
	        delete spec.transform;
	        delete spec.origin;
	        delete spec.align;
	        return spec;
	    };

	    /**
	     * Compares two arrays for equality.
	     */
	    function _isEqualArray(a, b) {
	        if (a === b) {
	            return true;
	        }
	        if ((a === undefined) || (b === undefined)) {
	            return false;
	        }
	        var i = a.length;
	        if (i !== b.length){
	            return false;
	        }
	        while (i--) {
	            if (a[i] !== b[i]) {
	                return false;
	            }
	        }
	        return true;
	    }

	    /**
	     * Compares two specs for equality.
	     *
	     * @param {Spec} spec1 Spec to compare
	     * @param {Spec} spec2 Spec to compare
	     * @return {Boolean} true/false
	     */
	    LayoutUtility.isEqualSpec = function(spec1, spec2) {
	        if (spec1.opacity !== spec2.opacity) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.size, spec2.size)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.transform, spec2.transform)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.origin, spec2.origin)) {
	            return false;
	        }
	        if (!_isEqualArray(spec1.align, spec2.align)) {
	            return false;
	        }
	        return true;
	    };

	    /**
	     * Helper function that returns a string containing the differences
	     * between two specs.
	     *
	     * @param {Spec} spec1 Spec to compare
	     * @param {Spec} spec2 Spec to compare
	     * @return {String} text
	     */
	    LayoutUtility.getSpecDiffText = function(spec1, spec2) {
	        var result = 'spec diff:';
	        if (spec1.opacity !== spec2.opacity) {
	            result += '\nopacity: ' + spec1.opacity + ' != ' + spec2.opacity;
	        }
	        if (!_isEqualArray(spec1.size, spec2.size)) {
	            result += '\nsize: ' + JSON.stringify(spec1.size) + ' != ' + JSON.stringify(spec2.size);
	        }
	        if (!_isEqualArray(spec1.transform, spec2.transform)) {
	            result += '\ntransform: ' + JSON.stringify(spec1.transform) + ' != ' + JSON.stringify(spec2.transform);
	        }
	        if (!_isEqualArray(spec1.origin, spec2.origin)) {
	            result += '\norigin: ' + JSON.stringify(spec1.origin) + ' != ' + JSON.stringify(spec2.origin);
	        }
	        if (!_isEqualArray(spec1.align, spec2.align)) {
	            result += '\nalign: ' + JSON.stringify(spec1.align) + ' != ' + JSON.stringify(spec2.align);
	        }
	        return result;
	    };

	    /**
	     * Helper function to call whenever a critical error has occurred.
	     *
	     * @param {String} message error-message
	     */
	    LayoutUtility.error = function(message) {
	        console.log('ERROR: ' + message);
	        throw message;
	    };

	    /**
	     * Helper function to call whenever a warning error has occurred.
	     *
	     * @param {String} message warning-message
	     */
	    LayoutUtility.warning = function(message) {
	        console.log('WARNING: ' + message);
	    };

	    /**
	     * Helper function to log 1 or more arguments. All the arguments
	     * are concatenated to produce a single string which is logged.
	     *
	     * @param {String|Array|Object} args arguments to stringify and concatenate
	     */
	    LayoutUtility.log = function(args) {
	        var message = '';
	        for (var i = 0; i < arguments.length; i++) {
	            var arg = arguments[i];
	            if ((arg instanceof Object) || (arg instanceof Array)) {
	                message += JSON.stringify(arg);
	            }
	            else {
	                message += arg;
	            }
	        }
	        console.log(message);
	    };

	    /**
	     * Registers a layout-helper so it can be used as a layout-literal for
	     * a layout-controller. The LayoutHelper instance must support the `parse`
	     * function, which is fed the layout-literal content.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * Layout.registerHelper('dock', LayoutDockHelper);
	     *
	     * var layoutController = new LayoutController({
	     *   layout: { dock: [,
	     *     ['top', 'header', 50],
	     *     ['bottom', 'footer', 50],
	     *     ['fill', 'content'],
	     *   ]},
	     *   dataSource: {
	     *     header: new Surface({content: 'Header'}),
	     *     footer: new Surface({content: 'Footer'}),
	     *     content: new Surface({content: 'Content'}),
	     *   }
	     * })
	     * ```
	     *
	     * @param {String} name name of the helper (e.g. 'dock')
	     * @param {Function} Helper Helper to register (e.g. LayoutDockHelper)
	     */
	    LayoutUtility.registerHelper = function(name, Helper) {
	        if (!Helper.prototype.parse) {
	            LayoutUtility.error('The layout-helper for name "' + name + '" is required to support the "parse" method');
	        }
	        if (this.registeredHelpers[name] !== undefined) {
	            LayoutUtility.warning('A layout-helper with the name "' + name + '" is already registered and will be overwritten');
	        }
	        this.registeredHelpers[name] = Helper;
	    };

	    /**
	     * Unregisters a layout-helper.
	     *
	     * @param {String} name name of the layout-helper
	     */
	    LayoutUtility.unregisterHelper = function(name) {
	        delete this.registeredHelpers[name];
	    };

	    /**
	     * Gets a registered layout-helper by its name.
	     *
	     * @param {String} name name of the layout-helper
	     * @return {Function} layout-helper or undefined
	     */
	    LayoutUtility.getRegisteredHelper = function(name) {
	        return this.registeredHelpers[name];
	    };

	    // Layout function
	    module.exports = LayoutUtility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * LayoutNodeManager is a private class used internally by the LayoutControllers and
	 * ScrollViews. It manages the layout-nodes that are rendered and exposes the layout-context
	 * which is passed along to the layout-function.
	 *
	 * LayoutNodeManager keeps track of every rendered node through an ordered double-linked
	 * list. The first time the layout-function is called, the linked list is created.
	 * After that, the linked list is updated to reflect the output of the layout-function.
	 * When the layout is unchanged, then the linked-list exactly matches the order of the
	 * accessed nodes in the layout-function, and no layout-nodes need to be created or
	 * re-ordered.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutNode = __webpack_require__(28);
	    var LayoutContext = __webpack_require__(47);
	    var LayoutUtility = __webpack_require__(26);

	    var MAX_POOL_SIZE = 100;
	    var LOG_PREFIX = 'Nodes: ';

	    /**
	     * @class
	     * @param {LayoutNode} LayoutNode Layout-nodes to create
	     * @param {Function} initLayoutNodeFn function to use when initializing new nodes
	     * @alias module:LayoutNodeManager
	     */
	    function LayoutNodeManager(LayoutNode, initLayoutNodeFn) {
	        this.LayoutNode = LayoutNode;
	        this._initLayoutNodeFn = initLayoutNodeFn;
	        this._context = new LayoutContext({
	            next: _contextNext.bind(this),
	            prev: _contextPrev.bind(this),
	            get: _contextGet.bind(this),
	            set: _contextSet.bind(this),
	            getRenderNode: _contextGetRenderNode.bind(this),
	            resolveSize: _contextResolveSize.bind(this)
	        });
	        this._contextState = {
	            // enumation state for the context
	            //nextSequence: undefined,
	            //prevSequence: undefined,
	            //next: undefined
	            //prev: undefined
	            //start: undefined
	        };
	        this._pool = {
	            size: 0
	            //first: undefined
	        };
	        this.verbose = false;
	        //this._first = undefined; // first item in the linked list
	        //this._nodesById = undefined;
	        //this._trueSizeRequested = false;
	    }

	    /**
	     * Prepares the manager for a new layout iteration, after which it returns the
	     * context which can be used by the layout-function.
	     *
	     * @param {ViewSequence} viewSequence first node to layout
	     * @param {Object} [nodesById] dictionary to use when looking up nodes by id
	     * @return {LayoutContext} context which can be passed to the layout-function
	     */
	    LayoutNodeManager.prototype.prepareForLayout = function(viewSequence, nodesById, contextData) {

	        // Reset all nodes
	        var node = this._first;
	        while (node) {
	            node.reset();
	            node = node._next;
	        }

	        // Prepare data
	        this._nodesById = nodesById;
	        this._trueSizeRequested = false;

	        // Prepare context for enumation
	        this._contextState.nextSequence = viewSequence;
	        this._contextState.prevSequence = viewSequence;
	        this._contextState.next = undefined;
	        this._contextState.prev = undefined;
	        this._contextState.nextGetIndex = 0;
	        this._contextState.prevGetIndex = 0;
	        this._contextState.nextSetIndex = 0;
	        this._contextState.prevSetIndex = 0;

	        // Prepare content
	        this._context.size = contextData.size;
	        this._context.direction = contextData.direction;
	        this._context.scrollOffset = contextData.scrollOffset || 0;
	        this._context.scrollStart = contextData.scrollStart || 0;
	        this._context.scrollEnd = contextData.scrollEnd || this._context.size[this._context.direction];
	        return this._context;
	    };

	    /**
	     * When the layout-function no longer lays-out the node, then it is not longer
	     * being invalidated. In this case the destination is set to the removeSpec
	     * after which the node is animated towards the remove-spec.
	     *
	     * @param {Spec} [removeSpec] spec towards which the no longer layed-out nodes are animated
	     */
	    LayoutNodeManager.prototype.removeNonInvalidatedNodes = function(removeSpec) {
	        var node = this._first;
	        while (node) {

	            // If a node existed, but it is no longer being layed out,
	            // then set it to the '_removing' state.
	            if (!node._invalidated && !node._removing) {
	                if (this.verbose) {
	                    LayoutUtility.log(LOG_PREFIX, 'removing node');
	                }
	                node.remove(removeSpec);
	            }

	            // Move to next node
	            node = node._next;
	        }
	    };

	    /**
	     * Builds the render-spec and destroy any layout-nodes that no longer
	     * return a render-spec.
	     *
	     * @return {Array.Spec} array of Specs
	     */
	    LayoutNodeManager.prototype.buildSpecAndDestroyUnrenderedNodes = function() {
	        var specs = [];
	        var result = {
	            specs: specs,
	            modified: false
	        };
	        var node = this._first;
	        while (node) {
	            var oldEndStateReached = node._endStateReached;
	            var spec = node.getSpec();
	            if (!spec) {

	                // Remove node from linked-list
	                if (node._next) {
	                    node._next._prev = node._prev;
	                }
	                if (node._prev) {
	                    node._prev._next = node._next;
	                }
	                else {
	                    this._first = node._next;
	                }

	                // Destroy the node
	                var destroyNode = node;
	                node = node._next;
	                destroyNode.destroy();
	                if (this.verbose) {
	                    LayoutUtility.log(LOG_PREFIX, 'destroying node');
	                }

	                // Add node to pool
	                if (this._pool.size < MAX_POOL_SIZE) {
	                    this._pool.size++;
	                    destroyNode._next = this._pool.first;
	                    this._pool.first = destroyNode;
	                }

	                // Mark as modified
	                result.modified = true;

	                _checkIntegrity.call(this);
	            }
	            else {

	                // Update stats
	                if (!node._endStateReached || !oldEndStateReached) {
	                    result.modified = true;
	                }

	                // Add node to result output
	                specs.push(spec);
	                node = node._next;
	            }
	        }
	        return result;
	    };

	    /**
	     * Get the layout-node by its renderable.
	     *
	     * @param {Object} renderable renderable
	     * @return {LayoutNode} layout-node or undefined
	     */
	    LayoutNodeManager.prototype.getNodeByRenderNode = function(renderable) {
	        var node = this._first;
	        while (node) {
	            if (node.renderNode === renderable) {
	                return node;
	            }
	            node = node._next;
	        }
	        return undefined;
	    };

	    /**
	     * Inserts a layout-node into the linked-list.
	     *
	     * @param {LayoutNode} node layout-node to insert
	     */
	    LayoutNodeManager.prototype.insertNode = function(node) {
	        node._next = this._first;
	        if (this._first) {
	            this._first._prev = node;
	        }
	        this._first = node;
	        _checkIntegrity.call(this);
	    };

	    /**
	     * Creates a layout-node
	     *
	     * @param {Object} renderNode render-node for whom to create a layout-node for
	     * @return {LayoutNode} layout-node
	     */
	    LayoutNodeManager.prototype.createNode = function(renderNode, spec) {
	        var node;
	        if (this._pool.first) {
	            node = this._pool.first;
	            this._pool.first = node._next;
	            this._pool.size--;
	            node.constructor.apply(node, arguments);
	        }
	        else {
	            node = new this.LayoutNode(renderNode, spec);
	        }
	        node._prev = undefined;
	        node._next = undefined;
	        node._viewSequence = undefined;
	        if (this._initLayoutNodeFn) {
	            this._initLayoutNodeFn.call(this, node, spec);
	        }
	        return node;
	    };

	    /**
	     * Enumates all layout-nodes.
	     *
	     * @param {Function} callback Function that is called every node
	     * @param {Bool} [next] undefined = all, true = all next, false = all previous
	     */
	    LayoutNodeManager.prototype.forEach = function(callback, next) {
	        var node;
	        if (next === undefined) {
	            node = this._first;
	            while (node) {
	                if (callback(node)) {
	                    return;
	                }
	                node = node._next;
	            }
	        } else if (next === true) {
	            node = this._contextState.start;
	            while (node) {
	                if (!node._invalidated || callback(node)) {
	                    return;
	                }
	                node = node._next;
	            }
	        } else if (next === false) {
	            node = this._contextState.start ? this._contextState.start._prev : undefined;
	            while (node) {
	                if (!node._invalidated || callback(node)) {
	                    return;
	                }
	                node = node._prev;
	            }
	        }
	    };

	    /**
	     * Checks the integrity of the linked-list.
	     */
	    function _checkIntegrity() {
	        var node = this._first;
	        var count = 0;
	        var prevNode;
	        while (node) {
	            if (!node._prev && (node !== this._first)) {
	                throw 'No prev but not first';
	            }
	            if (node._prev !== prevNode) {
	                throw 'Bork';
	            }
	            prevNode = node;
	            node = node._next;
	            count++;
	        }
	    }

	    /**
	     * Creates or gets a layout node.
	     */
	    function _contextGetCreateAndOrderNodes(renderNode, prev) {

	        // The first time this function is called, the current
	        // prev/next position is obtained.
	        var node;
	        if (!this._contextState.next) {
	            node = this._first;
	            while (node) {
	                if (node.renderNode === renderNode) {
	                    break;
	                }
	                node = node._next;
	            }
	            if (!node) {
	                node = this.createNode(renderNode);
	                node._next = this._first;
	                if (this._first) {
	                    this._first._prev = node;
	                }
	                this._first = node;
	            }
	            this._contextState.start = node;
	            this._contextState.next = node;
	            this._contextState.prev = node;

	            _checkIntegrity.call(this);
	        }

	        // Check whether node already exist at the correct position
	        // in the linked-list. If so, return that node immediately
	        // and advanced the prev/next pointer for the next/prev
	        // lookup operation.
	        if (prev && (this._contextState.start !== node)) {
	            if (this._contextState.prev) {
	                var prevNode = this._contextState.prev._prev;
	                if (prevNode && (prevNode.renderNode === renderNode)) {
	                    this._contextState.prev = prevNode;
	                    _checkIntegrity.call(this);
	                    return prevNode;
	                }
	            }
	        }
	        else {
	            var nextNode = this._contextState.next;
	            if (nextNode && (nextNode.renderNode === renderNode)) {
	                if (nextNode._next) {
	                    this._contextState.next = nextNode._next;
	                }
	                _checkIntegrity.call(this);
	                return nextNode;
	            }
	        }

	        // Lookup the node anywhere in the list..
	        node = this._first;
	        while (node) {
	            if (node.renderNode === renderNode) {
	                break;
	            }
	            node = node._next;
	        }

	        // Create new node if neccessary
	        if (!node) {
	            node = this.createNode(renderNode);
	        }

	        // Node existed, remove from linked-list
	        else {
	            if (node._next) {
	                node._next._prev = node._prev;
	            }
	            if (node._prev) {
	                node._prev._next = node._next;
	            }
	            else {
	                this._first = node._next;
	            }
	            node._next = undefined;
	            node._prev = undefined;
	            _checkIntegrity.call(this);
	        }

	        // Insert node into the linked list
	        if (prev) {
	            if (this._contextState.prev._prev) {
	                node._prev = this._contextState.prev._prev;
	                this._contextState.prev._prev._next = node;
	            }
	            else {
	                this._first = node;
	            }
	            this._contextState.prev._prev = node;
	            node._next = this._contextState.prev;
	            this._contextState.prev = node;
	        }
	        else {
	            if (this._contextState.next._next) {
	                node._next = this._contextState.next._next;
	                this._contextState.next._next._prev = node;
	            }
	            this._contextState.next._next = node;
	            node._prev = this._contextState.next;
	            this._contextState.next = node;
	        }
	        _checkIntegrity.call(this);

	        return node;
	    }

	    /**
	     * Get the next render-node
	     */
	    function _contextNext() {

	        // Get the next node from the sequence
	        if (!this._contextState.nextSequence) {
	            return undefined;
	        }
	        var renderNode = this._contextState.nextSequence.get();
	        if (!renderNode) {
	            this._contextState.nextSequence = undefined;
	            return undefined;
	        }
	        var nextSequence = this._contextState.nextSequence;
	        this._contextState.nextSequence = this._contextState.nextSequence.getNext();
	        return {
	            renderNode: renderNode,
	            viewSequence: nextSequence,
	            next: true,
	            index: ++this._contextState.nextGetIndex
	        };
	    }

	    /**
	     * Get the previous render-node
	     */
	    function _contextPrev() {

	        // Get the previous node from the sequence
	        if (!this._contextState.prevSequence) {
	            return undefined;
	        }
	        this._contextState.prevSequence = this._contextState.prevSequence.getPrevious();
	        if (!this._contextState.prevSequence) {
	            return undefined;
	        }
	        var renderNode = this._contextState.prevSequence.get();
	        if (!renderNode) {
	            this._contextState.prevSequence = undefined;
	            return undefined;
	        }
	        return {
	            renderNode: renderNode,
	            viewSequence: this._contextState.prevSequence,
	            prev: true,
	            index: --this._contextState.prevGetIndex
	        };
	    }

	    /**
	     * Resolve id into a context-node.
	     */
	     function _contextGet(contextNodeOrId) {
	        if (!contextNodeOrId) {
	            return undefined;
	        }
	        if ((contextNodeOrId instanceof String) || (typeof contextNodeOrId === 'string')) {
	            if (!this._nodesById) {
	               return undefined;
	            }
	            var renderNode = this._nodesById[contextNodeOrId];
	            if (!renderNode) {
	                return undefined;
	            }

	            // Return array
	            if (renderNode instanceof Array) {
	                var result = [];
	                for (var i = 0 ; i < renderNode.length; i++) {
	                    result.push({
	                        renderNode: renderNode[i],
	                        arrayElement: true
	                    });
	                }
	                return result;
	            }

	            // Create context node
	            return {
	                renderNode: renderNode,
	                byId: true
	            };
	        }
	        else {
	            return contextNodeOrId;
	        }
	    }

	    /**
	     * Get render-node by its id.
	     */
	     function _contextGetRenderNode(contextNodeOrId) {
	        if (!contextNodeOrId) {
	            return undefined;
	        }
	        if ((contextNodeOrId instanceof String) || (typeof contextNodeOrId === 'string')) {
	            if (!this._nodesById) {
	               return undefined;
	            }
	            return this._nodesById[contextNodeOrId];
	        }
	        else {
	            return contextNodeOrId.renderNode;
	        }
	    }

	    /**
	     * Set the node content
	     */
	    function _contextSet(contextNodeOrId, set) {
	        var contextNode = _contextGet.call(this, contextNodeOrId);
	        if (contextNode) {
	            if (!contextNode.node) {
	                if (contextNode.next) {
	                     if (contextNode.index < this._contextState.nextSetIndex) {
	                        LayoutUtility.error('Nodes must be layed out in the same order as they were requested!');
	                     }
	                     this._contextState.nextSetIndex = contextNode.index;
	                } else if (contextNode.prev) {
	                     if (contextNode.index > this._contextState.prevSetIndex) {
	                        LayoutUtility.error('Nodes must be layed out in the same order as they were requested!');
	                     }
	                     this._contextState.prevSetIndex = contextNode.index;
	                }
	                contextNode.node = _contextGetCreateAndOrderNodes.call(this, contextNode.renderNode, contextNode.prev);
	                contextNode.node._viewSequence = contextNode.viewSequence;
	            }
	            contextNode.node.trueSizeRequested = contextNode.trueSizeRequested;
	            contextNode.node.set(set, this._context.size);
	            contextNode.set = set;
	        }
	    }

	    /**
	     * Resolve the size of the layout-node from the renderable itsself
	     */
	    function _contextResolveSize(contextNodeOrId, parentSize) {
	        var contextNode = _contextGet.call(this, contextNodeOrId);
	        if (!contextNode) {
	            return this;
	        }
	        var size = contextNode.renderNode.getSize(true);
	        if (!size) {
	            size = contextNode.renderNode.getSize(false);
	            if (!size) {
	                size = parentSize;
	            }
	            else {
	                var newSize = [size[0], size[1]];
	                if (size[0] === true) {
	                   newSize[0] = 0; // true cannot be resolved at this stage, try again next render-cycle
	                   this._trueSizeRequested = true;
	                   contextNode.trueSizeRequested = true;
	                }
	                else if (size[0] === undefined) {
	                    newSize[0] = parentSize[0];
	                }
	                if (size[1] === true) {
	                   newSize[1] = 0; // true cannot be resolved at this stage, try again next render-cycle
	                   this._trueSizeRequested = true;
	                   contextNode.trueSizeRequested = true;
	                }
	                else if (size[1] === undefined) {
	                    newSize[1] = parentSize[1];
	                }
	                size = newSize;
	            }
	        }
	        return size;
	    }

	    module.exports = LayoutNodeManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * Internal LayoutNode class used by `LayoutController`.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var Transform = __webpack_require__(18);
	    var LayoutUtility = __webpack_require__(26);

	    /**
	     * @class
	     * @param {Object} renderNode Render-node which this layout-node represents
	     * @alias module:LayoutNode
	     */
	    function LayoutNode(renderNode, spec) {
	        this.renderNode = renderNode;
	        this._spec = spec ? LayoutUtility.cloneSpec(spec) : {};
	        this._spec.renderNode = renderNode; // also store in spec
	        this._invalidated = false;
	        this._removing = false;
	        //this.scrollLength = undefined;
	        //this.trueSizeRequested = false;
	    }

	    /**
	     * Called when the node is destroyed
	     */
	    LayoutNode.prototype.destroy = function() {
	        // override to implement
	    };

	    /**
	     * Reset the end-state. This function is called on all layout-nodes prior to
	     * calling the layout-function. So that the layout-function starts with a clean slate.
	     */
	    LayoutNode.prototype.reset = function() {
	        this._invalidated = false;
	        this.trueSizeRequested = false;
	    };

	    /**
	     * Set the spec of the node
	     *
	     * @param {Object} spec
	     */
	    LayoutNode.prototype.setSpec = function(spec) {
	        this._spec.align = spec.align;
	        this._spec.origin = spec.origin;
	        this._spec.size = spec.size;
	        this._spec.transform = spec.transform;
	        this._spec.opacity = spec.opacity;
	    };

	    /**
	     * Set the content of the node
	     *
	     * @param {Object} set
	     */
	    LayoutNode.prototype.set = function(set, size) {
	        this._invalidated = true;
	        this._removing = false;
	        var spec = this._spec;
	        spec.opacity = set.opacity;
	        spec.size = set.size;
	        spec.origin = set.origin;
	        spec.align = set.align;
	        if (set.translate || set.skew || set.rotate || set.scale) {
	            this._spec.transform = Transform.build({
	                translate: set.translate || [0, 0, 0],
	                skew: set.skew || [0, 0, 0],
	                scale: set.scale || [1, 1, 1],
	                rotate: set.rotate || [0, 0, 0]
	            });
	        }
	        else {
	            this._spec.transform = undefined;
	        }
	        this.scrollLength = set.scrollLength;
	    };

	    /**
	     * Creates the render-spec
	     */
	    LayoutNode.prototype.getSpec = function() {
	        return this._invalidated ? this._spec : undefined;
	    };

	    /**
	     * Marks the node for removal
	     */
	    LayoutNode.prototype.remove = function(removeSpec) {
	        this._removing = true;
	    };

	    module.exports = LayoutNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * FlowLayoutController transitions renderables smoothly from one
	 * layout to another. When the data-source or layout is changed,
	 * the renderables are transitioned from their old state (size,
	 * transform, origin, etc..) to the new state.
	 *
	 * Inherited from: [LayoutController](./LayoutController.md)
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutController = __webpack_require__(9);
	    var LayoutNodeManager = __webpack_require__(27);
	    var FlowLayoutNode = __webpack_require__(48);
	    var Transform = __webpack_require__(18);

	    /**
	     * @class
	     * @extends LayoutController
	     * @param {Object} options Options.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @param {Spec} [options.insertSpec] Size, transform, opacity... to use when inserting new renderables into the scene.
	     * @param {Spec} [options.removeSpec] Size, transform, opacity... to use when removing renderables from the scene.
	     * @param {Object} [options.nodeSpring] Spring options to use when transitioning between states
	     * @alias module:FlowLayoutController
	     */
	    function FlowLayoutController(options, nodeManager) {
	        LayoutController.call(this, FlowLayoutController.DEFAULT_OPTIONS, nodeManager || new LayoutNodeManager(FlowLayoutNode, _initLayoutNode.bind(this)));
	        if (options) {
	            this.setOptions(options);
	        }
	    }
	    FlowLayoutController.prototype = Object.create(LayoutController.prototype);
	    FlowLayoutController.prototype.constructor = FlowLayoutController;

	    FlowLayoutController.DEFAULT_OPTIONS = {
	        nodeSpring: {
	            dampingRatio: 0.8,
	            period: 300
	        }
	        /*insertSpec: {
	            opacity: undefined,
	            size: undefined,
	            transform: undefined,
	            origin: undefined,
	            align: undefined
	        },
	        removeSpec: {
	            opacity: undefined,
	            size: undefined,
	            transform: undefined,
	            origin: undefined,
	            align: undefined
	        }*/
	    };

	    /**
	     * Called whenever a layout-node is created/re-used. Initializes
	     * the node with the `insertSpec` if it has been defined.
	     */
	    function _initLayoutNode(node, spec) {
	        if (node.setOptions) {
	            node.setOptions({
	                spring: this.options.nodeSpring
	            });
	        }
	        if (!spec && this.options.insertSpec) {
	            node.setSpec(this.options.insertSpec);
	        }
	    }

	    var oldSetOptions = FlowLayoutController.prototype.setOptions;
	    /**
	     * Patches the FlowLayoutController instance's options with the passed-in ones.
	     *
	     * @param {Options} options An object of configurable options for the FlowLayoutController instance.
	     * @param {Function|Object} [options.layout] Layout function or layout-literal.
	     * @param {Object} [options.layoutOptions] Options to pass in to the layout-function.
	     * @param {Array|ViewSequence|Object} [options.dataSource] Array, ViewSequence or Object with key/value pairs.
	     * @param {Utility.Direction} [options.direction] Direction to layout into (e.g. Utility.Direction.Y) (when ommited the default direction of the layout is used)
	     * @param {Spec} [options.insertSpec] Size, transform, opacity... to use when inserting new renderables into the scene.
	     * @param {Spec} [options.removeSpec] Size, transform, opacity... to use when removing renderables from the scene.
	     * @param {Object} [options.nodeSpring] Spring options to use when transitioning between states
	     * @return {FlowLayoutController} this
	     */
	    FlowLayoutController.prototype.setOptions = function setOptions(options) {
	        oldSetOptions.call(this, options);
	        if (options.nodeSpring) {
	            this._nodes.forEach(function(node) {
	                node.setOptions({spring: options.nodeSpring});
	            });
	        }
	        return this;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    FlowLayoutController.prototype.commit = function commit(context) {
	        var transform = context.transform;
	        var origin = context.origin;
	        var size = context.size;
	        var opacity = context.opacity;
	        var result;

	        // When the size or layout function has changed, reflow the layout
	        if (size[0] !== this._contextSizeCache[0] ||
	            size[1] !== this._contextSizeCache[1] ||
	            this._isDirty ||
	            this._nodes._trueSizeRequested) {

	            // Emit start event
	            var eventData = {
	                target: this,
	                oldSize: this._contextSizeCache,
	                size: size,
	                dirty: this._isDirty,
	                trueSizeRequested: this._nodes._trueSizeRequested
	            };
	            this._eventOutput.emit('layoutstart', eventData);

	            // Update state
	            this._contextSizeCache[0] = size[0];
	            this._contextSizeCache[1] = size[1];
	            this._isDirty = false;

	            // Prepare for layout
	            var layoutContext = this._nodes.prepareForLayout(
	                this._viewSequence,     // first node to layout
	                this._nodesById, {      // so we can do fast id lookups
	                    size: size,
	                    direction: this._direction
	                }
	            );

	            // Layout objects
	            if (this._layout.function) {
	                this._layout.function(
	                    layoutContext,          // context which the layout-function can use
	                    this._layout.options    // additional layout-options
	                );
	            }

	            // Mark non-invalidated nodes for removal
	            this._nodes.removeNonInvalidatedNodes(this.options.removeSpec);

	            // Update output and optionally emit event
	            result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._commitOutput.target = result.specs;
	            if (result.modified || true) {
	                this._eventOutput.emit('reflow', {
	                    target: this
	                });
	            }

	            // Emit end event
	            this._eventOutput.emit('layoutend', eventData);
	        }
	        else {

	            // Update output and optionally emit event
	            result = this._nodes.buildSpecAndDestroyUnrenderedNodes();
	            this._commitOutput.target = result.specs;
	            if (result.modified) {
	                this._eventOutput.emit('reflow', {
	                    target: this
	                });
	            }
	        }

	        // Render child-nodes every commit
	        for (var i = 0; i < this._commitOutput.target.length; i++) {
	            this._commitOutput.target[i].target = this._commitOutput.target[i].renderNode.render();
	        }

	        // Return
	        if (size) {
	            transform = Transform.moveThen([-size[0]*origin[0], -size[1]*origin[1], 0], transform);
	        }
	        this._commitOutput.size = size;
	        this._commitOutput.opacity = opacity;
	        this._commitOutput.transform = transform;
	        return this._commitOutput;
	    };

	    module.exports = FlowLayoutController;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Surface = __webpack_require__(16);

	    /**
	     * A surface containing an HTML5 Canvas element.
	     *   This extends the Surface class.
	     *
	     * @class CanvasSurface
	     * @extends Surface
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Array.Number} [options.canvasSize] [width, height] for document element
	     */
	    function CanvasSurface(options) {
	        if (options && options.canvasSize) this._canvasSize = options.canvasSize;
	        Surface.apply(this, arguments);
	        if (!this._canvasSize) this._canvasSize = this.getSize();
	        this._backBuffer = document.createElement('canvas');
	        if (this._canvasSize) {
	            this._backBuffer.width = this._canvasSize[0];
	            this._backBuffer.height = this._canvasSize[1];
	        }
	        this._contextId = undefined;
	    }

	    CanvasSurface.prototype = Object.create(Surface.prototype);
	    CanvasSurface.prototype.constructor = CanvasSurface;
	    CanvasSurface.prototype.elementType = 'canvas';
	    CanvasSurface.prototype.elementClass = 'famous-surface';

	    /**
	     * Set inner document content.  Note that this is a noop for CanvasSurface.
	     *
	     * @method setContent
	     *
	     */
	    CanvasSurface.prototype.setContent = function setContent() {};

	    /**
	     * Place the document element this component manages into the document.
	     *    This will draw the content to the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    CanvasSurface.prototype.deploy = function deploy(target) {
	        if (this._canvasSize) {
	            target.width = this._canvasSize[0];
	            target.height = this._canvasSize[1];
	        }
	        if (this._contextId === '2d') {
	            target.getContext(this._contextId).drawImage(this._backBuffer, 0, 0);
	            this._backBuffer.width = 0;
	            this._backBuffer.height = 0;
	        }
	    };

	    /**
	     * Remove this component and contained content from the document
	     *
	     * @private
	     * @method recall
	     *
	     * @param {Node} target node to which the component was deployed
	     */
	    CanvasSurface.prototype.recall = function recall(target) {
	        var size = this.getSize();

	        this._backBuffer.width = target.width;
	        this._backBuffer.height = target.height;

	        if (this._contextId === '2d') {
	            this._backBuffer.getContext(this._contextId).drawImage(target, 0, 0);
	            target.width = 0;
	            target.height = 0;
	        }
	    };

	    /**
	     * Returns the canvas element's context
	     *
	     * @method getContext
	     * @param {string} contextId context identifier
	     */
	    CanvasSurface.prototype.getContext = function getContext(contextId) {
	        this._contextId = contextId;
	        return this._currentTarget ? this._currentTarget.getContext(contextId) : this._backBuffer.getContext(contextId);
	    };

	    /**
	     *  Set the size of the surface and canvas element.
	     *
	     *  @method setSize
	     *  @param {Array.number} size [width, height] of surface
	     *  @param {Array.number} canvasSize [width, height] of canvas surface
	     */
	    CanvasSurface.prototype.setSize = function setSize(size, canvasSize) {
	        Surface.prototype.setSize.apply(this, arguments);
	        if (canvasSize) this._canvasSize = [canvasSize[0], canvasSize[1]];
	        if (this._currentTarget) {
	            this._currentTarget.width = this._canvasSize[0];
	            this._currentTarget.height = this._canvasSize[1];
	        }
	    };

	    module.exports = CanvasSurface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var RenderNode = __webpack_require__(45);
	    var EventHandler = __webpack_require__(25);
	    var ElementAllocator = __webpack_require__(50);
	    var Transform = __webpack_require__(18);
	    var Transitionable = __webpack_require__(43);

	    var _zeroZero = [0, 0];
	    var usePrefix = !('perspective' in document.documentElement.style);

	    function _getElementSize(element) {
	        return [element.clientWidth, element.clientHeight];
	    }

	    var _setPerspective = usePrefix ? function(element, perspective) {
	        element.style.webkitPerspective = perspective ? perspective.toFixed() + 'px' : '';
	    } : function(element, perspective) {
	        element.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	    };

	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);

	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize(this.container);

	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;

	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _zeroZero,
	            align: _zeroZero,
	            size: this._size
	        };

	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize(this.container));
	        }.bind(this));

	    }

	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };

	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };

	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };

	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };

	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize(this.container);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };

	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            _setPerspective(this.container, perspective);
	            this._perspective = perspective;
	        }

	        this._node.commit(this._nodeContext);
	    };

	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };

	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    module.exports = Context;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(33);
	    var EventHandler = __webpack_require__(25);
	    var Transform = __webpack_require__(18);

	    var usePrefix = !('transform' in document.documentElement.style);
	    var devicePixelRatio = window.devicePixelRatio || 1;

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class ElementOutput
	     * @constructor
	     *
	     * @param {Node} element document parent of this container
	     */
	    function ElementOutput(element) {
	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;

	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);

	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this._eventOutput.emit(event.type, event);
	        }.bind(this);

	        this.id = Entity.register(this);
	        this._element = null;
	        this._sizeDirty = false;
	        this._originDirty = false;
	        this._transformDirty = false;

	        this._invisible = false;
	        if (element) this.attach(element);
	    }

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.on = function on(type, fn) {
	        if (this._element) this._element.addEventListener(type, this.eventForwarder);
	        this._eventOutput.on(type, fn);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    ElementOutput.prototype.removeListener = function removeListener(type, fn) {
	        this._eventOutput.removeListener(type, fn);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    ElementOutput.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this._eventOutput.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    ElementOutput.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    ElementOutput.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ElementOutput.prototype.render = function render() {
	        return this.id;
	    };

	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after attachment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }

	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before detach from the document.
	    function _removeEventListeners(target) {
	        for (var i in this._eventOutput.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }

	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }

	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */

	    var _setMatrix;
	    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	        _setMatrix = function(element, matrix) {
	            element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	    else if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }

	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }

	    // Directly apply given origin coordinates to the document element as the
	    // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };

	    // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,0.0001)';
	        element.style.opacity = 0;
	    };

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    ElementOutput.prototype.commit = function commit(context) {
	        var target = this._element;
	        if (!target) return;

	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;

	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }

	        if (_xyNotEquals(this._origin, origin)) this._originDirty = true;
	        if (Transform.notEquals(this._matrix, matrix)) this._transformDirty = true;

	        if (this._invisible) {
	            this._invisible = false;
	            this._element.style.display = '';
	        }

	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }

	        if (this._transformDirty || this._originDirty || this._sizeDirty) {
	            if (this._sizeDirty) this._sizeDirty = false;

	            if (this._originDirty) {
	                if (origin) {
	                    if (!this._origin) this._origin = [0, 0];
	                    this._origin[0] = origin[0];
	                    this._origin[1] = origin[1];
	                }
	                else this._origin = null;
	                _setOrigin(target, this._origin);
	                this._originDirty = false;
	            }

	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = this._size ? Transform.thenMove(matrix, [-this._size[0]*origin[0], -this._size[1]*origin[1], 0]) : matrix;
	            _setMatrix(target, aaMatrix);
	            this._transformDirty = false;
	        }
	    };

	    ElementOutput.prototype.cleanup = function cleanup() {
	        if (this._element) {
	            this._invisible = true;
	            this._element.style.display = 'none';
	        }
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method attach
	     * @param {Node} target document parent of this container
	     */
	    ElementOutput.prototype.attach = function attach(target) {
	        this._element = target;
	        _addEventListeners.call(this, target);
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method detach
	     */
	    ElementOutput.prototype.detach = function detach() {
	        var target = this._element;
	        if (target) {
	            _removeEventListeners.call(this, target);
	            if (this._invisible) {
	                this._invisible = false;
	                this._element.style.display = '';
	            }
	        }
	        this._element = null;
	        return target;
	    };

	    module.exports = ElementOutput;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */

	    var entities = [];

	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity registration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }

	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity registration id
	     * @param {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }

	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }

	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity registration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }

	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Surface = __webpack_require__(16);
	    var Context = __webpack_require__(31);

	    /**
	     * ContainerSurface is an object designed to contain surfaces and
	     *   set properties to be applied to all of them at once.
	     *   This extends the Surface class.
	     *   A container surface will enforce these properties on the
	     *   surfaces it contains:
	     *
	     *   size (clips contained surfaces to its own width and height);
	     *
	     *   origin;
	     *
	     *   its own opacity and transform, which will be automatically
	     *   applied to  all Surfaces contained directly and indirectly.
	     *
	     * @class ContainerSurface
	     * @extends Surface
	     * @constructor
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on all inner content
	     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface (should not be used)
	     */
	    function ContainerSurface(options) {
	        Surface.call(this, options);
	        this._container = document.createElement('div');
	        this._container.classList.add('famous-group');
	        this._container.classList.add('famous-container-group');
	        this._shouldRecalculateSize = false;
	        this.context = new Context(this._container);
	        this.setContent(this._container);
	    }

	    ContainerSurface.prototype = Object.create(Surface.prototype);
	    ContainerSurface.prototype.constructor = ContainerSurface;
	    ContainerSurface.prototype.elementType = 'div';
	    ContainerSurface.prototype.elementClass = 'famous-surface';

	    /**
	     * Add renderables to this object's render tree
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    ContainerSurface.prototype.add = function add() {
	        return this.context.add.apply(this.context, arguments);
	    };

	    /**
	     * Return spec for this surface.  Note: Can result in a size recalculation.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ContainerSurface.prototype.render = function render() {
	        if (this._sizeDirty) this._shouldRecalculateSize = true;
	        return Surface.prototype.render.apply(this, arguments);
	    };

	    /**
	     * Place the document element this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    ContainerSurface.prototype.deploy = function deploy() {
	        this._shouldRecalculateSize = true;
	        return Surface.prototype.deploy.apply(this, arguments);
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     * @param {Transform} transform unused TODO
	     * @param {Number} opacity  unused TODO
	     * @param {Array.Number} origin unused TODO
	     * @param {Array.Number} size unused TODO
	     * @return {undefined} TODO returns an undefined value
	     */
	    ContainerSurface.prototype.commit = function commit(context, transform, opacity, origin, size) {
	        var previousSize = this._size ? [this._size[0], this._size[1]] : null;
	        var result = Surface.prototype.commit.apply(this, arguments);
	        if (this._shouldRecalculateSize || (previousSize && (this._size[0] !== previousSize[0] || this._size[1] !== previousSize[1]))) {
	            this.context.setSize();
	            this._shouldRecalculateSize = false;
	        }
	        this.context.update();
	        return result;
	    };

	    module.exports = ContainerSurface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Context = __webpack_require__(31);
	    var Transform = __webpack_require__(18);
	    var Surface = __webpack_require__(16);

	    /**
	     * A Context designed to contain surfaces and set properties
	     *   to be applied to all of them at once.
	     *   This is primarily used for specific performance improvements in the rendering engine.
	     *   Private.
	     *
	     * @private
	     * @class Group
	     * @extends Surface
	     * @constructor
	     * @param {Object} [options] Surface options array (see Surface})
	     */
	    function Group(options) {
	        Surface.call(this, options);
	        this._shouldRecalculateSize = false;
	        this._container = document.createDocumentFragment();
	        this.context = new Context(this._container);
	        this.setContent(this._container);
	        this._groupSize = [undefined, undefined];
	    }

	    /** @const */
	    Group.SIZE_ZERO = [0, 0];

	    Group.prototype = Object.create(Surface.prototype);
	    Group.prototype.elementType = 'div';
	    Group.prototype.elementClass = 'famous-group';

	    /**
	     * Add renderables to this component's render tree.
	     *
	     * @method add
	     * @private
	     * @param {Object} obj renderable object
	     * @return {RenderNode} Render wrapping provided object, if not already a RenderNode
	     */
	    Group.prototype.add = function add() {
	        return this.context.add.apply(this.context, arguments);
	    };

	    /**
	     * Generate a render spec from the contents of this component.
	     *
	     * @private
	     * @method render
	     * @return {Number} Render spec for this component
	     */
	    Group.prototype.render = function render() {
	        return Surface.prototype.render.call(this);
	    };

	    /**
	     * Place the document element this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Group.prototype.deploy = function deploy(target) {
	        this.context.migrate(target);
	    };

	    /**
	     * Remove this component and contained content from the document
	     *
	     * @private
	     * @method recall
	     *
	     * @param {Node} target node to which the component was deployed
	     */
	    Group.prototype.recall = function recall(target) {
	        this._container = document.createDocumentFragment();
	        this.context.migrate(this._container);
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     *
	     * @private
	     * @method commit
	     *
	     * @param {Object} context update spec passed in from above in the render tree.
	     */
	    Group.prototype.commit = function commit(context) {
	        var transform = context.transform;
	        var origin = context.origin;
	        var opacity = context.opacity;
	        var size = context.size;
	        var result = Surface.prototype.commit.call(this, {
	            allocator: context.allocator,
	            transform: Transform.thenMove(transform, [-origin[0] * size[0], -origin[1] * size[1], 0]),
	            opacity: opacity,
	            origin: origin,
	            size: Group.SIZE_ZERO
	        });
	        if (size[0] !== this._groupSize[0] || size[1] !== this._groupSize[1]) {
	            this._groupSize[0] = size[0];
	            this._groupSize[1] = size[1];
	            this.context.setSize(size);
	        }
	        this.context.update({
	            transform: Transform.translate(-origin[0] * size[0], -origin[1] * size[1], 0),
	            origin: origin,
	            size: size
	        });
	        return result;
	    };

	    module.exports = Group;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/

	/**
	 * LayoutDockHelper helps positioning nodes using docking principles.
	 *
	 * **Example:**
	 *
	 * ```javascript
	 * var LayoutDockHelper = require('famous-flex/helpers/LayoutDockHelper');
	 *
	 * function HeaderFooterLayout(context, options) {
	 *   var dock = new LayoutDockHelper(context);
	 *   dock.top('header', options.headerHeight);
	 *   dock.bottom('footer', options.footerHeight);
	 *   dock.fill('content');
	 * };
	 * ```
	 *
	 * You can also use layout-literals to create layouts using docking semantics:
	 *
	 * ```javascript
	 * var layoutController = new LayoutController({
	 *   layout: {dock: [
	 *     ['top', 'header', 40],
	 *     ['bottom', 'footer', 40, 1], // z-index +1
	 *     ['fill', 'content']
	 *   ]},
	 *   dataSource: {
	 *     header: new Surface({content: 'header'}),
	 *     footer: new Surface({content: 'footer'}),
	 *     content: new Surface({content: 'content'}),
	 *   }
	 * });
	 * ```
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var LayoutUtility = __webpack_require__(26);

	    /**
	     * @class
	     * @param {LayoutContext} context layout-context
	     * @param {Object} [options] additional options
	     * @param {Object} [options.margins] margins to start out with (default: 0px)
	     * @param {Number} [options.translateZ] z-index to use when translating objects (default: 0)
	     * @alias module:LayoutDockHelper
	     */
	    function LayoutDockHelper(context, options) {
	        var size = context.size;
	        this._size = size;
	        this._context = context;
	        this._options = options;
	        this._z = (options && options.translateZ) ? options.translateZ : 0;
	        if (options && options.margins) {
	            var margins = LayoutUtility.normalizeMargins(options.margins);
	            this._left = margins[3];
	            this._top = margins[0];
	            this._right = size[0] - margins[1];
	            this._bottom = size[1] - margins[2];
	        }
	        else {
	            this._left = 0;
	            this._top = 0;
	            this._right = size[0];
	            this._bottom = size[1];
	        }
	    }

	    /**
	     * Parses the layout-rules based on a JSON data object.
	     * The object should be an array with the following syntax:
	     * `[[rule, node, value, z], [rule, node, value, z], ...]`
	     *
	     * **Example:**
	     *
	     * ```JSON
	     * [
	     *   ['top': 'header', 50],
	     *   ['bottom': 'footer', 50, 10], // z-index: 10
	     *   ['fill', 'content']
	     * ]
	     * ```
	     *
	     * @param {Object} data JSON object
	     */
	    LayoutDockHelper.prototype.parse = function(data) {
	        for (var i = 0; i < data.length; i++) {
	            var rule = data[i];
	            var value = (data.length >= 3) ? rule[2] : undefined;
	            if (rule[0] === 'top') {
	                this.top(rule[1], value, (data.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'left') {
	                this.left(rule[1], value, (data.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'right') {
	                this.right(rule[1], value, (data.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'bottom') {
	                this.bottom(rule[1], value, (data.length >=4) ? rule[3] : undefined);
	            } else if (rule[0] === 'fill') {
	                this.fill(rule[1], (data.length >=3) ? rule[2] : undefined);
	            }
	        }
	    };

	    /**
	     * Dock the node to the top.
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `height` argument argument is used for padding
	     * @param {Number} [height] height of the layout-node, when ommited the height of the node is used
	     * @param {Number} [z] z-index to use for the node}
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.top = function(node, height, z) {
	        if (height instanceof Array) {
	            height = height[1];
	        }
	        if (height === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            height = size[1];
	        }
	        this._context.set(node, {
	            size: [this._right - this._left, height],
	            origin: [0, 0],
	            align: [0, 0],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        this._top += height;
	        return this;
	    };

	    /**
	     * Dock the node to the left
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `width` argument argument is used for padding
	     * @param {Number} [width] width of the layout-node, when ommited the width of the node is used
	     * @param {Number} [z] z-index to use for the node}
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.left = function(node, width, z) {
	        if (width instanceof Array) {
	            width = width[0];
	        }
	        if (width === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            width = size[0];
	        }
	        this._context.set(node, {
	            size: [width, this._bottom - this._top],
	            origin: [0, 0],
	            align: [0, 0],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        this._left += width;
	        return this;
	    };

	    /**
	     * Dock the node to the bottom
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `height` argument argument is used for padding
	     * @param {Number} [height] height of the layout-node, when ommited the height of the node is used
	     * @param {Number} [z] z-index to use for the node}
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.bottom = function(node, height, z) {
	        if (height instanceof Array) {
	            height = height[1];
	        }
	        if (height === undefined) {
	            var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	            height = size[1];
	        }
	        this._context.set(node, {
	            size: [this._right - this._left, height],
	            origin: [0, 1],
	            align: [0, 1],
	            translate: [this._left, -(this._size[1] - this._bottom), (z === undefined) ? this._z : z]
	        });
	        this._bottom -= height;
	        return this;
	    };

	    /**
	     * Dock the node to the right.
	     *
	     * @param {LayoutNode|String} [node] layout-node to dock, when ommited the `width` argument argument is used for padding
	     * @param {Number} [width] width of the layout-node, when ommited the width of the node is used
	     * @param {Number} [z] z-index to use for the node}
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.right = function(node, width, z) {
	        if (width instanceof Array) {
	            width = width[0];
	        }
	        if (node) {
	            if (width === undefined) {
	                var size = this._context.resolveSize(node, [this._right - this._left, this._bottom - this._top]);
	                width = size[0];
	            }
	            this._context.set(node, {
	                size: [width, this._bottom - this._top],
	                origin: [1, 0],
	                align: [1, 0],
	                translate: [-(this._size[0] - this._right), this._top, (z === undefined) ? this._z : z]
	            });
	        }
	        if (width) {
	            this._right -= width;
	        }
	        return this;
	    };

	    /**
	     * Fills the node to the remaining content.
	     *
	     * @param {LayoutNode|String} node layout-node to dock
	     * @param {Number} [z] z-index to use for the node}
	     * @return {LayoutDockHelper} this
	     */
	    LayoutDockHelper.prototype.fill = function(node, z) {
	        this._context.set(node, {
	            size: [this._right - this._left, this._bottom - this._top],
	            translate: [this._left, this._top, (z === undefined) ? this._z : z]
	        });
	        return this;
	    };

	    // Register the helper
	    LayoutUtility.registerHelper('dock', LayoutDockHelper);

	    module.exports = LayoutDockHelper;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Three-element floating point vector.
	     *
	     * @class Vector
	     * @constructor
	     *
	     * @param {number} x x element value
	     * @param {number} y y element value
	     * @param {number} z z element value
	     */
	    function Vector(x,y,z) {
	        if (arguments.length === 1 && x !== undefined) this.set(x);
	        else {
	            this.x = x || 0;
	            this.y = y || 0;
	            this.z = z || 0;
	        }
	        return this;
	    }

	    var _register = new Vector(0,0,0);

	    /**
	     * Add this element-wise to another Vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method add
	     * @param {Vector} v addend
	     * @return {Vector} vector sum
	     */
	    Vector.prototype.add = function add(v) {
	        return _setXYZ.call(_register,
	            this.x + v.x,
	            this.y + v.y,
	            this.z + v.z
	        );
	    };

	    /**
	     * Subtract another vector from this vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method sub
	     * @param {Vector} v subtrahend
	     * @return {Vector} vector difference
	     */
	    Vector.prototype.sub = function sub(v) {
	        return _setXYZ.call(_register,
	            this.x - v.x,
	            this.y - v.y,
	            this.z - v.z
	        );
	    };

	    /**
	     * Scale Vector by floating point r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method mult
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.mult = function mult(r) {
	        return _setXYZ.call(_register,
	            r * this.x,
	            r * this.y,
	            r * this.z
	        );
	    };

	    /**
	     * Scale Vector by floating point 1/r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method div
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.div = function div(r) {
	        return this.mult(1 / r);
	    };

	    /**
	     * Given another vector v, return cross product (v)x(this).
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cross
	     * @param {Vector} v Left Hand Vector
	     * @return {Vector} vector result
	     */
	    Vector.prototype.cross = function cross(v) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;
	        var vx = v.x;
	        var vy = v.y;
	        var vz = v.z;

	        return _setXYZ.call(_register,
	            z * vy - y * vz,
	            x * vz - z * vx,
	            y * vx - x * vy
	        );
	    };

	    /**
	     * Component-wise equality test between this and Vector v.
	     * @method equals
	     * @param {Vector} v vector to compare
	     * @return {boolean}
	     */
	    Vector.prototype.equals = function equals(v) {
	        return (v.x === this.x && v.y === this.y && v.z === this.z);
	    };

	    /**
	     * Rotate clockwise around x-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateX
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateX = function rotateX(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x,
	            y * cosTheta - z * sinTheta,
	            y * sinTheta + z * cosTheta
	        );
	    };

	    /**
	     * Rotate clockwise around y-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateY
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateY = function rotateY(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            z * sinTheta + x * cosTheta,
	            y,
	            z * cosTheta - x * sinTheta
	        );
	    };

	    /**
	     * Rotate clockwise around z-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateZ
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateZ = function rotateZ(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x * cosTheta - y * sinTheta,
	            x * sinTheta + y * cosTheta,
	            z
	        );
	    };

	    /**
	     * Return dot product of this with a second Vector
	     * @method dot
	     * @param {Vector} v second vector
	     * @return {number} dot product
	     */
	    Vector.prototype.dot = function dot(v) {
	        return this.x * v.x + this.y * v.y + this.z * v.z;
	    };

	    /**
	     * Return squared length of this vector
	     * @method normSquared
	     * @return {number} squared length
	     */
	    Vector.prototype.normSquared = function normSquared() {
	        return this.dot(this);
	    };

	    /**
	     * Return length of this vector
	     * @method norm
	     * @return {number} length
	     */
	    Vector.prototype.norm = function norm() {
	        return Math.sqrt(this.normSquared());
	    };

	    /**
	     * Scale Vector to specified length.
	     *   If length is less than internal tolerance, set vector to [length, 0, 0].
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method normalize
	     *
	     * @param {number} length target length, default 1.0
	     * @return {Vector}
	     */
	    Vector.prototype.normalize = function normalize(length) {
	        if (arguments.length === 0) length = 1;
	        var norm = this.norm();

	        if (norm > 1e-7) return _setFromVector.call(_register, this.mult(length / norm));
	        else return _setXYZ.call(_register, length, 0, 0);
	    };

	    /**
	     * Make a separate copy of the Vector.
	     *
	     * @method clone
	     *
	     * @return {Vector}
	     */
	    Vector.prototype.clone = function clone() {
	        return new Vector(this);
	    };

	    /**
	     * True if and only if every value is 0 (or falsy)
	     *
	     * @method isZero
	     *
	     * @return {boolean}
	     */
	    Vector.prototype.isZero = function isZero() {
	        return !(this.x || this.y || this.z);
	    };

	    function _setXYZ(x,y,z) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        return this;
	    }

	    function _setFromArray(v) {
	        return _setXYZ.call(this,v[0],v[1],v[2] || 0);
	    }

	    function _setFromVector(v) {
	        return _setXYZ.call(this, v.x, v.y, v.z);
	    }

	    function _setFromNumber(x) {
	        return _setXYZ.call(this,x,0,0);
	    }

	    /**
	     * Set this Vector to the values in the provided Array or Vector.
	     *
	     * @method set
	     * @param {object} v array, Vector, or number
	     * @return {Vector} this
	     */
	    Vector.prototype.set = function set(v) {
	        if (v instanceof Array) return _setFromArray.call(this, v);
	        if (typeof v === 'number') return _setFromNumber.call(this, v);
	        return _setFromVector.call(this, v);
	    };

	    Vector.prototype.setXYZ = function(x,y,z) {
	        return _setXYZ.apply(this, arguments);
	    };

	    Vector.prototype.set1D = function(x) {
	        return _setFromNumber.call(this, x);
	    };

	    /**
	     * Put result of last internal register calculation in specified output vector.
	     *
	     * @method put
	     * @param {Vector} v destination vector
	     * @return {Vector} destination vector
	     */

	    Vector.prototype.put = function put(v) {
	        if (this === _register) _setFromVector.call(v, _register);
	        else _setFromVector.call(v, this);
	    };

	    /**
	     * Set this vector to [0,0,0]
	     *
	     * @method clear
	     */
	    Vector.prototype.clear = function clear() {
	        return _setXYZ.call(this,0,0,0);
	    };

	    /**
	     * Scale this Vector down to specified "cap" length.
	     *   If Vector shorter than cap, or cap is Infinity, do nothing.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cap
	     * @return {Vector} capped vector
	     */
	    Vector.prototype.cap = function cap(cap) {
	        if (cap === Infinity) return _setFromVector.call(_register, this);
	        var norm = this.norm();
	        if (norm > cap) return _setFromVector.call(_register, this.mult(cap / norm));
	        else return _setFromVector.call(_register, this);
	    };

	    /**
	     * Return projection of this Vector onto another.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method project
	     * @param {Vector} n vector to project upon
	     * @return {Vector} projected vector
	     */
	    Vector.prototype.project = function project(n) {
	        return n.mult(this.dot(n));
	    };

	    /**
	     * Reflect this Vector across provided vector.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method reflectAcross
	     * @param {Vector} n vector to reflect across
	     * @return {Vector} reflected vector
	     */
	    Vector.prototype.reflectAcross = function reflectAcross(n) {
	        n.normalize().put(n);
	        return _setFromVector(_register, this.sub(this.project(n).mult(2)));
	    };

	    /**
	     * Convert Vector to three-element array.
	     *
	     * @method get
	     * @return {array<number>} three-element array
	     */
	    Vector.prototype.get = function get() {
	        return [this.x, this.y, this.z];
	    };

	    Vector.prototype.get1D = function() {
	        return this.x;
	    };

	    module.exports = Vector;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(25);

	    /**
	     * The Physics Engine is responsible for mediating bodies with their
	     *   interaction with forces and constraints (agents). Specifically, it
	     *   is responsible for:
	     *
	     *   - adding and removing bodies
	     *   - updating a body's state over time
	     *   - attaching and detaching agents
	     *   - sleeping upon equillibrium and waking upon excitation
	     *
	     * @class PhysicsEngine
	     * @constructor
	     * @param options {Object} options
	     */
	    function PhysicsEngine(options) {
	        this.options = Object.create(PhysicsEngine.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._particles      = [];   //list of managed particles
	        this._bodies         = [];   //list of managed bodies
	        this._agentData      = {};   //hash of managed agent data
	        this._forces         = [];   //list of Ids of agents that are forces
	        this._constraints    = [];   //list of Ids of agents that are constraints

	        this._buffer         = 0.0;
	        this._prevTime       = now();
	        this._isSleeping     = false;
	        this._eventHandler   = null;
	        this._currAgentId    = 0;
	        this._hasBodies      = false;
	        this._eventHandler   = null;
	    }

	    /** const */
	    var TIMESTEP = 17;
	    var MIN_TIME_STEP = 1000 / 120;
	    var MAX_TIME_STEP = 17;

	    var now = Date.now;

	    // Catalogue of outputted events
	    var _events = {
	        start : 'start',
	        update : 'update',
	        end : 'end'
	    };

	    /**
	     * @property PhysicsEngine.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    PhysicsEngine.DEFAULT_OPTIONS = {

	        /**
	         * The number of iterations the engine takes to resolve constraints
	         * @attribute constraintSteps
	         * @type Number
	         */
	        constraintSteps : 1,

	        /**
	         * The energy threshold required for the Physics Engine to update
	         * @attribute sleepTolerance
	         * @type Number
	         */
	        sleepTolerance : 1e-7,

	        /**
	         * The maximum velocity magnitude of a physics body
	         *      Range : [0, Infinity]
	         * @attribute velocityCap
	         * @type Number
	         */
	        velocityCap : undefined,

	        /**
	         * The maximum angular velocity magnitude of a physics body
	         *      Range : [0, Infinity]
	         * @attribute angularVelocityCap
	         * @type Number
	         */
	        angularVelocityCap : undefined
	    };

	    /**
	     * Options setter
	     *
	     * @method setOptions
	     * @param opts {Object}
	     */
	    PhysicsEngine.prototype.setOptions = function setOptions(opts) {
	        for (var key in opts) if (this.options[key]) this.options[key] = opts[key];
	    };

	    /**
	     * Method to add a physics body to the engine. Necessary to update the
	     *   body over time.
	     *
	     * @method addBody
	     * @param body {Body}
	     * @return body {Body}
	     */
	    PhysicsEngine.prototype.addBody = function addBody(body) {
	        body._engine = this;
	        if (body.isBody) {
	            this._bodies.push(body);
	            this._hasBodies = true;
	        }
	        else this._particles.push(body);
	        body.on('start', this.wake.bind(this));
	        return body;
	    };

	    /**
	     * Remove a body from the engine. Detaches body from all forces and
	     *   constraints.
	     *
	     * TODO: Fix for in loop
	     *
	     * @method removeBody
	     * @param body {Body}
	     */
	    PhysicsEngine.prototype.removeBody = function removeBody(body) {
	        var array = (body.isBody) ? this._bodies : this._particles;
	        var index = array.indexOf(body);
	        if (index > -1) {
	            for (var agent in this._agentData) this.detachFrom(agent.id, body);
	            array.splice(index,1);
	        }
	        if (this.getBodies().length === 0) this._hasBodies = false;
	    };

	    function _mapAgentArray(agent) {
	        if (agent.applyForce)      return this._forces;
	        if (agent.applyConstraint) return this._constraints;
	    }

	    function _attachOne(agent, targets, source) {
	        if (targets === undefined) targets = this.getParticlesAndBodies();
	        if (!(targets instanceof Array)) targets = [targets];

	        agent.on('change', this.wake.bind(this));

	        this._agentData[this._currAgentId] = {
	            agent   : agent,
	            id      : this._currAgentId,
	            targets : targets,
	            source  : source
	        };

	        _mapAgentArray.call(this, agent).push(this._currAgentId);
	        return this._currAgentId++;
	    }

	    /**
	     * Attaches a force or constraint to a Body. Returns an AgentId of the
	     *   attached agent which can be used to detach the agent.
	     *
	     * @method attach
	     * @param agents {Agent|Array.Agent} A force, constraint, or array of them.
	     * @param [targets=All] {Body|Array.Body} The Body or Bodies affected by the agent
	     * @param [source] {Body} The source of the agent
	     * @return AgentId {Number}
	     */
	    PhysicsEngine.prototype.attach = function attach(agents, targets, source) {
	        this.wake();

	        if (agents instanceof Array) {
	            var agentIDs = [];
	            for (var i = 0; i < agents.length; i++)
	                agentIDs[i] = _attachOne.call(this, agents[i], targets, source);
	            return agentIDs;
	        }
	        else return _attachOne.call(this, agents, targets, source);
	    };

	    /**
	     * Append a body to the targets of a previously defined physics agent.
	     *
	     * @method attachTo
	     * @param agentID {AgentId} The agentId of a previously defined agent
	     * @param target {Body} The Body affected by the agent
	     */
	    PhysicsEngine.prototype.attachTo = function attachTo(agentID, target) {
	        _getAgentData.call(this, agentID).targets.push(target);
	    };

	    /**
	     * Undoes PhysicsEngine.attach. Removes an agent and its associated
	     *   effect on its affected Bodies.
	     *
	     * @method detach
	     * @param id {AgentId} The agentId of a previously defined agent
	     */
	    PhysicsEngine.prototype.detach = function detach(id) {
	        // detach from forces/constraints array
	        var agent = this.getAgent(id);
	        var agentArray = _mapAgentArray.call(this, agent);
	        var index = agentArray.indexOf(id);
	        agentArray.splice(index,1);

	        // detach agents array
	        delete this._agentData[id];
	    };

	    /**
	     * Remove a single Body from a previously defined agent.
	     *
	     * @method detach
	     * @param id {AgentId} The agentId of a previously defined agent
	     * @param target {Body} The body to remove from the agent
	     */
	    PhysicsEngine.prototype.detachFrom = function detachFrom(id, target) {
	        var boundAgent = _getAgentData.call(this, id);
	        if (boundAgent.source === target) this.detach(id);
	        else {
	            var targets = boundAgent.targets;
	            var index = targets.indexOf(target);
	            if (index > -1) targets.splice(index,1);
	        }
	    };

	    /**
	     * A convenience method to give the Physics Engine a clean slate of
	     * agents. Preserves all added Body objects.
	     *
	     * @method detachAll
	     */
	    PhysicsEngine.prototype.detachAll = function detachAll() {
	        this._agentData     = {};
	        this._forces        = [];
	        this._constraints   = [];
	        this._currAgentId   = 0;
	    };

	    function _getAgentData(id) {
	        return this._agentData[id];
	    }

	    /**
	     * Returns the corresponding agent given its agentId.
	     *
	     * @method getAgent
	     * @param id {AgentId}
	     */
	    PhysicsEngine.prototype.getAgent = function getAgent(id) {
	        return _getAgentData.call(this, id).agent;
	    };

	    /**
	     * Returns all particles that are currently managed by the Physics Engine.
	     *
	     * @method getParticles
	     * @return particles {Array.Particles}
	     */
	    PhysicsEngine.prototype.getParticles = function getParticles() {
	        return this._particles;
	    };

	    /**
	     * Returns all bodies, except particles, that are currently managed by the Physics Engine.
	     *
	     * @method getBodies
	     * @return bodies {Array.Bodies}
	     */
	    PhysicsEngine.prototype.getBodies = function getBodies() {
	        return this._bodies;
	    };

	    /**
	     * Returns all bodies that are currently managed by the Physics Engine.
	     *
	     * @method getBodies
	     * @return bodies {Array.Bodies}
	     */
	    PhysicsEngine.prototype.getParticlesAndBodies = function getParticlesAndBodies() {
	        return this.getParticles().concat(this.getBodies());
	    };

	    /**
	     * Iterates over every Particle and applies a function whose first
	     *   argument is the Particle
	     *
	     * @method forEachParticle
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEachParticle = function forEachParticle(fn, dt) {
	        var particles = this.getParticles();
	        for (var index = 0, len = particles.length; index < len; index++)
	            fn.call(this, particles[index], dt);
	    };

	    /**
	     * Iterates over every Body that isn't a Particle and applies
	     *   a function whose first argument is the Body
	     *
	     * @method forEachBody
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEachBody = function forEachBody(fn, dt) {
	        if (!this._hasBodies) return;
	        var bodies = this.getBodies();
	        for (var index = 0, len = bodies.length; index < len; index++)
	            fn.call(this, bodies[index], dt);
	    };

	    /**
	     * Iterates over every Body and applies a function whose first
	     *   argument is the Body
	     *
	     * @method forEach
	     * @param fn {Function} Function to iterate over
	     * @param [dt] {Number} Delta time
	     */
	    PhysicsEngine.prototype.forEach = function forEach(fn, dt) {
	        this.forEachParticle(fn, dt);
	        this.forEachBody(fn, dt);
	    };

	    function _updateForce(index) {
	        var boundAgent = _getAgentData.call(this, this._forces[index]);
	        boundAgent.agent.applyForce(boundAgent.targets, boundAgent.source);
	    }

	    function _updateForces() {
	        for (var index = this._forces.length - 1; index > -1; index--)
	            _updateForce.call(this, index);
	    }

	    function _updateConstraint(index, dt) {
	        var boundAgent = this._agentData[this._constraints[index]];
	        return boundAgent.agent.applyConstraint(boundAgent.targets, boundAgent.source, dt);
	    }

	    function _updateConstraints(dt) {
	        var iteration = 0;
	        while (iteration < this.options.constraintSteps) {
	            for (var index = this._constraints.length - 1; index > -1; index--)
	                _updateConstraint.call(this, index, dt);
	            iteration++;
	        }
	    }

	    function _updateVelocities(body, dt) {
	        body.integrateVelocity(dt);
	        if (this.options.velocityCap)
	            body.velocity.cap(this.options.velocityCap).put(body.velocity);
	    }

	    function _updateAngularVelocities(body, dt) {
	        body.integrateAngularMomentum(dt);
	        body.updateAngularVelocity();
	        if (this.options.angularVelocityCap)
	            body.angularVelocity.cap(this.options.angularVelocityCap).put(body.angularVelocity);
	    }

	    function _updateOrientations(body, dt) {
	        body.integrateOrientation(dt);
	    }

	    function _updatePositions(body, dt) {
	        body.integratePosition(dt);
	        body.emit(_events.update, body);
	    }

	    function _integrate(dt) {
	        _updateForces.call(this, dt);
	        this.forEach(_updateVelocities, dt);
	        this.forEachBody(_updateAngularVelocities, dt);
	        _updateConstraints.call(this, dt);
	        this.forEachBody(_updateOrientations, dt);
	        this.forEach(_updatePositions, dt);
	    }

	    function _getParticlesEnergy() {
	        var energy = 0.0;
	        var particleEnergy = 0.0;
	        this.forEach(function(particle) {
	            particleEnergy = particle.getEnergy();
	            energy += particleEnergy;
	        });
	        return energy;
	    }

	    function _getAgentsEnergy() {
	        var energy = 0;
	        for (var id in this._agentData)
	            energy += this.getAgentEnergy(id);
	        return energy;
	    }

	    /**
	     * Calculates the potential energy of an agent, like a spring, by its Id
	     *
	     * @method getAgentEnergy
	     * @param agentId {Number} The attached agent Id
	     * @return energy {Number}
	     */
	    PhysicsEngine.prototype.getAgentEnergy = function(agentId) {
	        var agentData = _getAgentData.call(this, agentId);
	        return agentData.agent.getEnergy(agentData.targets, agentData.source);
	    };

	    /**
	     * Calculates the kinetic energy of all Body objects and potential energy
	     *   of all attached agents.
	     *
	     * TODO: implement.
	     * @method getEnergy
	     * @return energy {Number}
	     */
	    PhysicsEngine.prototype.getEnergy = function getEnergy() {
	        return _getParticlesEnergy.call(this) + _getAgentsEnergy.call(this);
	    };

	    /**
	     * Updates all Body objects managed by the physics engine over the
	     *   time duration since the last time step was called.
	     *
	     * @method step
	     */
	    PhysicsEngine.prototype.step = function step() {
	        if (this.isSleeping()) return;

	        //set current frame's time
	        var currTime = now();

	        //milliseconds elapsed since last frame
	        var dtFrame = currTime - this._prevTime;

	        this._prevTime = currTime;

	        if (dtFrame < MIN_TIME_STEP) return;
	        if (dtFrame > MAX_TIME_STEP) dtFrame = MAX_TIME_STEP;

	        //robust integration
	//        this._buffer += dtFrame;
	//        while (this._buffer > this._timestep){
	//            _integrate.call(this, this._timestep);
	//            this._buffer -= this._timestep;
	//        };
	//        _integrate.call(this, this._buffer);
	//        this._buffer = 0.0;

	        _integrate.call(this, TIMESTEP);

	        this.emit(_events.update, this);

	        if (this.getEnergy() < this.options.sleepTolerance) this.sleep();
	    };

	    /**
	     * Tells whether the Physics Engine is sleeping or awake.
	     *
	     * @method isSleeping
	     * @return {Boolean}
	     */
	    PhysicsEngine.prototype.isSleeping = function isSleeping() {
	        return this._isSleeping;
	    };

	    /**
	     * Tells whether the Physics Engine is sleeping or awake.
	     *
	     * @method isActive
	     * @return {Boolean}
	     */
	    PhysicsEngine.prototype.isActive = function isSleeping() {
	        return !this._isSleeping;
	    };

	    /**
	     * Stops the Physics Engine update loop. Emits an 'end' event.
	     *
	     * @method sleep
	     */
	    PhysicsEngine.prototype.sleep = function sleep() {
	        if (this._isSleeping) return;
	        this.forEach(function(body) {
	            body.sleep();
	        });
	        this.emit(_events.end, this);
	        this._isSleeping = true;
	    };

	    /**
	     * Restarts the Physics Engine update loop. Emits an 'start' event.
	     *
	     * @method wake
	     */
	    PhysicsEngine.prototype.wake = function wake() {
	        if (!this._isSleeping) return;
	        this._prevTime = now();
	        this.emit(_events.start, this);
	        this._isSleeping = false;
	    };

	    PhysicsEngine.prototype.emit = function emit(type, data) {
	        if (this._eventHandler === null) return;
	        this._eventHandler.emit(type, data);
	    };

	    PhysicsEngine.prototype.on = function on(event, fn) {
	        if (this._eventHandler === null) this._eventHandler = new EventHandler();
	        this._eventHandler.on(event, fn);
	    };

	    module.exports = PhysicsEngine;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Vector = __webpack_require__(37);
	    var Transform = __webpack_require__(18);
	    var EventHandler = __webpack_require__(25);
	    var Integrator = __webpack_require__(54);

	    /**
	     * A point body that is controlled by the Physics Engine. A particle has
	     *   position and velocity states that are updated by the Physics Engine.
	     *   Ultimately, a particle is a special type of modifier, and can be added to
	     *   the Famo.us Scene Graph like any other modifier.
	     *
	     * @class Particle
	     * @uses EventHandler
	     * @extensionfor Body
	     *
	     * @param [options] {Options}           An object of configurable options.
	     * @param [options.position] {Array}    The position of the particle.
	     * @param [options.velocity] {Array}    The velocity of the particle.
	     * @param [options.mass] {Number}       The mass of the particle.
	     */
	     function Particle(options) {
	        options = options || {};
	        var defaults = Particle.DEFAULT_OPTIONS;

	        // registers
	        this.position = new Vector();
	        this.velocity = new Vector();
	        this.force = new Vector();

	        // state variables
	        this._engine = null;
	        this._isSleeping = true;
	        this._eventOutput = null;

	        // set scalars
	        this.mass = (options.mass !== undefined)
	            ? options.mass
	            : defaults.mass;

	        this.inverseMass = 1 / this.mass;

	        // set vectors
	        this.setPosition(options.position || defaults.position);
	        this.setVelocity(options.velocity || defaults.velocity);
	        this.force.set(options.force || [0,0,0]);

	        this.transform = Transform.identity.slice();

	        // cached _spec
	        this._spec = {
	            size : [true, true],
	            target : {
	                transform : this.transform,
	                origin : [0.5, 0.5],
	                target : null
	            }
	        };
	    }

	    Particle.DEFAULT_OPTIONS = {
	        position : [0, 0, 0],
	        velocity : [0, 0, 0],
	        mass : 1
	    };

	    //Catalogue of outputted events
	    var _events = {
	        start : 'start',
	        update : 'update',
	        end : 'end'
	    };

	    // Cached timing function
	    var now = Date.now;

	    /**
	     * @attribute isBody
	     * @type Boolean
	     * @static
	     */
	    Particle.prototype.isBody = false;

	    /**
	     * Determines if particle is active
	     *
	     * @method isActive
	     * @return {Boolean}
	     */
	    Particle.prototype.isActive = function isActive() {
	        return !this._isSleeping;
	    };

	    /**
	     * Stops the particle from updating
	     *
	     * @method sleep
	     */
	    Particle.prototype.sleep = function sleep() {
	        if (this._isSleeping) return;
	        this.emit(_events.end, this);
	        this._isSleeping = true;
	    };

	    /**
	     * Starts the particle update
	     *
	     * @method wake
	     */
	    Particle.prototype.wake = function wake() {
	        if (!this._isSleeping) return;
	        this.emit(_events.start, this);
	        this._isSleeping = false;
	        this._prevTime = now();
	        if (this._engine) this._engine.wake();
	    };

	    /**
	     * Basic setter for position
	     *
	     * @method setPosition
	     * @param position {Array|Vector}
	     */
	    Particle.prototype.setPosition = function setPosition(position) {
	        this.position.set(position);
	    };

	    /**
	     * 1-dimensional setter for position
	     *
	     * @method setPosition1D
	     * @param x {Number}
	     */
	    Particle.prototype.setPosition1D = function setPosition1D(x) {
	        this.position.x = x;
	    };

	    /**
	     * Basic getter function for position
	     *
	     * @method getPosition
	     * @return position {Array}
	     */
	    Particle.prototype.getPosition = function getPosition() {
	        this._engine.step();
	        return this.position.get();
	    };

	    /**
	     * 1-dimensional getter for position
	     *
	     * @method getPosition1D
	     * @return value {Number}
	     */
	    Particle.prototype.getPosition1D = function getPosition1D() {
	        this._engine.step();
	        return this.position.x;
	    };

	    /**
	     * Basic setter function for velocity Vector
	     *
	     * @method setVelocity
	     * @function
	     */
	    Particle.prototype.setVelocity = function setVelocity(velocity) {
	        this.velocity.set(velocity);
	        if (!(velocity[0] === 0 && velocity[1] === 0 && velocity[2] === 0))
	            this.wake();
	    };

	    /**
	     * 1-dimensional setter for velocity
	     *
	     * @method setVelocity1D
	     * @param x {Number}
	     */
	    Particle.prototype.setVelocity1D = function setVelocity1D(x) {
	        this.velocity.x = x;
	        if (x !== 0) this.wake();
	    };

	    /**
	     * Basic getter function for velocity Vector
	     *
	     * @method getVelocity
	     * @return velocity {Array}
	     */
	    Particle.prototype.getVelocity = function getVelocity() {
	        return this.velocity.get();
	    };

	    /**
	     * Basic setter function for force Vector
	     *
	     * @method setForce
	     * @return force {Array}
	     */
	    Particle.prototype.setForce = function setForce(force) {
	        this.force.set(force);
	        this.wake();
	    };

	    /**
	     * 1-dimensional getter for velocity
	     *
	     * @method getVelocity1D
	     * @return velocity {Number}
	     */
	    Particle.prototype.getVelocity1D = function getVelocity1D() {
	        return this.velocity.x;
	    };

	    /**
	     * Basic setter function for mass quantity
	     *
	     * @method setMass
	     * @param mass {Number} mass
	     */
	    Particle.prototype.setMass = function setMass(mass) {
	        this.mass = mass;
	        this.inverseMass = 1 / mass;
	    };

	    /**
	     * Basic getter function for mass quantity
	     *
	     * @method getMass
	     * @return mass {Number}
	     */
	    Particle.prototype.getMass = function getMass() {
	        return this.mass;
	    };

	    /**
	     * Reset position and velocity
	     *
	     * @method reset
	     * @param position {Array|Vector}
	     * @param velocity {Array|Vector}
	     */
	    Particle.prototype.reset = function reset(position, velocity) {
	        this.setPosition(position || [0,0,0]);
	        this.setVelocity(velocity || [0,0,0]);
	    };

	    /**
	     * Add force vector to existing internal force Vector
	     *
	     * @method applyForce
	     * @param force {Vector}
	     */
	    Particle.prototype.applyForce = function applyForce(force) {
	        if (force.isZero()) return;
	        this.force.add(force).put(this.force);
	        this.wake();
	    };

	    /**
	     * Add impulse (change in velocity) Vector to this Vector's velocity.
	     *
	     * @method applyImpulse
	     * @param impulse {Vector}
	     */
	    Particle.prototype.applyImpulse = function applyImpulse(impulse) {
	        if (impulse.isZero()) return;
	        var velocity = this.velocity;
	        velocity.add(impulse.mult(this.inverseMass)).put(velocity);
	    };

	    /**
	     * Update a particle's velocity from its force accumulator
	     *
	     * @method integrateVelocity
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype.integrateVelocity = function integrateVelocity(dt) {
	        Integrator.integrateVelocity(this, dt);
	    };

	    /**
	     * Update a particle's position from its velocity
	     *
	     * @method integratePosition
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype.integratePosition = function integratePosition(dt) {
	        Integrator.integratePosition(this, dt);
	    };

	    /**
	     * Update the position and velocity of the particle
	     *
	     * @method _integrate
	     * @protected
	     * @param dt {Number} Time differential
	     */
	    Particle.prototype._integrate = function _integrate(dt) {
	        this.integrateVelocity(dt);
	        this.integratePosition(dt);
	    };

	    /**
	     * Get kinetic energy of the particle.
	     *
	     * @method getEnergy
	     * @function
	     */
	    Particle.prototype.getEnergy = function getEnergy() {
	        return 0.5 * this.mass * this.velocity.normSquared();
	    };

	    /**
	     * Generate transform from the current position state
	     *
	     * @method getTransform
	     * @return Transform {Transform}
	     */
	    Particle.prototype.getTransform = function getTransform() {
	        this._engine.step();

	        var position = this.position;
	        var transform = this.transform;

	        transform[12] = position.x;
	        transform[13] = position.y;
	        transform[14] = position.z;
	        return transform;
	    };

	    /**
	     * The modify interface of a Modifier
	     *
	     * @method modify
	     * @param target {Spec}
	     * @return Spec {Spec}
	     */
	    Particle.prototype.modify = function modify(target) {
	        var _spec = this._spec.target;
	        _spec.transform = this.getTransform();
	        _spec.target = target;
	        return this._spec;
	    };

	    // private
	    function _createEventOutput() {
	        this._eventOutput = new EventHandler();
	        this._eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this._eventOutput);
	    }

	    Particle.prototype.emit = function emit(type, data) {
	        if (!this._eventOutput) return;
	        this._eventOutput.emit(type, data);
	    };

	    Particle.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    Particle.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    Particle.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    Particle.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = Particle;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Force = __webpack_require__(51);

	    /**
	     * Drag is a force that opposes velocity. Attach it to the physics engine
	     * to slow down a physics body in motion.
	     *
	     * @class Drag
	     * @constructor
	     * @extends Force
	     * @param {Object} options options to set on drag
	     */
	    function Drag(options) {
	        this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        Force.call(this);
	    }

	    Drag.prototype = Object.create(Force.prototype);
	    Drag.prototype.constructor = Drag;

	    /**
	     * @property Drag.FORCE_FUNCTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Drag.FORCE_FUNCTIONS = {

	        /**
	         * A drag force proportional to the velocity
	         * @attribute LINEAR
	         * @type Function
	         * @param {Vector} velocity
	         * @return {Vector} drag force
	         */
	        LINEAR : function(velocity) {
	            return velocity;
	        },

	        /**
	         * A drag force proportional to the square of the velocity
	         * @attribute QUADRATIC
	         * @type Function
	         * @param {Vector} velocity
	         * @return {Vector} drag force
	         */
	        QUADRATIC : function(velocity) {
	            return velocity.mult(velocity.norm());
	        }
	    };

	    /**
	     * @property Drag.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Drag.DEFAULT_OPTIONS = {

	        /**
	         * The strength of the force
	         *    Range : [0, 0.1]
	         * @attribute strength
	         * @type Number
	         * @default 0.01
	         */
	        strength : 0.01,

	        /**
	         * The type of opposing force
	         * @attribute forceFunction
	         * @type Function
	         */
	        forceFunction : Drag.FORCE_FUNCTIONS.LINEAR
	    };

	    /**
	     * Adds a drag force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply drag force to.
	     */
	    Drag.prototype.applyForce = function applyForce(targets) {
	        var strength        = this.options.strength;
	        var forceFunction   = this.options.forceFunction;
	        var force           = this.force;
	        var index;
	        var particle;

	        for (index = 0; index < targets.length; index++) {
	            particle = targets[index];
	            forceFunction(particle.velocity).mult(-strength).put(force);
	            particle.applyForce(force);
	        }
	    };

	    /**
	     * Basic options setter
	     *
	     * @method setOptions
	     * @param {Objects} options
	     */
	    Drag.prototype.setOptions = function setOptions(options) {
	        for (var key in options) this.options[key] = options[key];
	    };

	    module.exports = Drag;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	/*global console */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Force = __webpack_require__(51);
	    var Vector = __webpack_require__(37);

	    /**
	     *  A force that moves a physics body to a location with a spring motion.
	     *    The body can be moved to another physics body, or an anchor point.
	     *
	     *  @class Spring
	     *  @constructor
	     *  @extends Force
	     *  @param {Object} options options to set on drag
	     */
	    function Spring(options) {
	        Force.call(this);

	        this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        //registers
	        this.disp = new Vector(0,0,0);

	        _init.call(this);
	    }

	    Spring.prototype = Object.create(Force.prototype);
	    Spring.prototype.constructor = Spring;

	    /** @const */
	    var pi = Math.PI;
	    var MIN_PERIOD = 150;

	    /**
	     * @property Spring.FORCE_FUNCTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Spring.FORCE_FUNCTIONS = {

	        /**
	         * A FENE (Finitely Extensible Nonlinear Elastic) spring force
	         *      see: http://en.wikipedia.org/wiki/FENE
	         * @attribute FENE
	         * @type Function
	         * @param {Number} dist current distance target is from source body
	         * @param {Number} rMax maximum range of influence
	         * @return {Number} unscaled force
	         */
	        FENE : function(dist, rMax) {
	            var rMaxSmall = rMax * .99;
	            var r = Math.max(Math.min(dist, rMaxSmall), -rMaxSmall);
	            return r / (1 - r * r/(rMax * rMax));
	        },

	        /**
	         * A Hookean spring force, linear in the displacement
	         *      see: http://en.wikipedia.org/wiki/Hooke's_law
	         * @attribute FENE
	         * @type Function
	         * @param {Number} dist current distance target is from source body
	         * @return {Number} unscaled force
	         */
	        HOOK : function(dist) {
	            return dist;
	        }
	    };

	    /**
	     * @property Spring.DEFAULT_OPTIONS
	     * @type Object
	     * @protected
	     * @static
	     */
	    Spring.DEFAULT_OPTIONS = {

	        /**
	         * The amount of time in milliseconds taken for one complete oscillation
	         * when there is no damping
	         *    Range : [150, Infinity]
	         * @attribute period
	         * @type Number
	         * @default 300
	         */
	        period : 300,

	        /**
	         * The damping of the spring.
	         *    Range : [0, 1]
	         *    0 = no damping, and the spring will oscillate forever
	         *    1 = critically damped (the spring will never oscillate)
	         * @attribute dampingRatio
	         * @type Number
	         * @default 0.1
	         */
	        dampingRatio : 0.1,

	        /**
	         * The rest length of the spring
	         *    Range : [0, Infinity]
	         * @attribute length
	         * @type Number
	         * @default 0
	         */
	        length : 0,

	        /**
	         * The maximum length of the spring (for a FENE spring)
	         *    Range : [0, Infinity]
	         * @attribute length
	         * @type Number
	         * @default Infinity
	         */
	        maxLength : Infinity,

	        /**
	         * The location of the spring's anchor, if not another physics body
	         *
	         * @attribute anchor
	         * @type Array
	         * @optional
	         */
	        anchor : undefined,

	        /**
	         * The type of spring force
	         * @attribute forceFunction
	         * @type Function
	         */
	        forceFunction : Spring.FORCE_FUNCTIONS.HOOK
	    };

	    function _calcStiffness() {
	        var options = this.options;
	        options.stiffness = Math.pow(2 * pi / options.period, 2);
	    }

	    function _calcDamping() {
	        var options = this.options;
	        options.damping = 4 * pi * options.dampingRatio / options.period;
	    }

	    function _init() {
	        _calcStiffness.call(this);
	        _calcDamping.call(this);
	    }

	    /**
	     * Basic options setter
	     *
	     * @method setOptions
	     * @param options {Object}
	     */
	    Spring.prototype.setOptions = function setOptions(options) {
	        // TODO fix no-console error
	        /* eslint no-console: 0 */

	        if (options.anchor !== undefined) {
	            if (options.anchor.position instanceof Vector) this.options.anchor = options.anchor.position;
	            if (options.anchor instanceof Vector) this.options.anchor = options.anchor;
	            if (options.anchor instanceof Array)  this.options.anchor = new Vector(options.anchor);
	        }

	        if (options.period !== undefined){
	            if (options.period < MIN_PERIOD) {
	                options.period = MIN_PERIOD;
	                console.warn('The period of a SpringTransition is capped at ' + MIN_PERIOD + ' ms. Use a SnapTransition for faster transitions');
	            }
	            this.options.period = options.period;
	        }

	        if (options.dampingRatio !== undefined) this.options.dampingRatio = options.dampingRatio;
	        if (options.length !== undefined) this.options.length = options.length;
	        if (options.forceFunction !== undefined) this.options.forceFunction = options.forceFunction;
	        if (options.maxLength !== undefined) this.options.maxLength = options.maxLength;

	        _init.call(this);
	        Force.prototype.setOptions.call(this, options);
	    };

	    /**
	     * Adds a spring force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply force to.
	     */
	    Spring.prototype.applyForce = function applyForce(targets, source) {
	        var force = this.force;
	        var disp = this.disp;
	        var options = this.options;

	        var stiffness = options.stiffness;
	        var damping = options.damping;
	        var restLength = options.length;
	        var maxLength = options.maxLength;
	        var anchor = options.anchor || source.position;
	        var forceFunction = options.forceFunction;

	        var i;
	        var target;
	        var p2;
	        var v2;
	        var dist;
	        var m;

	        for (i = 0; i < targets.length; i++) {
	            target = targets[i];
	            p2 = target.position;
	            v2 = target.velocity;

	            anchor.sub(p2).put(disp);
	            dist = disp.norm() - restLength;

	            if (dist === 0) return;

	            //if dampingRatio specified, then override strength and damping
	            m      = target.mass;
	            stiffness *= m;
	            damping   *= m;

	            disp.normalize(stiffness * forceFunction(dist, maxLength))
	                .put(force);

	            if (damping)
	                if (source) force.add(v2.sub(source.velocity).mult(-damping)).put(force);
	                else force.add(v2.mult(-damping)).put(force);

	            target.applyForce(force);
	            if (source) source.applyForce(force.mult(-1));
	        }
	    };

	    /**
	     * Calculates the potential energy of the spring.
	     *
	     * @method getEnergy
	     * @param [targets] target  The physics body attached to the spring
	     * @return {source}         The potential energy of the spring
	     */
	    Spring.prototype.getEnergy = function getEnergy(targets, source) {
	        var options     = this.options;
	        var restLength  = options.length;
	        var anchor      = (source) ? source.position : options.anchor;
	        var strength    = options.stiffness;

	        var energy = 0.0;
	        for (var i = 0; i < targets.length; i++){
	            var target = targets[i];
	            var dist = anchor.sub(target.position).norm() - restLength;
	            energy += 0.5 * strength * dist * dist;
	        }
	        return energy;
	    };

	    module.exports = Spring;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(25);
	    var Engine = __webpack_require__(14);
	    var OptionsManager = __webpack_require__(24);

	    /**
	     * Handles piped in mousewheel events.
	     *   Emits 'start', 'update', and 'end' events with payloads including:
	     *   delta: change since last position,
	     *   position: accumulated deltas,
	     *   velocity: speed of change in pixels per ms,
	     *   slip: true (unused).
	     *
	     *   Can be used as delegate of GenericSync.
	     *
	     * @class ScrollSync
	     * @constructor
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.direction] Pay attention to x changes (ScrollSync.DIRECTION_X),
	     *   y changes (ScrollSync.DIRECTION_Y) or both (undefined)
	     * @param {Number} [options.minimumEndSpeed] End speed calculation floors at this number, in pixels per ms
	     * @param {boolean} [options.rails] whether to snap position calculations to nearest axis
	     * @param {Number | Array.Number} [options.scale] scale outputs in by scalar or pair of scalars
	     * @param {Number} [options.stallTime] reset time for velocity calculation in ms
	     */
	    function ScrollSync(options) {
	        this.options = Object.create(ScrollSync.DEFAULT_OPTIONS);
	        this._optionsManager = new OptionsManager(this.options);
	        if (options) this.setOptions(options);

	        this._payload = {
	            delta    : null,
	            position : null,
	            velocity : null,
	            slip     : true
	        };

	        this._eventInput = new EventHandler();
	        this._eventOutput = new EventHandler();

	        EventHandler.setInputHandler(this, this._eventInput);
	        EventHandler.setOutputHandler(this, this._eventOutput);

	        this._position = (this.options.direction === undefined) ? [0,0] : 0;
	        this._prevTime = undefined;
	        this._prevVel = undefined;
	        this._eventInput.on('mousewheel', _handleMove.bind(this));
	        this._eventInput.on('wheel', _handleMove.bind(this));
	        this._inProgress = false;
	        this._loopBound = false;
	    }

	    ScrollSync.DEFAULT_OPTIONS = {
	        direction: undefined,
	        minimumEndSpeed: Infinity,
	        rails: false,
	        scale: 1,
	        stallTime: 50,
	        lineHeight: 40,
	        preventDefault: true
	    };

	    ScrollSync.DIRECTION_X = 0;
	    ScrollSync.DIRECTION_Y = 1;

	    var MINIMUM_TICK_TIME = 8;

	    var _now = Date.now;

	    function _newFrame() {
	        if (this._inProgress && (_now() - this._prevTime) > this.options.stallTime) {
	            this._inProgress = false;

	            var finalVel = (Math.abs(this._prevVel) >= this.options.minimumEndSpeed)
	                ? this._prevVel
	                : 0;

	            var payload = this._payload;
	            payload.position = this._position;
	            payload.velocity = finalVel;
	            payload.slip = true;

	            this._eventOutput.emit('end', payload);
	        }
	    }

	    function _handleMove(event) {
	        if (this.options.preventDefault) event.preventDefault();

	        if (!this._inProgress) {
	            this._inProgress = true;
	            this._position = (this.options.direction === undefined) ? [0,0] : 0;
	            payload = this._payload;
	            payload.slip = true;
	            payload.position = this._position;
	            payload.clientX = event.clientX;
	            payload.clientY = event.clientY;
	            payload.offsetX = event.offsetX;
	            payload.offsetY = event.offsetY;
	            this._eventOutput.emit('start', payload);
	            if (!this._loopBound) {
	                Engine.on('prerender', _newFrame.bind(this));
	                this._loopBound = true;
	            }
	        }

	        var currTime = _now();
	        var prevTime = this._prevTime || currTime;

	        var diffX = (event.wheelDeltaX !== undefined) ? event.wheelDeltaX : -event.deltaX;
	        var diffY = (event.wheelDeltaY !== undefined) ? event.wheelDeltaY : -event.deltaY;

	        if (event.deltaMode === 1) { // units in lines, not pixels
	            diffX *= this.options.lineHeight;
	            diffY *= this.options.lineHeight;
	        }

	        if (this.options.rails) {
	            if (Math.abs(diffX) > Math.abs(diffY)) diffY = 0;
	            else diffX = 0;
	        }

	        var diffTime = Math.max(currTime - prevTime, MINIMUM_TICK_TIME); // minimum tick time

	        var velX = diffX / diffTime;
	        var velY = diffY / diffTime;

	        var scale = this.options.scale;
	        var nextVel;
	        var nextDelta;

	        if (this.options.direction === ScrollSync.DIRECTION_X) {
	            nextDelta = scale * diffX;
	            nextVel = scale * velX;
	            this._position += nextDelta;
	        }
	        else if (this.options.direction === ScrollSync.DIRECTION_Y) {
	            nextDelta = scale * diffY;
	            nextVel = scale * velY;
	            this._position += nextDelta;
	        }
	        else {
	            nextDelta = [scale * diffX, scale * diffY];
	            nextVel = [scale * velX, scale * velY];
	            this._position[0] += nextDelta[0];
	            this._position[1] += nextDelta[1];
	        }

	        var payload = this._payload;
	        payload.delta    = nextDelta;
	        payload.velocity = nextVel;
	        payload.position = this._position;
	        payload.slip     = true;

	        this._eventOutput.emit('update', payload);

	        this._prevTime = currTime;
	        this._prevVel = nextVel;
	    }

	    /**
	     * Return entire options dictionary, including defaults.
	     *
	     * @method getOptions
	     * @return {Object} configuration options
	     */
	    ScrollSync.prototype.getOptions = function getOptions() {
	        return this.options;
	    };

	    /**
	     * Set internal options, overriding any default options
	     *
	     * @method setOptions
	     *
	     * @param {Object} [options] overrides of default options
	     * @param {Number} [options.minimimEndSpeed] If final velocity smaller than this, round down to 0.
	     * @param {Number} [options.stallTime] ms of non-motion before 'end' emitted
	     * @param {Number} [options.rails] whether to constrain to nearest axis.
	     * @param {Number} [options.direction] ScrollSync.DIRECTION_X, DIRECTION_Y -
	     *    pay attention to one specific direction.
	     * @param {Number} [options.scale] constant factor to scale velocity output
	     */
	    ScrollSync.prototype.setOptions = function setOptions(options) {
	        return this._optionsManager.setOptions(options);
	    };

	    module.exports = ScrollSync;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var MultipleTransition = __webpack_require__(52);
	    var TweenTransition = __webpack_require__(53);

	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];

	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;

	        this.set(start);
	    }

	    var transitionMethods = {};

	    Transitionable.register = function register(methods) {
	        var success = true;
	        for (var method in methods) {
	            if (!Transitionable.registerMethod(method, methods[method]))
	                success = false;
	        }
	        return success;
	    };

	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };

	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };

	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();

	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }

	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }

	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }

	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };

	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        this.set(this.get(), {duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        return this.set(this.get());
	    };

	    module.exports = Transitionable;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transitionable = __webpack_require__(43);
	    var Transform = __webpack_require__(18);
	    var Utility = __webpack_require__(19);

	    /**
	     * A class for transitioning the state of a Transform by transitioning
	     * its translate, scale, skew and rotate components independently.
	     *
	     * @class TransitionableTransform
	     * @constructor
	     *
	     * @param [transform=Transform.identity] {Transform} The initial transform state
	     */
	    function TransitionableTransform(transform) {
	        this._final = Transform.identity.slice();

	        this._finalTranslate = [0, 0, 0];
	        this._finalRotate = [0, 0, 0];
	        this._finalSkew = [0, 0, 0];
	        this._finalScale = [1, 1, 1];

	        this.translate = new Transitionable(this._finalTranslate);
	        this.rotate = new Transitionable(this._finalRotate);
	        this.skew = new Transitionable(this._finalSkew);
	        this.scale = new Transitionable(this._finalScale);

	        if (transform) this.set(transform);
	    }

	    function _build() {
	        return Transform.build({
	            translate: this.translate.get(),
	            rotate: this.rotate.get(),
	            skew: this.skew.get(),
	            scale: this.scale.get()
	        });
	    }

	    function _buildFinal() {
	        return Transform.build({
	            translate: this._finalTranslate,
	            rotate: this._finalRotate,
	            skew: this._finalSkew,
	            scale: this._finalScale
	        });
	    }

	    /**
	     * An optimized way of setting only the translation component of a Transform
	     *
	     * @method setTranslate
	     * @chainable
	     *
	     * @param translate {Array}     New translation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setTranslate = function setTranslate(translate, transition, callback) {
	        this._finalTranslate = translate;
	        this._final = _buildFinal.call(this);
	        this.translate.set(translate, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the scale component of a Transform
	     *
	     * @method setScale
	     * @chainable
	     *
	     * @param scale {Array}         New scale state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setScale = function setScale(scale, transition, callback) {
	        this._finalScale = scale;
	        this._final = _buildFinal.call(this);
	        this.scale.set(scale, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the rotational component of a Transform
	     *
	     * @method setRotate
	     * @chainable
	     *
	     * @param eulerAngles {Array}   Euler angles for new rotation state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setRotate = function setRotate(eulerAngles, transition, callback) {
	        this._finalRotate = eulerAngles;
	        this._final = _buildFinal.call(this);
	        this.rotate.set(eulerAngles, transition, callback);
	        return this;
	    };

	    /**
	     * An optimized way of setting only the skew component of a Transform
	     *
	     * @method setSkew
	     * @chainable
	     *
	     * @param skewAngles {Array}    New skew state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.setSkew = function setSkew(skewAngles, transition, callback) {
	        this._finalSkew = skewAngles;
	        this._final = _buildFinal.call(this);
	        this.skew.set(skewAngles, transition, callback);
	        return this;
	    };

	    /**
	     * Setter for a TransitionableTransform with optional parameters to transition
	     * between Transforms
	     *
	     * @method set
	     * @chainable
	     *
	     * @param transform {Array}     New transform state
	     * @param [transition] {Object} Transition definition
	     * @param [callback] {Function} Callback
	     * @return {TransitionableTransform}
	     */
	    TransitionableTransform.prototype.set = function set(transform, transition, callback) {
	        var components = Transform.interpret(transform);

	        this._finalTranslate = components.translate;
	        this._finalRotate = components.rotate;
	        this._finalSkew = components.skew;
	        this._finalScale = components.scale;
	        this._final = transform;

	        var _callback = callback ? Utility.after(4, callback) : null;
	        this.translate.set(components.translate, transition, _callback);
	        this.rotate.set(components.rotate, transition, _callback);
	        this.skew.set(components.skew, transition, _callback);
	        this.scale.set(components.scale, transition, _callback);
	        return this;
	    };

	    /**
	     * Sets the default transition to use for transitioning betwen Transform states
	     *
	     * @method setDefaultTransition
	     *
	     * @param transition {Object} Transition definition
	     */
	    TransitionableTransform.prototype.setDefaultTransition = function setDefaultTransition(transition) {
	        this.translate.setDefault(transition);
	        this.rotate.setDefault(transition);
	        this.skew.setDefault(transition);
	        this.scale.setDefault(transition);
	    };

	    /**
	     * Getter. Returns the current state of the Transform
	     *
	     * @method get
	     *
	     * @return {Transform}
	     */
	    TransitionableTransform.prototype.get = function get() {
	        if (this.isActive()) {
	            return _build.call(this);
	        }
	        else return this._final;
	    };

	    /**
	     * Get the destination state of the Transform
	     *
	     * @method getFinal
	     *
	     * @return Transform {Transform}
	     */
	    TransitionableTransform.prototype.getFinal = function getFinal() {
	        return this._final;
	    };

	    /**
	     * Determine if the TransitionalTransform is currently transitioning
	     *
	     * @method isActive
	     *
	     * @return {Boolean}
	     */
	    TransitionableTransform.prototype.isActive = function isActive() {
	        return this.translate.isActive() || this.rotate.isActive() || this.scale.isActive() || this.skew.isActive();
	    };

	    /**
	     * Halts the transition
	     *
	     * @method halt
	     */
	    TransitionableTransform.prototype.halt = function halt() {
	        this.translate.halt();
	        this.rotate.halt();
	        this.skew.halt();
	        this.scale.halt();

	        this._final = this.get();
	        this._finalTranslate = this.translate.get();
	        this._finalRotate = this.rotate.get();
	        this._finalSkew = this.skew.get();
	        this._finalScale = this.scale.get();

	        return this;
	    };

	    module.exports = TransitionableTransform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(33);
	    var SpecParser = __webpack_require__(55);

	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;

	        this._resultCache = {};
	        this._prevResults = {};

	        this._childResult = null;

	        if (object) this.set(object);
	    }

	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;

	        return childNode;
	    };

	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };

	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };

	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };

	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }

	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }

	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };

	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();

	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();

	        return this._isModifier ? this._object.modify(result) : result;
	    };

	    module.exports = RenderNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };

	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var listener = this.listeners[type];
	        if (listener !== undefined) {
	            var index = listener.indexOf(handler);
	            if (index >= 0) listener.splice(index, 1);
	        }
	        return this;
	    };

	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };

	    module.exports = EventEmitter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define, console*/

	/**
	 * LayoutContext is the interface for a layout-function to access
	 * renderables in the data-source and set their size, position, tranformation, etc...
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * @class
	     * @alias module:LayoutContext
	     */
	    function LayoutContext(methods) {
	        for (var n in methods) {
	            this[n] = methods[n];
	        }
	    }

	    /**
	     * {Property} Size in which to layout the renderables.
	     */
	    LayoutContext.prototype.size = undefined;

	    /**
	     * {Property} Direction in which to layout the renderables (0 = X, 1 = Y).
	     */
	    LayoutContext.prototype.direction = undefined;

	    /**
	     * Get the context-node for the next renderable in the data-source. When
	     * the end of the data-source is reached, `undefined` is returned.
	     * Use this function to enumerate the contents of a data-source that is
	     * either an Array or a ViewSequence.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   var height = 0;
	     *   var node = context.next(); // get first next node
	     *   while (node) {
	     *     context.set(node, {
	     *       size: [context.size[0], 100],
	     *       transform: [0, height, 0]
	     *     });
	     *     height += 100;
	     *     node = context.next(); // get next node
	     *   }
	     * }
	     * ```
	     *
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.next = function() {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Get the context-node for the previous renderable in the data-source. When
	     * the start of the data-source is reached, `undefined` is returned.
	     * Use this function to enumerate the contents of a data-source that is
	     * either an Array or a ViewSequence.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   var height = 0;
	     *   var node = context.prev(); // get first previous
	     *   while (node) {
	     *     height -= 100;
	     *     context.set(node, {
	     *       size: [context.size[0], 100],
	     *       transform: [0, height, 0]
	     *     });
	     *     node = context.next(); // get prev node
	     *   }
	     * }
	     * ```
	     *
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.prev = function() {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Get the context-node for a renderable with a specific id. This function
	     * should be used to access data-sources which are key-value collections.
	     * When a data-source is an Array or a ViewSequence, use `next()`.
	     * In many cases it is not neccesary to use `get()`, instead you can pass
	     * the id of the renderable straight to the `set` function.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var size = context.size;
	     *     var left = context.get('left');
	     *     context.set(left, { size: [100, size[1]] });
	     *
	     *     var right = context.get('right');
	     *     context.set(right, {
	     *       size: [100, size[1]],
	     *       translate: [size[1] - 100, 0, 0]
	     *     });
	     *
	     *     var middle = context.get('middle');
	     *     context.set(middle, {
	     *       size: [size[0] - 200, size[1]],
	     *       translate: [100, 0, 0]
	     *     });
	     *   },
	     *   dataSource: {
	     *     left: new Surface({content: 'left'}),
	     *     right: new Surface({content: 'right'}),
	     *     middle: new Surface({content: 'middle'})
	     *   }
	     * });
	     * ```
	     *
	     * **Arrays:**
	     *
	     * A value at a specific id in the datasource can also be an array. To access the
	     * context-nodes in the array use `get()` to get the array and the elements in the
	     * array:
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var size = context.size;
	     *     var left = 0;
	     *
	     *     // Position title
	     *     context.set('title', { size: [100, size[1]] });
	     *     left += 100;
	     *
	     *     // Position left-items (array)
	     *     var leftItems = context.get('leftItems');
	     *     for (var i = 0; i < leftItems.length; i++) {
	     *       var leftItem = context.get(leftItems[i]);
	     *       context.set(leftItem, {
	     *         size: [100, size[1]],
	     *         translate: [left, 0, 0]
	     *       });
	     *       left += 100;
	     *     }
	     *   },
	     *   dataSource: {
	     *     title: new Surface({content: 'title'}),
	     *     leftItems: [
	     *       new Surface({content: 'item1'}),
	     *       new Surface({content: 'item2'})
	     *     ]
	     *   }
	     * });
	     * ```
	     *
	     * @param {Object|String} node context-node or node-id
	     * @return {Object} context-node or undefined
	     */
	    LayoutContext.prototype.get = function(node) {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Set the size, origin, align, translation, scale, rotate, skew & opacity for a context-node.
	     * This function should only be called only **once** for a node.
	     *
	     * **Overview of all supported properties:**
	     *
	     * ```javascript
	     * function MyLayoutFunction(context, options) {
	     *   context.set('mynode', {
	     *     size: [100, 20],
	     *     origin: [0.5, 0.5],
	     *     align: [0.5, 0.5],
	     *     translate: [50, 10, 0],
	     *     scale: [1, 1, 1],
	     *     skew: [0, 0, 0],
	     *     rotate: [Math.PI, 0, 0],
	     *     opacity: 1
	     *   })
	     * }
	     * ```
	     *
	     * @param {Object|String} node context-node or node-id
	     * @param {Object} set properties: size, origin, align, translate, scale, rotate, skew & opacity
	     */
	    LayoutContext.prototype.set = function(node, set) {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Resolve the size of a context-node by accessing the `getSize` function
	     * of the renderable.
	     *
	     * **Example:**
	     *
	     * ```javascript
	     * var layoutController = new LayoutController({
	     *   layout: function (context, options) {
	     *     var centerSize = context.resolveSize('center');
	     *     context.set('center', {origin: [0.5, 0.5]});
	     *     context.set('centerRight', {
	     *       origin: [0.5, 0.5],
	     *       translate: [centerSize[0] / 2, 0, 0]
	     *     });
	     *   },
	     *   dataSource: {
	     *     center: new Surface({content: 'center'}),
	     *     centerRight: new Surface({content: 'centerRight'}),
	     *   }
	     * });
	     * ```
	     *
	     * **When the size of the renderable is calculated by the DOM (`true` size)**
	     *
	     * When the layout-function performs its layout for the first time, it is
	     * possible that the renderable has not yet been rendered and its size
	     * is unknown. In this case, the LayoutController will cause a second
	     * reflow of the layout the next render-cycle, ensuring that the renderables
	     * are layed out as expected.
	     *
	     * @param {Object|String} node context-node, node-id or array-element
	     * @return {Size} size of the node
	     */
	    LayoutContext.prototype.resolveSize = function(node) {
	        // dummy implementation, override in constructor
	    };

	    /**
	     * Get the underlying render-node that should be layed out.
	     *
	     * @param {Object|String} node context-node or node-id
	     * @return {Renderable} Renderable or `undefined` if not found
	     */
	    LayoutContext.prototype.getRenderNode = function(node) {
	        // dummy implementation, override in constructor
	    };

	    module.exports = LayoutContext;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * This Source Code is licensed under the MIT license. If a copy of the
	 * MIT-license was not distributed with this file, You can obtain one at:
	 * http://opensource.org/licenses/mit-license.html.
	 *
	 * @author: Hein Rutjes (IjzerenHein)
	 * @license MIT
	 * @copyright Gloey Apps, 2014
	 */

	/*global define*/
	/*eslint no-use-before-define:0 */

	/**
	 * Internal LayoutNode class used by `FlowLayoutController`.
	 *
	 * @module
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    // import dependencies
	    var OptionsManager = __webpack_require__(24);
	    var Transform = __webpack_require__(18);
	    var Vector = __webpack_require__(37);
	    var Particle = __webpack_require__(39);
	    var Spring = __webpack_require__(41);
	    var PhysicsEngine = __webpack_require__(38);
	    var LayoutNode = __webpack_require__(28);
	    var Transitionable = __webpack_require__(43);

	    /**
	     * @class
	     * @extends LayoutNode
	     * @param {Object} renderNode Render-node which this layout-node represents
	     * @param {Spec} spec Initial state
	     * @param {Object} physicsEngines physics-engines to use
	     * @alias module:FlowLayoutNode
	     */
	    function FlowLayoutNode(renderNode, spec) {
	        LayoutNode.apply(this, arguments);

	        if (!this.options) {
	            this.options = Object.create(this.constructor.DEFAULT_OPTIONS);
	            this._optionsManager = new OptionsManager(this.options);
	        }

	        if (!this._pe) {
	            this._pe = new PhysicsEngine();
	        }

	        this._options = {
	            spring: {
	                dampingRatio: 0.8,
	                period: 300
	            }
	        };

	        if (!this._properties) {
	            this._properties = {};
	        }
	        else {
	            for (var propName in this._properties) {
	                this._properties[propName].init = false;
	            }
	        }
	        _verifyIntegrity.call(this);

	        this._endStateReached = false;
	        this._initial = true;
	        if (spec) {
	            this.setSpec(spec);
	        }
	        _verifyIntegrity.call(this);
	    }
	    FlowLayoutNode.prototype = Object.create(LayoutNode.prototype);
	    FlowLayoutNode.prototype.constructor = FlowLayoutNode;

	    FlowLayoutNode.DEFAULT_OPTIONS = {
	        spring: {
	            dampingRatio: 0.8,
	            period: 300
	        },
	        particleRounding: 0.01
	    };

	    /**
	     * Defaults
	     */
	    var DEFAULT = {
	        opacity: 1,
	        size: [0, 0],
	        origin: [0, 0],
	        align: [0, 0],
	        scale: [1, 1, 1],
	        translate: [0, 0, 0],
	        rotate: [0, 0, 0],
	        skew: [0, 0, 0]
	    };

	    /**
	     * Verifies that the integrity of the layout-node is oke.
	     */
	    function _verifyIntegrity() {
	        /*var i;
	        for (var propName in this._properties) {
	            var prop = this._properties[propName];
	            if (prop.particle) {
	                if (isNaN(prop.particle.getEnergy())) {
	                    throw 'invalid particle energy: ' + propName;
	                }
	                var value = prop.particle.getPosition();
	                for (i = 0; i < value.length; i++) {
	                    if (isNaN(value[i])) {
	                       throw 'invalid particle value: ' + propName + '(' + i + ')';
	                    }
	                }
	                value = prop.endState.get();
	                for (i = 0; i < value.length; i++) {
	                    if (isNaN(value[i])) {
	                       throw 'invalid endState value: ' + propName + '(' + i + ')';
	                    }
	                }
	            }
	        }*/
	    }

	    /**
	     * Helper function which rounds a particle value to ensure it reaches an end-state and doesn't
	     * move infinitely.
	     */
	    function _roundParticleValue(value) {
	        return Math.round(value / this.options.particleRounding) * this.options.particleRounding;
	    }

	    /**
	     * Sets the configuration options
	     */
	    FlowLayoutNode.prototype.setOptions = function(options) {
	        this._optionsManager.setOptions(options);
	        for (var propName in this._properties) {
	            var prop = this._properties[propName];
	            if (prop.force) {
	                var springOptions = {};
	                for (var key in this.options.spring) {
	                    springOptions[key] = this.options.spring[key];
	                }
	                springOptions.anchor = prop.endState;
	                prop.force.setOptions(springOptions);
	            }
	        }
	        _verifyIntegrity.call(this);
	        return this;
	    };

	    /**
	     * Set the properties from a spec.
	     */
	    FlowLayoutNode.prototype.setSpec = function(spec) {
	        if ((spec.opacity !== undefined) || this._removing) {
	            _setPropertyValue.call(this, 'opacity', spec.opacity, DEFAULT.opacity);
	        }
	        if (spec.size|| this._removing) {
	            _setPropertyValue.call(this, 'size', spec.size, DEFAULT.size);
	        }
	        if (spec.align|| this._removing) {
	            _setPropertyValue.call(this, 'align', spec.align, DEFAULT.align);
	        }
	        if (spec.origin|| this._removing) {
	            _setPropertyValue.call(this, 'origin', spec.origin, DEFAULT.origin);
	        }
	        if (spec.transform || this._removing) {
	            var transform = spec.transform ? Transform.interpret(spec.transform) : {};
	            _setPropertyValue.call(this, 'translate', transform.translate, DEFAULT.translate);
	            _setPropertyValue.call(this, 'scale', transform.scale, DEFAULT.scale);
	            _setPropertyValue.call(this, 'skew', transform.skew, DEFAULT.skew);
	            _setPropertyValue.call(this, 'rotate', transform.rotate, DEFAULT.rotate);
	        }
	    };

	    /**
	     * Reset the end-state. This function is called on all layout-nodes prior to
	     * calling the layout-function. So that the layout-function starts with a clean slate.
	     */
	    FlowLayoutNode.prototype.reset = function() {
	        if (this._invalidated) {
	            for (var propName in this._properties) {
	                this._properties[propName].invalidated = false;
	            }
	            this._invalidated = false;
	        }
	        this.trueSizeRequested = false;
	        _verifyIntegrity.call(this);
	    };

	    /**
	     * Markes the node for removal.
	     */
	    FlowLayoutNode.prototype.remove = function(removeSpec) {

	        // Transition to the remove-spec state
	        this._removing = true;
	        if (removeSpec) {
	            this.setSpec(removeSpec);
	        }

	        // Mark for removal
	        this._invalidated = false;
	        _verifyIntegrity.call(this);
	    };

	    /**
	     * Locks a property, or a specific array-dimension of the property
	     * fixed to the end-state value. Use this to e.g. lock the x-translation
	     * to a the fixed end-state, so that when scrolling the renderable sticks
	     * to the x-axis and does not feel sluggish.
	     */
	    FlowLayoutNode.prototype.setDirectionLock = function(direction, value) {
	        if (direction === undefined) {
	            this._lockDirection = undefined;
	        }
	        else {
	            this._lockDirection = direction;
	            if (value !== undefined) {
	                if (!this._lockTransitionable) {
	                    this._lockTransitionable = new Transitionable(1);
	                }
	                this._lockTransitionable.halt();
	                this._lockTransitionable.reset(value);
	                if (value !== 1) {
	                    this._lockTransitionable.set(1, {
	                        duration: (1 - value) * 1000
	                    });
	                }
	            }
	        }
	    };

	    /**
	     * Helper function for getting the property value.
	     */
	    function _getPropertyValue(prop, def) {
	        return (prop && prop.init) ? prop.particle.getPosition() : def;
	    }
	    function _getSizeValue() {
	        var prop = this._properties.size;
	        if (!prop || !prop.init) {
	            return undefined;
	        }
	        var size = prop.particle.getPosition();
	        return [
	            _roundParticleValue.call(this, size[0]),
	            _roundParticleValue.call(this, size[1])
	        ];
	    }
	    function _getOpacityValue() {
	        var prop = this._properties.opacity;
	        return (prop && prop.init) ? _roundParticleValue.call(this, Math.max(0,Math.min(1, prop.particle.getPosition1D()))) : undefined;
	    }
	    function _getTranslateValue(def) {
	        var prop = this._properties.translate;
	        if (!prop || !prop.init) {
	            return def;
	        }
	        var position = prop.particle.getPosition();
	        if (this._lockDirection !== undefined) {
	            var value = position[this._lockDirection];
	            var endState = prop.endState.get()[this._lockDirection];
	            var lockValue = value + ((endState - value) * this._lockTransitionable.get());
	            position = [
	                _roundParticleValue.call(this,position[0]),
	                _roundParticleValue.call(this,position[1]),
	                _roundParticleValue.call(this,position[2])
	            ];
	            position[this._lockDirection] = lockValue;
	        }
	        return position;
	    }

	    /**
	     * Creates the render-spec
	     */
	    FlowLayoutNode.prototype.getSpec = function() {

	        // When the end state was reached, return the previous spec
	        var endStateReached = this._pe.isSleeping();
	        if (this._endStateReached && endStateReached) {
	            if (this._invalidated) {
	                return this._spec;
	            }
	            else {
	                return undefined;
	            }
	        }
	        this._endStateReached = endStateReached;

	        // Build fresh spec
	        this._initial = false;
	        this._spec.opacity = _getOpacityValue.call(this);
	        this._spec.size = _getSizeValue.call(this);
	        this._spec.align = _getPropertyValue(this._properties.align, undefined);
	        this._spec.origin = _getPropertyValue(this._properties.origin, undefined);
	        this._spec.transform = Transform.build({
	            translate: _getTranslateValue.call(this, DEFAULT.translate),
	            skew: _getPropertyValue(this._properties.skew, DEFAULT.skew),
	            scale: _getPropertyValue(this._properties.scale, DEFAULT.scale),
	            rotate: _getPropertyValue(this._properties.rotate, DEFAULT.rotate)
	        });
	        //if (this.renderNode._debug) {
	            //this.renderNode._debug = false;
	            /*console.log(JSON.stringify({
	                opacity: this._spec.opacity,
	                size: this._spec.size,
	                align: this._spec.align,
	                origin: this._spec.origin,
	                transform: this._spec.transform
	            }));*/
	        //}

	        _verifyIntegrity.call(this);
	        return this._spec;
	    };

	    /**
	     * Helper function to set the property of a node (e.g. opacity, translate, etc..)
	     */
	    function _setPropertyValue(propName, endState, defaultValue) {

	        // Check if end-state equals default-value, if so reset it to undefined
	        if ((endState !== undefined) && (defaultValue !== undefined)) {
	            if (Array.isArray(endState) && Array.isArray(defaultValue) && (endState.length === defaultValue.length)) {
	                var same = true;
	                for (var i = 0 ; i < endState.length; i++) {
	                    if (endState[i] !== defaultValue[i]) {
	                        same = false;
	                        break;
	                    }
	                }
	                endState = same ? undefined : endState;
	            }
	            else if (endState === defaultValue) {
	                endState = undefined;
	            }
	        }

	        // Get property
	        var prop = this._properties[propName];

	        // When property doesn't exist, and no end-state, nothing to do
	        if ((endState === undefined) && (!prop || !prop.init)) {
	            return;
	        }

	        // Update the property
	        if (prop && prop.init) {
	            prop.invalidated = true;
	            if (endState !== undefined) {
	                prop.endState.set(endState);
	            }
	            else if (this._removing) {
	                prop.endState.set(prop.particle.getPosition());
	            }
	            else {
	                prop.endState.set(defaultValue);
	            }
	            this._pe.wake();
	            return;
	        }

	        // Create property if neccesary
	        if (!prop) {
	            prop = {
	                particle: new Particle({
	                    position: this._initial ? endState : defaultValue
	                }),
	                endState: new Vector(endState)
	            };
	            var springOptions = {};
	            for (var key in this.options.spring) {
	                springOptions[key] = this.options.spring[key];
	            }
	            springOptions.anchor = prop.endState;
	            prop.force = new Spring(springOptions);
	            this._pe.addBody(prop.particle);
	            prop.forceId = this._pe.attach(prop.force, prop.particle);
	            this._properties[propName] = prop;
	        }
	        else {
	            prop.particle.setPosition(this._initial ? endState : defaultValue);
	            prop.endState.set(endState);
	            this._pe.wake();
	        }
	        prop.init = true;
	        prop.invalidated = true;
	    }
	    FlowLayoutNode.prototype.set = function(set, size) {
	        this._removing = false;
	        this.scrollLength = set.scrollLength;
	        _setPropertyValue.call(this, 'opacity', set.opacity, DEFAULT.opacity);
	        _setPropertyValue.call(this, 'align', set.align, DEFAULT.align);
	        _setPropertyValue.call(this, 'origin', set.origin, DEFAULT.origin);
	        _setPropertyValue.call(this, 'size', set.size, size);
	        _setPropertyValue.call(this, 'translate', set.translate, DEFAULT.translate);
	        _setPropertyValue.call(this, 'skew', set.skew, DEFAULT.skew);
	        _setPropertyValue.call(this, 'rotate', set.rotate, DEFAULT.rotate);
	        _setPropertyValue.call(this, 'scale', set.scale, DEFAULT.scale);
	        this._invalidated = true;
	        _verifyIntegrity.call(this);
	    };

	    module.exports = FlowLayoutNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/reload.gif"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }

	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;

	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
	            }
	        }

	        this.container = container;
	    };

	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };

	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };

	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };

	    module.exports = ElementAllocator;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Vector = __webpack_require__(37);
	    var EventHandler = __webpack_require__(25);

	    /**
	     * Force base class.
	     *
	     * @class Force
	     * @uses EventHandler
	     * @constructor
	     */
	    function Force(force) {
	        this.force = new Vector(force);
	        this._eventOutput = new EventHandler();
	        EventHandler.setOutputHandler(this, this._eventOutput);
	    }

	    /**
	     * Basic setter for options
	     *
	     * @method setOptions
	     * @param options {Objects}
	     */
	    Force.prototype.setOptions = function setOptions(options) {
	        this._eventOutput.emit('change', options);
	    };

	    /**
	     * Adds a force to a physics body's force accumulator.
	     *
	     * @method applyForce
	     * @param targets {Array.Body} Array of bodies to apply a force to.
	     */
	    Force.prototype.applyForce = function applyForce(targets) {
	        var length = targets.length;
	        while (length--) {
	            targets[length].applyForce(this.force);
	        }
	    };

	    /**
	     * Getter for a force's potential energy.
	     *
	     * @method getEnergy
	     * @return energy {Number}
	     */
	    Force.prototype.getEnergy = function getEnergy() {
	        return 0.0;
	    };

	    module.exports = Force;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Utility = __webpack_require__(19);

	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }

	    MultipleTransition.SUPPORTS_MULTIPLE = true;

	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };

	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };

	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };

	    module.exports = MultipleTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }

	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };

	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };

	    var registeredCurves = {};

	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };

	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };

	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }

	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }

	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }

	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }

	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }

	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };

	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };

	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }

	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }

	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }

	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }

	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;

	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };

	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };

	    module.exports = TweenTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Ordinary Differential Equation (ODE) Integrator.
	     * Manages updating a physics body's state over time.
	     *
	     *  p = position, v = velocity, m = mass, f = force, dt = change in time
	     *
	     *      v <- v + dt * f / m
	     *      p <- p + dt * v
	     *
	     *  q = orientation, w = angular velocity, L = angular momentum
	     *
	     *      L <- L + dt * t
	     *      q <- q + dt/2 * q * w
	     *
	     * @class SymplecticEuler
	     * @constructor
	     * @param {Object} options Options to set
	     */
	    var SymplecticEuler = {};

	    /*
	     * Updates the velocity of a physics body from its accumulated force.
	     *      v <- v + dt * f / m
	     *
	     * @method integrateVelocity
	     * @param {Body} physics body
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateVelocity = function integrateVelocity(body, dt) {
	        var v = body.velocity;
	        var w = body.inverseMass;
	        var f = body.force;

	        if (f.isZero()) return;

	        v.add(f.mult(dt * w)).put(v);
	        f.clear();
	    };

	    /*
	     * Updates the position of a physics body from its velocity.
	     *      p <- p + dt * v
	     *
	     * @method integratePosition
	     * @param {Body} physics body
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integratePosition = function integratePosition(body, dt) {
	        var p = body.position;
	        var v = body.velocity;

	        p.add(v.mult(dt)).put(p);
	    };

	    /*
	     * Updates the angular momentum of a physics body from its accumuled torque.
	     *      L <- L + dt * t
	     *
	     * @method integrateAngularMomentum
	     * @param {Body} physics body (except a particle)
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateAngularMomentum = function integrateAngularMomentum(body, dt) {
	        var L = body.angularMomentum;
	        var t = body.torque;

	        if (t.isZero()) return;

	        L.add(t.mult(dt)).put(L);
	        t.clear();
	    };

	    /*
	     * Updates the orientation of a physics body from its angular velocity.
	     *      q <- q + dt/2 * q * w
	     *
	     * @method integrateOrientation
	     * @param {Body} physics body (except a particle)
	     * @param {Number} dt delta time
	     */
	    SymplecticEuler.integrateOrientation = function integrateOrientation(body, dt) {
	        var q = body.orientation;
	        var w = body.angularVelocity;

	        if (w.isZero()) return;
	        q.add(q.multiply(w).scalarMultiply(0.5 * dt)).put(q);
	//        q.normalize.put(q);
	    };

	    module.exports = SymplecticEuler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(18);

	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();

	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };

	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };

	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };

	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }

	    var _zeroZero = [0, 0];

	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;

	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || _zeroZero;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _zeroZero,
	                align: parentContext.align || _zeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;

	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;

	            if (spec.size || spec.proportions) {
	                var parentSize = size;
	                size = [size[0], size[1]];

	                if (spec.size) {
	                    if (spec.size[0] !== undefined) size[0] = spec.size[0];
	                    if (spec.size[1] !== undefined) size[1] = spec.size[1];
	                }

	                if (spec.proportions) {
	                    if (spec.proportions[0] !== undefined) size[0] = size[0] * spec.proportions[0];
	                    if (spec.proportions[1] !== undefined) size[1] = size[1] * spec.proportions[1];
	                }

	                if (parentSize) {
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }

	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }

	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };

	    module.exports = SpecParser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])