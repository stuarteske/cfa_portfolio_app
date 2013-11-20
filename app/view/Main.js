Ext.define('app.view.Main', {
    extend: 'Ext.Container',

    xtype: 'xtypeMainView',

    requires: [
        'Ext.Container',
        'app.view.MainPreApp',
        'app.view.departments.DepartmentsContainerView',
        'app.view.categories.CategoriesContainerView',
        'app.view.portfolio.PortfolioContainerView',
        'app.view.portfolio.PortfolioPageScrollContainerView'
    ],

    config: {
        //fullscreen: true,
        layout: 'card',
        id: 'idMainContainer',
        style:'background-color:#ffffff;',
        items: [{
            xtype: 'xtypePortfolioPageScrollContainerView'
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.Main');

        this.callParent(arguments);
    }
});
