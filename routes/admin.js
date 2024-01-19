const express = require('express');
const router = express.Router();
const path = require('path');

const users = [];

// /admin/add-user with GET request
router.get('/add-user', (req, resp, next) => {
    // resp.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
    resp.render('add-user', {pageTitle: 'Admin Dashboard'});
});

// /admin/add-user with POST request
router.post('/add-user', (req, resp, next) => {
    // console.log(JSON.stringify(req.body));
    users.push({userName: req.body.userName});
    resp.redirect('/admin');
});

router.get('/', (req, resp, next) => {
    console.log(users);
    // resp.sendFile(path.join(__dirname, '..', 'views', 'admin-home.html'));
    resp.render('admin-home', {
        pageTitle: 'Admin Dashboard',
        users: users
    });
});

module.exports = router;
// exports.routes = router;
// exports.users = users;