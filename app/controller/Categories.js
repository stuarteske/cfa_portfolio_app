Ext.define('app.controller.Categories', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        },
        routes: {
            'categories': 'navigateCategoriesView',
            'categories/:id': 'navigateCategoryView'
        }
    },

    init: function () {
        this.callParent(arguments);

        console.log('INIT: app.controller.Categories');
    },

    launch: function (app) {
        this.callParent(arguments);

        console.log('LAUNCH: app.controller.Categories');
    },

    navigateCategoriesView: function() {
        console.log('NAV: categories');
    },

    navigateCategoryView: function(id) {
        console.log('NAV: categories/:id');
    }

});
