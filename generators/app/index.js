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
      message: 'Name of the component'
    }, {
      type: 'confirm',
      name: 'relay',
      message: 'Do you want to wrap your component in a container(Relay)?',
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
      type: 'confirm',
      name: 'lifecycleHooks',
      message: 'Do you want all the life cycle hooks stubbed in your component?',
      default: false
    }, {
      type: 'input',
      name: 'location',
      message: 'Where do you want to place your component?',
      default: 'src/components/'
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('MyComponent.js'),
      this.destinationPath(this.props.location + this.props.name + '/' + this.props.name + '.js'),
      {
        name: this.props.name,
        relay: this.props.relay,
        styleSheets: this.props.styleSheets,
        lifecycleHooks: this.props.lifecycleHooks
      }
    );

    this.fs.copyTpl(
      this.templatePath('MyComponent.' + this.props.styleSheets),
      this.destinationPath(this.props.location + this.props.name + '/' + this.props.name + '.' + this.props.styleSheets)
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath(this.props.location + this.props.name + '/' + 'package.json'),
      {name: this.props.name}
    );
  }

  // install() {
  //   this.installDependencies();
  // }
};
