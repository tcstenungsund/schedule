# Webbutveckling 2 - 23TEI  

## Vecka 35   

### Fredag  

Kursplanering, Skolverkets [mål för kursen](https://www.skolverket.se/undervisning/gymnasieskolan/program-och-amnen-i-gymnasieskolan/hitta-program-amnen-och-kurser-i-gymnasieskolan-gy11/amne?url=907561864%2Fsyllabuscw%2Fjsp%2Fsubject.htm%3FsubjectCode%3DWEU%26courseCode%3DWEUWEB02%26version%3D2%26tos%3Dgy&sv.url=12.5dfee44715d35a5cdfa92a3#anchor_WEUWEB02) samt en introduktion till ämnet.   

Även i denna kursen är det verktygen [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) och [VScodium](https://vscodium.com/) som gäller! Har du tappat bort dem installerar du dem bara igen!  

Repetition av kursen Webbutveckling 1.  

## Vecka 36   

### Måndag   

###### Virtualisering  

Vi skall nu lära oss att bygga stora webbplatser. För detta måste vi förstå [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29), som webben bygger på. Men det är mycket arbete om alla skall installera en full LAMP-stack för att samarbeta om kod. (Vill du lära mer om MySQL/MariaDB, börja med att lyssna på avsnittet "[Monty - The man behind your databases](https://www.hackerpublicradio.org/eps/hpr1423/)" på Hacker Public Radio)  

Därför använder vi virtualisering! Vad är virtualisering?  

"[What is Virtualization](https://youtu.be/i1tEsMCZoWA?si=6LDvKj_qwfJvjSE-)" (3 min) 

Vad skiljer full maskinvirtualisering från container-virtualisering? "[Containerization vs. Virtualization : understand the differences](https://ubuntu.com/blog/containerization-vs-virtualization)"  

![Container virtualisering vs full machine](https://pawseysc.github.io/container-workflows/fig/container_vs_vm.png)      

"[Virtual Machines vs Containers](https://youtu.be/eyNBf1sqdBQ?feature=shared)" (8 min)  

Vi nämner också de vanligaste systemen, Docker, VMware, Proxmox, Kubernetes, Vagrant.  

Repetitionsprov  

### Fredag  

Genomgång av provet från i måndags  

###### Felsökning  

[![XKCD: Tech Support Cheat Sheet](https://www.explainxkcd.com/wiki/images/3/38/tech_support_cheat_sheet.png)](https://www.explainxkcd.com/wiki/index.php/627:_Tech_Support_Cheat_Sheet)  

1) Identify the Problem  
2) Establish a Theory of Probable Cause  
3) Test the Theory to Determine the Cause  
4) Establish a Plan of Action  
5) Implement the Solution or Escalate as Necessary  
6) Verify Full System Functionality  
7) Document Findings, Actions, and Outcomes  

"[A CompTIA Troubleshooting Guide](https://www.thetechedvocate.org/438497-2/)" by the Tech Edvocate.  
"[Troubleshooting Steps: Your Friendly Guide to Problem Solving](https://onlinetoolguides.com/troubleshooting-steps/)" by Online Tool Guides.  

"[The 6 Steps of IT Troubleshooting](https://youtu.be/fh7oYoEQb2E)" (2 min)  
"[6 Step Troubleshooting Process by compTIA](https://youtu.be/5N56Na0iEfk)" (3 min)  
"[The 6 Crucial Steps of IT Troubleshooting You Must Know](https://youtu.be/mIdxo_ymzno)" (40 min)  

## Vecka 37   

### Måndag   

Michelle Barker är en kreativ och designmedveten entusiast för CSS som gärna sprider nya och spännande sätt att bygga webbplatser på! Denna föreläsning gavs 2022 på konferensen "[beyond tellerrand](https://beyondtellerrand.com/)" Düsseldorf.  

"[Michelle Barker – Modern CSS Layout is Awesome!](https://youtu.be/6O0KBNslevQ)" (44 min)  

