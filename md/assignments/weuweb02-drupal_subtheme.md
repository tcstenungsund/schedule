# Webbutveckling 2: Drupal Subtheme

_Nu skall du skapa ditt första subtheme till Drupal. Det skall versionshanteras och du skall bygga en liten enkel sida för att visa upp det._

---

## Förutsättningar

Enskild uppgift. 

## Resurser

* [GitHub](https://github.com/)    
* [Barrio Bootstrap 5 Theme](https://www.drupal.org/project/bootstrap_barrio)   
* "[Creating a custom Barrio sub-theme - Create manually](https://www.drupal.org/docs/8/themes/barrio-bootstrap-4-drupal-89-theme/bootstrap-barrio-installation/creating-a-custom-barrio-sub-theme#s-create-manually)"  
  1) Kopiera och byt namn på 1 katalog   
  2) Byt namn på 5 filer   
  3) Ändra några ord i 6 filer   
* [Bootstrap Build](https://bootstrap.build/)    
* [Drupal.org Theming Drupal](https://www.drupal.org/docs/theming-drupal)    

## Uppgiftsbeskrivning

##### Planering

Hitta på ett kreativt namn på ditt subtheme, ett namn som harmonierar med den grafiska profil du kommer följa när du skapar det (kom ihåg reglerna för namngivning från förra kursen!). Bestäm ett syfte för sidan (business objective), samt några Call to Actions. Definiera färgschema, typsnitt samt bildspråk. Leta upp bilder och ikoner du har laglig rätt att använda i projektet. Skapa wireframes, moodboards och liknande om det behövs.

> Tips! Det är viktigt att du väljer ett vettigt namn på ditt subtheme, då du kommer använda det mycket. 

##### Infrastruktur

Installera Docker och Drupal. Följ instruktionerna i [Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup) och [Installera Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-installera_drupal).  

Installera temat [Barrio](https://www.drupal.org/project/bootstrap_barrio) samt modulen [Devel](https://www.drupal.org/project/devel) och [Twig Tweak](https://www.drupal.org/project/twig_tweak). Hitta även minst 1 modul till som du kan använda för att visa upp någonting coolt på förstasidan av din webbplats. Generera exempeldata med Devel (eller använd copy från till exempel Wikipedia).   
 
Logga in på GitHub.com och skapa ett nytt publikt repository med exakt ditt subtheme namn som repository-namn. Lägg till en README.md-fil och beskriv ditt projekt. 

Installera GitHub Desktop. Klona ned ditt nyskapade repocitory till din utvecklingsmiljös theme-katalog.   

I slutet av varje lektion, eller efter att du arbetat klart för stunden, gör en add, commit och push.   

##### Skapa ditt sub-theme

Börja med att ladda ned Barrio och packa upp filen. Kopiera alla filer i katalogen bootstrap_barrio/subtheme och lägg dem i din subhteme-katalog. Fortsätt nu att följa guiden ovan och byt namn på 5 filer samt gör de justeringar i filerna som behövs.  

Skapa nu en ny projektkatalog. Starta en ny Drupal-instans där.  

> Tips! Om du försöker använda samma docker-compose.yml-fil som i ett tidigare projekt så måste du byta namn på de virtuella maskinerna som skapas! Det är enkelt, ändra bara i din nya docker-compose.yml-fil

Logga nu in på din Drupal-installation och sätt ditt subtheme som standardtheme. Fyll sedan din sida med exempeldata och bygg upp en enkel liten sida med block, pages och menyalternativ.

Skapa ett Bootstrap-tema och lägg CSS-filen för det i ditt subtheme. Ladda sedan in det i libraries-filen.   

För att skriva egen CSS, skapa dokumentet style.css i katalogen CSS i din subtheme-katalog. Högerklicka sedan i webbläsaren på det element du vill ändra och välj "Inspect Element". Konstruera en selektor av klasser och element, till exempel ".region-secondary-menu h2" för att ändra underrubriken över sekundärmenyn. Lägg till selektorn och skriv dina CSS-regler ditt CSS-dokument.

> Tips! Ändra inga färger i inställningarna för ditt subtheme i Drupal. Då uppstår det en konflikt med ditt CSS-dokument.

Skapa en egen template-fil för förstasidan av din site. Det går bra att utgå från exempelfilerna för templates som följer med Barrio. Kopiera den till template-katalogen i ditt subtheme och sätt rätt namn på den för att den skall ersätta förstasidan. Se dokumentationen för Twig Tweak för att hitta exempel på hur du kan använda twig.   

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
