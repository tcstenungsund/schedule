# Webbutveckling 2 - 21TEI    

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

**Studiedag**

## Vecka 38   

##### Workspace för en webbutvecklare        

LAMP + Docker.       

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

## Vecka 39   

###### Introduktion till CMS:er. 

Det finns [många CMS:er](https://en.wikipedia.org/wiki/List_of_content_management_systems). Vi kommer använda en av de största, Drupal. Drupal är känd för att den har en aktiv utvecklarcommunity, många moduler och är både stabil att bygga komplexa lösningar på, men också enkel att arbeta med. Youtube-kursen vi skall se baseras på version 8, så under kursens gång är det den versionen vi kör. Men när vi sedan arbetar med systemet kommer vi köra version 10.           

[![Drupals versioner](https://blog.twn.ee/sites/default/files/2020-10/Drupal%20Eng.png) ](https://blog.twn.ee/sites/default/files/2020-10/Drupal%20Eng.png)     

[Uppgift: CMS Install](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_install)     

Nu har du en utvecklingsmiljö med Drupal 8 som du kan stoppa och starta med följande kommandon. 

    lando start     

&nbsp;

    lando stop      

## Vecka 40   

Fortsätt med uppgift CMS Install...                

## Vecka 41   

Genomgång av provet från vecka 35.        

Fortsätt med uppgift CMS Install...        

Vi ser avsnitten 1-3 (Introduktion, 15min) och 8-15 (Systemöverblick, 17min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".        

## Vecka 42   

**Projektdag: Gymnasiearbete**      

## Vecka 43   

###### För de som inte lyckats installera en CMS-container än            
1) Skapa ny projektkatalog       
2) Ladda ned filen [docker-compose.yml](https://github.com/seetee/docker/blob/master/drupal/docker-compose.ym)
3) Navigera till din projektkatalog och kör följande kommando

       docker-compose up -d

5) Öppna http://localhost:8080 i din webbläsare och slutför installationen, alla uppgifter du behöver står i filen du nyss laddade ned, och i övrigt väljer du defaultvärden eller egna kreativa lösningar    
6) När du är klar, kan du stoppa och starta din utvecklingsmiljö med följande kommandon                  

       docker-compose stop          

       docker-compose start          

[Uppgift: Moduler i Drupal](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-moduler_i_drupal)

## Vecka 44   

**HÖSTLOV**   

## Vecka 45   

