Ext.define('app.view.departments.DepartmentsContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeDepartmentsContainerView',

    requires: [
        'Ext.Container',
        'app.view.departments.DepartmentsSidebarContainerView'
    ],

    config: {
        fullscreen: true,
        layout: 'hbox',

        items: [{xtype:'xtypeDepartmentsSidebarContainerView'},{
            flex:1,
            html: 'flex 1',
            style: 'background-color: #eeffdd;'
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.DepartmentsContainerView');

        this.callParent(arguments);
    }
});