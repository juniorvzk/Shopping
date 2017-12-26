/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mariaDBConnection',
  attributes:{
    name:{
      type:'string',
      required: true
    },

    email:{
      type: 'string',
      email: true
    },

    password:{
      type: 'string',
      email: true
    },

  },

  migrate: 'alter'




};
