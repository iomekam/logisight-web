import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

class WaitList extends Component {
    render() {
      return (
        <div>
<html lang="en">
<head>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i|Roboto:500" rel="stylesheet"/>
    <link rel="stylesheet" href="dist/css/style.css"/>
    <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
</head>
<body class="is-boxed has-animations">
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <div class="site-header-inner">
                    <div class="brand header-brand">
                        <h1 class="m-0">
                            <a href="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <title>Ava</title>
                                    <defs>
                                        <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="logo-gradient-b">
                                            <stop stop-color="#39D8C8" offset="0%"/>
                                            <stop stop-color="#BCE4F4" offset="47.211%"/>
                                            <stop stop-color="#838DEA" offset="100%"/>
                                        </linearGradient>
                                        <path d="M32 16H16v16H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v14z" id="logo-gradient-a"/>
                                        <linearGradient x1="23.065%" y1="25.446%" y2="100%" id="logo-gradient-c">
                                            <stop stop-color="#1274ED" stop-opacity="0" offset="0%"/>
                                            <stop stop-color="#1274ED" offset="100%"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="hero text-center">
                <div class="container-sm">
                    <div class="hero-inner">
                        <h1 class="hero-title h2-mobile mt-0 is-revealing">Landing template for startups</h1>
                        <p class="hero-paragraph is-revealing">Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever.</p>
                        <div class="hero-form newsletter-form field field-grouped is-revealing">
                            <div class="control control-expanded">
                                <input class="input" type="email" name="email" placeholder="Your best email&hellip;"/>
                            </div>
                            <div class="control">
                                <a class="button button-primary button-block button-shadow" href="#">Get early access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <script src="dist/js/main.min.js"></script>
</body>
</html>

        </div>
    
      );
    }
  }
  
  export default WaitList;
  
