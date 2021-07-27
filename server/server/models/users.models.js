const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
                validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
        }
    },
    phone: {
        type: String,
        required: [true, 'Phone number required'],
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
        // NEED TO CONFIRM THAT VALIDATOR WORKS
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    }, 
    profileId: {
        type: Number,
        required: [true]
    }
}, {timestamps: true});



UserSchema.virtual('confirm')
    .get(() => this._confirm)
    .set(value => this._confirm = value);



UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Credentials must match');
    }
    next();
});



UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model("User", UserSchema);