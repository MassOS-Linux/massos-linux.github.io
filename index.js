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

const subtitles = [
  "Minimal, without compromising on features.",
  "Completely independent, built from scratch.",
  "A modern, yet lightweight desktop experience.",
]

function showsubtitle() {
  let subtitle = subtitles[parseInt(Math.random(subtitles.length) * 3)]
  document.getElementById("subtitle").innerText = subtitle
  const bodyClassList = document.body.classList
  const colorbutton = document.getElementById("colormodenav")
  if (localStorage.getItem("colormode") == "light") {
    bodyClassList.replace("dark", "light")
    colorbutton.innerText = "Dark"
  }
}

window.onload = () => {
  const bodyClassList = document.body.classList
  const colorbutton = document.getElementById("colormodenav")
  if (localStorage.getItem("colormode") == "light") {
    bodyClassList.replace("dark", "light")
    colorbutton.innerText = "Dark"
  }
}

function colorbuttonclick() {
  const bodyClassList = document.body.classList
  const colorbutton = document.getElementById("colormodenav")
  if (localStorage.getItem("colormode") == null) {
    localStorage.setItem("colormode", "light")
    bodyClassList.replace("dark", "light")
    colorbutton.innerText = "Dark"
  } else {
    switch (localStorage.getItem("colormode")) {
      case "dark":
        localStorage.setItem("colormode", "light")
        bodyClassList.replace("dark", "light")
        colorbutton.innerText = "Dark"
        break
      case "light":
        localStorage.setItem("colormode", "dark")
        bodyClassList.replace("light", "dark")
        colorbutton.innerText = "Light"
        break
    }
  }
}

function hamburger() {
  const bodyClassList = document.body.classList
  const navClassList = document.getElementById("navbar").classList
  if (navClassList.contains("expanded")) {
    navClassList.remove("expanded")
    bodyClassList.remove("navexpanded")
  } else {
    navClassList.add("expanded")
    bodyClassList.add("navexpanded")
  }
}
