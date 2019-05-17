const mongoose = require('mongoose');

const typeSchemaMongo = mongoose.Schema({
    id: {type: Number, unique: true},
    name: String,
    significance: {type: Map , of: Number} 
});

const TypeModel = mongoose.model('types', typeSchemaMongo)

class TypeRepository {
    constructor(){

    }
   async  save(data){
        try{
            let type = TypeModel(data)
            await  type.save()
            return true
        } catch(ex){
            console.log(ex);
            return false
        }
    }
    async getAll(){
        try{
            const types = await TypeModel.find().select({ _id: 0, __v: 0 })
            return types
        } catch (ex){
            console.log(ex);
            return []
        }
    }
}

module.exports = TypeRepository