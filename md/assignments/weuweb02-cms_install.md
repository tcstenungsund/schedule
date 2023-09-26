# CMS Install    

_Varje gång du startar ett nytt projekt, eller vill börja om med en ren installation så snurrar du igång en container i Docker. Eftersom vi tidigare installerat Lando kommer vi använda det verktyget för att starta en ny container med Drupal och sätta upp all konfigurering som behöver göras._         

---    

## Förutsättningar    

Enskild uppgift.      

Windows 10/11 Professional eller bättre (vilket självklart inkluderar Linux).       

Du bör ha installerat Lando i en tidigare uppgift.      

## Resurser

* "[What is Drush? Drupal Shell](https://youtu.be/WIjSfExbOCM)" (5:35) 
* "[How To Install Composer PHP Package Manager](https://youtu.be/9renbvFpWsI)" (2:59)
* [Lando - Installera Drupal](https://docs.lando.dev/drupal/getting-started.html#quick-start)

> Tips! Alla kommandon skall köras i ett shell som bash i Linux eller PowerShell i Windows.       

## Uppgiftsbeskrivning        

En normal installation av Drupal kräver att man sätter upp en server med PHP, Apache, MariaDB (SQL), samt PHPs pakethanterare Composer. Med hjälp av Composer installerar man sedan Drupal och Drush, för att slutligen göra konfigurationen av Drupal med hjälp av Drush.          

Vill du göra en installation i en container så krävs att du synkroniserar en Apache/PHP-container med en SQL-container och delar ut en katalog med ditt host-system. Tack och lov gör Lando detta åt oss. I exemplet nedan förutsätts vårt projekt heta "d8beginner", men det bör ju ändras beroende på vad för slags projekt vi gör.          

Skapa först en ny projektkatalog och navigerar dit i ditt shell.       

Väl där ber vi Lando att ladda hem och förbereda en container med Drupal i.        

    lando init --source cwd --recipe drupal8 --webroot web --name d8beginner

Nu ber vi Lando tala om för Composer att vi vill initiera en installation av Drupal 8. 

    lando composer create-project drupal/recommended-project:8.x tmp
    
Flytta nu alla filer och kataloger från tmp till din projektkatalog. Det vill säga flytta projekt/tmp/* --> projekt/ Ta sedan bort tmp.

Dags att snurra igång vår container!

    lando start

Nästa steg är att be Lando att installera Drush via Composer. 

    lando composer require drush/drush

Nu använder vi Drush till att konfigurera vår Drupal-installation. 

    lando drush site:install --db-url=mysql://drupal8:drupal8@database/drupal8 --site-name="Min coola sida!" --account-name=bengt --account-pass=cisco -y

Och en sista koll för att se att allting ser bra ut. 

    lando info

Nu kan du besöka din nyinstallerade Drupal CMS i din webbläsare. 

## Förväntat resultat

En utvecklingsmiljö som kör Drupal 8. 

### Vilka filer?

Ingenting skall lämnas in.     

### Var skall de lämnas in?

Visa upp för lärare när du är klar.        

---     

[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
