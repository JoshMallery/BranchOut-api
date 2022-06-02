// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/BranchOut-db',
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/dev'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://nysijhrhxqorto:06688653c5bc369d3ef4ec9eb6a5d4848685bbf135a2653b38c8b25733ceda60@ec2-44-196-174-238.compute-1.amazonaws.com:5432/d5mgcmla889j0o',
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds/dev'
    },
    useNullAsDefault: true
  }

};
