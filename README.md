# Saved For a Rainy Day

## Project by Katarzyna Wegrzynowicz

## Table of contents

- [Overview](#overview)
- [Screencap](#screencap)
- [Live Link](#live-link)
- [Tech Stack](#tech-stack)
- [Tools Used](#tools-used)
<!-- - [Steps to run project locally](#steps-to-run-project-locally) -->
- [Author](#author)

## Overview

Store your styling ideas for upcoming projects (or a "rainy day" when you're short on styling inspiration) by creating, saving, and updating color palettes Google Font pairings all in one convenient site! Complementary, contrasting, and analogic color palette options from The Color API provide a starting point for your ideas while view/edit mode allows you to customize and update specific shades and hues within your palette to fit your needs. Choose and update Google font pairings using the most popular Google fonts pulled from the Google Fonts Developer API to ensure your projects align with the latest trends.


## Screencap

![Saved For a Rainy Day](https://raw.githubusercontent.com/katarzyna-kw/portfolio-website/main/public/img/portfolio/saved-for-a-rainy-day.png)


## Live Link
[Saved For a Rainy Day](https://saved-for-a-rainy-day.web.app/)


## Tech Stack

* React frontend styled with CSS
* Django backend using Django Rest Framework
* PostgreSQL database

## Tools used

* [The Color API](https://www.thecolorapi.com/)
* [Google Fonts API](https://fonts.google.com/)
* [Google Fonts API for Developers](https://developers.google.com/fonts/docs/developer_api)
* [Web Font Loader](https://www.npmjs.com/package/webfontloader)
* [React-Color-Palette](https://www.npmjs.com/package/react-color-palette)
* [React Colorful](https://omgovich.github.io/react-colorful/)
* [Font Awesome Icons](https://fontawesome.com/v5/docs/web/use-with/react)
* [Material_UI Switch](https://mui.com/material-ui/react-switch/)
* [Material_UI Modal](https://mui.com/material-ui/react-modal/)
* [Spinners React](https://github.com/adexin/spinners-react)

<!-- ## Steps to run project locally

1. Clone the repository:

```sh
$ git clone https://github.com/katarzyna-kw/rainy-day.git
$ cd rainy-day
```
___

2. Check whether python 3 is installed locally:

```sh
$ python -V
```

If the version is Python 3.7.3 or higher, you may proceed to step 3A. 

Else, try running the following command: 


```sh
$ python3 -V
```

If the version shown is Python 3.7.3 or higher, you may proceed to step 3B. 

If Python 3.7.3 or higher is not installed, please visit python.org to download the latest version - [python.org/downloads](https://www.python.org/downloads/). Once the download is complete, follow step 2 from the beginning to determine whether to use python or python3 in your command line.

___

3A. Create virtual environment to install dependencies:

```sh
$ cd backend
$ python -m venv .venv
```

3B. Create virtual environment to install dependencies:

```sh
$ cd backend
$ python3 -m venv .venv
```
___

4. Activate virtual environment:

```sh
$ source .venv/bin/activate
```

___


5. Install dependencies:

```sh
$ (.venv) pip install -r requirements.txt
```

Note the (.venv) in front of the prompt. This indicates that this terminal session operates in a virtual environment.

If that command results in an error, try:

```sh
$ (.venv) pip install --upgrade -r requirements.txt
```

___

6. Create PostgreSQL database:

```sh
$ (.venv) createdb styles_db
```

___

7. Set up environmental variable secret key for Django secret key:

Create a django secret key using this generator: [Django Secret Key Generator](https://miniwebtool.com/django-secret-key-generator/)

Copy secret key created by Django Secret Key Generator.

In command line, create .env file and place secret key inside:

```sh
$ (.venv) touch .env
$ (.venv) echo SECRET_KEY = 'insert secret key obtained from generator' > .env
```

___

8. Set up environmental variable secret key for Google Web Fonts Developer API key:

Obtain Google Web Fonts Developer API key: [Google Fonts Developer API](https://developers.google.com/fonts/docs/developer_api#APIKey)

Copy Google Web Fonts API Key.

In command line, place Google Web Fonts API Key inside .env file:

```sh
$ (.venv) echo FONT_KEY = 'insert API key obtained from Google Web Fonts' > .env
```

___

9. Run migrations:

```sh
$ python manage.py migrate
```

---

10. Run the server:

```sh
$ (.venv) python manage.py runserver
```
___

11. Run the frontend:

```sh
(.venv) $ cd ..
(.venv) $ cd frontend
(.venv) $ npm install 
(.venv) $ npm start
```

The previous command should start and open server, but it does not, view the site in browser with the following link: 

[http://localhost:3000/](http://localhost:3000/) -->


___
## Author

- Portfolio - [Katarzyna Wegrzynowicz](https://katarzyna-kw.github.io/portfolio-website/)
- Github - [@katarzyna-kw](https://github.com/katarzyna-kw)
- LinkedIn - [@katarzyna-kw](https://www.linkedin.com/in/katarzyna-kw/)
- Frontend Mentor - [@katarzyna-kw](https://www.frontendmentor.io/profile/katarzyna-kw)
