// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations'},
    seed: { directory: './data/seeds'},
    connection: {
      filename: './data/lotr.db3'
    }
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations'},
    seeds: { directory: './data/seeds'},
    connection: {
      filename: './data/test.db3'
    }
  }

};
