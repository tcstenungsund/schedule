# Webbutveckling 2: Workspace setup

_Varje gång du startar ett nytt projekt, eller vill börja om med en ren installation så snurrar du igång en container i Docker. Eftersom vi tidigare installerat Lando kommer vi använda det verktyget för att starta en ny container med Drupal och sätta upp all konfigurering som behöver göras._

---

## Förutsättningar

Enskild uppgift. Windows 10/11 Professional eller bättre (vilket självklart inkluderar Linux). Du bör ha installerat Lando i en tidigare uppgift. 

## Resurser

* "[What is Drush? Drupal Shell](https://youtu.be/WIjSfExbOCM)" (5:35) 
* "[How To Install Composer PHP Package Manager](https://youtu.be/9renbvFpWsI)" (2:59)
* [Lando - Installera Drupal](https://docs.lando.dev/drupal/getting-started.html#quick-start)

> Tips! Alla kommandon skall köras i ett shell som bash i Linux eller PowerShell i Windows. 

## Uppgiftsbeskrivning

En normal installation av Drupal kräver att man sätter upp en server med PHP, Apache, MariaDB (SQL), samt PHPs pakethanterare Composer. Med hjälp av Composer installerar man sedan Drupal och Drush, för att slutligen göra konfigurationen av Drupal med hjälp av Drush. 

Vill du göra en installation i en container så krävs att du synkroniserar en Apache/PHP-container med en SQL-container och delar ut en katalog med ditt host-system. Tack och lov gör Lando detta åt oss. I exemplet nedan förutsätts vårt projekt heta "d8beginner", men det bör ju ändras beroende på vad för slags projekt vi gör. 

Först skapar vi en ny projektkatalog och navigerar dit i vårt shell. Där ber vi Lando att ladda hem och förbereda en container med Drupal i. 

    lando init --source cwd --recipe drupal9 --webroot web --name d8beginner

Nu ber vi Lando tala om för Composer att vi vill initiera en installation av Drupal 9. 

    lando composer create-project drupal/recommended-project:9.x tmp
    
Flytta nu alla filer och kataloger från tmp till din projektkatalog. Det vill säga flytta projekt/tmp/* --> projekt/ Ta sedan bort tmp.

Dags att snurra igång vår container!

    lando start

Nästa steg är att be Lando att installera Drush via Composer. 

    lando composer require drush/drush

Nu använder vi Drush till att konfigurera vår Drupal-installation. 

    lando drush site:install --db-url=mysql://drupal9:drupal9@database/drupal9 --site-name=bengt --account-pass=Cisco1337! --notify -y

Och en sista koll för att se att allting ser bra ut. 

    lando info

Nu kan du besöka din nyinstallerade Drupal CMS i din webbläsare. 

##### Fel? 

Om du efter två timmars felsökning fortfarande inte har fått bukt med Windowsbuggarna, så kan du tanka ned filen "[docker-compose.yml](https://raw.githubusercontent.com/seetee/docker/version2.0/drupal/docker-compose.yml)", lägga i en *ny* projektkatalog och där köra följande kommando. 

    docker-compose up
 
När inget uppdaterats på 2-3 minuter, tryck [ctrl] + [c] och starta/stoppa din utvecklingsmiljö med följande kommandon. 

    docker-compose start 
    
    docker-compose stop 
  
Efter att du öppnat localhost på rätt port i din webbläsare slutför du installationen med hjälp av informationen i docker-compose.yml-filen du nyss laddade ned. 

## Förväntat resultat

En container som kör Drupal 9. 

### Vilka filer?

Ingenting skall lämnas in.

### Var skall de lämnas in?

Ingenting skall lämnas in. 

---

Detta dokument är licenserat under Creative Commons BY-SA. Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.

Dokumentet är skapat och uppdaterat av Kenneth Frantzen (@seetee på GitHub).
