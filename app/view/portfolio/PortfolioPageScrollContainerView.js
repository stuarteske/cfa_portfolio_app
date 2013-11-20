Ext.define('app.view.portfolio.PortfolioPageScrollContainerView', {
    extend: 'Ext.Carousel',

    xtype: 'xtypePortfolioPageScrollContainerView',

    requires: [
        'Ext.Carousel'
    ],

    config: {
        fullscreen: true,

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                html : 'Item 1',
                style: 'background-color: #5E99CC'
            },
            {
                html : 'Item 2',
                style: 'background-color: #759E60'
            },
            {
                html : 'Item 3'
            }
        ]
    },

    initialize: function( obj, eOpts ) {
        this.callParent(arguments);

        console.log('Init: app.view.portfolio.PortfolioPageScrollContainerView');
    },

    show: function( obj, eOpts ) {
        this.callParent(arguments);

        var data = Ext.getStore('idDepartmentDataStore');
        //console.log(data.getCount());
        console.log(data.getData().getCount());
    }
});