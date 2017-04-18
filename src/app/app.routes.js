"use strict";
var about_component_1 = require('./about.component');
var home_component_1 = require('./home.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    {
        path: 'about', component: about_component_1.AboutComponent,
        children: [
            { path: '', component: about_component_1.AboutContainerComponent },
            { path: 'item/:id', component: about_component_1.AboutItemComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map