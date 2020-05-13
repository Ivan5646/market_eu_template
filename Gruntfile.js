module.exports = function(grunt) {
   grunt.initConfig({
      less: {
          style: {
             files: {
		        "css/style.css": "less/style.less"
             }
          }
       },
       autoprefixer: {
            options: {
                browsers: ["last 2 version", "ie 10"]
            },
            style: {
                src: "css/style.css"
            }
       },
       cmq: {
           style: {
              files: {
                  "css/style.css": ["css/style.css"]
              }
           }
       },
       cssmin: {
          style: {
              options: {
                 keepSpecialComments: 0,
                 report: "gzip"
              },
              files: {
                  "css/style.min.css": ["css/style.css"]
                  
              }
           }
       },
       csscomb: {
           style: {
               expand: true,
               src: ["less/style.less/"]
           },
           options: {
            "always-semicolon": true,
            "color-case": "lower",
            "block-indent": "    ",
            "color-shorthand": true,
            "element-case": "lower",
            "eof-newline": false,
            "leading-zero": true,
            "quotes": "single",
            "sort-order-fallback": "abc",
            "space-after-colon": " ",
            "space-after-combinator": " ",
            "space-between-declarations": "\n",
            "space-before-opening-brace": " ",
            "space-after-opening-brace": "\n",
            "space-after-selector-delimiter": " ",
            "space-before-selector-delimiter": "",
            "space-before-closing-brace": "\n",
            "strip-spaces": true,
            "tab-size": true,
            "vendor-prefix-align": true
        }
    },
});
    grunt.registerTask("build", [
           "less",
           "autoprefixer",
           "cmq",
           "cssmin",
           "csscomb",
       ]);

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-combine-media-queries');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-csscomb');
grunt.loadNpmTasks('grunt-contrib-copy');
};
