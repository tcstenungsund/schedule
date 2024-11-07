# CMS Install    

_Varje gång du startar ett nytt projekt, eller vill börja om med en ren installation så snurrar du igång en container i Docker. Eftersom vi tidigare installerat Lando kommer vi använda det verktyget för att starta en ny container med Drupal och sätta upp all konfigurering som behöver göras._         

---    

## Förutsättningar    

Enskild uppgift.      

Du bör ha installerat Lando i en tidigare uppgift.      

## Resurser

* "[What is Drush? Drupal Shell](https://youtu.be/WIjSfExbOCM)" (5:35) 
* "[How To Install Composer PHP Package Manager](https://youtu.be/9renbvFpWsI)" (2:59)
* [Lando - Installera Drupal](https://docs.lando.dev/drupal/getting-started.html#quick-start)

> Tips! Alla kommandon skall köras i ett shell som Konsole/bash i Linux eller PowerShell i Windows.       

## Uppgiftsbeskrivning        

En normal installation av Drupal kräver att man sätter upp en server med PHP, Apache, MariaDB (SQL), samt PHPs pakethanterare Composer. Med hjälp av Composer installerar man sedan Drupal och Drush, för att slutligen göra konfigurationen av Drupal med hjälp av Drush.          

Vill du göra en installation i en container så krävs att du synkroniserar en Apache/PHP-container med en SQL-container och delar ut en katalog med ditt host-system. Tack och lov gör Lando detta åt oss. I exemplet nedan förutsätts vårt projekt heta "d8beginner", men det bör ju ändras beroende på vad för slags projekt vi gör.  

1) Skapa först en ny projektkatalog och navigerar dit i ditt shell.  

2) Väl där ber vi Lando att ladda hem och förbereda en container med Drupal i.   

        lando init --source cwd --recipe drupal8 --webroot web --name d8beginner

3) Nu ber vi Lando tala om för Composer att vi vill initiera en installation av Drupal 8 i den nya katalogen tmp.  

        lando composer create-project drupal/recommended-project:8.x tmp
    
4) Flytta nu alla filer och kataloger från tmp till din projektkatalog. Det vill säga flytta projekt/tmp/* --> projekt/ Ta sedan bort tmp.  

5) Dags att snurra igång vår container!  

        lando start

> Får du 404-felmeddelanden här så kan det bero på att du installerat en Docker-version via Snap, att du inte flyttat filerna så som det beskrivs i punkt 4 eller att du inte har kört lando init i din projektkatalog som det beskrivs i punkt 1 och 2  

6) Nästa steg är att be Lando att installera Drush via Composer.  

        lando composer require drush/drush

7) Nu använder vi Drush till att konfigurera vår Drupal-installation.  

        lando drush site:install --db-url=mysql://drupal8:drupal8@database/drupal8 --site-name="Min coola sida!" --account-name=bengt --account-pass=cisco -y

8) Och en sista koll för att se att allting ser bra ut.  

        lando info

Nu kan du besöka din nyinstallerade Drupal CMS i din webbläsare på URL:en som gavs efter "lando start" under punkt 5.  

### Felsökning      

Många problem beror på att du befinner dig i fel katalog när du kör dina kommandon. Andra problem kan lösas om du kör "lando rebuild".  

Någon enstaka elev har fått felet att certifikaten för projektet blivit kataloger istället för filer, detta löses genom att ta bort katalogerna och skapa filer med samma namn. Certifikaten finns i ~/.lando/certs/  

Om du kör i Windows finns flera begränsningar som kan ställa till det. Här är några förslag på lösningar.       

* Starta om! When in doubt, reboot!
* För lite RAM. Se [Troubleshooting Composer](https://www.drupal.org/docs/develop/using-composer/troubleshooting-composer#s-insufficient-memory) på Drupal.org.         

        lando export COMPOSER_MEMORY_LIMIT=-1

* För dålig prestanda. Se [Why composer install timeouts after 300 seconds?](https://stackoverflow.com/questions/18917768/why-composer-install-timeouts-after-300-seconds) på stackoverflow.        

        lando composer config --global process-timeout 16000

## Förväntat resultat

En utvecklingsmiljö som kör Drupal 8. 

### Vilka filer?

Ingenting skall lämnas in.     

### Var skall de lämnas in?

Visa upp för lärare när du är klar.        

---     

[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    

