// DepartmentCategorySelectorDataView.js
Ext.define('app.view.departments.DepartmentCategorySelectorDataView', {
    extend: 'Ext.dataview.DataView',

    xtype: 'xtypeDepartmentCategorySelectorDataView',

    requires: [
        'Ext.dataview.DataView'
    ],

    config: {
        width: '200px',

        store:  {
            xtype: 'xtypeCategoriesDataStore'
        },
        itemTpl: '<div class="categoryItem" data-id="{slug}"><img src="{image}" /></div>'
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.common.DepartmentCategorySelectorDataView');

        this.callParent(arguments);
    }
});