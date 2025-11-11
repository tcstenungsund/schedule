# Webbutveckling 1 - 24TEI  

## Vecka 36   

Kursplanering, presentation och introduktion till ämnet. Tittar på [Skolverkets riktlinjer](https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-program-och-amnen-i-gymnasieskolan/gymnasieprogrammen/amne?url=1530314731%2Fsyllabuscw%2Fjsp%2Fsubject.htm%3FsubjectCode%3DWEU%26lang%3Dsv%26tos%3Dgy%26p%3Dp).  

###### Upphovsrätt och mjukvarulicenser      

Det är dags för [A Brief History of Copyright](https://socialsci.libretexts.org/Bookshelves/Education_and_Professional_Development/Book%3A_Education_for_a_Digital_World_-_Advice_Guidelines_and_Effective_Practice_from_Around_Globe_(Hirtz)/15%3A_Understanding_Copyright_-_Knowing_Your_Rights_and_Knowing_When_Youre_Right/15.2%3A_A_Brief_History_of_Copyright). Vi börjar med en översikt av the "[History of copyright](https://en.wikipedia.org/wiki/History_of_copyright)", från the Statute of Anne 1710 och the Berne Convention 1886 till idag. Någonstans längs vägen förvandlas upphovsrättens historia via [The Mickey Mouse Curve](https://artrepreneur.com/journal/disney-copyright-keeps-changing/) till [The Disney History](https://www.boredpanda.com/funny-disney-history/).       

Exempel på människor som är framgångsrika utan upphovsrätt är [Cory Doctorow](https://craphound.com/) och [Jonathan Coulton](https://www.jonathancoulton.com/). "[Vad är Creative Commons?](https://youtu.be/Yd9dP3vlOyk)" (9 min)  , och var hittar man verk under Creative commons-licenser? [Free SVG](https://freesvg.org/), [Free Music Archive](https://freemusicarchive.org/) och [Pexels](https://www.pexels.com/sv-se/). Mer information finns på [Creative Commons egna webbplats](http://www.creativecommons.org/). Blender-projektet har många spännande [videoprojekt](https://studio.blender.org/films/) under Creative Commons!    

Blenderprojektets filmer är skapade med Free och Open Source Software. Detta koncept skapades på 1980-talet av Richard Stallman på MIT, när [han blev sur på sin skrivare](https://www.gnu.org/philosophy/rms-nyu-2001-transcript.txt). Fri mjukvara förklaras i "[Vad är fri mjukvara (öppen källkod)?](https://media.fsfe.org/w/kV4ZekBeeVUueyP8m1txgS)" (3 min). Vi ser klippet "[What is Open Source explained in LEGO](https://youtu.be/a8fHgx9mE5U)" (5 min), och läser dokumentet "[How to become a hacker](https://web.archive.org/web/20240722111223/https://d.cxcore.net/Eric%20S%20Raymond/How%20To%20Become%20A%20Hacker.pdf)". Det är en ruggigt bra idé att bidra till ett projekt, och här är ett tips "[How to find an Open Source project to contribute to](https://dev.to/this-is-learning/how-to-find-an-open-source-project-to-contribute-to-3093)".       

Både Hacker-mentaliteten och rörelsen för fri mjukvara är det som skapat webben så som vi känner den idag. Det ligger i grunden för alla tekniker vi tar för givet.    

Vikten av Fri mjukvara blir tydligt i exemplet med Karen Sandler som vi hör i talet hon höll på "[OSCON 2011: Karen Sandler](https://youtu.be/nFZGpES-St8)" (15 min) eller kan läsa om i artikeln "[Why cyborgs need free software](https://superuser.openstack.org/articles/medical-devices-free-software/)".  

## Vecka 37   

###### Vad är webben egentligen?  

Se dokumentären "[The web, past and future](https://youtu.be/cCE2EyV_IiY)" (35 min). Ta anteckningar, då vi kommer diskutera den vidare.    

Men vad är webben egentligen? Vi diskuterar dokumentären "The web, past and future". "[Är internet och www samma sak?](https://internetkunskap.se/artiklar/sa-funkar-internet/ar-internet-och-www-samma-sak/)" Vad var syftet med WWW och hur hänger det syftet ihop med idealen som Free och Open Source Software och Hacker-kulturen har? Vem var Tim Berners-Lee och vad är [W3C](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium). Utifrån det talar vi om [http](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), [HTML](https://simple.wikipedia.org/wiki/HTML) och [CSS](https://en.wikipedia.org/wiki/CSS).       

###### Vad är HTML & CSS?    

Om du börjar med information som du vill förmedla på webben, så använder du HTML för att strukturerar upp informationen med taggar för att webbläsaren skall förstå. HTML används för att webbläsare skall förstå det vi människor ser direkt.    

[<img alt="HTML-struktur" src="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-small.png" width="60%">](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax/grumpy-cat-small.png)

Hur är CSS strukturerat och hur använder man det? Några vanliga värden och egenskaper. CSS styr utseende, färg och position. Om HTML är till för webbläsaren så är CSS till för människor.      

[CSS-struktur](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics)

[<img alt="Selektor, egenskap och värde" src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png" width="60%">](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png)       

För att genomföra uppgiften nedan måste du veta hur du [tar ett screenshot](https://support.mozilla.org/en-US/kb/take-screenshots-firefox).      

[Uppgift: HTML & CSS Basics](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/weuweb01-html_css_basics)     

## Vecka 38   

Dags att påbörja vår grundkurs i HTML & CSS. Först lägger vi några veckor på HTML, för att se hur man märker upp innehåll så en webbläsare förstår det. Vi kommer att använda många verktyg under kursens gång, men de som är aktuella under höstterminen är [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) och [Anteckningar](https://en.wikipedia.org/wiki/Windows_Notepad).  

Det första vi ger oss på är MDN [Core module "Structuring content with HTML"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content). Vi kommer inte hinna titta på alla avsnitt, men de viktigaste får vi med oss.  

MDN [Research and learning](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning)  

För att kunna genomföra kursen förväntas du:  
* **Läsa kursmaterialet** och göra interaktiva övningar med målsättningen att kunna omsätta det i praktiken 
* Lyssna på **föreläsningar** och eventuellt ta anteckningar
* Göra **praktiska övningar** varje vecka och lämna in några av dem
* Varje vecka gör du ett **test** på föregående veckas material
* I slutet av varje större moment gör du ett **prov** på det

###### HTML - Att märka upp text        

Först repeterar vi hur en HTML-tagg är uppbygd, sedan djupdyker vi hur man märker upp text på alla möjliga sätt och vis!  

* MDN [Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) (Överkurs: Attributes (allt utom ingressen), Character references)<br>(Anatomy of an HTML document spar vi till nästa vecka.)  
* MDN [Headings and paragraphs](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)  
* MDN [Emphasis and importance](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)  
* MDN [Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)  
* MDN Test your skills: [HTML text basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics)   
* MDN [Advanced text features](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features) (Överkurs)  
* MDN Challenge: [Marking up a letter](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) (Överkurs)    

## Vecka 39   

Quiz: HTML - Att märka upp text  


###### Att hitta sin fil  

Var är din webbsida? Är den i din dator? Var i din dator, vet du det? Borde den vara på webben, och i så fall var? Det finns många regler som gäller för hur vi hanterar våra webbsidor och hur vi får upp dem på nätet. Det är enormt mycket lättare att publicera en webbplats om du är medveten om dessa regler och följer dem redan i din egen dator. Tack och lov så ger MDN oss riktlinjer, och det är ganska tydligt vad saker heter och hur de fungerar på svenska. 

* MDN [Dealing with files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)         

**Termer ni behöver kunna**       
* [fil](https://sv.wikipedia.org/wiki/Fil_(data))
* [katalog](https://sv.wikipedia.org/wiki/Katalog_(datorteknik))
* [filsystemet](https://sv.wikipedia.org/wiki/Filsystem)       
* [filträd](https://sv.wikipedia.org/wiki/Filtr%C3%A4d)
* [folder metaphor](https://en.wikipedia.org/wiki/Directory_%28computing%29#Folder_metaphor)

**Saker ni behöver kunna göra**       
Ni måste veta hur man [skapar en textfil](https://www.wikihow.com/Make-a-New-File-in-Windows) hur man [skapar en katalog](https://www.minitool.com/news/how-do-i-create-a-directory.html#how-to-create-a-directory-in-windows-10-7400), [Komprimera och packa upp filer](https://support.microsoft.com/sv-se/windows/komprimera-och-packa-upp-filer-f6dde0a7-0fec-8294-e1d3-703ed85e7ebc), ta ett screenshot av hela sidan ([Firefox](https://support.mozilla.org/en-US/kb/take-screenshots-firefox?redirectslug=firefox-screenshots&redirectlocale=en-US), [Edge](https://www.howtogeek.com/719285/how-to-take-full-page-screenshots-in-microsoft-edge/)) och hur man visar dolda filändelser ([Windows 10](https://windowsreport.com/show-file-extensions-windows-10/), [Windows 11](https://windowsreport.com/show-file-extension-windows-11/)).      

Varför är det så här? Jo, för de val du gör i din egen dator återspeglas i hur och var filer dyker upp på webben. 

* MDN [What is a URL?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)

Vi måste ha lite koll på "[how URLs work](https://gdevops.frama.io/web/tuto-http/_images/how_urls_work.jpeg)" och [howurls.work](https://howurls.work/)!  

**Regler för namngivning**      
* Undvik svenska tecken, åäö      
* Undvik_mellanslag_     
* Undvik STORA bokstäver       

Vid all namngivning (filer, kataloger, etc) så gäller ovanstående grundregler. En av anledningarna till dessa är "[character encoding](https://developer.mozilla.org/en-US/docs/Glossary/character_encoding)". Idag förlitar vi oss på "[Unicode](https://youtu.be/2r6OZD5n-wc)" (3:01).  

###### HTML - Struktur  

* MDN [Basic HTML syntax / Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#anatomy_of_an_html_document)
* MDN [What's in the head? Web page metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)  
* MDN [Structuring documents](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
* MDN [Creating links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links)
* MDN Test your skills: [Links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links)
* MDN Challenge: [Structuring a page of content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content)

Läs på om [The anchor element](https://heydonworks.com/article/the-anchor-element/), det är viktigt! Det går också att djupdyka i taggen [HEAD](https://htmlhead.dev/) och allt den kan innehålla. Om det är svårt att hålla ordning på den semantiska betydelsen hos taggar så är [HTML5 Doctor's flowchart](https://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf) en bra resurs.  

## Vecka 40   

Quiz: Att hitta sin fil + HTML - Struktur  

###### HTML - Bilder och media (+ felsökning)    
* MDN [HTML images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images)
* MDN Test your skills: [HTML images](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images)
* MDN [HTML video and audio](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) (Överkurs)  
* MDN Test your skills: [Audio and video](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video) (Överkurs)  
* MDN Challenge: [Creepy-crawly splash page](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Splash_page)
* MDN [Debugging HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)

Efter föreläsningen nyttjar ni tiden till att läsa igenom materialet, genomföra de interaktiva moment som finns på de flesta sidor, samt gör de Test your skills och Challanges ni ännu inte slutfört! Se till att fråga om sådant ni inte förstår!  

## Vecka 41   

Quiz: HTML - Bilder och media (+ felsökning)  

###### CSS styling basics - The first steps  
* MDN [What is CSS?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)  
* MDN [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started)  

[Uppgift: Styling a biography page](https://tcstenungsund.github.io/schedule/assignment.html?link=assignments/webweu01-styling_a_biography_page)  

###### CSS styling basics - Selectors  
* MDN [Basic CSS selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)  
* MDN [Attribute selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors) (Överkurs)  
* MDN [Pseudo-classes and pseudo-elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)  
* MDN [Combinators](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)  

Test your skills: [Selectors](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors)  

## Vecka 42   

Quiz: CSS The first steps + Selectors  

Var källkritiska när ni läser om HTML & CSS! Kom ihåg [W3Fools](https://www.w3fools.com/) och även om saker ändrats, är frågan [Do we still hate w3schools or...](https://masto.ai/@teacherbuknoy/112890440326314007) berättigad.  

> You should get used to searching for "mdn css-feature-name" in your favorite search engine whenever you need to find out more information about a CSS feature. For example, try searching for "mdn color" or "mdn font-size"! - [MDN, 2025](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS)  

Repetition inför provet. Testa dig själv med "[HTML Tags Memory](https://codepen.io/plfstr/full/zYqQeRw)").  

Prov: HTML  

## Vecka 43   

Genomgång av provet från förra veckan!  

###### CSS styling basics - Fundamental axioms  
* MDN [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)  

"[The box model for beginners](https://youtu.be/MrAnu4zdjjY)" (1:54), "[Everything You Need To Know About CSS Margins](https://www.smashingmagazine.com/2019/07/margins-in-css/)"  

Test your skills: [The box model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model)  

## Vecka 44   

**HÖSTLOV**   

## Vecka 45   

Quiz: CSS styling basics - Fundamental axioms - The box model  

###### CSS styling basics - Fundamental axioms (forts.)  

* MDN [Handling conflicts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)  

Test your skills: [The Cascade](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade)  

"[How CSS Specificity Is Calculated](https://youtu.be/ZBphodDntVc)" (4½ min), [Batficity](http://batificity.com/), [The CSS Selector Specificity Calculator](https://polypane.app/css-specificity-calculator/) och [The CSS Cascade](https://2019.wattenberger.com/blog/css-cascade).  

* MDN [Values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units) (förutom "Color", som vi sparar till nästa vecka, och Strings and identifiers och Functions som är Överkurs)  

Test your skills: [Values and units: Task 2 och 3](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values)

Det är lurigt att välja rätt enhet, då det finns så många. Webbutvecklaren Kevin Powell hjälper oss besvara frågan "[What length CSS unit should you use?](https://whatunit.com/)", och mitt råd är att du kör _em_ om du inte definitivt vet att du behöver en annan enhet. vw/vh till layout och font  

> Använd måttenheten "em", om du inte vet att du specifikt behöver en annan enhet  

## Vecka 46   

###### CSS  

Quiz: CSS styling basics - Fundamental axioms - Handling conflicts och Values and units  

###### Färgteori  
Det finns många färger, vilket vi kan se på ett "[Color wheel](https://en.wikipedia.org/wiki/Color_wheel)". Färger har också olika betydelser på olika platser, enligt "[Colours In Culture](https://informationisbeautiful.net/visualizations/colours-in-cultures/)".  

* MDN [Values and units](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color)  

Det finns många sätt att ange färger på (se "[MDN Color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)"), min starka rekommendation är dock att använda [MDN oklch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch) genomgående, och hex när det inte går.  Klippet "[What The Heck Is A Hex Value Anyway?](https://youtu.be/a-9Qoso60Q8)" (4 min) ger oss bakgrunden till hexvärden och "[HEXplorer](https://codepen.io/robdimarzo/full/xxZgKOR)" illustrerar dem. [OKLCH Color Picker & Converter](https://oklch.com) hjälper oss förstå OKLCH.  

* "[Why everyone is talking about OKLCH](https://youtu.be/kVi9Augt7HY)" (12 min)
* "[OKLCH! New CSS color features are 🔥](https://youtu.be/i62GjJAgD9M)" (1 min)

> Använd OKLCH (eller hex om det av någon anledning inte går), och skriv på det här formatet: _oklch(0% 0 0 / 42%)_  

Test your skills: [Values and units: Task 1](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_tasks)    

<!-- 

Hur väljer man färg? Följ råden i "[How to Choose Colors (Easy 3-Step Process)](https://youtu.be/KMS3VwGh3HY)" (7 min) och "[The 60–30–10 Rule](https://uxplanet.org/the-60-30-10-rule-a-simple-way-to-creating-catchy-user-interfaces-e9e2cf957213)". Använd verktyg som [The Good Colors](https://thegoodcolors.com/) och "[RandomA11y](https://randoma11y.com/)" för att hjälpa dig hitta nya kombinationer. Det finns också hjälp att få för att finna inspiration till färgpaletter, som [ColorKit](https://colorkit.co/) och [Color Ramp](https://color-ramp.com/).  

Kontrast är oerhört viktigt, vilket "[Contrast Rebellion](https://contrastrebellion.com/)" talar om för oss, och på  [Odd Contrast](https://www.oddcontrast.com/#oklch__oklch(32.588~_0.13332_265.49)__oklch(82.41~_0.10609_0.84891)), [Color Contrast Tool](https://www.color-contrast.dev/) och [Color Palette Contrast Checker](https://color-contrast-checker.deque.com/) för att testa kontrasten på våra färger. Samt [OKLCH Color Picker & Converter](https://oklch.com/) för att konvertera till oklch, om verktygen jobbar med hex eller liknande. Vi rekommenderas att uppnå en kontrast av 4,5:1, men vad betyder det? [WCAG Colour Contrast: What does the 4.5:1 ratio actually mean?](https://davedavies.dev/posts/wcag-colour-contrast-explained/) (Läs mer och gör interaktiva övningar på "[Color & Contrast](https://colorandcontrast.com/)".)   
 
Repetition med [Hexcodle](https://hexcodle.com/)! 

-->

## Vecka 47   

###### CSS  

## Vecka 48   

###### CSS  

<!--

###### CSS styling basics - Basic looks  
* MDN [Sizing items in CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing)  
* MDN [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)  
* MDN [Overflowing content](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow) (Överkurs)  
* MDN [Images, media, and form elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms) (Överkurs)  
* MDN [Styling tables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables) (Överkurs)    

Test your skills: [Sizing](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing)  
Test your skills: [Backgrounds and borders](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders)  
Test your skills: [Overflow](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow) (Överkurs)  
Test your skills: [Images and form elements](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images) (Överkurs)  

###### CSS styling basics - Make it work!  
* MDN [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS)  
* MDN [Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing)  



###### CSS text styling  
* MDN [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)   
* MDN [Styling lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_lists)  
* MDN [Styling links](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Styling_links)  
* MDN [Web fonts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Web_fonts)  

Vill du få en riktigt bra översikt av typografi så rekommenderas du Jason Santa Marias bok "[On Web Typography](https://jasonsantamaria.com/)". För att finna fonter som är fria att använda, besök sidor som [Open Foundry](https://open-foundry.com/) och [Fontesk's GPL-sida](https://fontesk.com/license/ofl-gpl/). En av de bästa sätten att göra text lättläst är att begränsa längden på rader, generellt [rekommenderas en line-length](https://legibility.info/text/line-length) på 80 tecken.  


###### CSS layout  

[Layout modes](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_mode) är ett stort område i CSS. Se [exempel på layout modes](https://codepen.io/collection/PYJyGp) på Codepen. Se klippen "[Flexbox vs. CSS Grid — Which is Better?](https://youtu.be/hs3piaN4b5I)" (4:18) och "[The Lowdown on CSS Positioning](https://youtu.be/6o-J6We3hkQ)" (9:28). Pilla även på "[An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)". Referera till de kompletta guiderna på CSS-Tricks till [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) och [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).  

* MDN [Introduction to CSS layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction)  
* MDN [Floats](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Floats) (Överkurs)  
* MDN [Positioning](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Positioning) (Överkurs)  
* MDN [Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)  
* MDN [CSS grid layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids)  
* MDN [Responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)  
* MDN [Media query fundamentals](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Media_queries) (Överkurs?)  
* MDN [CSS layout cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)  






-->



## Vecka 49   

Prov: CSS  

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
