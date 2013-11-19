Ext.define('app.view.categories.CategoriesSidebarContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeCategoriesSidebarContainerView',

    requires: [
        'Ext.Container',
        'app.view.common.SidebarLogoContainerView',
        'app.view.categories.CategoriesSidebarSelectorDataView'
    ],

    config: {
        layout: 'vbox',

        width: '200px',

        items: [
            {
                xtype:'xtypeSidebarLogoContainerView'
            },
            {
                xtype:'xtypeCategoriesSidebarSelectorDataView',
                flex: 1
            }
        ]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.categories.CategoriesSidebarContainerView');

        this.callParent(arguments);
    }
});