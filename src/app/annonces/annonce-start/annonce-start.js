var map = document.querySelector('#map')
var paths = document.querySelectorAll('#map .map__image a')
var links = document.querySelectorAll('#map .map__list a')

// prolifill du foreach
if(NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function(callback){
        [].forEach.call(this, callback)
    }
}

var activeArea = function(id){
    // on rend inactive les regions précédentes à chaque changement de region
    map.querySelectorAll('.is-active').forEach(function(item){
        item.classList.remove('is-active')
    })
    if(id !== undefined){
        document.querySelector('#list-' + id).classList.add('is-active')
        document.querySelector('#region-' + id).classList.add('is-active')
    }
   

}

paths.forEach(function (path){
    path.addEventListener('mouseenter', function(e){
        var id = this.id.replace('region-', '')
        activeArea(id);
        
    })
})

links.forEach(function(link){
    link.addEventListener('mouseenter', function(){
        var id = this.id.replace('list-', '')
        activeArea(id)
    })
})

map.addEventListener('mouseover', function(){
    console.log('dans eventListener pour le mouse')
    activeArea();
})