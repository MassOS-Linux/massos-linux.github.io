/*
  The MassOS Website - Copyright (C) 2022 MassOS Developers.

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

function indexload() {
  let subtitle = subtitles[parseInt(Math.random(subtitles.length) * 3)]
  document.getElementById("subtitle").innerText = subtitle
}

function hamburger() {
  var x = document.getElementById("respnav");
  var body = document.getElementById("body");
  if (x.className === "navbar") {
    x.className += " responsive"
    body.className = "hambody"
  } else {
    x.className = "navbar"
    body.className = ""
  }
}