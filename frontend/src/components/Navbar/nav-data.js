export const navData = [
  {
    "name": "Sign Up",
    "url": "/signup",
    "loggedin": false,
  },
  {
    "name": "Log In",
    "url": "/login",
    "loggedin": false,
  },
  {
    "name": "Create Color Palette",
    "url": "/create-color-palette",
    "loggedin": true,
  },
  {
    "name": "Create Font Pair",
    "url": "/create-font-pair",
    "loggedin": true,
  },
  {
    "name": "View My Styles",
    // "url": null,
    "loggedin": true,
    "links": [
      {
        "name": "Color Palettes",
        "link": "/view-palettes"
      },
      {
        "name": "Font Pairs",
        "link": "/view-fonts"
      }
    ]
  },
]