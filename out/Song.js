"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Song = function () {
    function Song(author, name, duration) {
        _classCallCheck(this, Song);

        this.author = author;
        this.name = name;
        this.duration = duration;
    }

    _createClass(Song, [{
        key: "toString",
        value: function toString() {
            return this.name + " By: " + this.author + ". Duration: " + this.duration;
        }
    }], [{
        key: "createSongs",
        value: function createSongs(n) {
            /**
             * Creates n number of songs
             */
            var result = [];

            for (var i = 0; i < n; i++) {
                result.push(new Song('Michael Jackson', 'Beat it', 3.30));
            }
            return result;
        }
    }]);

    return Song;
}();

console.log(Song.createSongs(5).map(function (song) {
    return song.toString();
}));