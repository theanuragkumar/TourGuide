import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MumbaiTourDB',
    location: 'default',
  },
  () => {},
  (error) => {
    console.error('Error opening database:', error);
  }
);

export const initializeDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Spots (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, latitude REAL, longitude REAL, description TEXT, image TEXT)'
    );
  });
};

export const addSpot = (name, latitude, longitude, description, image) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO Spots (name, latitude, longitude, description, image) VALUES (?, ?, ?, ?, ?)',
        [name, latitude, longitude, description, image],
        (_, results) => {
          resolve(results.insertId);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
};

export const fetchSpots = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM Spots', [], (_, results) => {
        const rows = results.rows.raw();
        resolve(rows);
      });
    });
  });
};
