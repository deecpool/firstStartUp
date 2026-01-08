export default class Router {
    constructor() {
        this.router = {}
        this.middlewares = []
    }

    addRoutePath(path, method, handler) {
        if(!this.router[path]) this.router[path] = {}
        this.router[path][method] = handler
    }

    find(path, method) {
        return this.router[path]?.[method]
    }

    get(path, handler){
        this.addRoutePath(path,'GET',handler)
    }

    post(path, handler){
        this.addRoutePath(path,'POST',handler)
    }

    put(path, handler){
        this.addRoutePath(path,'PUT',handler)
    }

    del(path, handler){
        this.addRoutePath(path,'DELETE',handler)
    }
}