const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type : String, required : true},
    surname: {type : String, required : true},
    email: {type : String, required : true},
    password: {type : String, required : true},
    car: [{
       carRegistration: {type : String, length : [5,10]},
       carRepairs: [{
                repairId: Number,
                repairDate: {type: Date, default: Date.now},
                repairDescription: String,
                repairCost: Number,
                repairStatus: String,
                repairImage: String,
         }],
       }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isDeleted: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);

