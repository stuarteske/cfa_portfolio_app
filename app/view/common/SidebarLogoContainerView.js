Ext.define('app.view.common.SidebarLogoContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypeSidebarLogoContainerView',

    requires: [
        'Ext.Container'
    ],

    config: {
        layout: 'fit',

        width: '200px',
        height: '200px',

        items: [{
            html: 'logo 200x200px',
            style: 'background-color: #c0c0c0;'
        }]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.common.SidebarLogoContainerView');

        this.callParent(arguments);
    }
});