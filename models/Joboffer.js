const mongoose = require('mongoose');

const JobofferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: false,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    salary: {
        type: String,
        required: [true, 'Please add an salary']
    },
    workstyle: {
        type: String,
        required: [true, 'Please add an workstyle']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: true
    },
},
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
});

// Reverse populate with virtuals
JobofferSchema.virtual('interviews', {
    ref: 'interviews',
    localField: '_id',
    foreignField: 'joboffer',
    justOne: false
});

// Cascade delete Joboffer when a company is deleted
JobofferSchema.pre('deleteOne', {document: true, query: false},  async function(next) {
    console.log(`Joboffers being removed from company ${this._id}`);
    await this.model('Joboffer').deleteMany({company: this._id});
    next();
});


module.exports = mongoose.model('Joboffer', JobofferSchema);
    