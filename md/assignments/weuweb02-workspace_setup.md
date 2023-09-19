# Workspace setup

_För all mjukvaruutveckling behövs en vettig miljö. Den miljön kan inkludera olika saker, men i den här kursen så behöver vi en webbserver, databasserver och lite annat trevligt. Det verktyg som är absolut vanligast idag är containervirtualiseringsmjukvaran Docker._

---

## Förutsättningar

Enskild uppgift. Windows 10/11 Professional eller bättre (vilket självklart inkluderar Linux). 

## Resurser

*   [Lando - Installation - Linux](https://docs.lando.dev/getting-started/installation.html#debian) 
*   [Lando - Installation - Windows](https://docs.lando.dev/getting-started/installation.html#windows)
*   [Microsoft - Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install)
*   [Lando - Senaste stabila versionen](https://github.com/lando/lando/releases/latest)

> Tips! Alla kommandon skall köras i ett shell som bash i Linux eller PowerShell i Windows. 

## Uppgiftsbeskrivning

Målet är att installera och konfigurera :whale2: Docker. För att göra detta enklare så använder vi mjukvaran Lando som installerar och konfigurerar Docker åt oss. 

#### Linux      

I Linux-distributioner som kör Debians pakethanterare räcker det att köra följande två kommandon. 

    wget https://files.lando.dev/installer/lando-x64-stable.deb
    sudo dpkg -i lando-x64-stable.deb

Men följ gärna instruktionen som länkas under resurser ovan.     

#### Windows     

Om du använder Windows måste du först aktivera WSL och installera en Linux-distribution genom att följa Microsofts guide ovan. Se till att det är version 2 av WSL du kör, och välj senaste LTS-versionen av Ubuntu för Linux. Ladda sedan ned den senaste stabila versionen av mjukvaran Lando och installera den. Lando inkluderar Docker och gör några trevliga inställningar automatiskt åt dig. Följ instruktionen för att installera Lando i Windows ovan.      

Kom ihåg att Windows måste startas om efter varje förändring, inklusive installationen av Lando.     

När Docker är installerat så kör du följande kommando, öppnar localhost i din webbläsare och läser igenom getting-started-tutorialen. 

    docker run -d -p 80:80 docker/getting-started

## Förväntat resultat

En färdig installation av Docker, där du kan starta virtuella containrar. 

### Vilka filer?

Ingenting skall lämnas in.

### Var skall de lämnas in?

Ingenting skall lämnas in. 

---     

[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.    
