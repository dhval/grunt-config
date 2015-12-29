module.exports = {
    options: {
        stripBanners: true
    },
    css: {
        src: ['target/concat/**/*.css'],
        dest: 'out.css'
    },
    js: {
        options: {
            separator: ';\n'
        },
        files: {
            'js/directives.js': ["js/directives/directive.js", "js/directives/bingmap.js",
                "js/directives/autofill.js", "js/directives/displaydetails.js",
                "js/directives/formatpattern.js", "js/directives/inputmask.js",
                "js/directives/panel.js", "js/directives/autotab.js"
            ]
        }
    }
};