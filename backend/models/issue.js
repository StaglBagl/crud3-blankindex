import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String
    },
    resp: {
        type: String
    },
    desc: {
        type: String
    },
    severity: {
        type: String
    },
    status: {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue', Issue);