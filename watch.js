module.exports = {
    gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
    },
    lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            "views/**/*.html",
            "js/**/*.js",
            "css/**/*.css",
            "mocks/*.html"
        ]
    },
    less: {
        files: ["less/*.less"],
        tasks: ["less"]
    },
    concat: {
        files: ["js/**/*.js"],
        tasks: ["concat:js"]
    }
};