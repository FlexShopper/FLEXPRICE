module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: [
            'lib/sizzle.js',
            'src/intro.js',
            'lib/fsutil.js',
            'src/widget.js',
            'src/price.js',
            'src/outro.js'
        ],
        dest: 'flexshopper.js'
     }
    },
    insertWidgetHtml: {
      options: {
        widgetHtml: "html/widget.html",
        popupHtml: "html/popup.html"
      },
    	dist: {
        src: 'flexshopper.js',
        dest: 'flexshopper.js'
      }
    },
    uglify: {
        dist: {
            src: 'flexshopper.js',
            dest: 'flexshopper.js'
        },
        options: {
            mangle: {
                except: ['_FlexPrice']
            }
        }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.registerTask('default', ["concat", "insertWidgetHtml", "uglify"]);
  grunt.registerTask('default', ["concat", "insertWidgetHtml"]);
  grunt.registerMultiTask('insertWidgetHtml', "Insert the widget HTML into the final JS", function() {
    var options = this.options({
      widgetHtml: "",
      popupHtml: ""
    });

    this.files.forEach(function(f) {
      src = f.src[0];
      dst = f.dest;
      srcJs = grunt.file.read(src);

        var widgetHtmlText = grunt.file.read(options.widgetHtml);
        htmlLines = widgetHtmlText.split('\n');
        jsString = ""
        for (i = 0; i < htmlLines.length; i++) {
            jsString += "WIDGET_HTML +='" + htmlLines[i].replace(/'/g, "\\'") + "';\n";
        }
        srcJs = srcJs.replace('/** WIDGET HTML **/', jsString);

        var popupHtmlText = grunt.file.read(options.popupHtml);
        htmlLines = popupHtmlText.split('\n');
        jsString = ""
        for (i = 0; i < htmlLines.length; i++) {
            jsString += "POPUP_HTML +='" + htmlLines[i].replace(/'/g, "\\'") + "';\n";
        }
        srcJs = srcJs.replace('/** POPUP HTML **/', jsString);

        grunt.file.write(f.dest, srcJs);
      grunt.log.writeln('File ' + f.dest + ' was injected with widget html');
    })
  });
}