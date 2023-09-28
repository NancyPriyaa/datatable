const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('file_info.db');
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT
        )
    `);

   
    for (let i = 1; i <= 8; i++) {
        const filename = `file${i}.txt`;
        fs.writeFileSync(filename, `This is text file ${i}`);
        db.run('INSERT INTO files (filename) VALUES (?)', [filename]);
        console.log(`Created file: ${filename}`);
    }

   
    db.close();
});
