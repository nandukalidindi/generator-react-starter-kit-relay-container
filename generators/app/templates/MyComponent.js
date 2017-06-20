import React from 'react';
<% if (relay) { %>import Relay from 'react-relay'; <% }%>
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './<%= name %>.<%= styleSheets %>';

class <%= name %> extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  <% if(lifecycleHooks) { %>
  // This is invoked immediately before mounting occurs
  componentWillMount() {

  }

  // This is invoked immediately after a component is mounted
  componentDidMount() {

  }

  // This is invoked before a mounted component receives new props
  // NOTE: This is not called with initial props during mounting
  componentWillReceiveProps(nextProps) {

  }

  // This is invoked before rendering when new props or state are being received.
  // Defaults to true
  shouldComponentUpdate(nextProps, nextState) {
    // Make sure you return the correct boolean according to your needs
    return true;
  }

  // This is invoked immediately before rendering when new props or state
  // are being received
  // NOTE: Will not be invoked if shouldComponentUpdate() returns false
  componentWillUpdate(nextProps, nextState) {

  }

  // This is invoked immediately after updating occurs.
  // NOTE: This method is not called for the initial render
  componentDidUpdate(prevProps, prevState) {

  }

  // This is invoked immediately before a component is unmounted and destroyed.
  // If you have any interval and timeouts set, this is where you would want to
  // clear them.
  componentWillUnmount() {

  }
  <% } %>

  //
  render() {
    return (
      <div>
        HELLO, I AM ALIVE
      </div>
    )
  }

};

<%= name %>.propTypes = {

};

<%= name %>.defaultProps = {

};
<% if (relay) { %>
export default Relay.createContainer(withStyles(s)(<%= name %>), {
  fragments: {

  }
});
<% } else { %>
export default withStyles(s)(<%= name %>);
<% } %>
