'use strict';
var React = require('react');
var $ = require('jquery');
var frag = React.createClass({

  render: function () {
    return (
      <section id="bio" className="footer fluid-container">
        <div className="container">
            <h2>About Me</h2>
            <p>
              I am a full stack software engineer for Smarter Travel LLC a subsidiarity of
              TripAdvisor. In my free time I am the volunteer IT Manager
              Of <a href="http://ruffstartdogs.org">Ruff Start Rescue</a>. I love
              to experiment with new technologies, both frontend and backend, on my person site.
            </p>
        </div>
      </section>
    );
  }
});

module.exports = frag;
