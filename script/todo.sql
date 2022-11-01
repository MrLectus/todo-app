CREATE TABLE IF NOT EXISTS todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task VARCHAR(200) NOT NULL,
    done BOOL
);

INSERT OR REPLACE INTO todo VALUES
    (1, 'First article', true),
    (2, 'Second article', true),
    (3, 'Last article', false)

