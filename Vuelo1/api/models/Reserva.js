/**
 * Reserva.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tipoReserva:{
                type:'string'
            },
    responsableReserva:{
                type:'string'
            },
    fechaReserva:{
                type: 'Date'
            },
    fechaSalidaVueloIda:{
                type: 'Date'
    },
    fechaSalidaVueloVuelta:{
                type: 'Date'
    },
    ciudadOrigenReserva:{
                type: 'String'
    },
    ciudadDestinoReserva:{
                type: 'String'
    },
    cantidadPersonas:{
                type: 'String'
    },
    cantidadAdultos:{
                type: 'String'
    },
    cantidadNinios:{
                type: 'String'
    },
    cantidadBebes:{
                type: 'String'
    },
    personas:{
                collection: 'Persona',
                via: 'idReserva'
    },
    idVuelo:{
        model:'vuelo',
        defaultsTo: 1
    }

  }
};

