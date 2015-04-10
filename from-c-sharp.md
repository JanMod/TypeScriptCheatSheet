For C# Developers
#############

## Language Keyword Comparison

Typescript | C-Sharp
--- | --- | ---
`module` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L3)| `namespace`
`export` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L11)| `public` (as in `public class`)
`static` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L19) | `static`
`class` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L9) | `class`
`interface` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/interfaces/ITodoStorage.ts#L4) | `interface`
`function` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/directives/TodoFocus.ts#L9)| n/a
`constructor() { .. }` | `ClassName() { .. }`
`private` | `private` (implicit in C#)
`public` (implicit in TypeScript) | `public`
`this`* | `this`
`new` | `new`
`implements` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L9)| `:` (as in an interface)
`extends` | `:` (as in a class)
`/// <reference path='../_SomeModuleDevinition.ts' />`* | `using SomeNamespace`
`variableArgumentParameter: string` | `string variableArgumentParameter`
`{ property1: 'something' }` | `new { property1 = "something" }`
`someMethod(anyArg: any){ ..}` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L17) | `public someMethod(object anyArg){ .. }`

* with some caveats, of course.

## Similarities

Static Typing
Classes
Generics

## Differences

Instead of using statements in c#, there are typings and requires.
Not all types are represented

## Examples (side by side comparison)


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
