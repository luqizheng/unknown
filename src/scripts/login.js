/**
 * Created by leo on 2015/12/10.
 */
/*var win = gui.Window;
 win.setResizable(true);*(*/
var Client = require('node-xmpp-client')

var loginPanel = avalon.define({
    $id: "loginPanel",
    username: 'test1@localhost.localdomain',
    password: '123456',
    login: function () {
        var client = new Client({
            jid: loginPanel.username,
            password: loginPanel.password,
            host: "192.168.1.10",
        })

    }
})

