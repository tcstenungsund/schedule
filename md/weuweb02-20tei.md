# Loggbok Webbutveckling 2 - 20TEI

## Vecka 35
Kursplanering, Skolverkets [mål för kursen](https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-program-och-amnen-i-gymnasieskolan/gymnasieprogrammen/amne?url=1530314731%2Fsyllabuscw%2Fjsp%2Fsubject.htm%3FsubjectCode%3DWEU%26lang%3Dsv%26tos%3Dgy%26p%3Dp&sv.url=12.5dfee44715d35a5cdfa92a3#anchor_WEUWEB02) samt en introduktion till ämnet. 

Vad är virtualisering? Vad skiljer full maskinvirtualisering från container-virtualisering? Docker, VMware, Proxmox, Kubernetes, Vagrant. 

![Container virtualisering vs full machine](https://pawseysc.github.io/container-workflows/fig/container_vs_vm.png)

Repetition av kursen Webbutveckling 1.

## Vecka 36
"[Jeffrey Zeldman 20 years of Web Design and Community](https://vimeo.com/219302853)" 

Jeffrey Zeldman är en legend i webbutvecklingsbranschen av samma dignitet som Tim Berners-Lee. I dokumentären ovan får lära oss mer om hans bakgrund, varför han började med webbutveckling och vad han bidragit med. Se gärna vidare på webtidningen [A List Apart](https://alistapart.com/) som han grundade. 

[Prov: Repetition HTML & CSS](https://lms.netacad.com/mod/quiz/view.php?id=56448311)

## Vecka 37
Installation av mjukvara för virtualisering.

[Uppgift: Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)

Ta reda på vad följande kommandon gör och testa dem i din miljö.

    docker ps 
    docker up 
    docker down 
    docker start 
    docker stop 
    docker kill 
    docker exec -it <container-name> bash

Prova att dra igång några containrar. Till exempel [ReactOS](https://github.com/hectorm/docker-qemu-reactos), [Haiku OS](https://github.com/hectorm/docker-qemu-haiku) eller något annat projekt från [Docker Hub](https://hub.docker.com/).

## Vecka 38

Introduktion till CMS:er. 

Det finns [många CMS:er](https://en.wikipedia.org/wiki/List_of_content_management_systems). Vi kommer använda en av de största, Drupal. Drupal är känd för att den har en aktiv utvecklarcommunity, många moduler och är både stabil att bygga komplexa lösningar på, men också enkel att arbeta med. Youtube-kursen vi skall se baseras på version 8, men vi kommer köra version 9 som ser nästan likadan ut. 

![Drupals versioner](https://blog.twn.ee/sites/default/files/2020-10/Drupal%20Eng.png)

Vi ser avsnitten 1-3 (Introduktion, 15min) och 8-15 (Systemöverblick, 17min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)". 

Genomgång av provet från vecka 36. 

## Vecka 39

[Uppgift: Installera Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-installera_drupal)

Gör uppgiften ovan, öppna Drupal i din webbläsare, logga in och skapa en article och ett block. 

## Vecka 40

Första lektionen går till UF-aktiviteter på bottenvåningen. Andra lektionen viger vi åt att slutföra förra veckans uppgift.

## Vecka 41

Vi ser avsnitten 16-18, 22-26 (Content Type, 26min) samt avsnitten 27-29 (Taxonomy, 10min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

--  

Vi ser avsnitten 37-40 (Views, 20min), avsnitten 43-47 (Moduler, 23min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

[Uppgift: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)

Läxa till vecka 42: Se avsnitten 30-31 (Content, 10min), 34-36 (Displays, 15min), 32 och 33 (Revisions och Devel, 9min), samt 41-42 (Image Styles och Photo Gallery, 8min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

## Vecka 42

Gymnasiearbetesdag & Utvecklingssamtal 

## Vecka 43

Vi ser avsnitten 48-51 (Block och Menyer, 13min) och 52-55 (Teman, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

Presentation av uppgiften Moduler i Drupal. 

--  

Vi ser avsnitten 56-57 (Rättigheter, 8min), 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

[Test: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)

## Vecka 44
**HÖSTLOV**

## Vecka 45

###### Teman och subteman i en CMS     
* "[How to Create a Sub Theme in Drupal 8 or 9](https://youtu.be/hPXUn_D2-lE)" (4 min) 
* "[How to Convert an HTML Template to a Drupal 8 Theme](https://youtu.be/xdifbN3y5hU)" (15 min) 
* "[Theming Drupal](https://www.drupal.org/docs/theming-drupal)"  

###### Konfigurationsfiler   
[YAML](https://en.wikipedia.org/wiki/YAML), "[The YAML file explained](https://youtu.be/fwLBfZFrLgI)" (2 min), "[YAML Basics Every DevOps Engineer Must Know](https://linuxhandbook.com/yaml-basics/)".   
[TWIG](https://en.wikipedia.org/wiki/Twig_(template_engine)), "[Introduction to Twig and its syntax](https://youtu.be/50RBUmPOYig)" (3 min), [Twig Tweak](https://www.drupal.org/project/twig_tweak), "[Twig Tweak Cheat sheet](https://git.drupalcode.org/project/twig_tweak/-/blob/3.x/docs/cheat-sheet.md)".  

--

[Uppgift: Drupal Subtheme](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-drupal_subtheme)  

## Vecka 46

###### Versionshantering  

Vad är [Git](https://en.wikipedia.org/wiki/Git) och "[What is GitHub?](https://youtu.be/pBy1zgt0XPc)" (3 min)   
"[A Web Developers Workflow for GitHub](https://dev.to/rembertdesigns/a-web-developers-workflow-for-github-1b72)" och "[Git & GitHub](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF)" (16 min)

![Git Structure](https://krishnaiitd.github.io/gitcommands/images/GitWorkflow-3.png) 

"[git - the simple guide](https://rogerdudler.github.io/git-guide/)", "[Write Git Commit Messages That Your Colleagues Will Love](https://prplcode.hashnode.dev/write-git-commit-messages-that-your-colleagues-will-love)" och "[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)". 

--

Gör övningarna på "[Learn Git Branching](https://learngitbranching.js.org/)" och registrera ett konto på [GitHub](https://github.com/signup).

## Vecka 47

Gästföreläsare Johan Wilfer    
"[Workshop om versionshantering i git och programmering](https://docs.google.com/presentation/d/e/2PACX-1vQO8QUAWMZ-esUJFphgEcpF0aycp-q5qwY_zSBWePAzDCEtomfEMPpc4z7kqF1F4sy660c2JTB_reep/pub?start=false&loop=true&delayms=3000)"   

## Vecka 48

Fortsätt med uppgift Drupal Subtheme.   

Skapa ett nytt repocitory på GitHub. Döp det till exakt samma sak som namnet på ditt subtheme (kom ihåg reglerna för namngivning från förra kursen!). Klona ned ditt nyskapade repocitory till din hårddisk. Flytta innehållet från din projektkatalog som du skapade förra veckan till ditt nedklonade repocitory och gör add, commit och push. Nu ligger all din kod på GitHub. 

I slutet av varje lektion, eller efter att du arbetat klart för stunden, gör en add, commit och push. 

--

Prov på "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)". 

## Vecka 49

Fortsätt med uppgift Drupal Subtheme.   

## Vecka 50

Fortsätt med uppgift Drupal Subtheme.   

Test på versionshantering  

## Vecka 51

Fortsätt med uppgift Drupal Subtheme.   

## Vecka 52

**VINTERLOV**

## Vecka 2

Tävling

## Vecka 3
Stora projektet

## Vecka 4
Stora projektet

## Vecka 5
Stora projektet

## Vecka 6
Stora projektet

## Vecka 7
**SPORTLOV**

## Vecka 8
Stora projektet

## Vecka 9
Stora projektet

## Vecka 10
Stora projektet

## Vecka 11
Stora projektet

## Vecka 12
Stora projektet

## Vecka 13
Stora projektet

## Vecka 14
**PÅSKLOV**

## Vecka 15
Stora projektet

## Vecka 16
Stora projektet

## Vecka 17
Stora projektet

## Vecka 18
Stora projektet

## Vecka 19
Stora projektet

## Vecka 20
Stora projektet

## Vecka 21
Stora projektet

## Vecka 22
Stora projektet

## Vecka 23
Stora projektet

## Vecka 24
Stora projektet

## Vecka 25
**SOMMARLOV**
