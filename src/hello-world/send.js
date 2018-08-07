'use strict';

const amqp = require('amqplib/callback_api');
const config = require('./config');

amqp.connect('amqp://' + config.rabbitMQServerIP, function(err, conn) {
    if (err) {
        throw err;
    }
  conn.createChannel(function(err, ch) {
    let q = 'hello';
    let msg = 'Hello World!';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, Buffer.from(msg));
    console.log(' [x] Sent %s', msg);
  });
  setTimeout(function() {
      conn.close(); process.exit(0);
    }, 500);
});
