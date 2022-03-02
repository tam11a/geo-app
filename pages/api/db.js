var db = [];

export function getDB() {
  return db;
}

export function pushDB(data) {
  db.push({
    ...data,
    ts: Date.now(),
  });
}
