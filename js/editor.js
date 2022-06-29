//Get md link from urlParams and append md as html to main
if(link != null){
    fetchMarkdown(urlPrefix + link + urlSuffix)
        .then(md =>{
            mdToHtml(md)
                .then(html => {
                    //document.getElementById('main').innerHTML = html;
                    div = document.createElement('div')
                    div.innerHTML = html;

                    html = div;
                    console.log(html)

                    const editor = new EditorJS({
                        tools: {
                            header: {
                                class: Header,
                                config: {
                                    placeholder: 'Skriv en titel',
                                    levels: [1, 2, 3, 4, 5, 6],
                                    defaultLevel: 2
                                }
                            },
                            linkTool: {
                                class: LinkTool,
                                config: {
                                  endpoint: 'http:', // Your backend endpoint for url data fetching,
                                }
                            },
                            quote: {
                                class: Quote,
                                inlineToolbar: true,
                                shortcut: 'CMD+SHIFT+O',
                                config: {
                                  quotePlaceholder: 'Enter a quote',
                                  captionPlaceholder: 'Quote\'s author',
                                },
                            },
                            embed: {
                                class: Embed,
                                config: {
                                  services: {
                                    youtube: true,
                                    coub: true
                                  }
                                }
                            },
                            list: {
                                class: List,
                                inlineToolbar: true,
                                config: {
                                  defaultStyle: 'unordered'
                                }
                            },
                            checklist: {
                                class: Checklist,
                                inlineToolbar: true,
                            },
                            image: SimpleImage,
                            raw: RawTool,
                    
                            
                        },
                        
                        data: parseHTMLtoJSON(html)
                        
                    });
                })
        })
}



function customImageParser(block){
    return `<img src="${block.data.url}"  alt="${block.data.caption}">`;
}

const edjsParser =  edjsHTML({image: customImageParser});


function save(){
    console.log('saving')
    editor.save().then((outputData) =>{
        console.log(outputData);

        let html = edjsParser.parse(outputData);

        console.log(html);

        for(i in html){
            let div = document.createElement('div');
            div.innerHTML = html[i]
            document.getElementById('main').appendChild(div.firstChild)
        }
    })
}