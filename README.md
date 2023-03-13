# Skapa ett Quizz med Redux

I dagens uppgift ska vi öva på global state med Redux och hooks-for-redux.

### Sätt upp projektet

1. Öppna en terminal och gå med `cd` där du vill skapa projektet.
2. Skriv `npm create vite@latest quizz-redux -- --template react`.
3. Gå in i projektet: `cd quizz-redux`.
4. Installera dependencies: `npm install`.
5. Installera hooks-for-redux (H4R): `npm install hooks-for-redux`.
6. Installera react-router-dom: `npm install react-router-dom`

## Hur du klarar uppgiften

- Använd react router för att skapa 2 sidor: Admin och Quizz.

- På Admin-sidan ska man kunna skapa nya frågor, ta bort frågor och uppdatera frågor.

- På Quizz-sidan ska man kunna starta ett quizz och sen få ett resultat.

- Frågorna ska vara flervalsfrågor så att man bara behöver klicka på ett alternativ.

- Tänk efter vilken data som behövs för frågor med tillhörande svarsalternativ och hur man kan hålla reda på antal
  rätt i ett quizz.

- Tänk efter vilka funktioner i redux som behövs för att förändra datat.

## Hur du lämnar in

1. Skapa ett repo på github.
2. Ladd up dina filer till github:

```
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <Adressen till ditt repo>
git push -u origin main
```

3. Klicka på uppgiften i canvas och ange länken till ditt repo.

---

### :boom: Success!

Efter denna uppgift ska ni kunna använda global state med Redux.

---

### :runner: Extrauppgifter

Klar? Här är lite mer att göra:

1. Lägg till localStorage för att spara och ladda frågor.

1. Lägg till spelare. Håll reda på vilken spelare som gör quizzet och skapa en sida med en toplista
   över bästa resultat.
