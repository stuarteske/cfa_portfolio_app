// DepartmentCategorySelectorDataView.js
Ext.define('app.view.departments.DepartmentCategorySelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeDepartmentCategorySelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        title: 'DataView Demo',
        width: '200px',

        store:  {
            xtype: 'xtypeCategoryDataStore'
        },
        itemTpl: '<div class="navItem" data-id="{departmentId}"><span>{title}</span></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.common.DepartmentCategorySelectorDataView');

        this.callParent(arguments);
    }
});