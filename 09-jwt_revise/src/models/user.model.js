const { Schema, model } = require("mongoose");

const userSchema = new Schema({

    username: {
        type: Schema.Types.String,
        required: true,

    },

    email: {
        type: Schema.Types.String,
        required: true,
        validate: {
            validator: val => val.includes('@'),
            message: () => "Email should be proper format"
        },
        unique: true
    },

    password: {
        type: Schema.Types.String,
        required: true
    },

    age: {
        type: Schema.Types.Number,
        required: true
    }
}, {
    versionKey: false
})

const UserModel1 = model("User1", userSchema)

module.exports = UserModel1;