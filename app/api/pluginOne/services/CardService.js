'use strict';

module.exports = function (server, options, components) {

  const { Card }=components.models;

  return {
    create: function (data) {
      return Card.create(data);
    },
    findById: function (data){
      return Card.findById(data);
    },
    find: function (){
      return Card.find();
    }

  };

};