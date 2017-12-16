class Song {
    constructor(author, name, duration){
        this.author = author
        this.name = name
        this.duration = duration
    }

    toString(){
        return this.name + " By: " + this.author + ". Duration: " + this.duration
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

console.log(Song.createSongs(5).map(song => song.toString()))


