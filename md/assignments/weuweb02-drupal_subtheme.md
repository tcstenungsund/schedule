# Webbutveckling 2: Drupal Subtheme

_Nu skall du skapa ditt första subtheme till Drupal. Det skall versionshanteras och du skall bygga en liten enkel sida för att visa upp det._

---

## Förutsättningar

Enskild uppgift. 

## Resurser

* [Barrio Bootstrap 5 Theme](https://www.drupal.org/project/bootstrap_barrio)   
* "[Creating a custom Barrio sub-theme - Create manually](https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-installation/creating-a-custom-barrio-sub-theme#s-create-manually)"  
  1) Kopiera och byt namn på 1 katalog   
  2) Byt namn på 5 filer   
  3) Ändra några ord i 6 filer   
* [Drupal.org Theming Drupal](https://www.drupal.org/docs/theming-drupal)    

## Uppgiftsbeskrivning

##### Planering

Bestäm ett syfte för sidan (business objective), samt några Call to Actions. Definiera färgschema, typsnitt samt bildspråk. Leta upp bilder och ikoner du har laglig rätt att använda i projektet. Skapa wireframes, moodboards och liknande om det behövs.

##### Infrastruktur

Installera Docker och Drupal. Följ instruktionerna i [Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup) och [Installera Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-installera_drupal).  

Installera temat [Barrio](https://www.drupal.org/project/bootstrap_barrio)  samt modulen [Devel](https://www.drupal.org/project/devel). Hitta även minst 1 modul till som du kan använda för att visa upp någonting coolt på förstasidan av din webbplats. Generera exempeldata med Devel (eller använd copy från till exempel Wikipedia).

##### Skapa ditt sub-theme

Börja med att ladda ned Barrio och packa upp filen. Kopiera katalogen bootstrap_barrio/subtheme och lägg den i din hemkatalog eller på skrivbordet så länge. Hitta på ett kreativt namn på ditt subtheme, ett namn som harmonierar med den grafiska profil du kommer följa när du skapar det. Byt nu namn på katalogen subtheme till namnet du valt. 

Fortsätt nu att följa guiden ovan och byt namn på 5 filer samt gör de justeringar i filerna som behövs. 

Skapa nu en ny projektkatalog. Starta en ny Drupal-instans där. 

> Tips! Om du försöker använda samma docker-compose.yml-fil som i ett tidigare projekt så måste du byta namn på de virtuella maskinerna som skapas! Det är enkelt, ändra bara i din nya docker-compose.yml-fil

Skapa ett nytt repository med exakt ditt subtheme namn som repository-namn. Lägg till en README.md-fil och beskriv ditt projekt. 

Gå till din nya projektkatalog, gå in i themes-katalogen och klona ned ditt repository från GitHub. Flytta ditt subtheme från där du lade det till ditt nedklonade repository. Uppdatera ditt remote repository.  

Logga nu in på din Drupal-installation, lägg till block, pages, menyalternativ och sätt ditt subtheme som standardtheme. Lägg till några favoritmoduler. Fyll sedan din sida med exempeldata och skriv CSS i ditt CSS-dokument. 

För att skriva CSS, skapa dokumentet style.css i katalogen CSS i din sub-theme-katalog. Högerklicka sedan i webbläsaren på det element du vill ändra och välj "Inspect Element". Konstruera en selektor av klasser och element, till exempel ".region-secondary-menu h2" för att ändra underrubriken över sekundärmenyn. Lägg till selektorn och skriv dina CSS-regler ditt CSS-dokument.

> Tips! Ändra inga färger i inställningarna för ditt subtheme i Drupal. Då uppstår det en konflikt med ditt CSS-dokument.

Skapa en egen template-fil för förstasidan av din site.

Kontrollera sådant som kontrast och [A11y](https://developer.mozilla.org/en-US/docs/Web/Accessibility).

## Förväntat resultat

En komplett liten webbplats med copy, samt ett repository på GitHub med ett installeringsbart subtheme. 

### Vilka filer?

Ett screenshot av din sida och en länk till ditt repocitory på GitHub.  

### Var skall de lämnas in?

På vår lärplattform [It's Learning](https://stenungsund.itslearning.com/) finns ett kursrum vid namn _"Webbutveckling 2"_, under _Innehåll_ / _Inlämningar_ hittar du en inlämningskatalog med samma namn som den här uppgiften.  

---

Detta dokument är licenserat under Creative Commons BY-SA. Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.

Dokumentet är skapat och uppdaterat av Kenneth Frantzen (@seetee på GitHub).
