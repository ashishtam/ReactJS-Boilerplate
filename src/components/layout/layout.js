// jshint ignore: start
import React, { Component } from "react";
import Header from "./js/header";
import Body from "./js/body";
import Footer from "./js/footer";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}