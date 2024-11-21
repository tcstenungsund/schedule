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

Vi ser avsnitten 48-51 (Block och Menyer, 13min) och 52-55 (Teman, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".     

Vi ser avsnitten 56-57 (Rättigheter, 8min), 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

-->   

## Vecka 48   


## Vecka 49   

Prov på Grundkurs i CMS   

## Vecka 50   


## Vecka 51   


## Vecka 52   

**VINTERLOV**   

## Vecka 2   


## Vecka 3   


## Vecka 4   


## Vecka 5   


## Vecka 6   


## Vecka 7   

**SPORTLOV**   

## Vecka 8   


## Vecka 9   


## Vecka 10   


## Vecka 11   


## Vecka 12   


## Vecka 13   


## Vecka 14   

**PÅSKLOV**   
## Vecka 15   


## Vecka 16   


## Vecka 17   


## Vecka 18   


## Vecka 19   


## Vecka 20   


## Vecka 21   


## Vecka 22   


## Vecka 23   


## Vecka 24   


## Vecka 25   
**SOMMARLOV**   

---     
[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
