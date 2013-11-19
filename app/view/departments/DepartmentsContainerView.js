Ext.define('app.view.departments.DepartmentsContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeDepartmentsContainerView',

    requires: [
        'Ext.Container',
        'app.view.departments.DepartmentsSidebarContainerView',
        'app.view.departments.DepartmentCategorySelectorDataView'
    ],

    config: {
        fullscreen: true,
        layout: 'hbox',

        items: [
            {xtype:'xtypeDepartmentsSidebarContainerView'},
            {
            flex:1,
            xtype: 'xtypeDepartmentCategorySelectorDataView'
            }
        ]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.departments.DepartmentsContainerView');

        this.callParent(arguments);
    }
});