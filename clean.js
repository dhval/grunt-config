module.exports = {
    dist: {
        src: ["<%= targetDir %>"]
    },
    base: {
        src: ['dist/base-css']
    },
    build: {
        dot: true,
        src: ['dist/angular-ui-bootstrap/*', '!dist/angular-ui-bootstrap/dist/**',
            'dist/modernizr/*', '!dist/modernizr/modernizr.js',
            'dist/respond/*', '!dist/respond/respond.min.js'
        ]
    }
};