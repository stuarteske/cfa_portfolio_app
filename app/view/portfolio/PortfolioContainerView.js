Ext.define('app.view.portfolio.PortfolioContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypePortfolioContainerView',

    requires: [
        'Ext.Container',
        //'app.view.departments.DepartmentsSidebarContainerView',
        //'app.view.departments.DepartmentCategorySelectorDataView'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',

        items: []
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.portfolio.PortfolioContainerView');

        this.callParent(arguments);
    }
});