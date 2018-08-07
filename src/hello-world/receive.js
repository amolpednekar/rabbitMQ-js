'use strict';

const amqp = require('amqplib/callback_api');
const config = require('./config');

amqp.connect('amqp://' + config.rabbitMQServerIP, function(err, conn) {
  conn.createChannel(function(err, ch) {
    let q = 'hello';
    ch.assertQueue(q, {durable: false});
    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
    ch.consume(q, function(msg) {
      console.log(' [x] Received %s', msg.content.toString());
    }, {noAck: true});
  });
});
