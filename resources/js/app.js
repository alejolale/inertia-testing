import React from 'react'
import {render} from 'react-dom'
import {createInertiaApp} from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
//import the app css
import '../css/app.css';
import Layout from "./Layouts/Layout";

InertiaProgress.init({ color: 'red', showSpinner: true})

createInertiaApp({
    resolve: async (name) => {
        let page =  (await import(`./Pages/${name}`)).default

        if (! page.layout){
            page.layout =  Layout
        }

        return page
    },
    setup({el, App, props}) {
        render(React.createElement(App, props), el)
    },
})
