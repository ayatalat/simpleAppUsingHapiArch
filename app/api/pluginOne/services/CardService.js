'use strict';

module.exports = function (server, options, components) {

  const { Card }=components.models;

  return {
    create: function (data) {
      return Card.create(data);
    },
    find: function (data){
      return Card.find(data);
    }

  };

};