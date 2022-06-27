//Get md link from urlParams and append md as html to main
if(link != null){
    fetchMarkdown(urlPrefix + link + urlSuffix)
        .then(md =>{
            mdToHtml(md)
                .then(html => {
                    //document.getElementById('main').innerHTML = html;
                })
        })
}

const editor = new EditorJS({
    tools: {
        header: {
            class: Header,
            config: {
                placeholder: 'Skriv en titel',
                levels: [2, 3, 4],
                defaultLevel: 3
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
});