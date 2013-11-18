Ext.define('app.controller.Settings', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            
        },
        routes: {
            'settings': 'navigateSettingsView',
            'setting/:id': 'navigateSettingItemView'
        }
    },

    init: function () {
        this.callParent(arguments);

        console.log('INIT: app.controller.Settings');
    },

    launch: function (app) {
        this.callParent(arguments);

        console.log('LAUNCH: app.controller.Settings');
    },

    navigateSettingsView: function() {
        console.log('NAV: settings');
    },

    navigateSettingItemView: function(id) {
        console.log('NAV: setting item');
    }
});
