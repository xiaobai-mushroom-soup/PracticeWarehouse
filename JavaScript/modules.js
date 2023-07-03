// 现代模块机制
var myModules = (function Manger(){
    let modules = {};

    function define(name, deps, impl){
        for (let i = 0; i < deps.length; i++) 
                deps[i] = modules[deps[i]];            
        
        modules[name] = impl.apply(impl, deps);
    }

    function get(name){
        return modules[name]
    }
    return {
        define,
        get
    }
})()