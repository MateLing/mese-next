'use strict';

var mongodb = require('mongodb').MongoClient;

var dbStorage = {};
var memStorage = {
    users: {},
    games: {},
};

module.exports.init = function (callback) {
    mongodb.connect('mongodb://localhost/mese', function (err, db) {
        if (err) {
            throw err;
        } else {
            dbStorage.users = db.collection('users');
            dbStorage.games = db.collection('games');
            callback();
        }
    });
};

module.exports.access = function (lv1, lv2) {
    return {
        staticGet: function (key, callback) {
            dbStorage[lv1].find({
                id: lv2
            }).toArray(function (err, docs) {
                if (err) {
                    throw err;
                } else if (docs.length == 1) {
                    callback(docs[0][key]);
                } else {
                    callback(undefined);
                }
            });
        },
        staticSet: function (key, value, callback) {
            var op = {$set: {}};
            op.$set[key] = value;

            dbStorage[lv1].updateOne({
                id: lv2
            }, op, {upsert: true}, function (err, doc) {
                if (err) {
                    throw err;
                } else {
                    callback(doc);
                }
            });
        },
        dynamicGet: function (key) {
            if (!memStorage[lv1][lv2]) {
                return;
            }

            return memStorage[lv1][lv2][key];
        },
        dynamicSet: function (key, value) {
            if (!memStorage[lv1][lv2]) {
                memStorage[lv1][lv2] = {};
            }

            memStorage[lv1][lv2][key] = value;
        },
    };
};