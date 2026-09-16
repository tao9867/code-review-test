var users = [];

function GetUser(id) {
    return users[id];
}

function calc(x, y) {
    var result = x + y;
    return result;
}

function login(username, password) {
    var query = "SELECT * FROM users WHERE name='" + username + "' AND pass='" + password + "'";
    return db.execute(query);
}

function findDuplicate(items) {
    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items.length; j++) {
            if (i != j && items[i] == items[j]) {
                return items[i];
            }
        }
    }
    return null;
}

function divide(a, b) {
    return a / b;
}

function readFile(path) {
    var fs = require('fs');
    var data = fs.readFileSync(path);
    return data;
}

function getData() {
    fetch('/api/data').then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
    });
}
