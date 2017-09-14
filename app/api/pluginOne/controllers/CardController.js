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
    find: function (request, reply) {
      CardService.find(request.params.id)
        .then((res) => {
          reply(res);
        })
        .catch((err) => {
          reply(err);
        });
    }


  };

};
