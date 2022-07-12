var express = require('express');
const { getAllUsers, getOneUser, createUser, userLogin } = require('../controllers/users');
const { createTopic, editTopic, getOneTopic, getAllTopics, deleteOneTopic } = require('../controllers/topics');
const user = require('../models/user');

module.exports = (app) => {
    app.get('/users', getAllUsers);
    app.get('/users/:id', getOneUser);
    app.get('/topics', getAllTopics);
    app.get('/topics/:id', getOneTopic);
    app.post('/topics/create', createTopic);
    app.post('/users/signUp', createUser)
    app.post('/users/login', userLogin)
    app.put('/topics/:id', editTopic)
    app.delete('/topics/:id', deleteOneTopic)
}
