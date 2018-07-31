'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
	NODE_ENV: '"testing"',
	PUBLIC_URL: '"http://ocanx1rl9.bkt.clouddn.com/"',
})
