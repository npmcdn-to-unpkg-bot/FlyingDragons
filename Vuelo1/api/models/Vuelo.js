/**
 * Vuelo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    codigoVuelo:{
         type:'string'
      },
      fechaSalidaVuelo:{
          type:'Date'
      },
      fechaLlegadaVuelo:{
          type:'Date'
      },
      origenVuelo:{
          type:'string'  
      },
      destinoVuelo:{
          type:'string'
      },
      escalasVuelo:{
          type:'string'
      },
      estadoVuelo:{
          type:'string'
      },
      vip1:{
          type:'integer',
          defaultsTo: 10
      },
      vip2:{
          type:'integer',
          defaultsTo: 10
      },
      vip3:{
          type:'integer',
          defaultsTo: 10
      },
      economica1:{
          type:'integer',
          defaultsTo: 50
      },
      economica2:{
          type:'integer',
          defaultsTo: 50
      },
      economica3:{
          type:'integer',
          defaultsTo: 50
      },
      economica4:{
          type:'integer',
          defaultsTo: 50
      },
      economica5:{
          type:'integer',
          defaultsTo: 25
      },
      idAdmin:{
          model:'Admin',
          defaultsTo:1
      },
      reservas:{
        model:'Reserva',
        via:'idVuelo'
      }

  }
};

