/**
 * Admin.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username:{
                type:'string',
                defaultsTo: 'admin'
            },
    password:{
                type:'string',
                defaultsTo: 'admin'
            },
    vuelos:{
                collection: 'Vuelo',
                via: 'idAdmin'
            }

  }
};

