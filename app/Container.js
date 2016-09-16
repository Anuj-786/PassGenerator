import React, { Component } from 'react';
import {
  View,
  WebView
} from 'react-native';

export default class Container extends Component {
  render() {
    const HTML = `
      <!DOCTYPE html>\n
      <html>
        <head>
          <title>Hello Static World</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=320, user-scalable=no">
          <style type="text/css">
            body {
              margin: auto 0;
              padding: 0;
              font: 62.5% arial, sans-serif;
              background: #ccc;
              border: 1px solid #000;
            }
            h1 {
              padding: 45px;
              margin: 0;
              text-align: center;
              color: #ccc;
            }
          </style>
        </head>
        <body>
        <canvas id="myCanvas" height="500"></canvas>
          <script>
          var c = document.getElementById("myCanvas");
          var ctx = c.getContext('2d');
          
          ctx.font = "30 Arial";
          ctx.strokeText("Hello World",100,50);
          </script>
        </body>
      </html>
      `;

    let jsCode = `alert("Hello");`;
    return (
          <WebView
            underlayColor={'transparent'}
            automaticallyAdjustContentInsets={false}
            contentInset={{ top: 0, right: 0, bottom: 0, left: 0 }}
            injectedJavascript={jsCode}
            opaque={false}
            style={{ marginTop: 20 }}
            source={{ html: HTML }}
            contentInset={{ top: 65 }}x
          />
    );
  }
}
