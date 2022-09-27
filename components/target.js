AFRAME.registerComponent("target-ring", {
    init:function(){
       for (var i = 1; i<=20; i++){
        //id
        var id =`ring${i}`;

        //position the variable
        var posX = (Math.random()*3000 +(-1000))
        var posY = (Math.random)*2 + (-1)
        var posZ = (Math.random()*3000 + -1000)
        var position = {x:posX , y:posY , z:posZ}

        //call create rings 
        this.createRings(id,position)
       }

    },

    createRings:function(id,position){
        var TerrainE1 = document.querySelector("#terrain")
        var ringE1 = document.createElement("a-entity");
        ringE1.setAttribute("id",id)
        ringE1.setAttribute("position", position)
        ringE1.setAttribute("material","color","#ff9100");
        ringE1.setAttribute("geometry",{primitive:"torus",radius:7})
        terrainE1.appendChild(ringE1)

    },



})