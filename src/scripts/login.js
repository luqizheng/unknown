/**
 * Created by leo on 2015/12/10.
 */
/*var win = gui.Window;
 win.setResizable(true);*(*/
var Client = require('node-xmpp-client'),client;
var loginPanel = avalon.define({
    $id: "loginPanel",
    username: 'test1@localhost.localdomain',
    password: '123456',
    server: "192.168.1.10",
    login: function () {
        client = new Client({
            jid: loginPanel.username,
            password: loginPanel.password,
            host: loginPanel.server
        })
    }
})
var initClient=function(client)
{
    client.on('online', function () {
        console.log('online')
    })
    client.on('stanza', function (stanza) {
        console.log('Incoming stanza: ', stanza.toString())
    })
    client.on('error', function (e) {
        console.error(e)
    })
}

