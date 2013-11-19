Ext.define('app.store.CategoriesData', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.SessionStorage'
    ],

    xtype: 'xtypeCategoriesDataStore',

    config: {
        model: 'app.model.CategoryEntity',
        storeId: 'idCategoriesDataStore',
        autoLoad: true,
        sorters: [{
            property: 'title',
            direction: 'ASC'
        }],
        proxy: {
            type: 'sessionstorage',
            id: 'categoriesproxy'
        },
        data: [{
            department: 'design',
            title: 'Print Design',
            slug: 'print-design',
            image: 'data:image/png;base64,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'
        }, {
            department: 'design',
            title: 'Art Design',
            slug: 'art-design',
            image: 'data:image/png;base64,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'
        }, {
            department: 'digital',
            title: 'PHP',
            slug: 'php',
            image: 'data:image/png;base64,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'
        }, {
            department: 'digital',
            title: 'CMS',
            slug: 'cms',
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzgAAACWCAYAAAASci2BAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMS8xOS8xM7R66osAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3Jrc0+zH04AAAyrSURBVHic7d0tl+LKFgbgunfdBYooUFGgutWMOv9fnzXitGIUo6ISFVRizhW90tMDVeGj6Q8qz+OGgZCGEvVSu3b958ePH/8GAACADPz3s28AAADgVgQcAAAgGwIOAACQDQEHAADIhoADAABkQ8ABAACyIeAAAADZEHAAAIBsCDgAAEA2BBwAACAbAg4AAJANAQcAAMiGgAMAAGRDwAEAALIh4AAAANkQcAAAgGwIOAAAQDYEHAAAIBsCDgAAkA0BBwAAyIaAAwAAZEPAAQAAsiHgAAAA2RBwAACAbAg4AABANgQcAAAgGwIOAACQDQEHAADIhoADAABkQ8ABAACyIeAAAADZEHAAAIBsCDgAAEA2BBwAACAbAg4AAJANAQcAAMiGgAMAAGRDwAEAALIh4AAAANkQcAAAgGwIOAAAQDYEHAAAIBsCDgAAkA0BBwAAyIaAAwAAZEPAAQAAsiHgAAAA2RBwAACAbAg4AABANgQcAAAgGwIOAACQDQEHAADIhoADAABkQ8ABAACyIeAAAADZEHAAAIBsCDgAAEA2BByADHVd99m3AACf4n+ffQMAn62u67Df70PbtqHv+xBCCLPZLBRFEZbLZSiK4uprt20bmqY5uvZ8Pn+5/nw+v8nf8dp2uw0hhFCWZVitVje//j3oui7sdruw3+9fHlsul2Gz2Zz1+r///vtN779YLMLj4+PFr0uNmaIoQlmW7zJeAHIi4ACT1bZt2O12L5PI1/q+D03ThKZpLpoUD2KT69fX7vs+7Pf7UFXVVdcfU1XVy9/069ev0DRNKMvyTUHt3tR1HX79+vWp93DpKtqpMTOMx7IsQ1mWt7pNgOwIOMAktW0bfv78edZzm6YJXdeFzWZz1q/nY8HpFtcf03VdqKrqj8f2+31ommYSAWcsJHxlXdeF7XZ71pipquplvABwzB4cYHK6rjs73Az2+33Y7XZnXfuScHPp9U85DDeDKfziX9d1eHp6urtwE0K4eMw0TZP8rgGmzgoOMDmpIDHsc+i6LjpJHkrKxsLC2ET1FtcfM+zdOPRe+3y+io9ctRm+w3MsFouznldVVfLel8tlcrwM5Y05f7cA1xBwgElp2zY6WZzNZuHx8fFlspgqYavrOhlAhmYFMev1+o/N/qnrvyXgTHH1pqqqD13JKIri5qVhsfs/HI+pPUVVVSlVAzigRA2YlNgKRwjhaP/L0OHsUN/3oW3b6DVSE+2Hh4ejTmZDR6yY1PXHpMJVzl23drvd3Zdp1XUdffzwe1utVtHxOOzfAuA3AQeYlFh4SJUdxSaUIYRokOi6LlqaNta97JLrn5JaBch59SZVAlaWZfj27dsH3811YoF7NptFW3unxss1gRggZwIOMCmxEJJa4Ug9HvvFfD6fh2/fvoWyLMNsNgshPE/AxwLGJdcf87ot9Gs5h5sQnlc1XoecIdjcy6pVam9N6tyioihextZrqVVJgKmyBwfgRubz+csZJXVdn9yMfovSoq7romVOqVWA3Gw2m5eziu4h1LyW+v7HmhMURXEUaJSoAfxJwAEmZbFYHP1qnpogph4/ZyJ9TrhIlRZdMlFvmia6evPeG8+3222yWcP379+PHv/nn3+i97lYLMLj4+PV9zGEynuUKkUc+/5j/9f3fei67u4CHsB7EXCASSmK4mhiOTQOOFxxSZX+pPZCXCq1QT5WhhQTO9QzhOfQ8N6HeqYm57HPsm3bZOvsezyzJoTf3fiGYDHs47okZFwToFNjQ8AB+E3AASZluVxGQ8FutztqE/2eZ8qk9s2EcN7qz3CNmGFF43DVZLlcfkhL4aZp/gg4Oe0Rads2uXoVwnO4POzIlxILOKfC7a32bQHkTJMBYFJSJU1934ftdht2u13YbrfRM2pu1ZWsrutkODl3dWgsgA3hIhWg3tvhfeXU5avv+9FVp/1+H56ens76m1PNKsak/v+zvmuAr0jAASZnaARwqO/70DRNdAI77BV56+pN13XRAxtf39s5Tq3evPcv+uv1OiyXy2QgGxofpMrTFotFWC6XYb1ev+t9fpafP39+6KqKFRyA35SoAZM0tHMeCxuvn3uLlZuu68J2u03+/3q9PitAfYVDPVer1UspXSzE7Pf7sFqtkue8vKWxwL0Yyh5Trll1sc8G4DQBB5ikqqqSqyCx54bw9nNldrtdclK7XC7ftPfmsHzuI3/RL8vyKCg2TRPKsowGnHvtejaYzWZhs9mEoihC13WhbdtoUN7v96Gu64vadQswAG+nRA2YnEvCzVte89put0vu3bhkb89XPNTz8MDNQSqI3cv5PA8PD38c3BrCc2nd9+/fX/Y5zefzsFqtwsPDQ/QaOTVYALgXVnCASWnbNjnxHn6Vb9s2utpSVdVVLZirqhqd6J67tyfVFjoWGj56T0ZZlkeNGWJ/80d0cbuVoihCURShLMuXlZpUOCuKInrG0utW0gB8DCs4wKTsdrujx4Y9IUNwKYoiPD4+Rlv2xl4/JhWoBufuuwkh3VjgK4SGYYI/5iPO53kvw0rNmFTDBQ0AAD6WgANMRqqj12q1OgoZqQntcJDlObquGw1EZVmeXa7VdV10RSQVGj6jbfCpMrl733tzSiqojpUmHjoVhoQlgNMEHGAyUmViqV/eU4+fu69irKnAYrG4aMKfCkpfKTQURTH6Wd7r6s25PvMQTiVwAL/ZgwNMRmzlZTabJSeH8/k8zGazo5ByzgpOqpXz8J6XlpWlrhU7kDSlaZqXcPbXX39d9P7nSn02OR32mXJpyJjP50dj69oVnNhqEMBUWcEBJiO2mnLNyfGnyr9OHeZ5iwNDv6K6rpOfTd/3L4d/8uzasXXutQCmSsABJu2agHPKrZoK3JtTbbTf0mY7R9eUtKUCUK5jCuAaAg4wGbfa1D1WDtS27ehen3s5A+ZSqfN5XrvHVZyhZfh2uz353EtXV1Jd58bGpBUcgNPswQEm41Z7HsYmk6lVimv23byW2ryfEgtZs9ksFEXxLpPhWHBZr9dHpXpVVd1FyBvae7/e+9S27WijhEv3x4x1XUu9T2wv06n23ABTI+AAk1EUxdFm/aHtc2xCmWorPTb5TDUDeOtZNZe+PhZwiqJ4lzNzYqs3i8UirFar0DTNH59J3/ehqqov1f0t5vC+Q3j+O68JOKnXzOfz6OGgdV1HP5/UeLw0/ALkTokaMBmpiWBq1SX1+KXto3Nukdx1XfRzGj6j2GdVVdWXP88ldt/7/X50H1Hs/8a69KXeJ3XWUmp85Tq2AK4l4ACTMfxifig2cT0sTxosFovohDV1EGcIX+usmltLTfiHMrTVahUt0frqDQeKooiOlaqqoveeOvPoVDle6v93u90fIbCu6+j4Wi6X9t8AHFCiBkxKWZbRs2Oqqgp1XYeiKJKlQCGkS8VS57zMZrOLJvPz+fzLB6LXZ/ykJt2vFUVx9Lzh37f6e89dFRqaBgzG3v+csTJcMzVezikfK8vyaIz0fR+enp7CcrkMXdclSx+/+lgB+AwCDjApRVFEJ5QhPE8qU6swITxPJlO/lqded+qaqff5ysbO+AnheFJflmX0Mxgeu1XAOUfs+0i9f1EUYblcRu/9nO/13JbgZVkm929dOx4BpkyJGjA5ZVlevDF7uVyOTsS/+p6Sj7JYLI72hKRKA+/BZrO5ahN/WZYXdYvbbDaj7ccPnRqPAFMm4ACTtNlswnq9Puu56/X6ZPexU2fATEUqDNxzp6/NZnN2mJjNZmG9Xl8cPubzeXh8fDwrCJZl+S7d8AByoUQNmKzVavWyP6Rt29B1Xej7/qXz1VCidE4ZUKqUKUex1saD1KrFarWKlrZdsmrxmYZVv8OxEsLvTmlvPch1CDnDYbGv9/YMZxgpSwM47T8/fvz497NvAgAA4BaUqAEAANkQcAAAgGwIOAAAQDYEHAAAIBsCDgAAkA0BBwAAyIaAAwAAZEPAAQAAsiHgAAAA2RBwAACAbAg4AABANgQcAAAgGwIOAACQDQEHAADIhoADAABkQ8ABAACyIeAAAADZEHAAAIBsCDgAAEA2BBwAACAbAg4AAJANAQcAAMiGgAMAAGRDwAEAALIh4AAAANkQcAAAgGwIOAAAQDYEHAAAIBsCDgAAkA0BBwAAyIaAAwAAZEPAAQAAsiHgAAAA2RBwAACAbAg4AABANgQcAAAgGwIOAACQDQEHAADIhoADAABkQ8ABAACyIeAAAADZEHAAAIBsCDgAAEA2BBwAACAbAg4AAJANAQcAAMiGgAMAAGRDwAEAALIh4AAAANkQcAAAgGwIOAAAQDYEHAAAIBsCDgAAkA0BBwAAyIaAAwAAZOP/WjOwDZZ3NDEAAAAASUVORK5CYII='
        }]
    }
});