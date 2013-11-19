Ext.define('app.view.departments.DepartmentSidebarSelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeDepartmentSidebarSelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        title: 'DataView Demo',
        width: '200px',

        store:  {
            xtype: 'xtypeDepartmentDataStore'
        },
        itemTpl: '<div class="navItem" data-id="{departmentId}"><span>{title}</span></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.common.DepartmentSidebarSelectorDataView');

        this.callParent(arguments);
    }
});