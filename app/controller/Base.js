Ext.define('app.controller.Base', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        }
    },

    init: function () {
        console.log('INIT: app.controller.Base');

        // Event Listener
        this.on('changePage', function(parentView, childView, transitionType, popPreviousView, event) {
            console.log('Event: changePage');

            this.changePage(parentView, childView, transitionType, popPreviousView);
        });
    },

    launch: function(app) {
        this.callParent(arguments);

        console.log('Launch: app.controller.Base');
    },

    changePage: function(parentView, childView, transitionType, popPreviousView) {
        console.log('Function: changePage');
    }
});
