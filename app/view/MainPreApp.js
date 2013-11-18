Ext.define('app.view.MainPreApp', {
    extend: 'Ext.Container',

    xtype: 'xtypeMainPreApp',

    requires: [
        'Ext.Container',
        'app.view.departments.DepartmentsContainerView'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        id: 'idMainPreApp',

        layout: {
            type: 'card'
        },

        items: [{
            html: 'Loading App Data',
            style: 'background-color: #999999;'
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.MainPreApp');

        this.callParent(arguments);
    }
});