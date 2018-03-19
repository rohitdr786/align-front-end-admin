import React , {Component} from 'react';

export default function(){
  var svgString = '<svg version="1.1" id="nu_logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 50" style="enable-background:new 0 0 500 50;" xml:space="preserve"><g class="st2"><path d="M321.472,1.443v1.151c-5.079,0.367-5.079,3.037-5.079,7.328v9.788c0,4.554,0,6.805-1.36,9.318 c-1.833,3.348-5.968,5.967-12.196,5.967c-7.171,0-10.364-3.089-11.726-5.078c-1.727-2.565-1.727-4.973-1.727-10.835v-8.899 c0-7.014-0.052-7.59-4.658-7.59h-0.786V1.443h14.97v1.151c-5.181,0-5.338,0-5.338,7.486v9.159c0,4.973,0,7.747,1.308,9.945 c1.204,2.042,4.082,4.084,9.055,4.084c3.35,0,7.486-1.204,9.737-4.711c1.464-2.25,1.464-4.658,1.464-9.055V9.452 c0-4.188,0-6.491-5.285-6.858V1.443H321.472z"></path><path d="M327.174,12.592c0.417,1.204,0.626,3.245,0.68,4.344c2.668-2.931,5.025-4.344,8.06-4.344 c4.816,0,6.543,3.349,6.543,6.856v7.747c0,5.705,0,6.018,3.454,6.018v1.152h-10.731v-1.152c3.613,0,3.613-0.313,3.613-6.018v-6.752 c0-4.763-1.675-6.282-4.24-6.282c-2.985,0-4.921,2.513-6.7,4.502v8.532c0,5.653,0,6.018,3.454,6.018v1.152h-10.573v-1.152 c3.454,0,3.454-0.313,3.454-6.018v-6.23c0-5.705,0-6.019-3.454-6.019v-1.152c2.146-0.314,4.868-0.838,5.757-1.204H327.174z"></path><path d="M355.591,29.236c0,3.352,0.315,3.978,2.879,3.978h0.786v1.152h-11.149v-1.152h0.889 c2.67,0,3.193-0.418,3.193-3.978v-8.374c0-5.705-0.313-5.757-4.082-5.757v-1.152c1.57-0.052,4.764-0.732,6.962-1.36h0.523V29.236z"></path><circle cx="353.371" cy="5.968" r="2.261"></circle><path d="M371.136,35.204l-7.432-16.75c-1.362-3.036-1.884-3.769-3.821-3.874v-1.152h9.422v1.152 c-1.362,0-2.67,0-2.67,1.256c0,0.209,0.052,0.576,0.575,1.78l6.072,13.661l5.079-11.358c0.732-1.675,1.203-2.827,1.203-3.507 c0-1.57-1.623-1.781-2.565-1.833v-1.152h7.065v1.152c-2.198,0.157-3.035,2.094-4.658,5.653l-6.804,14.97H371.136z"></path><path d="M388.669,21.438c-0.054,0.472-0.105,1.204-0.105,1.57c0,6.647,2.094,10.836,7.171,10.836 c2.931,0,5.287-1.309,6.752-4.189h1.204c-1.308,3.455-4.397,5.549-8.637,5.549c-5.863,0-10.731-4.397-10.731-11.149 c0-6.491,4.24-11.463,10.521-11.463c5.915,0,8.9,3.873,9.055,8.845H388.669z M388.775,20.392h11.201 c-0.054-2.461-0.734-6.648-5.235-6.648C390.606,13.743,389.036,17.512,388.775,20.392z"></path><path d="M414.107,27.196c0,5.339,0,6.018,3.087,6.018h0.734v1.152H406.83v-1.152c3.612,0,3.612-0.208,3.612-6.018 v-5.915c0-5.811,0-6.019-3.612-6.019V14.11c2.355-0.314,5.077-1.152,5.915-1.414l0.367-0.104c0.261,0.837,0.734,2.513,0.734,5.495 c1.621-3.873,5.39-5.495,8.059-5.495c2.724,0,4.032,1.936,4.032,3.193c0,0.941-0.682,1.884-1.781,1.884 c-1.151,0-1.727-0.785-2.04-1.674c-0.211-0.576-0.628-1.57-1.833-1.57c-2.094,0-6.176,2.513-6.176,7.851V27.196z"></path><path d="M427.871,28.138h0.993c0.524,2.513,2.355,5.914,7.173,5.914c4.344,0,4.868-2.668,4.868-3.715 c0-2.565-2.722-3.769-6.02-4.973c-4.816-1.779-6.962-3.297-6.962-6.962c0-2.668,1.99-5.809,6.7-5.809 c2.459,0,4.24,0.994,5.444,2.198c0.417-0.471,0.941-1.727,0.993-1.833h0.943v6.491h-0.943c-0.471-2.407-2.565-5.705-6.28-5.705 c-3.404,0-4.555,1.675-4.555,3.194c0,2.46,1.988,3.349,5.811,4.71c4.186,1.467,7.379,3.194,7.379,7.381 c0,3.56-2.565,6.176-7.327,6.176c-3.089,0-4.921-1.204-6.124-2.356c-0.524,0.577-0.995,1.675-1.1,2.147h-0.993V28.138z"></path><path d="M454.25,29.236c0,3.352,0.313,3.978,2.878,3.978h0.786v1.152h-11.149v-1.152h0.889 c2.67,0,3.194-0.418,3.194-3.978v-8.374c0-5.705-0.315-5.757-4.084-5.757v-1.152c1.57-0.052,4.764-0.732,6.962-1.36h0.524V29.236z"></path><circle cx="452.055" cy="5.968" r="2.261"></circle><path d="M466.601,14.581v12.667c0,2.879,0,6.178,3.141,6.178c1.779,0,2.722-1.415,3.193-2.095l0.786,0.472 c-1.623,3.402-4.973,3.402-5.34,3.402c-1.464,0-2.616-0.315-3.454-0.994c-1.362-1.048-1.988-2.984-1.988-6.072V14.581H459.9v-1.152 c2.303-0.105,5.077-1.622,5.863-6.543h0.837v6.543h6.333v1.152H466.601z"></path><path d="M493.765,17.983c0.365-0.838,0.732-1.622,0.732-2.041c0-1.099-1.884-1.361-2.826-1.361v-1.152H499v1.152 c-2.618,0.157-3.142,1.466-4.449,4.606l-9.319,22.508c-1.362,3.245-2.616,5.548-4.658,5.548c-0.838,0-1.621-0.524-1.621-1.518 c0-1.727,1.727-2.513,2.668-2.931c1.781-0.786,2.357-1.099,3.089-2.931l1.988-4.973l-7.851-16.854 c-1.204-2.565-1.621-3.403-4.082-3.455v-1.152h9.63v1.152c-1.308,0.105-2.565,0.157-2.565,1.047c0,0.419,0.628,1.728,0.995,2.565 l5.757,12.248L493.765,17.983z"></path><path d="M7.857,4.245v23.449c0,3.455,0.732,5.392,6.071,5.549v1.151H1v-1.151c5.705-0.261,5.601-2.616,5.601-5.549 V9.741c0-6.648-0.366-7.119-5.129-7.119V1.472h9.421l19.629,26.066V7.595c0-2.775-0.366-4.921-5.915-4.973V1.472h12.562v1.151 c-5.077,0.471-5.391,2.251-5.391,5.338v27.218h-0.732L7.857,4.245z"></path><path d="M47.843,12.62c6.176,0,11.202,4.658,11.202,11.306c0,7.432-5.6,11.305-11.202,11.305 c-5.391,0-11.148-3.611-11.148-11.358C36.695,17.383,41.615,12.62,47.843,12.62z M47.843,33.976c4.816,0,6.962-3.297,6.962-9.892 c0-5.654-1.518-10.208-6.962-10.208c-5.286,0-6.909,4.45-6.909,10.155C40.934,30.73,43.081,33.976,47.843,33.976z"></path><path d="M68.36,27.223c0,5.338,0,6.019,3.088,6.019h0.732v1.151H61.084v-1.151c3.612,0,3.612-0.209,3.612-6.019v-5.915 c0-5.81,0-6.019-3.612-6.019v-1.152c2.356-0.314,5.078-1.152,5.915-1.413l0.366-0.105c0.262,0.837,0.733,2.512,0.733,5.495 c1.623-3.873,5.391-5.495,8.061-5.495c2.721,0,4.03,1.936,4.03,3.193c0,0.942-0.68,1.884-1.779,1.884 c-1.152,0-1.727-0.785-2.042-1.674c-0.209-0.575-0.628-1.57-1.832-1.57c-2.094,0-6.176,2.513-6.176,7.851V27.223z"></path><path d="M88.668,14.609v12.667c0,2.879,0,6.176,3.14,6.176c1.779,0,2.722-1.414,3.192-2.094l0.786,0.471 c-1.622,3.402-4.973,3.402-5.338,3.402c-1.466,0-2.618-0.315-3.455-0.994c-1.361-1.046-1.989-2.984-1.989-6.072V14.609h-3.036 v-1.152c2.303-0.104,5.077-1.621,5.862-6.543h0.838v6.543H95v1.152H88.668z"></path><path d="M119.548,27.223c0,5.758,0,6.019,3.558,6.019v1.151h-10.834v-1.151c3.611,0,3.611-0.261,3.611-6.019v-6.752 c0-4.869-1.465-6.281-4.554-6.281c-2.408,0-4.71,2.46-6.385,4.606v8.426c0,5.6,0,6.019,3.298,6.019v1.151H97.617v-1.151 c3.664,0,3.664-0.209,3.664-6.019V8.118c0-3.664,0-4.868-3.454-4.868V2.1c2.145,0,5.025-0.472,6.699-1.1h0.366v15.964 c2.617-2.774,4.92-4.344,7.642-4.344c4.658,0,7.014,2.46,7.014,7.223V27.223z"></path><path d="M128.287,21.465c-0.053,0.472-0.105,1.205-0.105,1.57c0,6.648,2.094,10.835,7.171,10.835 c2.931,0,5.287-1.309,6.753-4.188h1.203c-1.308,3.454-4.396,5.548-8.635,5.548c-5.863,0-10.731-4.397-10.731-11.148 c0-6.491,4.24-11.463,10.521-11.463c5.914,0,8.899,3.873,9.055,8.845H128.287z M128.392,20.418h11.2 c-0.052-2.46-0.732-6.647-5.234-6.647C130.224,13.772,128.654,17.54,128.392,20.418z"></path><path d="M167.367,30.573c-0.42,2.457-1.491,2.606-2.118,2.606c-1.623,0-1.651-1.15-1.651-4.752v-8.479 c0-3.089-0.399-7.328-7.623-7.328c-5.234,0-8.427,2.669-8.427,4.763c0,0.942,0.576,1.518,1.413,1.518 c1.361,0,1.885-0.995,2.199-2.146c0.365-1.414,1.151-2.983,4.501-2.983c3.925,0,4.396,2.513,4.396,5.6v1.308l-3.978,1.362 c-7.38,2.513-9.63,5.443-9.63,8.427c0,2.983,2.354,4.447,5.391,4.447c2.51,0,5.128-1.045,8.217-3.663 c0.262,1.256,0.942,3.663,4.011,3.663c2.879,0,4.136-1.987,4.24-4.343H167.367z M160.057,30.089 c-2.107,1.822-4.954,3.271-6.89,3.271c-2.221,0-3.302-1.609-3.302-3.54c0-2.895,2.733-5.523,7.174-6.971l3.018-0.963V30.089z"></path><path d="M170.439,28.165h0.994c0.523,2.513,2.355,5.914,7.171,5.914c4.345,0,4.867-2.668,4.867-3.715 c0-2.565-2.721-3.768-6.019-4.972c-4.815-1.779-6.962-3.297-6.962-6.962c0-2.668,1.99-5.809,6.7-5.809 c2.46,0,4.24,0.994,5.443,2.199c0.42-0.472,0.943-1.728,0.995-1.833h0.941v6.49h-0.941c-0.471-2.407-2.566-5.705-6.281-5.705 c-3.402,0-4.553,1.675-4.553,3.193c0,2.46,1.989,3.349,5.81,4.71c4.187,1.466,7.38,3.194,7.38,7.381c0,3.559-2.566,6.175-7.33,6.175 c-3.088,0-4.919-1.204-6.123-2.356c-0.523,0.577-0.993,1.675-1.098,2.147h-0.994V28.165z"></path><path d="M195.561,14.609v12.667c0,2.879,0,6.176,3.141,6.176c1.779,0,2.72-1.414,3.193-2.094l0.786,0.471 c-1.623,3.402-4.973,3.402-5.34,3.402c-1.466,0-2.616-0.315-3.454-0.994c-1.362-1.046-1.99-2.984-1.99-6.072V14.609h-3.035v-1.152 c2.303-0.104,5.077-1.621,5.863-6.543h0.837v6.543h6.334v1.152H195.561z"></path><path d="M208.226,21.465c-0.052,0.472-0.105,1.205-0.105,1.57c0,6.648,2.094,10.835,7.173,10.835 c2.93,0,5.285-1.309,6.751-4.188h1.204c-1.308,3.454-4.397,5.548-8.637,5.548c-5.861,0-10.731-4.397-10.731-11.148 c0-6.491,4.24-11.463,10.521-11.463c5.915,0,8.898,3.873,9.055,8.845H208.226z M208.332,20.418h11.201 c-0.054-2.46-0.734-6.647-5.235-6.647C210.163,13.772,208.593,17.54,208.332,20.418z"></path><path d="M233.034,27.223c0,5.338,0,6.019,3.089,6.019h0.734v1.151h-11.097v-1.151c3.613,0,3.613-0.209,3.613-6.019 v-5.915c0-5.81,0-6.019-3.613-6.019v-1.152c2.355-0.314,5.077-1.152,5.915-1.413l0.367-0.105c0.261,0.837,0.732,2.512,0.732,5.495 c1.623-3.873,5.39-5.495,8.06-5.495c2.722,0,4.03,1.936,4.03,3.193c0,0.942-0.678,1.884-1.779,1.884 c-1.151,0-1.727-0.785-2.04-1.674c-0.211-0.575-0.63-1.57-1.834-1.57c-2.092,0-6.176,2.513-6.176,7.851V27.223z"></path><path d="M253.133,12.62c0.417,1.204,0.628,3.245,0.68,4.344c2.668-2.931,5.024-4.344,8.06-4.344 c4.814,0,6.543,3.349,6.543,6.856v7.747c0,5.706,0,6.019,3.454,6.019v1.151H261.14v-1.151c3.611,0,3.611-0.313,3.611-6.019v-6.752 c0-4.763-1.675-6.281-4.238-6.281c-2.985,0-4.921,2.513-6.7,4.501v8.532c0,5.652,0,6.019,3.454,6.019v1.151h-10.573v-1.151 c3.454,0,3.454-0.313,3.454-6.019v-6.229c0-5.705,0-6.019-3.454-6.019v-1.152c2.147-0.314,4.868-0.838,5.757-1.204H253.133z"></path></g></svg>';
  return(
    <nav className = "navbar-default hidden-md-down navbar-fixed-bottom">

    <div id="menu-footer-area">
    <div id="menu-footer-inner-container">
      <div id="footer-logo">
        <a href="http://www.northeastern.edu/#_ga=2.119727880.1665358915.1519048599-2052624994.1517972325" target="_blank">
          <div id="footer-logo-svg" dangerouslySetInnerHTML={{ __html: svgString}} />
        </a>
      </div>
      <div id="footer-nav">
        <div id="footer-menu-links-container">
          <ul id="footer-menu-links">
            <li id = "menu-item-1">
              <a href="http://my.northeastern.edu/" target="_blank">myNortheastern</a>
            </li>
            <li id = "menu-item-2">
              <a href="https://prod-web.neu.edu/wasapp/employeelookup/public/main.action#_ga=1.152250297.1229401008.1453998512" target="_blank">Find Faculty &amp; Staff</a>
            </li>
            <li id = "menu-item-3">
              <a href="http://www.northeastern.edu/neuhome/adminlinks/findaz.html" target="_blank">Find A-Z</a>
            </li>
            <li id = "menu-item-4">
              <a href="http://www.northeastern.edu/emergency/index.html" target="_blank">Emergency Information</a>
            </li>
            <li id = "menu-item-5">
              <a href="http://www.northeastern.edu/search/index.html" target="_blank">Search</a>
            </li>
          </ul>
        </div>
        <div id="footer-address">
          <address>
            <p>360 Huntington Ave. Boston, Massachusetts 02115
              <a className="tel" href="tel:6173732000">617.373.2000</a>
              <a className="tel" href="tel:6173733768">TTY: 617.373.3768</a>
            </p>
          </address>
          <p>© 2018 Northeastern University</p>
        </div>
      </div>
    </div>
  </div>

    </nav>
  );
}


// return(
//   <nav className = "navbar-default navbar-fixed-bottom">
//
//       <img width='100%'  src="/res/images/NEU_Footer.PNG" />
//
//   </nav>
// );
