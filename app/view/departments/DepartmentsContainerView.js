Ext.define('app.view.departments.DepartmentsContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeDepartmentsContainerView',

    requires: [
        'Ext.Container'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        id: 'id-departments-container-view',

        layout: {
            type: 'card'
        },

        items: [{
            html: 'Departments Container View',
            style: 'background-color: #ffeedd;'
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.DepartmentsContainerView');

        this.callParent(arguments);
    }
});