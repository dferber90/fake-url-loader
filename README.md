# fake-url-loader

This works exactly like [url-loader](https://github.com/webpack/url-loader), except it doesn't actually emit any files.

## Deprecation Notice

[url-loader](https://github.com/webpack/url-loader) passes its arguments to [file-loader](https://github.com/webpack/file-loader) when it should emit a file. Because *file-loader* now supports not emitting files when used with `emitFile=false`, *fake-url-loader* has been deprecated.

To upgrade, use `url-loader?emitFile=false` instead.

See [webpack/file-loader#74](https://github.com/webpack/file-loader/pull/74).
