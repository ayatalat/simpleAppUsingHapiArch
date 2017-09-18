'use strict';
const bcrypt=require('bcrypt');
const saltRounds = 10;
module.exports = function (server, options, components) {

  const { User } = components.models;

  return {

    signUp: function (data) {
      return bcrypt.hash(data.password, saltRounds).then((hash)=> {
        data.password=hash;
        return User.create(data);
      });
    },

    login: function (criteria) {
      return User.find({ email:criteria },(err,res) => {
        if(err) {
          throw err;
        }
        bcrypt.compare(criteria.password, res.password).then(function (res) {
          if(res === false){
            return false;
          }
          else{
            return true;
          }
        });

      });

    }

  };

};