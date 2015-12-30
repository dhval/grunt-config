module.exports = {
    install: {
        options: {
            verbose: "<%= bowerVerbose %>",
            layout: 'byComponent',
            targetDir: "<%= targetDir %>",
            cleanTargetDir: true,
            cleanBowerDir: false
        }
    }
};
// https://www.npmjs.com/package/grunt-bower-task