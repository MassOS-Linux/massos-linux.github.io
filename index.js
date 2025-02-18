/*
  The MassOS Website - Copyright (C) 2022-2025 MassOS Developers.

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

let subtitles = [
  "Minimal, without compromising on features.",
  "Completely independent, built from scratch.",
  "A modern, yet lightweight desktop experience.",
]

var currentcolormode = "dark"
var isresponsive = false

function indexload() {
  let subtitle = subtitles[parseInt(Math.random(subtitles.length) * 3)]
  document.getElementById("subtitle").innerText = subtitle
}

function hamburger() {
  var x = document.getElementById("respnav")
  var body = document.getElementById("body")
  if (x.className === "navbar") {
    x.className += " responsive"
    body.className = "hambody"
    isresponsive = true
  } else if (x.className === "navbar light") {
    x.className += " responsive"
    body.className = "hambody light"
  } else {
    if (currentcolormode === "light") {
      if (isresponsive) {
        x.className = "navbar responsive light"
        body.className = "hambody light"
      } else {
        x.className = "navbar light"
        body.className = "light"
      }
    } else {
      x.className = "navbar"
      body.className = ""
    }
    isresponsive = false
  }
}

function colormodechanger() {
  var x = document.getElementById("respnav")
  var body = document.getElementById("body")
  var colorblocknav = document.getElementById("colormodenav")
  var footer = document.getElementById("footer")
  if (currentcolormode === "light") {
    if (isresponsive) {
      body.className = "hambody"
      x.className = "navbar responsive"
    } else {
      body.className = ""
      x.className = "navbar"
    }
    footer.className = ""
    colorblocknav.innerText = "Light"
    currentcolormode = "dark"
  } else {
    if (isresponsive) {
      body.className = "hambody light"
      x.className = "navbar responsive light"
    } else {
      body.className = "light"
      x.className = "navbar light"
    }
    footer.className = "light"
    colorblocknav.innerText = "Dark"
    currentcolormode = "light"
  }
}