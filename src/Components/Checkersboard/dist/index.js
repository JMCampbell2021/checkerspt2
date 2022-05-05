"use strict";
exports.__esModule = true;
require("./checkerboard.css");
var Tile_1 = require("../Tile");
var react_1 = require("react");
var verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
var horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var pieces = [];
// starting position of the red checker pieces
for (var i = 0; i < 8; i++) {
    //  row 5 from the y axis
    pieces.push({ image: 'assets/images/red.svg', x: 1, y: 5 });
    pieces.push({ image: 'assets/images/red.svg', x: 3, y: 5 });
    pieces.push({ image: 'assets/images/red.svg', x: 5, y: 5 });
    pieces.push({ image: 'assets/images/red.svg', x: 7, y: 5 });
    //  row 6 from the y axis
    pieces.push({ image: 'assets/images/red.svg', x: 0, y: 6 });
    pieces.push({ image: 'assets/images/red.svg', x: 2, y: 6 });
    pieces.push({ image: 'assets/images/red.svg', x: 4, y: 6 });
    pieces.push({ image: 'assets/images/red.svg', x: 6, y: 6 });
    //  row 7 from the y axis
    pieces.push({ image: 'assets/images/red.svg', x: 1, y: 7 });
    pieces.push({ image: 'assets/images/red.svg', x: 3, y: 7 });
    pieces.push({ image: 'assets/images/red.svg', x: 5, y: 7 });
    pieces.push({ image: 'assets/images/red.svg', x: 7, y: 7 });
}
//  starting position of the black checker pieces
for (var i = 0; i < 8; i++) {
    // row 2 from y axis
    pieces.push({ image: 'assets/images/black.svg', x: 0, y: 2 });
    pieces.push({ image: 'assets/images/black.svg', x: 2, y: 2 });
    pieces.push({ image: 'assets/images/black.svg', x: 4, y: 2 });
    pieces.push({ image: 'assets/images/black.svg', x: 6, y: 2 });
    // row 1 from y axis
    pieces.push({ image: 'assets/images/black.svg', x: 1, y: 1 });
    pieces.push({ image: 'assets/images/black.svg', x: 3, y: 1 });
    pieces.push({ image: 'assets/images/black.svg', x: 5, y: 1 });
    pieces.push({ image: 'assets/images/black.svg', x: 7, y: 1 });
    // row 0 from y axis
    pieces.push({ image: 'assets/images/black.svg', x: 0, y: 0 });
    pieces.push({ image: 'assets/images/black.svg', x: 2, y: 0 });
    pieces.push({ image: 'assets/images/black.svg', x: 4, y: 0 });
    pieces.push({ image: 'assets/images/black.svg', x: 6, y: 0 });
}
function Checkersboard() {
    var checkerboardRef = react_1.useRef(null);
    // Movement of the Pieces
    var activePiece = null;
    // grab piece
    function grabPiece(e) {
        var element = e.target;
        if (element.classList.contains('checkerpiece')) {
            console.log(e);
            var x = e.clientX - 50;
            var y = e.clientY - 50;
            element.style.position = 'absolute';
            element.style.left = x + "px";
            element.style.top = y + "px";
            activePiece = element;
        }
    }
    // move piece
    function movePiece(e) {
        var checkerboard = checkerboardRef.current;
        if (activePiece && checkerboard) {
            var minX = checkerboard.offsetLeft - 25;
            var minY = checkerboard.offsetTop - 25;
            var maxX = checkerboard.offsetLeft + checkerboard.clientWidth;
            var maxY = checkerboard.offsetTop + checkerboard.clientHeight;
            var x = e.clientX - 50;
            var y = e.clientY - 50;
            activePiece.style.position = 'absolute';
            if (x < minX) {
                activePiece.style.left = minX + "px";
            }
            else if (x > minX) {
                activePiece.style.left = maxX + "px";
            }
            else {
                activePiece.style.left = x + "px";
            }
            if (y < minY) {
                activePiece.style.top = minY + "px";
            }
            else if (y > minY) {
                activePiece.style.top = maxY + "px";
            }
            else {
                activePiece.style.top = y + "px";
            }
        }
    }
    //drop piece
    function dropPiece(e) {
        if (activePiece) {
            activePiece = null;
        }
    }
    //checker pieces on the board
    var board = [];
    var _loop_1 = function (j) {
        var _loop_2 = function (i) {
            var number = j + i + 2;
            var image = undefined;
            pieces.forEach(function (p) {
                if (p.x === i && p.y === j) {
                    image = p.image;
                }
            });
            board.push(react_1["default"].createElement(Tile_1["default"], { key: j + "," + i, image: image, number: number }));
        };
        for (var i = 0; i < horizontalAxis.length; i++) {
            _loop_2(i);
        }
    };
    for (var j = verticalAxis.length - 1; j >= 0; j--) {
        _loop_1(j);
    }
    return (react_1["default"].createElement("div", { onMouseMove: function (e) { return movePiece(e); }, onMouseDown: function (e) { return grabPiece(e); }, onMouseUp: function (e) { return dropPiece(e); }, id: 'checkersboard', ref: checkerboardRef }, board));
}
exports["default"] = Checkersboard;
;
