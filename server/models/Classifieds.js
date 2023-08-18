const mongoose = require('mongoose');
const { Schema } = mongoose;



const classifiedsSchema = new Schema({
    title: {
        type: String,
        minLength: 3,
        maxLength: 160,
    },
    description: {
        type: String, 
        minLength: 5,
        maxLength: 100,
    },
    date: {
        type: Date,
        default: Date.now,
    },
   
    tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag',
    }
});

const Classifieds = mongoose.model('Classifieds', classifiedsSchema);

export default  Classifieds;

