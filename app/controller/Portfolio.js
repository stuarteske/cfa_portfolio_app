Ext.define('app.controller.Portfolio', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        },
        routes: {
            'portfolio': 'navigatePortfolioView',
            'portfolio/:id': 'navigatePortfolioItemView'
        }
    },

    init: function () {
        this.callParent(arguments);

        console.log('INIT: app.controller.Portfolio');
    },

    launch: function (app) {
        this.callParent(arguments);

        console.log('LAUNCH: app.controller.Portfolio');
    },

    navigatePortfolioView: function() {
        console.log('NAV: portfolio');
    },

    navigatePortfolioItemView: function(id) {
        console.log('NAV: portfolio/:id');
    }
});
