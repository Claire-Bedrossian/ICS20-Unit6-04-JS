// Copyright (c) 2023 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Jan 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-04-JS/sw.js", {
    scope: "/ICS20-Unit6-04-JS/",
  })
}

window.onload = function () {
  // this calculates the volume of the sphere
  const params = new URLSearchParams(document.location.search)

  //input
  const radius = parseFloat(params.get("r"))

  //process
  const volume = (4 / 3) * Math.PI * radius ** 3

  //output
  document.getElementById("radius").innerHTML =
    "<h6>Radius = " + radius + "</h6)"
  document.getElementById("volume").innerHTML =
    "<h6>Volume is: " + volume.toFixed(2) + " cm³</h6>"
}
