var Sequelize = require('sequelize'),
    sequelize = new Sequelize("database", "admin", "12345", {
        dialect: "sqlite",
        logging: console.log,
        storage: 'db.sqlite'
    });

var user = sequelize.define(
    'user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: Sequelize.STRING(320),
        email: Sequelize.STRING(320),
        password: Sequelize.TEXT
    }, {
        indexes: [{
            unique: true,
            fields: [{attribute: 'username', length: 32}]
        }]
    });

sequelize.sync({
    "force": true,
    logging: console.info
}).then(function (a, b, c, d, e) {
    console.info("database synced", a,b,c,d,e);
}, function (error) {
    console.log('An error occurred while creating the table:', error);
});

module.exports = {
    user: user
};