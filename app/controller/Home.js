Ext.define('app.controller.Home', {
    extend: 'app.controller.Base',

    require: [
        'app.view.Main',
        'app.view.MainPreApp',
        'app.view.departments.DepartmentsContainerView'
    ],

    config: {
        refs: {
            mainView: 'xtypeMainView',
            mainPreAppView: 'xtypeMainPreApp'
        },
        control: {
            mainPreAppView: {
                show: 'onMainPreAppShow'
            }
        },
        routes: {
            '': 'navigateHomeView'
        }
    },

    init: function () {
        console.log('INIT: app.controller.Home');

        // Event Listener
        this.on('initDataLoaded', function(event) {

            //this.changePage(parentView, childView, transitionType, popPreviousView);
            //this.changePage('', '', '', '');

            //this.getMainView().add({xtype: 'xtypeDepartmentsContainerView'});
            //console.log(this.getMainView());

            //window.location.hash = "#departments";
        });
    },

    launch: function (app) {
        console.log('LAUNCH: app.controller.Home');
    },


    // Events

    onMainPreAppShow: function () {
        console.log('Show: app.view.MainPreApp');

        this.fireEvent('initDataLoaded', this);
    },


    // Navigation

    navigateHomeView: function() {
        console.log('NAV: home');
    }
});
