'use strict';
const AuthBasic=require('hapi-auth-basic');
const User=require('../api/pluginTwo/models/User');


module.exports = function (server) {
  console.log(server.plugins.pluginTwo); // empty object
  const validate=function (request, email, password, callback) {

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
  server.register(AuthBasic, (err) => {
    if (err) {
      throw err;
    }
    // const validate = server.plugins.pluginTwo['findUserByEmail'];

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
  });

};