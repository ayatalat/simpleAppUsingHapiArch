'use strict';
const bcrypt=require('bcrypt');

module.exports = function (server, options, components) {

  const { User } = components.models;

  const findUserByEmail = function (request, email, password, callback) {

    User.find({ email:email },(err,res) => {
      if(err) {
        throw err;
      }
      bcrypt.compare(password,res.password).then(function (res) {
        if(res === false){
          return callback(null, false);
        }
        else{
          callback(err, { id: res.id, name: res.email });
        }
      });
    });

  };
  server.expose('findUserByEmail', findUserByEmail);


};