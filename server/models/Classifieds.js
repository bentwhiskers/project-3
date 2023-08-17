const mongoose = ('mongoose');

const classifiedsSchema = new mongoose.Schema({
    title: {

    },
    description: {

    },
    date: {

    },
    option: {

    },
    tags: {

    }
});

const Classifieds = mongoose.model.('Classifieds', classifiedsSchema);

export default Classifieds;