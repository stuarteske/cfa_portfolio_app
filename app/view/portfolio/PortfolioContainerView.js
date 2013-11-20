Ext.define('app.view.portfolio.PortfolioContainerView', {
    extend: 'Ext.Container',

    xtype: 'xtypePortfolioContainerView',

    requires: [
        'Ext.Container',
        'app.view.portfolio.PortfolioPageScrollContainerView'
    ],

    config: {

//        items: [
//            Ext.create('Ext.Carousel', {
//            fullscreen: true,
//
//            defaults: {
//                styleHtmlContent: true
//            },
//
//            items: [
//                {
//                    html : 'Item 1',
//                    style: 'background-color: #759E60'
//                },
//                {
//                    html : 'Item 2',
//                    style: 'background-color: #5E99CC'
//                }
//            ]
//        })]
    },

    initialize: function( obj, eOpts ) {
        console.log('Init: app.view.portfolio.PortfolioContainerView');

        this.callParent(arguments);
    }
});