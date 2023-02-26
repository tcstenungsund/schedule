# Webbutveckling 1: Min Fula Lilla Sida

_Ni har tidigare lärt er hur man bygger en webbplats med hjälp av HTML och CSS. Dessutom vet ni både hur man planerar för och samarbetar kring ett projekt. Tillsammans med kunskaper om ramverk som Bootstrap och andra hjälpmedel som finns på nätet så skall ni nu omsätta denna kunskapen i praktiken._

---

## Förutsättningar

Gruppuppgift för 3-4 personer.

## Resurser
* [HTML Dog](https://htmldog.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Bootstrap Build](https://bootstrap.build/)
* Allt ni lärt er hitills i kursen    

> Tips! Skapa och länka in tre CSS-dokument; ett för layout, ett för typografi och ett för färgsättning. Så ni har dem separerade från varandra. Detta gör det lättare att samarbeta.

## Uppgiftsbeskrivning

Detta projekt kommer att löpa under hela våren, men är uppdelad i tre större moment, planering (\~3 veckor), konstruktion (\~5 veckor) och verifiering (\~3 veckor). Påbörja inte nästa moment förän ni slutfört och lämnat in föregående moment. Målsättningen med projektet är att ni skall lära er att använda och tillämpa andras kod (både Bootstraps och era gruppkamraters), att identifiera och hantera problem som kan uppstå när man arbetar med mjukvaruutveckling i grupp samt de punkter från Skolverket ni kan läsa citerat nedan.

[![](https://mermaid.ink/img/pako:eNplUc1OwzAMfhUTiVsr0YxxyHlwgUmTkEBIvViLO0KXpEpcwTTtbXgTXox0TTcNfErs7y_OXqy9JqHEBh1z7SCVRqYHHywywFuqcrksF4txhl8m5tn1K4w99hp3SwwtBfBNMzYjrdl4B6vgP6jNyvkSGQNfgQJrthTZOyrAVgXIGynLG1nKqqj0yHj6-bYOwTjQvu0tOcaj7CVXTtx5Wc1P3OzWBYoT76_p7EycnU1XW3QUjNvAZakuhcSG0zuHuLefeQGP3kUOfXtMdoGXE35g3k34lyTemP8Oqpud8DLri0JYSvs2On3SfuDXgt_JUi1UOuq09lrU7pBwfTf83L027INQDW4jFQJ79s87txYqJaQJtDC4CWgz6vALbkqdnQ)](https://mermaid.live/edit#pako:eNplUc1OwzAMfhUTiVsr0YxxyHlwgUmTkEBIvViLO0KXpEpcwTTtbXgTXox0TTcNfErs7y_OXqy9JqHEBh1z7SCVRqYHHywywFuqcrksF4txhl8m5tn1K4w99hp3SwwtBfBNMzYjrdl4B6vgP6jNyvkSGQNfgQJrthTZOyrAVgXIGynLG1nKqqj0yHj6-bYOwTjQvu0tOcaj7CVXTtx5Wc1P3OzWBYoT76_p7EycnU1XW3QUjNvAZakuhcSG0zuHuLefeQGP3kUOfXtMdoGXE35g3k34lyTemP8Oqpud8DLri0JYSvs2On3SfuDXgt_JUi1UOuq09lrU7pBwfTf83L027INQDW4jFQJ79s87txYqJaQJtDC4CWgz6vALbkqdnQ)

> Skolverket centrala innehåll säger att ni i kursen Webbutveckling 1 skall lära er:
> * Processen för ett webbutvecklingsprojekt med målsättningar, planering, specifikation av struktur och design, kodning, optimering, testning, dokumentation och uppföljning.
> * Applikationer som fungerar oberoende av val av användaragent, operativsystem eller hårdvaruplattform och hur tillgänglighet uppnås även för användare med funktionsnedsättning.
> * Kvalitetssäkring av applikationens funktion och validering av kodens kvalitet."

### Planering

I projektets första skede skall ni skapa det Designsystem ni sedan kommer att utgå ifrån i ert arbete.
Detta designsystem skall innehålla en logotyp, en Style Guide och ett Pattern Library.   

* Definiera, beskriv och förklara webbplatsens buisness objectives
* Skapa en moodboard
* Skapa en sitemap
* Definiera Call To Actions för varje undersida
* Bestäm ett färgschema och typsnitt för webbplatsen
* Undersök vad Bootstrap kräver
* Diskutera hur logotypen skulle kunna se ut
* Skall ni ha sociala medier på sidan? Som Mastodon/Twitter/Facebook/Identi.ca/Flickr/... ... ... ?
* Finns det andra tjänster (widgets) som skulle göra sidan bättre?
* Skapa relevanta wireframes (en för förstasidan, en för varje typ av undersida, samt varianter för plattor och mobiler)
* Skapa en genomtänkt katalogstruktur och skapa alla filer ni behöver
* Fyll alla filer med Lorem Ipsum så ni har något att arbeta med 
* Sammanställ informationen ovan och lägg till det som saknas för att få en komplett style guide  

### Konstruktion

* Skapa en logotype i Inkscape
* Ersätt exempeldata på index.html med skarpt innehåll
* Layout
* Widgets
* Ersätt exempeldata med skarpt innehåll på övriga undersidor
* Typografi
* Bakgrunder
* Färgschema
* Lägg till länkad logotyp till TC Stenungsund
* Optimera rastergrafik
* Se till att ni har minst en tydligt CTA på varje sida

> Tips! Bootstrap har ett pattern library där ni kan finna många färdiga komponenter som går att anpassa och använda på er webbplats.

###### Om ni har FTP-access

* Installera ett besökaranalysverktyg
* Installera [Discourse](https://www.discourse.org/) eller liknande

###### Överkurs

* Lägg till animation och transition
* Implementera darkmode

### Verifiering

Genomför alla tester nedan, fundera över varför resultaten ser ut som de gör och uppdatera er Style Guide samt er kod med lämpliga förbättringar. Med en sökmotors hjälp finner ni snabbt många 100 verktyg på nätet som hjälper er med nedanstående tester, en del i uppgiften är att hitta några som förefaller mer trovärdiga och detaljerade än andra och använda dessa.

* All kod skall gå igenom W3Cs validering
* Testa hastighet
* Testa kontrast
* Genomför användartester

## Förväntat resultat

En färdig sida som passerar W3C's Unicorn-validering. Genomtänkt namngivna dokument, kataloger och en bra struktur. Allt innehåll skall vara på plats. Designen skall fungera i alla webbläsare samt mobila enheter.

Ni kommer även få presentera sidan för era klassamrater, samt skriva en personlig utvärdering av hur projektet gått.

### Vilka filer?

Första inlämningen skall bestå av följande:     
* Ett Designsystem i PDF-format.       

Andra inlämningen skall bestå av följande:      
* Ett 7Zip-arkiv av er kompletta sidas fulla katalogstruktur.     
* En komplett dokumentation i PDF-format, inklusive designsystem och resultat av tester.    
* En logotype i SVG-format.   

### Var skall de lämnas in?

På vår lärplattform [It's Learning](https://stenungsund.itslearning.com/) finns ett kursrum vid namn _"Webbutveckling 1"_, under _Innehåll_ / _Inlämningar_ hittar du en inlämningskatalog med samma namn som den här uppgiften.

---

Detta dokument är licenserat under Creative Commons BY-SA. Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.

Dokumentet är skapat och uppdaterat av Kenneth Frantzen (@seetee på GitHub).
