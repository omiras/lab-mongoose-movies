const { Schema, model } = require('mongoose');

const MAX_ALLOWED_LENGTH = 4000;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: MAX_ALLOWED_LENGTH

    },
    occupation: {
        type: String,
        default: "unknown"
    },
    catchPhrase: {
        type: String,
        reuired: true,
        maxLength: MAX_ALLOWED_LENGTH
    }
});

// Cuando creamos un Schema en Mongoose lo tenemos que relacionar con modelo. Mongoose se encargará de crear una colección en la base de datos con el mismo nombre pluralizado

// Ponemos Celebrity en mayúsculas porque es una convención
const Celebrity = model("celebrity", celebritySchema);

module.exports = Celebrity; // tenemos que exportar esta variable para que otras partes del proyecto puedan utilizarla