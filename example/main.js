/**
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

define(function(require) {

    //<webpack>
    require('famous-polyfills');
    require('famous/core/famous.css');
    require('./css/styles.css');
    require('./index.html');
    //</webpack>

    // please-js
    //require('pleasejs/Please');

    // Fast-click
    var FastClick = require('fastclick/lib/fastclick');
    FastClick.attach(document.body);

    // import dependencies
    var Engine = require('famous/core/Engine');
    var ViewSequence = require('famous/core/ViewSequence');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ScrollView = require('famous-flex/ScrollView');
    var TableLayout = require('../src/TableLayout');
    var LayoutController = require('famous-flex/LayoutController');
    var Lagometer = require('famous-lagometer/Lagometer');

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
            }
        },
        dataSource: viewSequence,
        useContainer: true
    });
    mainContext.add(scrollView);

    // create view-sequence containing items
    for (j = 1; j <= 10; j++) {
        viewSequence.push(_createSection(j));
        for (i = 1 ; i <= 5; i++) {
            viewSequence.push(_createCell(i));
        }
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
    function _createSection(index) {
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
                    content: 'This is a sticky section ' + index,
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
});
