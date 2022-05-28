module.exports = {
  apps : [{
    name: 'ginjack_nuxt',
    script: './node_modules/nuxt-start/bin/nuxt-start.js',
    instance: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    port: 3001
  }]
};
