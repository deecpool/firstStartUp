class Router {
    constructor(){
        this.routePath = {};
    }

    handle(req,res) {
        const { url , method } = req;
        const handler = this.routePath[url]?.[method]
        if(!handler) {
            res.writeHead(404);
            res.end("404");
        } else {
            handler(req,res);
        }
    }

    get(path, handler){
        if(!this.routePath[path]) {
            this.routePath[path] = {};
        }
        this.routePath[path]["GET"] = handler;
    }

    post(path, handler){
        if(!this.routePath[path]) {
            this.routePath[path] = {};
        }
        this.routePath[path]["POST"] = handler;
    } 

    put(path, handler){
        if(!this.routePath[path]) {
            this.routePath[path] = {};
        }
        this.routePath[path]["PUT"] = handler;
    }

    delete(path, handler){
        if(!this.routePath[path]) {
            this.routePath[path] = {};
        }
        this.routePath[path]["DELETE"] = handler;
    }

}

module.exports = new Router;