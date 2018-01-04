const debug = require('debug')
var log = debug('wp-plugin-watch-offset')

function WpPluginWatchOffset() {}

WpPluginWatchOffset.prototype.apply = function(compiler) {
	const timefix = 11000

	// offset start-time
	compiler.plugin('watch-run', (watching, callback) => {
		log(`advance start-time by ${timefix / 1000}s - avoids generated files triggering watch cycle`)
		watching.startTime += timefix
		callback()
	})

	// restore start-time
	compiler.plugin('done', stats => {
		log(`restore start-time`)
		stats.startTime -= timefix
	})
}

module.exports = WpPluginWatchOffset
