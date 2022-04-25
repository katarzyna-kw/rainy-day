# Saved For a Rainy Day

## Project by Katarzyna Wegrzynowicz

## Table of contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Tools Used](#tools-used)
- [Steps to run project locally](#steps-to-run-project-locally)
- [Author](#author)

## Overview

Store your styling ideas for upcoming projects (or a "rainy day" when you're out of ideas) by creating and saving complementary, contrasting, or analogic color palettes and creating, saving, and updating Google Font pairings all in one site.

## Tech Stack

* React frontend
* Django backend
* PostgreSQL database

## Tools used

* [The Color API](https://www.thecolorapi.com/)
* [Google Fonts API](https://fonts.google.com/)
* [Google Fonts API for Developers](https://developers.google.com/fonts/docs/developer_api)
* [Web Font Loader](https://www.npmjs.com/package/webfontloader)
* [React-Color-Palette](https://www.npmjs.com/package/react-color-palette)

## Steps to run project locally

1. Create virtual environment in backend directory:

```$ python -m venv .venv```

---
2. Activate virtual environment:

```$ source .venv/bin/activate```

---

3. Install packages:

```$ pip install -r requirements.txt```

If that command results in an error, try:

```$ pip install --upgrade -r requirements.txt```

---

3. Create PostgreSQL database:

```$ createdb styles_db```

---

4. Run migrations

```$ python manage.py migrate```

---
5. Run the server:

```$ python manage.py runserver```
___

7. In frontend directory, run:

```$ npm install```

___

8. In frontend directory, run:

```$ npm start```

___

9. The previous command should start and open server, but it does not, view the site in browser with the following link: 

[http://localhost:3000/](http://localhost:3000/)


## Author

- Portfolio - [Katarzyna Wegrzynowicz](https://katarzyna-kw.github.io/portfolio-website/)
- Github - [@katarzyna-kw](https://github.com/katarzyna-kw)
- LinkedIn - [@katarzyna-kw](https://www.linkedin.com/in/katarzyna-kw/)
- Frontend Mentor - [@katarzyna-kw](https://www.frontendmentor.io/profile/katarzyna-kw)