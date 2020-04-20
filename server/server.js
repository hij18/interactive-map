const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const server = express();
const template = fs.readFileSync('./dist/index.html');

const util = require('util');
const MongoClient = require('mongodb').MongoClient;

const url = util.format(
    'mongodb://%s:%s@%s/?replicaSet=%s&authSource=%s&ssl=true',
    'infantry',
    'Pshmx18051993',
    [
        'rc1a-r5oxq49rya97q7rt.mdb.yandexcloud.net:27018'
    ].join(','),
    'rs01',
    'db1'
)

const options = {
    useNewUrlParser: true,
    replSet: {
        sslCA: fs.readFileSync(
        '/usr/local/share/ca-certificates/Yandex/YandexInternalRootCA.crt')
    }
}


MongoClient.connect(url, options, function(err, db) {
    const dbo = db.db("db1");
    console.log('QQQ', dbo);
});


server.use(express.static('./dist'));

server.get('*', (req, resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.send(template);
});

server.listen(3002);

server.use(express.json());
server.use(express.urlencoded({extended: false}));

app.use('/api/coords', require('./routes/coords'));
