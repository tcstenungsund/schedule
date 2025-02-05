# Webbutveckling 2 - 22TEI    

## Vecka 35   

Kursplanering, Skolverkets [mål för kursen](https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-program-och-amnen-i-gymnasieskolan/gymnasieprogrammen/amne?url=1530314731%2Fsyllabuscw%2Fjsp%2Fsubject.htm%3FsubjectCode%3DWEU%26lang%3Dsv%26tos%3Dgy%26p%3Dp&sv.url=12.5dfee44715d35a5cdfa92a3#anchor_WEUWEB02) samt en introduktion till ämnet.      

Vi skall nu lära oss att bygga stora webbplatser. För detta måste vi förstå [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29), som webben bygger på. Men det är mycket arbete om alla skall installera en full LAMP-stack för att samarbeta om kod. Därför använder vi virtualisering! Vad är virtualisering? Vad skiljer full maskinvirtualisering från container-virtualisering?       

![Container virtualisering vs full machine](https://pawseysc.github.io/container-workflows/fig/container_vs_vm.png)      

Vi ser "[Virtual Machines vs Containers](https://youtu.be/eyNBf1sqdBQ?feature=shared)" (8 min) och tittar på "[Containerization vs. Virtualization : understand the differences](https://ubuntu.com/blog/containerization-vs-virtualization)". Vi nämner också de vanligaste systemen, Docker, VMware, Proxmox, Kubernetes, Vagrant.       

Repetition av kursen Webbutveckling 1.    

## Vecka 36   

"[Jeffrey Zeldman 20 years of Web Design and Community](https://vimeo.com/219302853)" (40 min)        

Jeffrey Zeldman är en legend i webbutvecklingsbranschen av samma dignitet som Tim Berners-Lee. I dokumentären ovan får lära oss mer om hans bakgrund, varför han började med webbutveckling och vad han bidragit med. Se gärna vidare på webtidningen [A List Apart](https://alistapart.com/) som han grundade och inspelningar från hans konferenser [An Event Apart](https://www.youtube.com/@AnEventApartLive).     

Prov: Repetition HTML & CSS      

## Vecka 37   

[Uppgift: Installera Linux](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-installera_linux)     

## Vecka 38   

**Alla lärare på Enhet 4 är på konferens.**  

Gör klart installationen av Linux på era datorer och bekanta er med operativsystemet.  

## Vecka 39   

Mjukvaruutvecklare föredrar att arbeta i Unix-liknande operativsystem. De kräver inte den nivå av förståelse av kommandoraden som [xkcd: tar](https://xkcd.com/1168/) ger sken av, men du bör i alla fall förstå vad en [pakethanterare](https://sv.wikipedia.org/wiki/Pakethanterare) är och överblickar av din arbetsmiljö som [KDE Plasma in 180 Seconds](https://youtu.be/dZ6bojRSIw0) är inte dum att se. Vill du anpassa utseendet ännu mer finns videos som How to [Customize KDE Plasma 6 | Guide for beginners](https://youtu.be/4OuaCXWSXFE) till din hjälp.    

###### Workspace för en webbutvecklare   

Webbutvecklare behöver tillgång till LAMP-stacken och för det använder vi Docker. Din uppgift nu är att lära dig att använda Docker.  

"[Docker Tutorial For Beginners](https://youtu.be/RrTbOvqlEic)", "[Docker for Web Development: A Brief Guide](https://medium.com/@vithusha.ravirajan/docker-for-web-development-a-brief-guide-5c0656319dcd)".  
[<img alt="Docker, docker-compose och Lando" src="https://github.com/tcstenungsund/schedule/assets/5168530/63096533-a01f-49ba-b366-131ba467c8b2" width="42" style="width:42%">](https://github.com/tcstenungsund/schedule/assets/5168530/63096533-a01f-49ba-b366-131ba467c8b2)   

[Uppgift: Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)       

När du är klar med ovanstående uppgift, ta reda på vad följande kommandon gör och testa dem i din miljö ("[8 Basic Docker Commands](https://youtu.be/xGn7cFR3ARU)").  

    docker ps 
    docker up 
    docker down 
    docker start 
    docker stop 
    docker kill 
    docker exec -it <container-name> bash

Prova att dra igång några containrar. Till exempel [ReactOS](https://github.com/hectorm/docker-qemu-reactos), [Haiku OS](https://github.com/hectorm/docker-qemu-haiku) eller något annat projekt från [Docker Hub](https://hub.docker.com/).  

## Vecka 40   

###### Introduktion till CMS:er  

Det finns [många CMS:er](https://en.wikipedia.org/wiki/List_of_content_management_systems). Vi kommer använda en av de största, Drupal. Drupal är känd för att den har en aktiv utvecklarcommunity, många moduler och är både stabil att bygga komplexa lösningar på, men också enkel att arbeta med. Youtube-kursen vi skall se baseras på version 8, så under kursens gång är det den versionen vi kör. Men när vi sedan arbetar med systemet kommer vi köra version 10.           

[![Drupals versioner](https://blog.twn.ee/sites/default/files/2020-10/Drupal%20Eng.png) ](https://blog.twn.ee/sites/default/files/2020-10/Drupal%20Eng.png)     

[Uppgift: CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)     

Nu har du en utvecklingsmiljö med Drupal 8 som du kan stoppa och starta med följande kommandon. 

    lando start     

&nbsp;

    lando stop      

## Vecka 41   

Slutför de två tidigare uppgifterna och djupdyk i handhavandet av Docker, Lando och Drupal.  

## Vecka 42   

Slutför alla de tidigare uppgifterna! När du är klar djupdyker du i handhavandet av Docker, Lando och Drupal.   

[Uppgift: Aktivera Utvecklarläge](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-aktivera_utvecklarlage)   

Vi ser avsnitten 1-3 (Introduktion, 15min) och 8-15 (Systemöverblick, 17min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

## Vecka 43   

Repetition av förra veckan.   

Övning i halvklass.   

[AI in Drupal: It's Coming, and it's Awesome](https://youtu.be/4S-HBFVE2lU) (6 min)  

Vi ser avsnitten 16-18, 22-26 (Content Type, 26min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".   

**Läxa till vecka 45**: Se avsnitten 32 och 33 (Revisions och Devel, 9min) och 41-42 (Image Styles och Photo Gallery, 8min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)". Om du inte lyckas installera moduler, lura ut hur!       

## Vecka 44   

**HÖSTLOV**   

## Vecka 45   

Repetition och en titt på läxan.  

Vi ser avsnitten 27-29 (Taxonomy, 10min), 30-31 (Content, 10min) och 34-36 (Displays, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".    

## Vecka 46  

Lektionen utgår  

## Vecka 47   

Vi ser avsnitten 37-40 (Views, 20min) och 43-47 (Moduler, 23min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

[Uppgift: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)  

--

Andra halvan av lektionen ser vi en föreläsning och diskuterar den.  

"[Michelle Barker – Modern CSS Layout is Awesome!](https://youtu.be/6O0KBNslevQ)" (44 min)  

Michelle Barker är en kreativ och designmedveten entusiast för CSS som gärna sprider nya och spännande sätt att bygga webbplatser på! Denna föreläsning gavs 2022 på konferensen "[beyond tellerrand](https://beyondtellerrand.com/)" Düsseldorf. 

<!-- 

𝕏

[My solar-powered and self-hosted website](https://dri.es/my-solar-powered-and-self-hosted-website)   

[OSTips - Drupal](https://youtube.com/playlist?list=PLtaXuX0nEZk_R36-089QmM-OMTZ3APvuc&si=0pxyc81CkDZfHqZX)   

[How To Use AI in Drupal to Set the Tone of Your Content](https://youtu.be/Vz7oTYYBeK0) (8 min)   



-->   

## Vecka 48  

Läxförhör på läxan från vecka 47  

Quiz: Moduler i Drupal  

Vi ser avsnitten 48-51 (Block och Menyer, 13min), 52-55 (Teman, 15min) och 56-57 (Rättigheter, 8min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".   

## Vecka 49   

Vi ser avsnitten 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

###### Teman och subteman i en CMS  

* "[How to Create a Sub Theme in Drupal 8 or 9](https://youtu.be/hPXUn_D2-lE)" (4 min)  
* "[How to Convert an HTML Template to a Drupal 8 Theme](https://youtu.be/xdifbN3y5hU)" (15 min)  
* "[Theming Drupal](https://www.drupal.org/docs/theming-drupal)"  

###### Konfigurationsfiler  
[YAML](https://en.wikipedia.org/wiki/YAML), "[The YAML file explained](https://youtu.be/fwLBfZFrLgI)" (2 min), "[YAML Basics Every DevOps Engineer Must Know](https://linuxhandbook.com/yaml-basics/)".     
[TWIG](https://en.wikipedia.org/wiki/Twig_(template_engine)), "[Introduction to Twig and its syntax](https://youtu.be/50RBUmPOYig)" (3 min), [Twig Tweak](https://www.drupal.org/project/twig_tweak), "[Twig Tweak Cheat sheet](https://git.drupalcode.org/project/twig_tweak/-/blob/3.x/docs/cheat-sheet.md)".  

[Uppgift: CMS subtheme](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_subhteme)  

## Vecka 50  

Frågestund och repetition inför provet  

Arbeta vidare med uppgift CMS subtheme  

--  

Prov på Grundkurs i CMS   

## Vecka 51  


## Vecka 52  

**VINTERLOV**   

## Vecka 2   

Välkomna åter! 

En titt på [Examensmål för Teknikprogrammet](https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-program-och-amnen-i-gymnasieskolan/gymnasieprogrammen/program?url=-996270488%2Fsyllabuscw%2Fjsp%2Fprogram.htm%3FprogramCode%3DTE001%26tos%3Dgy&sv.url=12.5dfee44715d35a5cdfa9295#anchor_1) och skolverkets syfte med kursen Webbutveckling 2. Hur lär man sig smartare, utan att behöva lägga en massa mer energi och tid på det? Vi repeterar vad vi gått igenom hittills och tar en titt på vad vi kommer ägna våren åt. Dessutom, hur utvärderas det du gör och [Hur sätter lärare betyg?](https://youtu.be/Zef4M5J94Wk) (6 min)  

--  

[Tävling: CSS Zen Garden](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb_css-zen-garden)  

## Vecka 3   

###### Versionshantering  

Vad är [Git](https://en.wikipedia.org/wiki/Git) och "[What is GitHub?](https://youtu.be/pBy1zgt0XPc)" (3 min). Se till att du har koll! "[Learn Git and GitHub in a more fun way](https://blog.pradumnasaraf.dev/learn-git-and-github-in-a-more-fun-way)"   
"[A Web Developers Workflow for GitHub](https://dev.to/rembertdesigns/a-web-developers-workflow-for-github-1b72)" och "[Git & GitHub](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF)" (16 min)   

![Git Structure](https://krishnaiitd.github.io/gitcommands/images/GitWorkflow-3.png)    

--

Arbeta vidare med uppgift CMS subtheme  

## Vecka 4   

Vi fortsätter med versionshantering!  

"[Git cheatsheet](https://ndpsoftware.com/git-cheatsheet.html)", "[git - the simple guide](https://rogerdudler.github.io/git-guide/)", "[Write Git Commit Messages That Your Colleagues Will Love](https://prplcode.hashnode.dev/write-git-commit-messages-that-your-colleagues-will-love)" och "[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)".   
         
Uppgift: "[Learn Git Branching](https://learngitbranching.js.org/)"   

## Vecka 5   

###### Arbetsflöde  
Sedan tidigare förstår ni git, commit och branches. Nu är det dags att lära sig två nya saker, GitHub Issues och GitHub Projects.   

GitHub Issues är ett sätt att hålla koll på vad som behöver göras i projektet. "[What is GitHub Issues?](https://youtube.com/6HWw7rhwvtY)" (1 min) GitHub Projects är ett sätt att sortera GitHub Issues som kallas för "[Kanban](https://en.wikipedia.org/wiki/Kanban_board)" (tänk postit-lappar på en whiteboard). Det vanligaste är att man har tre listor som heter "Att göra", "Görs" och "Gjort".    

* "[Quickstart for GitHub Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/quickstart)"
* "[Writing a proper GitHub Issue](https://medium.com/nyc-planning-digital/writing-a-proper-github-issue-97427d62a20f)".
* "[Linking a pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)"    

Vi ser presentationen "[Arbetsgång 3.0](https://docs.google.com/presentation/d/e/2PACX-1vTcTrnVHJBhflvxOQ4Kwdt_jXRGu9K5NWCjr1SA3zdMSN8QXgSvsqG6f4p9GJlZbaejzIeSaN4q4iE6/pub?start=false&loop=false&delayms=3000)" och presenterar gruppindelning samt vad projekten skall gå ut på.    

--

Arbeta vidare med uppgift CMS subtheme  

## Vecka 6   

###### Projektplanering  

Hur planerar man ett projekt? Hur skall ni planera ert? Två väldigt vanliga metoder att skissa upp ett arbetsflöde är Gantt chart och Responsibility Assignment Matrix (eller RACI chart).  

"[Responsibility Assignment Matrix | 5-Minute Guide](https://youtu.be/KcNBwNlY6eQ)" (2 min)  


"[What is a Gantt Chart?](https://youtu.be/4DSV-_2pqmI)" (6 min)  
"[What is a RACI Matrix?](https://youtu.be/dyoOIIaACcE)" (6 min)  

--  

Slutför uppgift CMS subtheme  

--  

Test på Versionshantering  

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

Presentation av Stora projektet  

## Vecka 23   

Peer-review/Kompisbedömning  

## Vecka 24   


## Vecka 25   
**SOMMARLOV**   

---     
[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