Vi ser avsnitten 16-18, 22-26 (Content Type, 26min) samt avsnitten 27-29 (Taxonomy, 10min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".      

Vi ser avsnitten 37-40 (Views, 20min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".            

Läxa till vecka 46: Se avsnitten 30-31 (Content, 10min), 34-36 (Displays, 15min), 32 och 33 (Revisions och Devel, 9min), 41-42 (Image Styles och Photo Gallery, 8min) samt avsnitten 43-47 (Moduler, 23min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".      
              
## Vecka 46   

Vi ser avsnitten 48-51 (Block och Menyer, 13min) och 52-55 (Teman, 15min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".     

Presentation av uppgiften Moduler i Drupal.    

Test på uppgift: Moduler i Drupal          

Läxa till vecka 47: Vi ser avsnitten 56-57 (Rättigheter, 8min), 58-60 (Rapporter och Uppdatering, 10min) och 61-62 (Drupals Community, 6min) i serien "[Drupal 8 Beginner](https://www.youtube.com/playlist?list=PLtaXuX0nEZk9MKY_ClWcPkGtOEGyLTyCO)".

## Vecka 47   

_"Forskaren som vill rädda världen med hjälp av AI"_, en föreläsning av Sasha Luccioni, live från [Internetdagarna 2023](https://internetdagarna.se/)! "Sasha Luccioni är forskare i etisk och hållbar AI på företaget Hugging Face som verkar för en större transparens inom AI-utvecklingen. Sasha Luccioni sitter också i styrelsen för Women in Machine Learning och är en av grundarna av den ideella organisationen Climate Change AI – ett initiativ för att lyfta fram forskning i skärningspunkten mellan miljö och maskininlärning. Som AI- och hållbarhetsexpert har Sasha Luccioni även arbetat med organisationer som FN och OECD. Bland annat för att ta fram normer och principer för ett mer hållbart arbete med AI. Hennes arbete har lyfts av tidningar som Wired, Washington Post och Business Insider." 

Repetition inför provet     

## Vecka 48   

###### Teman och subteman i en CMS      
* "[How to Create a Sub Theme in Drupal 8 or 9](https://youtu.be/hPXUn_D2-lE)" (4 min)    
* "[How to Convert an HTML Template to a Drupal 8 Theme](https://youtu.be/xdifbN3y5hU)" (15 min)    
* "[Theming Drupal](https://www.drupal.org/docs/theming-drupal)"    

###### Konfigurationsfiler   
[YAML](https://en.wikipedia.org/wiki/YAML), "[The YAML file explained](https://youtu.be/fwLBfZFrLgI)" (2 min), "[YAML Basics Every DevOps Engineer Must Know](https://linuxhandbook.com/yaml-basics/)".     
[TWIG](https://en.wikipedia.org/wiki/Twig_(template_engine)), "[Introduction to Twig and its syntax](https://youtu.be/50RBUmPOYig)" (3 min), [Twig Tweak](https://www.drupal.org/project/twig_tweak), "[Twig Tweak Cheat sheet](https://git.drupalcode.org/project/twig_tweak/-/blob/3.x/docs/cheat-sheet.md)".     

--   

Prov på Grundkurs i CMS         

## Vecka 49   

[Uppgift: CMS subtheme](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb02-cms_subhteme)  

Om du fortfarande vill köra docker-compose istället för Lando, använd den här filen: [docker-compose.yml](https://raw.githubusercontent.com/seetee/docker/version2.0/drupal/docker-compose.yml)   

## Vecka 50   

Fortsätt med Drupal subtheme    

## Vecka 51   

Fortsätt med Drupal subtheme    

## Vecka 52   

**VINTERLOV**   

## Vecka 2   

[Tävling: CSS Zen Garden](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb_css-zen-garden)    

## Vecka 3   

**Inriktningsinformation till år 1**   

## Vecka 4   

Dagens uppgift består i att se två videoklipp samt besvara några frågor (totalt ~400 ord). 

"[Jeffrey Zeldman 20 years of Web Design and Community](https://vimeo.com/219302853)" (40 min)   

Jeffrey Zeldman är en legend i webbutvecklingsbranschen av samma dignitet som Tim Berners-Lee. I dokumentären ovan får lära oss mer om hans bakgrund, varför han började med webbutveckling och vad han bidragit med. Se gärna vidare på webtidningen [A List Apart](https://alistapart.com/) som han grundade. 

**Frågor att besvara**   
1) Hur såg den tidiga webben ut, och hur reagerade Zeldman när han lärde känna den?
2) Vilka erfarenheter och intressen tog Zeldman med sig till webbutveckling?
3) Vad får du för intryck av "the standards movement"? Hur uppstod den och hur gick det?
4) Många uttalar sig om sin relation till Zeldman och hur han påverkat dem. Vilket citat tar du med dig från dokumentären?    

"[Michelle Barker – Modern CSS Layout is Awesome!](https://youtu.be/6O0KBNslevQ)" (44 min)   

Michelle Barker är en kreativ och designmedveten entusiast för CSS som gärna sprider nya och spännande sätt att bygga webbplatser på! Denna föreläsning gavs 2023 på konferensen "[beyond tellerrand](https://beyondtellerrand.com/)" Düsseldorf. 

**Frågor att besvara**
1) Layout i CSS var en gång svårt, men är nu lättare. Vilka tekniker har vi lämnat, och vilka har vi fått?   
2) Vad är skillnaden mellan vh och dvh? Varför behöver vi dvh?   
3) Barker nämner "subgrid", vilket nu ett år efter hennes presentation finns i alla webbläsare. När använder man subgrid, och hur fungerar det?   
4) En av de största nyheterna i CSS är "container queries", beskriv översiktligt hur det fungerar och ge två specifika exempel när du har användning av det.   

## Vecka 5   

Omröstning av tävlingen från vecka 2.   

###### Versionshantering  

Vad är [Git](https://en.wikipedia.org/wiki/Git) och "[What is GitHub?](https://youtu.be/pBy1zgt0XPc)" (3 min). Se till att du har koll! "[Learn Git and GitHub in a more fun way](https://blog.pradumnasaraf.dev/learn-git-and-github-in-a-more-fun-way)"   
"[A Web Developers Workflow for GitHub](https://dev.to/rembertdesigns/a-web-developers-workflow-for-github-1b72)" och "[Git & GitHub](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkFiqHnNaxpOPhh9tSWMXIF)" (16 min)   

![Git Structure](https://krishnaiitd.github.io/gitcommands/images/GitWorkflow-3.png)    

"[Git cheatsheet](https://ndpsoftware.com/git-cheatsheet.html)", "[git - the simple guide](https://rogerdudler.github.io/git-guide/)", "[Write Git Commit Messages That Your Colleagues Will Love](https://prplcode.hashnode.dev/write-git-commit-messages-that-your-colleagues-will-love)" och "[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)".   
         
Gör övningarna på "[Learn Git Branching](https://learngitbranching.js.org/)"   

## Vecka 6   

Arbetsflöde...       

Start av gruppuppgift...   

## Vecka 7   

**SPORTLOV**   

## Vecka 8   

Gästföreläsare om Git och arbetsflöde     

## Vecka 9   

Gruppuppgift...     

## Vecka 10   

Gruppuppgift...     

## Vecka 11   

Gruppuppgift...     

## Vecka 12   

Gruppuppgift...     

## Vecka 13   

Gruppuppgift...     

## Vecka 14   

**PÅSKLOV**   
## Vecka 15   

Gruppuppgift...     

## Vecka 16   

Gruppuppgift...     

## Vecka 17   

Gruppuppgift...     

## Vecka 18   

Gruppuppgift...     

## Vecka 19   

Gruppuppgift...     

## Vecka 20   

Presentation av gruppuppgift...    

## Vecka 21   


## Vecka 22   


## Vecka 23   


## Vecka 24   


## Vecka 25   
**SOMMARLOV**   
---     
[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
