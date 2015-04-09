For C# Developers
#############

## Similarities


## Differences


## Examples


## Progressive Enhancement


## Requirements

You have to add a "build" step to the process before your TypeScript files will "work".

Here's an example build step from a gulpfile.js:
```
gulp.task('build', ['clean'], function(){
	console.log("Compiling TypeScript files from the /src folder and placing new JavaScript files in the '"+buildFolder+"' folder.")		
	var tsc  = require('gulp-typescript')	
	return gulp.src(["typings/**/*.ts", "src/**/*.ts"])		
		.pipe(tsc({
		            module: 'commonjs',
		            declarationFiles: true,
		            emitError: true,
		            comments: true
		            }))		       
		.on('error', onError)
		.pipe(gulp.dest(buildFolder));		
});
```
