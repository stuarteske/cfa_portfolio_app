Ext.define('app.view.categories.CategoriesContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeCategoriesContainerView',

    requires: [
        'Ext.Container',
        'app.view.categories.CategoriesSidebarContainerView',
        'app.view.categories.CategoriesPortSelectorDataView'
    ],

    config: {
        fullscreen: true,
        layout: 'hbox',

        items: [{
            xtype:'xtypeCategoriesSidebarContainerView'
        }, {
            xtype: 'xtypeCategoriesPortfolioSelectorDataView',
            flex:1
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.categories.CategoriesContainerView');

        this.callParent(arguments);
    }
});