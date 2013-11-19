Ext.define('app.view.departments.DepartmentsSidebarContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeDepartmentsSidebarContainerView',

    requires: [
        'Ext.Container',
        'app.view.common.SidebarLogoContainerView',
        'app.view.departments.DepartmentSidebarSelectorDataView'
    ],

    config: {
        layout: 'vbox',

        width: '200px',

        items: [
            {
                xtype:'xtypeSidebarLogoContainerView'

            },
            {
                xtype:'xtypeDepartmentSidebarSelectorDataView',
                flex: 1
            }
        ]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.departments.DepartmentsSidebarContainerView');

        this.callParent(arguments);
    }
});