# find-the-errors

I denne opgave skal du finde fem fejl i dette projekt. 
Fejlene er beskrevet som issues i dette repository. 

Start med at forke dette repo og installer en lokal MySQL database. 
Navnet på databasen skal være ```users```

1. Opret en .env fil i mappen find-errors-backend og indsæt følgende: 
Husk at tilpasse USER og PASSWORD til din MySQL database. 
```
PORT=8081
JWT_REFRESH_EXPIRATION=30000000
JWT_EXPIRATION=1400000
JWT_SECRET=4f1feeca525de4cdb064656007da3edac7895a87ff0ea865693300fb8b6e8f9c
HOST=localhost
USER=USERNAME_HER
PASSWORD=PASSWORD_HER
DIALECT=mysql
DB=users
```

2. Naviger til mappen: find-errors-backend og kør i en ny terminal:

``` npm install ```

``` node --watch server.js ```

4. Åben endnu en terminal og naviger til mappen find-errors-frontend og kør:

```npm install```

```npm run dev```

Nu skulle projektet gerne køre med både frontend og backend løsningen. 
Tid til at finde og fixe fejlene. Held og lykke. 


## Løsninger:
### Sign in knappen virker ikke
Dette input felt:

```<InputField type="button" name="Submit" />```

Skulle ændres til det her:

```<InputField type="submit" name="Submit" />```


### Når man er logget ind kan man ikke se brugerens navn eller email
Det her:

```
<p>User Name: {user.username}</p>
<p>User Email: {user.useremail}</p>
```

Skulle ændres til det her:

```
<p>User Name: {user.name}</p>
<p>User Email: {user.email}</p>
```


### Når man henter beskeder vises en fejl
Det her:

``` let options = { Authorization: `Bearer ${user.accessToken}` }```

Skulle ændres til det her:

```const options = { headers: { Authorization: `Bearer ${user.accessToken}` } }```
