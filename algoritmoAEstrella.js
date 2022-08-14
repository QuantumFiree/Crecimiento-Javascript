class Estado {
    constructor(name = 0, level = 0, towers = [[4, 3, 2, 1], [], []], parent = null) {
        this.name = name;
        this.parent = parent;
        this.g = level;
        this.n = 0;
        this.fh = 0;
        this.towers = towers;
    }

    calcularFh() {
        //___________PENDIENTE AQUI___________________________________________________
        this.n = (this.towers[2].length - 4)
        //____________________________________________________________________________
        for (let tower of this.towers) {
            // if(this.towers[1] == tower){
            //    continue
            // }
            for (let disk in tower) {
                if (disk == 0) {
                    this.n += tower[disk] == 4 ? 1 : -1000
                } else {
                    this.n += tower[disk] + 1 == tower[disk - 1] ? 1 : -1000
                }
            }
        }
        this.fh = this.n - this.g
    }

    getTowers() {
        return this.towers;
    }

    getLevel() {
        return this.g
    }

    getName() {
        return this.name
    }

    getParent() {
        return this.parent
    }
}

//Filtro del nuevo estado, creacion e inserccion del objeto Estado
let filtroAñadirEstado = (newTowers, opened, closed) => {
    let filtro1 = true
    let filtro2 = true
    //filtrar cerrados
    filtro1 = closed.every((estado) => {
        let towers = estado.getTowers()
        for (let i = 0; i < towers.length; i++) {
            if (towers[i].length === newTowers[i].length) {
                if (towers[i].length == 0 && newTowers[i].length == 0) {
                    continue;
                } else if (towers[i].toString() == newTowers[i].toString()) {
                    continue;
                } else {
                    return true
                }
            } else {
                return true
            }
        }
        return false
    })

    if (filtro1) {
        //Filtrar abiertos
        filtro2 = opened.every((estado) => {
            let towers = estado.getTowers()
            for (let i = 0; i < towers.length; i++) {
                if (towers[i].length === newTowers[i].length) {
                    if (towers[i].length == 0 && newTowers[i].length == 0) {
                        continue;
                    } else if (towers[i].toString() == newTowers[i].toString()) {
                        continue;
                    } else {
                        return true
                    }
                } else {
                    return true
                }
            }
            return false
        })
    }


    //Si pasa los filtros devuele true(se puede añadir a abiertos), si no false
    return filtro1 && filtro2
}

let insertarCorrectamente = (newTowers, ea, opened) => {
    //se crea el nuevo estado 
    let level = ea.getLevel()
    let newState = new Estado(names, ++level, newTowers, ea)

    //se calcula el valor de su funcion heuristica
    newState.calcularFh()

    //busca el indice donde insertar
    let insert = false
    for (let state in opened) {
        if (newState.fh < opened[state].fh) {
            opened.splice(state, 0, newState)
            insert = true
            break
        }
    }
    if (!insert) {
        opened.push(newState)
    }
}

//Generacion de estados
let generarEstados = (ea, opened, closed) => {
    let towers = ea.getTowers()
    for (let tower1 in towers) {
        if (towers[tower1].length > 0) {
            for (let tower2 in towers) {
                if (tower1 != tower2) {
                    let newTowers = [[...towers[0]], [...towers[1]], [...towers[2]]]
                    newTowers[tower2].push(newTowers[tower1].pop());
                    ++names
                    if (filtroAñadirEstado(newTowers, opened, closed)) {
                        //se guarda en abiertos
                        insertarCorrectamente(newTowers, ea, opened)
                    }

                }
            }
        }
    }
}
//============================================MAIN=================================================//
//============================================MAIN=================================================//
var names = 0;
let opened = [new Estado()];
let closed = []
var camino = [24, 20, 16, 12, 7, 3, 1, 0]

let find = false
let ea;
let eo = [[], [], [4, 3, 2, 1]];

//ciclo para buscar el estado objetivo
while (opened.length != 0 && !find) {
    ea = opened.pop()
    // if(camino.includes(ea.name)){
    //     console.log('Estado actual: ', ea.towers)
    //     console.log('name state: ', ea.name)
    //     console.log('-----------------------------------')

    // }
    generarEstados(ea, opened, closed)
    closed.push(ea)

    let i
    let towers = ea.getTowers()
    for (i = 0; i < towers.length; i++) {
        if (towers[i].length === eo[i].length) {
            if (towers[i].length == 0 && eo[i].length == 0) {
                continue
            } else if (towers[i].toString() == eo[i].toString()) {
                continue;
            } else {
                break
            }
        } else {
            break
        }
    }

    if (i == towers.length) {
        find = true
        let road = "" + ea.name
        let parent = ea.getParent()

        console.log('Nombre: ', ea.name)
        console.log('valor funcion heuristica: ', ea.n)
        console.log('nivel: ', ea.g)
        console.log('fh: ', ea.fh)
        console.log('Towers: ', ea.towers)
        while (parent != null) {
            console.log('\n')
            console.log('=======================================')
            console.log('Nombre: ', parent.name)
            console.log('valor funcion heuristica: ', parent.n)
            console.log('nivel: ', parent.g)
            console.log('fh: ', parent.fh)
            console.log('Towers: ', parent.towers)
            road += " - " + parent.getName()
            parent = parent.getParent()
        }
        console.log("---------------------------------------------------")
        console.log('abiertos: ', opened.length)
        console.log("---------------------------------------------------")
        console.log('cerrados: ', closed.length)
        console.log("---------------------------------------------------") |
            console.log("road: ", road) |


            console.log("\n\n---------------------------------------------------") |
            console.log("se encontro el estado objetivo: \n\n", ea)
    }

}
