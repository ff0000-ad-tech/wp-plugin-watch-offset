const debug = require('@ff0000-ad-tech/debug')
var log = debug('wp-plugin-watch-offset')

const pluginName = 'FAT Watch Offset Plugin'

function WpPluginWatchOffset() {}

WpPluginWatchOffset.prototype.apply = function(compiler) {
	const timefix = 11000

	// offset start-time
	compiler.hooks.watchRun.tapAsync(pluginName, (watching, callback) => {
		log(`advance start-time by ${timefix / 1000}s - avoids generated files triggering watch cycle`)
		watching.startTime += timefix
		callback()
	})

	// restore start-time
	compiler.hooks.done.tap(pluginName, stats => {
		log(`restore start-time`)
		stats.startTime -= timefix
	})
}

module.exports = WpPluginWatchOffset
