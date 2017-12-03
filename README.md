electron-flask
==============

Quick and dirty demo of a cross platform native app using electron to provide 
a html/css/javascript client with a python backend.

The app itself merely accesses a RESTful API written in Python using Flask using
an AJAX request.

Setup
-----

You will need `node` and `python`, and their package managers `npm` and `pip`.

Install dependencies with 

```bash
npm install
pip install -r requirements.txt
```

Run
---

The client and the api may be run separately (i.e. without electron) with:

```bash
gulp serve:client
```

and

```bash
gulp serve:api
```

respectively.

The electron app can be run with:

```bash
gulp electron
```

Build
-----

The native executable apps can be built for all supported platforms and
architectures with:

```bash
gulp build
```
