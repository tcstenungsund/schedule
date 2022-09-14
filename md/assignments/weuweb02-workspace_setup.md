# Webbutveckling 2: Workspace setup

_För all mjukvaruutveckling behövs en vettig miljö. Den miljön kan inkludera olika saker, men i den här kursen så behöver vi en webbserver, databasserver och lite annat trevligt. Det verktyg som är absolut vanligast idag är containervirtualiseringsmjukvaran Docker._

---

## Förutsättningar

Enskild uppgift. Windows 10/11 Professional eller bättre (vilket självklart inkluderar Linux). 

## Resurser

*   [Lando - Installation - Linux](https://docs.lando.dev/getting-started/installation.html#debian) 
*   [Lando - Installation - Windows](https://docs.lando.dev/getting-started/installation.html#windows)
*   [Microsoft - Enable Hyper-V](https://docs.microsoft.com/sv-se/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
*   [Lando - Senaste stabila versionen](https://github.com/lando/lando/releases/latest)

> Tips! Alla kommandon skall köras i ett shell som bash i Linux eller PowerShell i Windows. 

## Uppgiftsbeskrivning

Målet är att installera och konfigurera Docker. För att göra detta enklare så använder vi mjukvaran Lando som installerar och konfigurerar Docker åt oss. 

I Linux räcker det att köra följande två kommandon. 

    wget https://files.lando.dev/installer/lando-x64-stable.deb
    sudo dpkg -i lando-x64-stable.deb

Om du använder Windows måste du först aktivera Hyper-V genom att följa Microsofts guide, ladda ned den senaste stabila versionen av mjukvaran Lando och installera den. Lando inkluderar Docker och gör några trevliga inställningar automatiskt åt dig. 

När Docker är installerat så kör du följande kommando, öppnar localhost i din webbläsare och läser igenom getting-started-tutorialen. 

    docker run -d -p 80:80 docker/getting-started

## Förväntat resultat

En färdig installation av Docker, där du kan starta virtuella containrar. 

### Vilka filer?

Ingenting skall lämnas in.

### Var skall de lämnas in?

Ingenting skall lämnas in. 

---

Detta dokument är licenserat under Creative Commons BY-SA. Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.

Dokumentet är skapat och uppdaterat av Kenneth Frantzen (@seetee på GitHub).
