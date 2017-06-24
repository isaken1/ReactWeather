var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React. I have built this
      for the Complete React App Web Developer Course.</p>
      <p>Here are some of the tools I've used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
             JS framework I used
        </li>

        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
             Open Weather Map to search for the weather data by city name.
        </li>

        <li>
          <a href="https://github.com/isaken1">My Github page :)</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
