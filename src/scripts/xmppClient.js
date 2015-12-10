/**
 * Created by leo on 2015/12/4.
 */
  
var Client = require('node-xmpp-client')
/*jid: 'me@example.com',
  password: 'secret',
  preferred: 'PLAIN',*/
var client = new Client({
    jid: 'test1@localhost.localdomain',
    password: '123456',
    host:"192.168.1.10",	
})
client.on('online', function() {
	
    console.log('online')
})

client.on('stanza', function(stanza) {
    console.log('Incoming stanza: ', stanza.toString())
})
client.on('error', function (e) {
  console.error(e)
 
})