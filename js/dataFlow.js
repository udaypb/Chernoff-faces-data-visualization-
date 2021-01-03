var tickCount = 0;

var range = 1000;
var driftPercent = 0.075;
window.updateData = undefined;

function generateValue() {
    return Math.round(Math.random() * range);
}

function driftValue(val) {
    return val + ((Math.random() >= 0.5? -1 : 1) * driftPercent * (Math.random() * range));
}

function uuid() {
    return crypto.getRandomValues(new Uint32Array(1)).join('-');
}

d3.csv('./data/names.csv', function(names) {
    function generateData() {   
        return {
            name: names[Math.round(Math.random() * names.length)].name,
            id: uuid(),
            v0: generateValue(),
            v1: generateValue()
        };
    }

    Math.seedrandom("HW4");

    var nElements = 30;
    var data = [];

    for(var i = 0; i < nElements; i++) {
        data.push(generateData());
    }

    initCharts(data);


    window.updateData = function() {
        tickCount++;
        var enterRate = 0.10;
        var exitRate = 0.10;
        var updateRate = 0.10;
        
        var enterDataCount = data.length;

        // remove some percentage of the data (exiting)
        data = data.filter(function(d) {
            if(Math.random() > exitRate) {
                return true;
            }
            console.log("REMOVING", d.name);
            return false;
        });

        // update some percentage of the data (update)
        for(var i = 0; i < data.length; i++){ 
            var d = data[i];
            if(Math.random() <= updateRate) {
                console.log("UPDATING", d.name);
                d.v0 = driftValue(d.v0);
                d.v1 = driftValue(d.v1);
            }
        }
        
        // add some new data (enter)
        for(var i = 0; i < enterDataCount; i++){
            if(Math.random() <= enterRate) {
                var d = generateData();
                console.log("ADDING", d.name);
                data.push(d);
            }
        }

        tickDataFlow(data);
        d3.select('.tickCount').html("# of data updates: " + tickCount);
    }
});

d3.select('#doOneUpdate')
    .on('click', function(d) {
        window.updateData();
    });

d3.select('#continuousUpdate')
    .on('change', function(d) {
        if(this.checked) {
            window.dataUpdatingInterval = window.setInterval(function() {
                window.updateData();
            }, 1000);
        } else {
            window.clearInterval(window.dataUpdatingInterval);
        }
    });
