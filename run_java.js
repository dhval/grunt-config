module.exports = {
    javac: {
        command: "javac",
        javaOptions: {
            "d": "bin"
        }
    },
    java: {
        command: "java",
        javaOptions: {
            classpath: ["bin"]
        }
    }
};