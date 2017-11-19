##### RED Interactive Agency - Ad Technology

Webpack Plugin - Watch Offset
===============

Hack for the 10s window in which Webpack considers a file "modified".

Please see https://github.com/webpack/watchpack/issues/25 for complete story.

Credit to https://github.com/yessky for the fix https://github.com/yessky/webpack-mild-compile.

##Usage
**webpack.config.js**
```javascript
	...
	plugins: [
		// prevents generated files from triggering watch cycle
		new WpPluginWatchOffset(),
		...
	],
	...
```

