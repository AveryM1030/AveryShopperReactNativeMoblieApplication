// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const listsTableName = 'lists';
const itemsTableName = 'items';
const listItemsTableName = 'list_items';
const usersTableName = 'users';

module.exports = {
    // declare function that will create the lists table
    createListsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    store TEXT,
                    date TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Lists table created sucessfully');
                },
                error => {
                    console.log('Error creating lists table ' + error.message);
                },
            );
        });
    },

    // declare functions that will insert a row into the lists table
    addList: async function (name, store, date) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${listsTableName} (name, store, date) VALUES ("${name}", "${store}", "${date}")`,
                // argument passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added sucessfully");
                },
                error => {
                    console.log('Error adding list ' + error.message);
                },
            );
        });
    },


    // declare function that will create the item table
    createItemsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${itemsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT(100),
                    price REAL,
                    quantity INTEGER
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Items table created sucessfully');
                },
                error => {
                    console.log('Error creating itmes table ' + error.message);
                },
            );
        });
    },

    // declare functions that will insert a row into the lists table
    addItem: async function (name, price, quantity) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${itemsTableName} (name, price, quantity) VALUES ("${name}", ${price}, ${quantity})`,
                // argument passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added sucessfully");
                },
                error => {
                    console.log('Error adding item ' + error.message);
                },
            );
        });
    },

     // declare function that will create the lists table
     createListItemsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${listItemsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    list_id INTEGER,
                    item_id INTEGER
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('List items table created sucessfully');
                },
                error => {
                    console.log('Error creating list items table ' + error.message);
                },
            );
        });
    },

    // declare functions that will insert a row into the list items table
    addListItem: async function (list_id, item_id) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${listItemsTableName} (list_id, item_id) VALUES (${list_id}, ${item_id})`,
                // argument passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log("List Item added sucessfully");
                },
                error => {
                    console.log('Error adding list items' + error.message);
                },
            );
        });
    },

    // declare function that will create the users table
    createUsersTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${usersTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT,
                    password TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Users table created sucessfully');
                },
                error => {
                    console.log('Error creating users table ' + error.message);
                },
            );
        });
    },

    // declare functions that will insert a row into the users table
    addUsers: async function (username, password) {
        // declare a transaction that will execute an SQL statement
        (await shopperDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${usersTableName} (username, password) VALUES ("${username}", "${password}")`,
                // argument passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(username + " " + password + " added sucessfully");
                },
                error => {
                    console.log('Error adding user ' + error.message);
                },
            );
        });
    },
};