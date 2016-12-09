const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>paragrapgh</p>
      </div>
    )
  }
});

ReactDOM.render(<Layout/>, document.getElementById('title'));