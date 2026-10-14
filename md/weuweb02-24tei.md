# Webbutveckling 2 - 24TEI

## Vecka 35   

Kursplanering, Skolverkets [mål för kursen](https://www.skolverket.se/undervisning/gymnasieskolan/program-och-amnen-i-gymnasieskolan/hitta-program-amnen-och-kurser-i-gymnasieskolan-gy11/hitta-program-och-amnesplaner-i-gymnasieskolan-gy11#/search/subjects/WEU#WEUWEB02) samt en introduktion till ämnet.   

Repetition av kursen Webbutveckling 1.  

----  

[Uppgift: Accounts and Software](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/accounts_and_software) — kontrollera att konton, lösenordshanterare, webbläsare, extensions och bokmärken finns på plats. Även i denna kursen är det verktygen [Firefox Developer Edition](https://www.firefox.com/en-US/channel/desktop/developer/) och [VScodium](https://vscodium.com/) som gäller! Har du tappat bort dem installerar du dem bara igen!  

När du är klar med uppgiften så repeterar du förra kursen inför provet nästa vecka!  

## Vecka 36   

#### Virtualisering  

Vi skall nu lära oss att bygga stora webbplatser. För detta måste vi förstå [LAMP](https://en.wikipedia.org/wiki/LAMP_%28software_bundle%29), som webben bygger på. Men det är mycket arbete om alla skall installera en full LAMP-stack för att samarbeta om kod. (Vill du lära mer om MySQL/MariaDB, börja med att lyssna på avsnittet "[Monty - The man behind your databases](https://www.hackerpublicradio.org/eps/hpr1423/)" på Hacker Public Radio)  

Därför använder vi virtualisering! Vad är virtualisering?  

"[What is Virtualization](https://youtu.be/i1tEsMCZoWA?si=6LDvKj_qwfJvjSE-)" (3 min) 

Vad skiljer full maskinvirtualisering från container-virtualisering? "[Containerization vs. Virtualization : understand the differences](https://ubuntu.com/blog/containerization-vs-virtualization)"  

![Container virtualisering vs full machine](https://pawseysc.github.io/container-workflows/fig/container_vs_vm.png)      

"[Virtual Machines vs Containers](https://youtu.be/eyNBf1sqdBQ?feature=shared)" (8 min)  

Vi nämner också de vanligaste systemen, Docker, VMware, Proxmox, Kubernetes, Vagrant.  

----  

Prov: Repetitionsprov  

## Vecka 37   

Genomgång av provet från förra veckan  

#### Felsökningsmetodik  

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

----

###### KDE Plasma: GUI och CLI för webbutvecklare  

Mjukvaruutvecklare föredrar att arbeta i Unix-liknande operativsystem. De kräver inte den nivå av förståelse av kommandoraden som [xkcd: tar](https://xkcd.com/1168/) ger sken av, men du bör i alla fall förstå vad en [pakethanterare](https://sv.wikipedia.org/wiki/Pakethanterare) är och överblickar av din arbetsmiljö som [KDE Plasma in 180 Seconds](https://youtu.be/dZ6bojRSIw0) (4 min) är inte dum att se.   

Uppgift: Gör er desktop mer personlig! Installera ett par Widgets och byt tema! Vill du anpassa utseendet ännu mer finns [How to Customize KDE Plasma 6 | Guide for beginners](https://youtu.be/4OuaCXWSXFE) (24 min) till din hjälp. Fixa också till er prompt! [Starship](https://starship.rs/) rekommenderas!  

## Vecka 38   

### Modern CSS  

Michelle Barker är en kreativ och designmedveten entusiast för CSS som gärna sprider nya och spännande sätt att bygga webbplatser på! Denna föreläsning gavs 2022 på konferensen "[beyond tellerrand](https://beyondtellerrand.com/)" Düsseldorf.  

"[Michelle Barker – Modern CSS Layout is Awesome!](https://youtu.be/6O0KBNslevQ)" (44 min)  

----

Gör följande övningar. Inlämning skall bestå av ett screenshot av slutskärmen tillsammans med din dators klocka, samt en reflektion om en mening där du besvarar frågan "Vilken nivå ställde till med mest problem för dig, och varför?"  

Inlämningen skall alltså bestå av fem screenshots och fem svar på frågan.  

1) [Flexbox Froggy](https://flexboxfroggy.com/)  
2) [Flexbox Adventure](https://codingfantasy.com/games/flexboxadventure)  
3) [Grid Garden](https://cssgridgarden.com/)  
4) [Flexbox Defense](http://www.flexboxdefense.com/)  
5) [CSS Diner](https://flukeout.github.io/)  

Läxa till nästa vecka: "[My top 5 most popular front-end tips](https://youtu.be/DGOeyJjq80g)" (22 min) med Kevin Powell.  

## Vecka 39   

Fortsätt med CSS-övningarna. De flesta borde bli klara med Flexbox Froggy den här veckan.  


### Utvecklingsmiljö för webbutvecklare  

Webbutvecklare behöver tillgång till LAMP-stacken och för det använder vi Docker. Därför skall vi nu installera och lära oss använda Docker!  

"[Docker Tutorial For Beginners](https://youtu.be/RrTbOvqlEic)" (13 min), "[Docker for Web Development: A Brief Guide](https://medium.com/@vithusha.ravirajan/docker-for-web-development-a-brief-guide-5c0656319dcd)" och "[Docker Cheat Sheet](https://www.saltycrane.com/cheat-sheets/docker/)".  

[Uppgift: Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)  

[Uppgift: Docker Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-docker_basics)  

## Vecka 40   

### Introduktion till Content Management Systems  

Det finns [många CMS:er](https://en.wikipedia.org/wiki/List_of_content_management_systems). Vi kommer använda en av de största, Drupal. Drupal är känd för att den har en aktiv utvecklarcommunity, många moduler och är både stabil att bygga komplexa lösningar på, men också enkel att arbeta med. Youtube-kursen vi skall se baseras på version 8, så under kursens gång är det den versionen vi kör. Men när vi sedan arbetar med systemet kommer vi köra version 11.  

[![Drupal End-Of-Life table](https://www.prometsource.com/system/files/2023-11/drupal_versions.jpg)](https://www.prometsource.com/blog/faqs-drupal-9-end-of-life)  

[Uppgift: CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)   

## Vecka 41   

Slutför uppgifterna: 
* [Workspace setup](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-workspace_setup)  
* [Docker Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-docker_basics)
* [CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)   

Gå sedan vidare med uppgiften nedan.  

[Uppgift: Aktivera Utvecklarläge](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-aktivera_utvecklarlage)  

### Grundkurs i CMS  

Vi ser avsnitten 1-3 (Introduktion, 15min) och 8-15 (Systemöverblick, 17min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

## Vecka 42   

### Grundkurs i CMS  

<!-- 

Vi ser avsnitten 16-18, 22-26 (Content Type, 26min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)". 

Uppgift: Bygg en egen Content Type för saker i "Lost & Found"!  
  Date found — forced to realise Date isn't a text field
  Location — is that plain text, a select list of buildings, or a Taxonomy? Three defensible answers, all with trade-offs
  Image — Media reference, and the question of "what if there's no photo?" (optional field)
  Status — boolean ("claimed") vs list ("found/claimed/disposed")? Sneaky little data-modelling fork
  Description — long text with summary vs plain
  Category — Taxonomy vocabulary: keys, electronics, clothing — and who decides the allowed values?

----  

Vi ser avsnitten 27-29 (Taxonomy, 10min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".    

Uppgift: Lägg till minst ett fält som inte fanns i videon (t.ex. datum, bild eller en referens till er taxonomi). Fyll på med 5–10 noder. Diskutera i par: när är taxonomi rätt val och när räcker fritextfält?

Blir det tid över: börja titta på strukturen i era egna installationer via Structure → Content types → Manage fields.

-->

## Vecka 43   

### Grundkurs i CMS  

<!--


-->

## Vecka 44   

**HÖSTLOV**   

## Vecka 45   

### Grundkurs i CMS  

<!--


-->

## Vecka 46   

### Grundkurs i CMS  

<!--


-->

## Vecka 47   

### Grundkurs i CMS  

<!--


-->

## Vecka 48   

<!--

Vi ser avsnitten 30-31 (Content, 10min), och 32 och 33 (Revisions och Devel, 9min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".    

Vi ser avsnitten 34-36 (Displays, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

Uppgift: Ställ in Manage display för vår content type "Lost & Found". Jämför Teaser och Full content. Ställ in Teaser så att den visar bild plus ingress, men inte hela brödtexten.  



Vi ser avsnitten 37-40 (Views, 20min) och 41-42 (Image Styles och Photo Gallery, 8min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

Uppgift: Bygg en view som inte finns med i videon. Till exempel de senaste fem publicerade noderna i Lost & Found. Vad sorterar man på? Datum? Grupperat utifrån konferens? 



Vi ser avsnitten 43-47 (Moduler, 23min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  

Uppgiften nedan har ni i läxa till vecka 46!  

[Uppgift: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)  

Vi ser avsnitten 48-51 (Block och Menyer, 13min) och 52-55 (Teman, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".   

Skapa ett block och en meny, lägg dessa i var sitt område på sidan.  

Vi ser avsnitten 56-57 (Rättigheter, 8min), 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".  
-->

###### Drupal 8 Beginner  
| Avsnitt | Ämne                           | Tid    |
| :---    | :----:                         | ---:   |
| 1-3     | Introduktion                   | 15 min |
| 8-15    | Systemöverblick                | 17 min |
| 16-18,<br/>22-26 | Content Type          | 26 min |
| 27-29   | Taxonomy                       | 10 min |
| 30-31   | Content                        | 10 min |
| 32-33   | Revisions <br />och Devel      | 9 min  |
| 34-36   | Displays                       | 15 min |
| 37-40   | Views                          | 20 min |
| 41-42   | Image Styles och Photo Gallery | 8 min  |
| 43-47   | Moduler                        | 23 min |
| 48-51   | Block och Menyer               | 13 min |
| 52-55   | Teman                          | 15 min |
| 56-57   | Rättigheter                    | 8 min  |
| 58-60   | Rapporter och uppdatering      | 10 min |
| 61-62   | Drupals Community              | 6 min  |

Prov: Grundkurs i CMS - Drupal 8 Beginner  

## Vecka 49   

### Bygga teman i en CMS  

## Vecka 50   

### Bygga teman i en CMS  

## Vecka 51   

### Bygga teman i en CMS  

## Vecka 53   

**VINTERLOV**   

## Vecka 1


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

**PÅSKLOV**  

## Vecka 14   


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

**SOMMARLOV**   

---     
[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
