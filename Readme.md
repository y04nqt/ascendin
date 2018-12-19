# AscendIN
The website (containing client and api files)

## Commands
* clone the repo
* cd into activunite-web
* `pip3 install -r requirements.txt`
* cd into static
* `npm install`
* cd back to the parent directory
* `python server.py`
* visit `localhost:7777` to see the app

### Database information
Using psql -> download postgres (also recommend getting pgadmin 4)
Run migrations:

* run once: `python manage.py db init`
* migrate each time: `python manage.py db upgrade`

Create local DB on Mac:
* `psql -d postgres`=> open postgres cli
* `CREATE DATABASE ascendin;` => create empty database

#### Server information
We are now using Waitress for our server to handle multiple requests (Flask only handles 1). Launching the app remains the same.
