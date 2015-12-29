module.exports = {
    vendor: {
        options: {
            sourceMap: true,
            compress: true,
            yuicompress: true,
            optimization: 2,
            relativeUrls: true
        },
        files: {
            'css/vendor.css': 'less/vendor.less'
        }
    },
    project: {
        options: {
            sourceMap: true,
            dumpLineNumbers: 'comments',
            relativeUrls: true
        },
        files: {
            'css/base.css': 'dist/base-css/base.less'
        }
    }
};