'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the remarkable ' + chalk.red('generator-react-starter-kit-relay-container') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Now, tell me. What do you want to name your future prodigy?'
    }, {
      type: 'confirm',
      name: 'relay',
      message: 'Do you want to wrap your prodigy in a container(Relay)?',
      default: false
    }, {
      type: 'list',
      name: 'styleSheets',
      message: 'How do you want to style your component / container',
      choices: [
        'css',
        'scss'
      ],
      default: 'css'
    }, {
      type: 'input',
      name: 'location',
      message: 'Where do you want to place your component directory?',
      default: 'src/components/'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    this.installDependencies();
  }
};
