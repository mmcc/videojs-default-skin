var grunt = require('grunt');

grunt.initConfig({
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: [{
        expand: true,
        cwd: 'src',
        src: ['*.scss'],
        dest: 'dist',
        ext: '.css'
      }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.registerTask('default', ['sass']);
