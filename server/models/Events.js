const mongoose = ('mongoose');

const eventSchema = new mongoose.Schema({
    title: {

    },
    description: {

    },
    date: {

    },
    time: {

    },
    tags: {

    }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;