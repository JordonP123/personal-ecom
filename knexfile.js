module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './backend/data.products.db3'
    },
    migrations: {
      directory: './backend/data/migrations'
    },
    seeds: {
      directory: './backend/data/seeds'
    },
  },
}
