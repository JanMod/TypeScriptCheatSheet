For C# Developers
#############

## Language Comparison

Typescript | C-Sharp
--- | --- | ---
`module` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L3)| `namespace`
`export` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L11)| `public` (as in `public class`)
`static` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L19) | `static`
`enum days { mon = 1, tue, wed, thu, fri }` | `enum days { mon = 1, tue, wed, thu, fri }`
`class` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L9) | `class`
`interface` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/interfaces/ITodoStorage.ts#L4) | `interface`
`function` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/directives/TodoFocus.ts#L9)| n/a
`constructor() { .. }` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/models/TodoItem.ts#L7)| `ClassName() { .. }`
`private` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L30)| `private` (implicit in C#)
`public` (implicit in TypeScript) [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/models/TodoItem.ts#L8)| `public`
`this`* [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L53)| `this`
`new` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L71)| `new`
`implements` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L9)| `:` (as in an interface)
`extends` | `:` (as in a class)
`/// <reference path='../_SomeModuleDevinition.ts' />`* [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/services/TodoStorage.ts#L1) | `using SomeNamespace`
`variableArgumentParameter: string` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L66)| `string variableArgumentParameter`
`{ property1: 'something' }` [ex](https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts#L96)| `new { property1 = "something" }`
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


Lab
===

Try to re-write this C# string calculator in TypeScript:

```c-sharp
namespace kata.specs
{
    public class StringCalculator
    {
        public int Calculate(string s)
        {
            if (s.Contains("-") && s.Contains("+"))
                return 0;

            if (s.Contains("-"))
            {
                var valuesSplitedByMinus = s.Split('-');
                var result = Convert.ToInt32(valuesSplitedByMinus.First());
                for (int i = 1; i < valuesSplitedByMinus.Length; i++)
                    result -= Convert.ToInt32(valuesSplitedByMinus[i]);

                return result;
            }

            var values = s.Split('+').Select(x => Convert.ToInt32(x));
            return values.Sum();
        }
    }
}
```

You can use the [TypeScript Playground](http://www.typescriptlang.org/Playground) to compile your TS to JS and then run the calculator. 

Hint: Add a line at the bottom of your TS to execute the `Calculate` method so that you can see the results when you run.
