'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	PUBLIC_URL: '"http://ocanx1rl9.bkt.clouddn.com/"',
})
