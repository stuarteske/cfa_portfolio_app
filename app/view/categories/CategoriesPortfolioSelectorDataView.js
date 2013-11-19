Ext.define('app.view.categories.CategoriesPortfolioSelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeCategoriesPortfolioSelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        width: '200px',

        store:  {
            xtype: 'xtypeCategoriesDataStore'
        },
        itemTpl: '<div class="categoryItem" data-id="{slug}"><img src="{image}" /></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.categories.CategoriesPortfolioSelectorDataView');

        this.callParent(arguments);
    }
});