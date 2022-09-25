# Webbutveckling 2: Workspace setup

_Varje gång du startar ett nytt projekt, eller vill börja om med en ren installation så snurrar du igång en container i Docker. Eftersom vi tidigare installerat Lando kommer vi använda det verktyget för att starta en ny container med Drupal och sätta upp all konfigurering som behöver göras._

---

## Förutsättningar

Enskild uppgift. Windows 10/11 Professional eller bättre (vilket självklart inkluderar Linux). Du bör ha installerat Lando i en tidigare uppgift. 

## Resurser

*   [Lando - Installation - Linux](https://docs.lando.dev/getting-started/installation.html#debian) 
*   [Lando - Installation - Windows](https://docs.lando.dev/getting-started/installation.html#windows)
*   [Microsoft - Enable Hyper-V](https://docs.microsoft.com/sv-se/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
*   [Lando - Senaste stabila versionen](https://github.com/lando/lando/releases/latest)

> Tips! Alla kommandon skall köras i ett shell som bash i Linux eller PowerShell i Windows. 

## Uppgiftsbeskrivning

En normal installation av Drupal kräver att man sätter upp en server med PHP, Apache, MariaDB (SQL), samt PHPs pakethanterare Composer. Med hjälp av Composer installerar man sedan Drupal och Drush, för att slutligen göra konfigurationen av Drupal med hjälp av Drush. 

Vill du göra en installation i en container så krävs att du synkroniserar en Apache/PHP-container med en SQL-container och delar ut en katalog med ditt host-system. Tack och lov gör Lando detta åt oss. I exemplet nedan förutsätts vårt projekt heta "d8beginner", men det bör ju ändras beroende på vad för slags projekt vi gör. 

Först skapar vi en ny projektkatalog och navigerar dit i vårt shell. Där ber vi Lando att ladda hem och förbereda en container med Drupal i. 

    lando init --source cwd --recipe drupal9 --webroot web --name d8beginner

Nu ber vi Lando tala om för Composer att vi vill initiera en installation av Drupal 9. 

    lando composer create-project drupal/recommended-project:9.x tmp && cp -r tmp/. . && rm -rf tmp

Dags att snurra igång vår container!

    lando start

Nästa steg är att be Lando att installera Drush via Composer. 

    lando composer require drush/drush

Nu använder vi Drush till att konfigurera vår Drupal-installation. 

    lando drush site:install --db-url=mysql://drupal9:drupal9@database/drupal9 -y

Och en sista koll för att se att allting ser bra ut. 

    lando info

## Förväntat resultat



### Vilka filer?

Ingenting skall lämnas in.

### Var skall de lämnas in?

Ingenting skall lämnas in. 

---

Detta dokument är licenserat under Creative Commons BY-SA. Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.

Dokumentet är skapat och uppdaterat av Kenneth Frantzen (@seetee på GitHub).
