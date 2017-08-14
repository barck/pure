// Обязательная обёртка
module.exports = function(grunt) {
    var paths = {
        style: "css",
        js: "scripts",
    };



    // Задачи
    grunt.initConfig({
        // Склеиваем
        concat: {
            main: {
                src: [
                    'app/js/*.js'  // Все JS-файлы в папке
                ],
                dest: 'public/' + paths.js + '/scripts.js'
            }
        },
        // Сжимаем
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'public/' + paths.js,
                    src: '*.js',
                    dest: 'public/' + paths.js
                }]
            }
        },
        // Собираем TWIG
        twigRender: {
            your_target: {
                files: [
                    {
                        data: {
                            paths: paths

                        },
                        template: "app/views/layout.twig",
                        dest: "public/index.html"
                    }
                ]}
                    },

        stylus: {
            compile: {

                files: {
                    'public/css/main.css': 'app/style/main.styl'
                }
            }
        },
        clean: ['public/'],

        copy: {
            main: {
                files: [
                    // makes all src relative to cwd
                    {expand: true, cwd: 'app/', src: ['img/*'], dest: 'public'},
                ],
            },
        },
    });

    // Загрузка плагинов, установленных с помощью npm install
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-twig-render');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Задача по умолчанию
    grunt.registerTask('default', ['clean','concat', 'uglify', 'twigRender', 'stylus', 'copy']);
};
