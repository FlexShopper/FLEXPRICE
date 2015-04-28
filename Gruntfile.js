module.exports = function (grunt) {
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
                dest: 'flexprice.js'
            }
        },
        insertWidgetHtml: {
            options: {
                widgetHtmlSm: 'html/widget-sm.html',
                widgetHtmlMd: 'html/widget-md.html',
                widgetHtmlXs: 'html/widget-xs.html',
                popupHtml: 'html/popup.html'
            },
            dist: {
                src: 'flexprice.js',
                dest: 'flexprice.js'
            }
        },
        uglify: {
            dist: {
                src: 'flexprice.js',
                dest: 'flexprice.js'
            },
            options: {
                mangle: {
                    except: ['_FlexPrice']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    src: ['src/flexprice.css'],
                    dest: 'flexprice.css'      
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', ['concat', 'insertWidgetHtml', 'uglify', 'cssmin']);
//    grunt.registerTask('default', ['concat', 'insertWidgetHtml']);
    grunt.registerMultiTask('insertWidgetHtml', 'Insert the widget HTML into the final JS', function () {
        var options = this.options({
            widgetHtmlLg: '',
            widgetHtmlMd: '',
            widgetHtmlSm: '',
            popupHtml: ''
        });
        this.files.forEach(function (f) {
            src = f.src[0];
            dst = f.dest;
            srcJs = grunt.file.read(src);

            function inlineJs(content, size) {
                htmlLines = content.split('\n');
                jsString = '';
                jsString += 'WIDGET_HTML[\'' + size + '\'] =\'\';\n';

                for (var i = 0; i < htmlLines.length; i++) {
                    jsString += 'WIDGET_HTML[\'' + size + '\'] +=\'' + htmlLines[i].replace(/'/g, '\\\'') + '\';\n';
                }

                srcJs = srcJs.replace('/** WIDGET HTML **/', jsString + '\n/** WIDGET HTML **/');
            }
            inlineJs(grunt.file.read(options.widgetHtmlXs), 'XS');
            inlineJs(grunt.file.read(options.widgetHtmlSm), 'SM');
            inlineJs(grunt.file.read(options.widgetHtmlMd), 'MD');

            var popupHtmlText = grunt.file.read(options.popupHtml);

            htmlLines = popupHtmlText.split('\n');
            jsString = '';

            for (i = 0; i < htmlLines.length; i++) {
                jsString += 'POPUP_HTML +=\'' + htmlLines[i].replace(/'/g, '\\\'') + '\';\n';
            }

            srcJs = srcJs.replace('/** POPUP HTML **/', jsString);
            grunt.file.write(f.dest, srcJs);
            grunt.log.writeln('File ' + f.dest + ' was injected with widget html');
        });
    });
};

