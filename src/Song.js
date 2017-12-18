class Song {
    constructor(author, name, duration){
        this.author = author
        this.name = name
        this.duration = duration
    }

    toString(){
        return this.name + " By: " + this.author + ". Duration: " + this.duration
    }

    // testing Rest params
    static sumSongDurations(...songs){
        /**
         * Adds the total duration of the given songs
         * Careful with how reduce handles objects
         */

        return songs.reduce((prev, curr) => { 
            return {duration: prev.duration + curr.duration}
        })
    }

    static createSongs(n){
        /**
         * Creates n number of songs
         */
        let result = []

        for(let i = 0; i < n; i++){
            result.push(new Song('Michael Jackson', 'Beat it', 3.30))
        }
        return result
    }
}
let songs = Song.createSongs(5)
console.log(songs.map(song => song.toString()))
console.log(Song.sumSongDurations(songs[0], songs[1], songs[2]))


