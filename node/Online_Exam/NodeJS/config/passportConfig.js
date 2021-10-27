const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Admin = mongoose.model('admin');

passport.use(
    new localStrategy({ usernameField: 'emp_no' },(username, password, done) => {
            Admin.findOne({ emp_no: username },
                (err, user) => {
                    if (err)
                        return done(err);
                    // unknown user
                    else if (!user)
                        return done(null, false, { message: 'Employee is not registered' });
                    // wrong password
                    else if (!user.verifyPassword(password))
                        return done(null, false, { message: 'Wrong password.' });
                    // authentication succeeded
                    else
                        return done(null, user);
                }); 
        })
);