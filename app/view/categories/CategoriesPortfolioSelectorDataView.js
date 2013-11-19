Ext.define('app.view.categories.CategoriesPortfolioSelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeCategoriesPortfolioSelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        width: '200px',

        store:  {
            xtype: 'xtypePortfolioDataStore'
        },
        itemTpl: '<div class="portfolioItem" data-id="{slug}"><img src="{selectorImage}" /></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.categories.CategoriesPortfolioSelectorDataView');

        this.callParent(arguments);
    }
});