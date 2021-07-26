const mongoose = require( "mongoose" )
const db_name = "not_movie_db"

mongoose.connect( "mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

    bufferCommands: false,
    useFindAndModify: false,

    serverSelectionTimeoutMS: 10000,
    heartbeatFrequencyMS: 10000,

    socketTimeoutMS: 30000 // change this value when finished to increase performance

} )
.then( ()=>console.log( "Established a connection to the database!!! Letss get it!" ) )
.catch( err =>console.log( "something went wrong, here is the error", err ) )