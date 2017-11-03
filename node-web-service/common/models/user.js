// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
var path = require('path');

module.exports = function (User) {
    //send verification email after registration
    User.afterRemote('create', function (context, userInstance, next) {
        console.log('> user.afterRemote triggered');
        let verifyHref = 'https://localhost:3000/api/users/confirm?uid=' +
            userInstance.id + '&redirect=/'
        var options = {
            type: 'email',
            to: userInstance.email,
            from: 'noreply@wushuu.com',
            subject: '感谢注册cecep.wushuu.com',
            template: path.resolve(__dirname, '../../server/views/verify.ejs'),
            redirect: '/verified',
            verifyHref: verifyHref,
            user: userInstance
        };

        userInstance.verify(options, function (err, response, next) {
            if (err) return next(err);

            console.log('> verification email sent:', response);

            context.res.send('Please check your email and click on the verification link ' +
                'before logging in.')
        });
    });

    User.afterRemote('prototype.verify', function (context, user, next) {
        context.res.send('A Link to reverify your identity has been sent ' +
            'to your email successfully\n' +
            'Please check your email and click on the verification link ' +
            'before logging in'
        )
    });
    
};
