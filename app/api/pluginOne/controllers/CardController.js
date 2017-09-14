'use strict';

module.exports = function (server, options, services) {

  const { CardService } = services;
  return {
    create: function (request, reply) {
      CardService.create(request.payload)
        .then((res) => {
          reply(res);
        })
        .catch((err) => {
          reply(err);
        });
    },
    findById: function (request, reply) {
      CardService.findById(request.params.id)
        .then((res) => {
          reply(res);
        })
        .catch((err) => {
          reply(err);
        });
    },
    find: function (request, reply){
      CardService.find()
        .then((res) => {
          reply(res);
        })
        .catch((err) => {
          reply(err);
        })
    }


  };

};
