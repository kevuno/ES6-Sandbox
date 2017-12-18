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

        // testing Rest params

    }], [{
        key: "sumSongDurations",
        value: function sumSongDurations() {
            for (var _len = arguments.length, songs = Array(_len), _key = 0; _key < _len; _key++) {
                songs[_key] = arguments[_key];
            }

            /**
             * Adds the total duration of the given songs
             * Careful with how reduce handles objects
             */

            return songs.reduce(function (prev, curr) {
                return { duration: prev.duration + curr.duration };
            });
        }
    }, {
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

var songs = Song.createSongs(5);
console.log(songs.map(function (song) {
    return song.toString();
}));
console.log(Song.sumSongDurations(songs[0], songs[1], songs[2]));