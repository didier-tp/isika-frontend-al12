var mongoose = require('mongoose');  // npm install -s mongoose

var mongoDbUrl = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017'; //by default

var deviseSchema;//mongoose Shcema (structure of mongo document)
var PersistentDeviseModel; //mongoose Model (constructor of persistent PersistentDeviseModel)

var initMongooseWithSchemaAndModel = function(callbackWithPersistentDeviseModel) {
    mongoose.connect(mongoDbUrl, {useNewUrlParser: true, useUnifiedTopology: true , dbName : 'devise_db'});
    const db = mongoose.connection;
    db.on('error' , function() { console.log("mongoDb connection error = " + " for dbUrl=" + mongoDbUrl )});
    db.once('open', function() {
      // we're connected!
      console.log("Connected correctly to mongodb database" );
      deviseSchema = new mongoose.Schema({
        _id: { type : String , alias : "code" } ,
        nom: String,
        change : Number
      });
      deviseSchema.set('id',false); //no default virtual id alias for _id
      deviseSchema.set('toJSON', { virtuals: true , 
                                   versionKey:false,
                                   transform: function (doc, ret) {   delete ret._id  }
                                 });
      //console.log("mongoose deviseSchema : " + JSON.stringify(deviseSchema) );
      //"Devise" model name is "devises" collection name in mongoDB test database
      PersistentDeviseModel = mongoose.model('Devise', deviseSchema);
      
      //console.log("mongoose PersistentDeviseModel : " + PersistentDeviseModel );
      if(callbackWithPersistentDeviseModel)
         callbackWithPersistentDeviseModel(PersistentDeviseModel);
    });
}


function init_devise_db(){
  initMongooseWithSchemaAndModel(
    function(PersistentDeviseModel) {
      const deleteAllFilter = { }
      PersistentDeviseModel.deleteMany( deleteAllFilter, function (err) {
        if(err) console.log(JSON.stringify(err));
        //insert elements after deleting olds
        (new PersistentDeviseModel({ code : "EUR" , nom : "Euro" , change : 1.0})).save();
        (new PersistentDeviseModel({ code : "USD" , nom : "Dollar" , change : 1.1})).save();
        (new PersistentDeviseModel({ code : "GBP" , nom : "Livre" , change : 0.9})).save();
        (new PersistentDeviseModel({ code : "JPY" , nom : "Yen" , change : 123.7})).save();
      })
  });
}

//valeur en retour Promise<Devise>
function getDeviseByCode(codeDevise){
  return new Promise ((resolve,reject)=> {
    PersistentDeviseModel.findById( codeDevise ,
      function(err,devise){
      if(devise==null)
           reject({ err : 'not found'});
      else
           resolve(devise);
     });
  });
}

module.exports.getDeviseByCode=getDeviseByCode;
module.exports.initMongooseWithSchemaAndModel=initMongooseWithSchemaAndModel;
module.exports.init_devise_db = init_devise_db;
