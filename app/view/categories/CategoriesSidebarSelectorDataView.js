Ext.define('app.view.categories.CategoriesSidebarSelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeCategoriesSidebarSelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        width: '200px',

        store:  {
            xtype: 'xtypeCategoriesDataStore'
        },
        itemTpl: '<div class="navItem" data-id="{slug}"><span>{title}</span></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.categories.CategoriesSidebarSelectorDataView');

        this.callParent(arguments);
    }
});