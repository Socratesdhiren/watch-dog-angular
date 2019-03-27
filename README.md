# Prime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Install Dependencies

Run 'npm install'

## Development server

Run `ng serve` for a dev server. Navigate to `http:http://localhost:9000`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## Show component in sidebar

- Go to template html .

- Add new menu  and sub-menu  in layout-Sidebar
     like USER MANAGEMENT
     
- Create page inside pages according to new menu

- Route new pages in app.routes.ts

## For Lazy Loading

* blank-sample uses  lazy module routing.
* Steps to create lazy module.

1. For New lazy module and routing  `ng generate module moduleName --routing`

2. For generating component in module:
 
- ng g component path/moduleName --module=path/moduleName.module.ts


3. In ModuleName add the required module, For eg:- FormModule, InputModule etc

4. In ModuleName-routing add required path and component, For eg:
     {path: 'blank', component: BlankPageComponent}

5. In app.routing add 
     {loadChildren: './pages/blank-sample/samplemodule/samplemodule.module#SamplemoduleModule', path: "sample", canActivate: [CanActivateGuard]},

## For Production build:-
 
1. ` ng build --prod --base-href "/url-name/" `
     
## For Theme color change:-

1. go to ` theme.scss ` file

-  change the color in  ` layout-background-color:` black; 

