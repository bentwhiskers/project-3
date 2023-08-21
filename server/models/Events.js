const {Schema} = require ('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
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
    time: {
        type: String,
        minLength: 3,
        maxLength: 160,
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag', //  match the name of your tag schema
    }],
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
