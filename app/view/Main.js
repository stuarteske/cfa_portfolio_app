Ext.define('app.view.Main', {
    extend: 'Ext.Container',

    xtype: 'xtypeMainView',

    requires: [
        'Ext.Container',
        'app.view.MainPreApp',
        'app.view.departments.DepartmentsContainerView'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        id: 'idMainContainer',

        layout: {
            type: 'card'
        },

        items: [
            { xtype: 'xtypeDepartmentsContainerView' }
        ]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.Main');

        this.callParent(arguments);
    }
});
