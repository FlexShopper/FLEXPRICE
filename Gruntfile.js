module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: ['src/sizzle.js', 'src/sdk.js'],
        dest: 'plugin.js'
     }
    },
    insertWidgetHtml: {
      options: {
        widgetHtml: "widget-html.html"
      },
    	dist: {
        src: 'plugin.js',
        dest: 'plugin.js'
      }
    }
  });



  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ["concat", "insertWidgetHtml"]);
  grunt.registerMultiTask('insertWidgetHtml', "Insert the widget HTML into the final JS", function() {
    var options = this.options({
      widgetHtml: "", 
    });

    this.files.forEach(function(f) {
      src = f.src[0];
      dst = f.dest;
      srcJs = grunt.file.read(src);
      widgetHtmlText = grunt.file.read(options.widgetHtml);
      htmlLines = widgetHtmlText.split('\n');
      jsString = ""
      for (i = 0; i < htmlLines.length; i++) {
        jsString += "WIDGET_HTML +='" + htmlLines[i].replace(/'/g, "\\'") + "';\n";
      }

      srcJs = srcJs.replace('/** WIDGET HTML **/', jsString);
      grunt.file.write(f.dest, srcJs);
      grunt.log.writeln('File ' + f.dest + ' was injected with widget html');
    })
  });
}