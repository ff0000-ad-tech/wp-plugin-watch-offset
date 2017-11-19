const debug = require('debug');
var log = debug('wp-plugin-watch-offset');


function WpPluginWatchOffset() {};


WpPluginWatchOffset.prototype.apply = function(compiler) {
	const timefix = 11000;

	// offset start-time
	compiler.plugin('watch-run', (watching, callback) => {
		log('WATCH-RUN time adjust');
		watching.startTime += timefix;
		callback();
	});

	// restore start-time
	compiler.plugin('done', (stats) => {
		log('DONE, time adjust back');
		stats.startTime -= timefix;
	});
};


module.exports = WpPluginWatchOffset;
