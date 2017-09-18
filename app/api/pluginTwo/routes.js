'use strict';

module.exports = function (server, options, controllers, components) {

  const { UserController } = controllers;
  const { PostSchema } = components.schema;

  return [{
    method: 'POST',
    path: '/login',
    config: {
      handler: UserController.login,
      description: 'login',
      tags: ['api']
    }
  },
  {
    method: 'POST',
    path: '/signUp',
    config: {
      handler: UserController.signUp,
      description: 'signup',
      tags: ['api'],
      validate: PostSchema
    }
  }, {
    method: 'GET',
    path: '/test',
    config: {
      handler: UserController.test,
      description: 'test auth',
      tags: ['api'],
      auth: 'simple'

    }
  }
  ];
};