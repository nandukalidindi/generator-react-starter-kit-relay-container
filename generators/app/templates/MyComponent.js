import React from 'react';
<% if (relay) { %>import Relay from 'react-relay'; <% }%>
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './<%= name %>.<%= styleSheets %>';

class <%= name %> extends React.Component {

}

<%= name %>.propTypes = {

}
<% if (relay) { %>
export default Relay.createContainer(withStyles(s)(<%= name %>), {
  fragments: {

  }
});
<% } else { %>
export default withStyles(s)(<%= name %>);
<% } %>
