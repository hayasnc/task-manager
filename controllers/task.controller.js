const Task = require('../models/task.model');
const uuid = require('uuid-v4');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.task_create = function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    let task = new Task(
        {
            text: req.body.text,
            id: uuid(),
          completed: false,
            importance: true,
            userId: req.session.user._id
        }
    );

    task.save(function (err,task) {
        if (err) {
            return next(err.message);
        }
        return res.send(task);
    })
};

exports.task_details = function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    Task.findById(req.params.id, function (err, task) {
        if (err) return next(err);
        res.send(task);
    })
};

exports.task_update = function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, task) {
        if (err) return next(err);
        res.send(task);
    });
};

exports.task_delete = function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

exports.get_user_tasks = function (req, res, next) {
    if(!req.session.user){
        return res.status(401).send();
    }
    Task.find({ userId: req.params.id }, function (err, task) {
        if (err) return next(err);
        return res.send(task);
    })
};