# express-crud
Demonstrate the structuring of an Express.JS application


Overview
--------

Create the directory structure for each module:

        my_module
            +-- module.js
            +-- model.js
            +-- routes.js

The `index.js` exports only the stuff that you want to be exposed 
to the outside of the module to ensure data encapsulation:

        module.exports = {
            routes: require('./routes')
        };
        
In your `app.js`, import the module and use routes (or other objects) from the module:
 
        var my_module = require('./my_module');
        app.use('/my_module', my_module.routes);

