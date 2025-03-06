# Stora projektet   

*Nu är det dags att tillämpa kunskaper från både Webbutveckling 1 och 2. I en stor grupp skall ni samarbeta och omvandla en gammal och "mindre snygg" webbplats till en modern och lättnavigerad produkt Det skall finnas tydlig och tilltalande dokumentation, ett Drupal subtheme baserat på Bootstrap och såklart en färdig webbplats.*   

## Förutsättningar   

Gruppuppgift.   

### Resurser   

* [Drupal](https://www.drupal.org/) och [Bootstrap 5 Barrio](https://www.drupal.org/project/bootstrap_barrio) med [Bootstrap Build](https://bootstrap.build/)       
* [Docker](https://www.docker.com/) tillsammans med filen [docker-compose.yml v.2.0](https://github.com/seetee/docker/tree/version2.0/drupal) eller Lando   
* [GitHub](https://github.com/)   
* [HTTrack](https://www.httrack.com/)   
* [VSCodium](https://vscodium.com/)
* [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)     

## Uppgiftsbeskrivning   

##### Ansvarsområden   

I denna uppgift skall alla delta i att skriva kod, bidra med dokumentation och idéer. Men ni har också ett specifikt ansvarsområde som ni fått er tilldelade. Det innebär inte att ni _endast_ skall göra det som ingår i ansvarsområdet, eller att endast _ni_ skall göra uppgifter som faller under ansvarsområdet. Vad det innebär är att du bär ansvaret. Det är du som kommer få skulden om uppgiften inte utförs (oasett om du är på lektionen eller inte).   

Ansvarsområdena är _Projektledning_, _Versionshantering_, _Dokumentation_, _Data_, _Designsystem_, _Infrastruktur_.   

De som är ansvariga för _Projektledning_ skall se till att ingenting hindrar arbetet. De skall ta ledningen under gruppdiskussioner och se till att det alltid finns tillgängliga arbetsuppgifter i form av Issues på GitHub (och därmed också kort på GitHub Projects).   

Tar du hand om _Versionshantering_ svarar du på frågor och hjälper resten av gruppen med git-relaterade problem. Du ansvarar också för att Pull Requests och git-konflikter löses.   

Eftersom dokumentationen och rapportering av ert arbete är väldigt viktigt, bör alla vara inställda på att dokumentera ert arbete. Att detta arbete samordnas och sker kontinuerligt är en del av ansvarsområdet _Dokumentation_. Här ingår också att formatera och uppdatera dokumentationen, samt att se till att en rapport sänds in varannan vecka. All dokumentation skall sparas i en katalog vid namn /docs i ert repocitory.      

De gamla webbplatserna innehåller mycket information. Denna informationen är ofta dåligt sorterad och svår för besökare att hitta. Det krävs att de som är ansvariga för _Data_ sätter sig in i hur man kan strukturera upp informationen och sortera den på ett logiskt och lättförståeligt sätt, både för kommande besökare samt användare av er webbplats. Den största uppgiften är dock att migrera data från den gamla webbplatsen till den nya.   

Ett _Designsystem_ kan börja livet som ett pattern library, men skall växa bortom det med både standarder för utseende och det "tänk" man skall ha när man bygger just er webbplats. "Your product is more than just a pile of reusable UI elements. It has structure and meaning. It’s not a generic web page, it’s the embodiment of a system of concepts." skrev Emmet Connoly, director of product design på Intercom. Vidare skrev Diana Mounter, design systems manager på GitHub, "Design systems are always evolving, and the way you share and encourage adoption of new iterations will evolve along the way as well."   

Det förekommer inte direkt något backend-jobb i detta projekt, men det finns en del _Infrastruktur_ som behöver underhållas. Till exempel installation och konfiguration av moduler samt både testning och sanering av content types och exempeldata i Drupal.   

##### Regelbundna uppgifter   

Börja varje lektion med en 5-10 minuter lång snabbgenomgång av hur arbetsläget ser ut. Låt var och en i gruppen svara kort (c:a 1 mening) på frågorna "Vad gjorde jag förra gången?", "Vad skall jag göra idag?" och "Vad hindrar mig?".   

Varannan vecka skickar Dokumentationsansvariga in en rapport i markdown-format i docs-katalogen i ert repocitory där de kort redogör för vilka uppgifter som slutförts under de senaste fjorton dagarna, samt om det finns några problem som hindrar att gruppens arbete går vidare. Rapporten skall innehålla en översikt över de commits som gjorts på GitHub, och fokusera på vad gruppen som helhet åstakommit i projektet, inte individuella insatser.      

##### Större moment   

Uppdatera (eventuellt gör om) logotypen.   

Bestäm färgschema, typografi och liknande.   

Skapa ett designsystem.   

Gör en sitemap. Basera denna på den gamla sidans innehåll, fast ta hänsyn till nya content types och taxonomier.   

> Tips! Ni behöver inte en "Hem"-länk eller en "Om oss"-sida. Denna informationen kan med fördel visas för besökaren genom att de först hamnar på en nyhetssida och att webbplatsen har en informativ footer.   

Ta fram en Bootstrap 5-temafil med hjälp av Bootstrap Build.      

Bygg ett subtheme till Bootstrap 5 Barrio för Drupal 10.   

Använd [YAML](https://en.wikipedia.org/wiki/YAML) och [Twig](https://en.wikipedia.org/wiki/Twig_(template_engine)) för att skapa väl integrerade template-filer till webbplatsen. Förstasidan skall ha en egen template-fil, men det är upp till er vilka övriga sidor som behöver det.   

Konfigurera Drupal med korrekta content types, taxonomier och liknande.   

Migrera data från den gamla webbplatsen till er nya.   

##### Översikt över projektet   

[![](https://mermaid.ink/img/pako:eNqNVNuK2zAQ_ZWpoW8OrO2kD35rm7YUGrqQQCnkZTYau6otyUhyd82yf7N_sj_W8foSxzGlevBF0jlz5sxIj8HJCArSIEft_VEDD4GePhur0AP85LHa7VbbbbeGD9L1a29_QDfnjcBmh7YgCybLuklHJy-NhltrflPRM_c_zqP1byAFJUty3mgKQUUhxDdxvLqJVvE6jESH-PbyrDSC1CBMUSvSHl9pL7FxCJh5Di8ScMkI7sNVltwAnEdNhqibVXwGDuK_SK_QMXE3zb-shB8LI80vE4Do_pJrO9XfLb3Xf16etWAzqA0C0QWhiIasXEt9P-R0TuZKgxiNYBdYASzHiS9ByQCS6zYOzHSjx27mu5W51Fg6KQj53bgJC87ST3q9e-lJYQWLnuGot4UPjn002nOK4JuK3BVkVNuCR7UHfDDaKHkFeMWsR0xyDtMmpmRuyUqdX0E2oykMeTevJTmZa9ewm6pvDYuZdAVU1mSynJG5mTfrnu6DMXwWLLtz-EWKZqB4Wv5B9C16ntJQyjuLtplBRm9a8GYm-qvOLDezrQtf9w29M6IuefticWQ0LU78P8WR8dTooQX-WRt57r4YcHJuDqSqkm8it6htPW30wc99RSTaHl-EbGZtHoSBIr7JpODr77FlOAa-rcMxSPmTj0txDI76iffVVXsnfhLSGxukGR8BCgOsvdk3-hSk7CkNm7YSc4uq3_X0F9figUU)](https://mermaid.live/edit#pako:eNqNVNuK2zAQ_ZWpoW8OrO2kD35rm7YUGrqQQCnkZTYau6otyUhyd82yf7N_sj_W8foSxzGlevBF0jlz5sxIj8HJCArSIEft_VEDD4GePhur0AP85LHa7VbbbbeGD9L1a29_QDfnjcBmh7YgCybLuklHJy-NhltrflPRM_c_zqP1byAFJUty3mgKQUUhxDdxvLqJVvE6jESH-PbyrDSC1CBMUSvSHl9pL7FxCJh5Di8ScMkI7sNVltwAnEdNhqibVXwGDuK_SK_QMXE3zb-shB8LI80vE4Do_pJrO9XfLb3Xf16etWAzqA0C0QWhiIasXEt9P-R0TuZKgxiNYBdYASzHiS9ByQCS6zYOzHSjx27mu5W51Fg6KQj53bgJC87ST3q9e-lJYQWLnuGot4UPjn002nOK4JuK3BVkVNuCR7UHfDDaKHkFeMWsR0xyDtMmpmRuyUqdX0E2oykMeTevJTmZa9ewm6pvDYuZdAVU1mSynJG5mTfrnu6DMXwWLLtz-EWKZqB4Wv5B9C16ntJQyjuLtplBRm9a8GYm-qvOLDezrQtf9w29M6IuefticWQ0LU78P8WR8dTooQX-WRt57r4YcHJuDqSqkm8it6htPW30wc99RSTaHl-EbGZtHoSBIr7JpODr77FlOAa-rcMxSPmTj0txDI76iffVVXsnfhLSGxukGR8BCgOsvdk3-hSk7CkNm7YSc4uq3_X0F9figUU)   

![responsibility_assignment_matrix_-_stora_projektet](https://user-images.githubusercontent.com/5168530/219376710-9d3271fd-34d7-454d-a39a-c4554e4e76a1.png)   

<div style="page-break-after: always;">&nbsp;</div>   

## Förväntat resultat   

Ett designsystem i form av en layoutmässigt och grafiskt tilltalande dokumentation som beskriver färger, typsnitt, logotyper och andra grundkomponenter ni använder till sidan.   

Ett installeringsbart subtheme.   

Alla skall ha bidragit till ert repocitory med vettiga commits, samt hanterat minst en innehållsrik issue på GitHub Projects i veckan.   

### Vilka filer?   

En länk till ert repocitoiry som innehåller ett komplett subtheme så som det sett ut om det tankats ned från drupal.org.      

En designsystem bestående av en PDF med style guide och ett pattern library, samt ett separat component library.      

En komplett webbplats.    

### Var skall de lämnas in?   

Filer lämnas in i en uppgift i Teams.  

Loggböcker och theme lämnas in via github.  

Den färdiga webbplatsen skall ligga på vår liveserver.  

---     

[![Creative Commons-licens](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/) Detta dokument är licensierat under en [Creative Commons Erkännande-DelaLika 4.0 Internationell Licens](http://creativecommons.org/licenses/by-sa/4.0/).    
Bilder och fotografier tillhör respektive upphovsman, och befinner sig inte nödvändigtsvis under en Creative Commons-licens.   
