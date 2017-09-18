'use strict';

module.exports = function (server, options, services) {

  const { UserService } = services;

  return {

    signUp: function (request, reply) {
      UserService.signUp(request.payload)
        .then((res) => {
          console.log('res' + res);
          reply(res);
        })
        .catch((err) => reply(err));
    },

    login: function (request, reply) {
      UserService.login(request.payload.email)
        .then((res) => {
          if(res){
            reply('login success');
          }
          else{
            reply('failed to login');
          }
        })
        .catch((err) => reply(err));
    },
    test: function (request,reply){
      // console.log(server.plugins);
      // console.log(server.plugins.pluginTwo);
      reply('route after auth success');
    }
  };

};