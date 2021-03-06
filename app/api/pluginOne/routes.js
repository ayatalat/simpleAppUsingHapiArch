'use strict';

module.exports = function (server, options, controllers) {


  const { CardController } = controllers;

  return [

    {
      method: 'POST',
      path: '/pluginOne/card',
      config: {
        handler: CardController.create,
        description: 'create new card',
        tags: ['api']
      }
    },
    {
      method: 'GET',
      path: '/pluginOne/card/{id}',
      config: {
        handler: CardController.findById,
        description: 'list card by id'
      }
    },
    {
      method: 'GET',
      path: '/pluginOne/cards',
      config: {
        handler: CardController.find,
        description: 'list cards'
      }
    }
  ];
};