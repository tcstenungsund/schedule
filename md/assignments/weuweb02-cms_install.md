# CMS Install    

_Varje gång du startar ett nytt projekt, eller vill börja om med en ren installation så snurrar du igång en container i Docker. Det innebär att du kommer genomföra denna övningen många många många gånger! Tack och lov har vi receptfiler som låter Docker compose göra grovjobbet åt oss!._         

---    

## Förutsättningar    

Enskild uppgift.      

Du bör sedan tidigare genomfört uppgifterna [Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup) och [Docker Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-docker_basics).  

## Resurser

* "[What is Drush? Drupal Shell](https://youtu.be/WIjSfExbOCM)" (5:35)  
* "[How To Install Composer PHP Package Manager](https://youtu.be/9renbvFpWsI)" (2:59)  
* [docker-compose.yml](https://github.com/tcstenungsund/docker/blob/main/drupal/docker-compose.yml)  

## Uppgiftsbeskrivning        

En normal installation av Drupal kräver att man sätter upp en server med PHP, Apache, MariaDB (SQL), samt PHPs pakethanterare Composer. Med hjälp av Composer installerar man sedan Drupal och Drush, för att slutligen göra konfigurationen av Drupal med hjälp av Drush.          

Vill du istället göra en installation i en container så krävs att du konfigurerar både en en Apache/PHP-container och en SQL-container, kopplar ihop dem via ett virtuellt nätverk och delar ut ett par kataloger till ditt host-system. Men tack och lov går det att automatisera detta med ett program som heter Docker Compose. Med hjälp av Docker Compose så kan du utgå ifrån en receptfil som talar om hur du vill din miljö skall se ut, och sedan fixar Docker Compose resten! 

Nu skall vi sätta upp ett nytt projekt! I exemplet nedan förutsätts projektet heta "d8beginner", men det bör ju ändras beroende på vad för slags projekt vi gör.  

1) Skapa först en ny projektkatalog och navigerar dit i ditt shell.  

2) Ladda ned filen _docker-compose.yml_ (länken finns under resurser) och följ instruktionerna i den (det sägs bland annat att du skall initialisera ditt projekt med kommandot 'docker compose up -d') och välj att installera Drupal version 8.  

3) Öppna Firefox Developer Edition och besök [http://localhost:8080](http://localhost:8080/), slutför där installationen. Välj Engelska som språk och i övrigt väljer du defaultvärden eller egna kreativa lösningar, samt de uppgifter du angav i punkt 2.  

4) Nu har du en färdig miljö, redo att användas! För att starta och stoppa din utvecklingsmiljö, använd följande två kommandon.  

    docker compose start 
    
    docker compose stop  

## Förväntat resultat

En utvecklingsmiljö som kör Drupal 8.  

### Vilka filer?

Ingenting skall lämnas in.     

### Var skall de lämnas in?

Visa upp din miljö för lärare och ange uppgiften som genomförd på Teams 

---     

[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.   
