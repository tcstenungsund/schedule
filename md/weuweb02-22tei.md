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

###### Installera Linux!   

1) Skaffa filen [kubuntu-2024.05.01-x85_64.iso](https://kubuntu.org/getkubuntu/)   

2) Se till att du har backup i OneDrive på all viktig data.   

3) Krymp din primära diskpartition till hälften, antingen genom "[Disk Management](https://youtu.be/qq-7X8zLP7g?t=262)" i Windows eller [gParted](https://gparted.org/livecd.php).   
 
4) Skapa nu en bootbar USB-sticka med Kubuntu på. Använd till exempel [Rufus](https://rufus.ie/en/).

5) Starta om datorn och öppna BIOS [F10].    
[Deaktivera BitLocker](https://www.howtogeek.com/805225/disable-bitlocker/).   
Stäng av Secure Boot (och FastBoot). Starta om med din bootbara USB-sticka i och tryck [F9] för att välja att boota från den.  

6) Installera Kubuntu. Välj engelska som språk, men sverige som plats och svenskt tangentbord.  

7) Starta om datorn och välj Kubuntu i bootmenyn GRUB. Njut av ditt nya OS!  

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


## Vecka 41   


## Vecka 42   


## Vecka 43   


## Vecka 44   

**HÖSTLOV**   
https://sv.wikipedia.org/wiki/Pakethanterare
## Vecka 45   


## Vecka 46   


## Vecka 47   


## Vecka 48   


## Vecka 49   


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
