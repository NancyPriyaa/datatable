const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('file_info.db'); 


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS file_names (
            id INTEGER PRIMARY KEY,
            name TEXT
        )
    `);
    for (let i = 1; i <= 8; i++) {
        db.run('INSERT INTO file_names (name) VALUES (?)', [name]);
        console.log(`Created file: ${name}`);
    

  
    db.run(`
        CREATE TABLE IF NOT EXISTS file_details (
            id INTEGER PRIMARY KEY,
            date DATE,
            file_name TEXT,
            additional_data TEXT,
            file_name_id INTEGER,
            FOREIGN KEY (file_name_id) REFERENCES file_names(id)
        )
    `);
});

db.close();
