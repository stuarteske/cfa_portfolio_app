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
        itemTpl: '<div class="navItem" data-id="{slug}"><span>{title}</span></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.departments.DepartmentSidebarSelectorDataView');

        this.callParent(arguments);
    }
});