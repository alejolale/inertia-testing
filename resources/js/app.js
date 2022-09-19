import React from 'react'
import {render} from 'react-dom'
import {createInertiaApp} from '@inertiajs/inertia-react'

import '../css/app.css';//import the app css

createInertiaApp({
    resolve: async (name) => {
        return (await import(`./Pages/${name}`)).default
    },
    setup({el, App, props}) {
        render(React.createElement(App, props), el)
    },
})
