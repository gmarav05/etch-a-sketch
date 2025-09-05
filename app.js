const container = document.getElementById('container');

function makeDivs(num) {
    for (let d =0; d<num; d++) {
        let cells = document.createElement('div');
        container.appendChild(cells)
    }
    
}


makeDivs(256);