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
            validator: val => /^\d{3}-\d{3}-\d{4}$/.test(val),
            message: props => `${props.value} is not a valid phone number! Must be ###-###-####`
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],

        //////
        // minlength: [8, "Password must be 8 characters or longer"],
        // validate: {
        //     validator: val => /^[a-zA-Z]$/.test(val), 
        //     message: "Password must contain at least one letter AND one number"
        //     },
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    }, 
    picture: {
        type: String
    }
}, {timestamps: true});



UserSchema.virtual('confirm')
    .get(() => this._confirm)
    .set(value => this._confirm = value);



UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirm) {
        this.invalidate('confirm', 'Passwords must match');
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