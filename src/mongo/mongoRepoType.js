const mongoose = require('mongoose')

const schemaType = mongoose.Schema({
    typeId: {type: String, unique: true},
    name: {type: String, unique: true},
    significance: { type: Map , of: Number }
});

class RepoType {
    constructor(){
        this.Type = mongoose.model("types", schemaType);
    }

    async getAllTypes(){
        const types = await  this.Type.find().select({_id: 0});
        return types
    }

    async saveType(type){
        const unit = this.Type(type);
        const res = await unit.save();
        return res;
    }
}

module.exports = RepoType;