1) [Flexbox Froggy](https://flexboxfroggy.com/)  
2) [Flexbox Adventure](https://codingfantasy.com/games/flexboxadventure)  
3) [Grid Garden](https://cssgridgarden.com/)
4) [Flexbox Defense](http://www.flexboxdefense.com/)
5) [CSS Diner](https://flukeout.github.io/)  

### Fredag  

Fortsätt med CSS-uppgifterna...  

## Vecka 38   

### Måndag   

###### Linux för webbutvecklare  

Mjukvaruutvecklare föredrar att arbeta i Unix-liknande operativsystem. De kräver inte den nivå av förståelse av kommandoraden som [xkcd: tar](https://xkcd.com/1168/) ger sken av, men du bör i alla fall förstå vad en [pakethanterare](https://sv.wikipedia.org/wiki/Pakethanterare) är och överblickar av din arbetsmiljö som [KDE Plasma in 180 Seconds](https://youtu.be/dZ6bojRSIw0) (4 min) är inte dum att se. Vill du anpassa utseendet ännu mer finns videos som How to [Customize KDE Plasma 6 | Guide for beginners](https://youtu.be/4OuaCXWSXFE) (24 min) till din hjälp.    

Uppgift: Gör er desktop mer personlig! Installera ett par Widgets och byt tema!  

Fixa också till er prompt! [Starship](https://starship.rs/) rekommenderas!   

### Fredag  

###### Workspace för webbutvecklare  

Webbutvecklare behöver tillgång till LAMP-stacken och för det använder vi Docker. Därför skall vi nu installera och lära oss använda Docker!  

"[Docker Tutorial For Beginners](https://youtu.be/RrTbOvqlEic)" (13 min), "[Docker for Web Development: A Brief Guide](https://medium.com/@vithusha.ravirajan/docker-for-web-development-a-brief-guide-5c0656319dcd)".  

[Uppgift: Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)  



## Vecka 39   

### Måndag  

"[My top 5 most popular front-end tips](https://youtu.be/DGOeyJjq80g)" (22 min)  

Kevin Powell är känd för sin kärlek till CSS.  

[Uppgift: Docker Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-docker_basics)  

### Fredag  

###### Introduktion till Content Management Systems  

Det finns [många CMS:er](https://en.wikipedia.org/wiki/List_of_content_management_systems). Vi kommer använda en av de största, Drupal. Drupal är känd för att den har en aktiv utvecklarcommunity, många moduler och är både stabil att bygga komplexa lösningar på, men också enkel att arbeta med. Youtube-kursen vi skall se baseras på version 8, så under kursens gång är det den versionen vi kör. Men när vi sedan arbetar med systemet kommer vi köra version 11.  

[![Drupal End-Of-Life table](https://www.prometsource.com/system/files/2023-11/drupal_versions.jpg)](https://www.prometsource.com/blog/faqs-drupal-9-end-of-life)  

[Uppgift: CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)   

## Vecka 40   

### Måndag   

Slutför uppgifterna: 
* [Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)  
* [Docker Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-docker_basics)
* [CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)   

Gå sedan vidare med uppgiften nedan.  

[Uppgift: Aktivera Utvecklarläge](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-aktivera_utvecklarlage)  

Vi ser avsnitten 1-3 (Introduktion, 15min) och 8-15 (Systemöverblick, 17min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

### Fredag  

Youtubekurs i CMS  

<!-- 
Vi ser avsnitten 16-18, 22-26 (Content Type, 26min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  
Vi ser avsnitten 27-29 (Taxonomy, 10min), 30-31 (Content, 10min), och 32 och 33 (Revisions och Devel, 9min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".    
Vi ser avsnitten 34-36 (Displays, 15min) och 37-40 (Views, 20min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  
Vi ser avsnitten 41-42 (Image Styles och Photo Gallery, 8min) och 43-47 (Moduler, 23min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  
[Uppgift: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)  
Quiz: Moduler i Drupal  
Vi ser avsnitten 48-51 (Block och Menyer, 13min) och 52-55 (Teman, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".   
Vi ser avsnitten 56-57 (Rättigheter, 8min), 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".   
Prov på Grundkurs i CMS   
--> 

## Vecka 41   

### Måndag   

Youtubekurs i CMS  

### Fredag  

Youtubekurs i CMS  

## Vecka 42   

### Måndag   

Youtubekurs i CMS  

### Fredag  

Youtubekurs i CMS  

## Vecka 43   

Youtubekurs i CMS  

## Vecka 44   

**HÖSTLOV**   

## Vecka 45   

### Måndag   

<!--

###### Teman och subteman i en CMS  

* "[How to Create a Sub Theme in Drupal 8 or 9](https://youtu.be/hPXUn_D2-lE)" (4 min)  
* "[How to Convert an HTML Template to a Drupal 8 Theme](https://youtu.be/xdifbN3y5hU)" (15 min)  
* "[Theming Drupal](https://www.drupal.org/docs/theming-drupal)"  

###### Konfigurationsfiler  
[YAML](https://en.wikipedia.org/wiki/YAML), "[The YAML file explained](https://youtu.be/fwLBfZFrLgI)" (2 min), "[YAML Basics Every DevOps Engineer Must Know](https://linuxhandbook.com/yaml-basics/)".     
[TWIG](https://en.wikipedia.org/wiki/Twig_(template_engine)), "[Introduction to Twig and its syntax](https://youtu.be/50RBUmPOYig)" (3 min), [Twig Tweak](https://www.drupal.org/project/twig_tweak), "[Twig Tweak Cheat sheet](https://git.drupalcode.org/project/twig_tweak/-/blob/3.x/docs/cheat-sheet.md)".  

[Uppgift: CMS subtheme](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_subhteme)  


-->

<!-- 
[AI in Drupal: It's Coming, and it's Awesome](https://youtu.be/4S-HBFVE2lU) (6 min)  

[My solar-powered and self-hosted website](https://dri.es/my-solar-powered-and-self-hosted-website)   

[OSTips - Drupal](https://youtube.com/playlist?list=PLtaXuX0nEZk_R36-089QmM-OMTZ3APvuc&si=0pxyc81CkDZfHqZX)   

[How To Use AI in Drupal to Set the Tone of Your Content](https://youtu.be/Vz7oTYYBeK0) (8 min)   

-->

Prov på Youtubekurs i CMS  

### Fredag  

Individuell uppgift  

## Vecka 46   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 47   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 48   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 49   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 50   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 51   

### Måndag   

Individuell uppgift  

### Fredag  

Individuell uppgift  

## Vecka 52   

**VINTERLOV**   

## Vecka 2   

Gruppuppgift  

## Vecka 3   

Gruppuppgift  

## Vecka 4   

Gruppuppgift  

## Vecka 5   

Gruppuppgift  

## Vecka 6   

Gruppuppgift  

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

<!-- 
"[Jeffrey Zeldman 20 years of Web Design and Community](https://vimeo.com/219302853)" (40 min)        

Jeffrey Zeldman är en legend i webbutvecklingsbranschen av samma dignitet som Tim Berners-Lee. I dokumentären ovan får lära oss mer om hans bakgrund, varför han började med webbutveckling och vad han bidragit med. Se gärna vidare på webtidningen [A List Apart](https://alistapart.com/) som han grundade och inspelningar från hans konferenser [An Event Apart](https://www.youtube.com/@AnEventApartLive).     
-->


## Vecka 25   
**SOMMARLOV**   

---     
[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
