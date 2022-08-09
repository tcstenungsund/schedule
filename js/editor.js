let editor; 

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

                    editor = new EditorJS({
                        tools: {
                            header: {
                                class: Header,
                                config: {
                                    placeholder: 'Skriv en titel',
                                    levels: [1, 2, 3, 4, 5, 6],
                                    defaultLevel: 3
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

async function save(){

    console.log('saving')
    editor.save().then((outputData) =>{

        //convert outputData (JSON) to HTML
        let html = parseJSONtoHTML(outputData.blocks);

        //Convert HTML to MD
        var converter = new showdown.Converter();
        md = converter.makeMarkdown(html.innerHTML);

        //Encode MD in Base64
        b64 = Base64.encode(md);
        
        console.log(commitArticle(b64));
        
    }).then(() =>{
        //history.back();
    });
}


async function getSHA(path) {
    console.log("getting sha");
    const result = await window.octokit.rest.repos.getContent({
      owner: "klovaaxel",
      repo: "schedule",
      branch: 'main',
      path: path,
    });
  
    const sha = result?.data?.sha;
  
    return sha;
  }

async function commitArticle(b64) {
    const path = `${urlPrefix + link + urlSuffix}`;
    const sha = await getSHA(path);

  
    const result = await window.octokit.rest.repos.createOrUpdateFileContents({
      owner: "klovaaxel",
      repo: "schedule",
      branch: 'dev',
      path,
      message: `update schedule`,
      content: b64,
      sha,
    });
  
    return result?.status || 500;
}