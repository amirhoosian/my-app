
const http = require('http');
const fs = require('fs')
const qs = require('querystring');
const { log } = require('console');
const server = http.createServer((req, res) => {
    let URL = req.url;
    let method = req.method
    if(URL === '/' && method === 'GET'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`

       <html>
                <head>
                    <title>Roocket Website</title>
                </head>
                <body>
                    <h1>Welcome to Roocket website</h1>
                    <form action="" method="POST">
                        <label for="serach">Search</label>
                        <input name="search" id="search"/>
                        <button>send Data</button>
                    </form>
                </body>
            </html>
`)
        return res.end()
    }else if(URL === '/' && method === 'POST'){
       let body = '' 

        req.on('data', (data) => {
            body += data
            
        })

        req.on('end', () => {
            let data = qs.parse(body)
            
            console.log('my data' , bodyParser.search)
            // fs.writeFile('db.text', data.search, () => console.log('data wirted'))
        //     fs.appendFile('db.text', "\n" + data.search, () => console.log('append sucsed'))
        //     fs.readFile('db.text', 'utf8', (err, data) => {
        //         if(err) throw err

        //         console.log(data);
        //     }) 
         })
        
        res.writeHead(302, {'Location' : '/'})
        return res.end()
        
    }else if(URL === '/json'){
        res.setHeader('Content-Type', 'application/json')
        const usr = {name: 'amir', famile: 'roh', job: 'nothing'};
        res.write(JSON.stringify(usr))
        return res.end()
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404)
        res.write('404 not found')
        res.end()
    }
})



server.listen(3000, '127.0.0.1', () => console.log("server running on local host and port:3000"))
