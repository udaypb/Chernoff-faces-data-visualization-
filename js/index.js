

// d3_queue.queue(1)
//   .defer(d3.json, "https://piwodlaiwo.github.io/topojson//world-continents.json")
//   .defer(d3.csv, "./data/countries_processed.csv")
//   .awaitAll(ready);

// function ready(error, data) {
//   "use strict"

//   var margin = { top: 0, right: 0, bottom: 0, left: 0 },
//     width = d3.select('svg').attr('width') / 2.25 - margin.left - margin.right,
//     height = d3.select('svg').attr('height') / 1 - margin.top - margin.bottom;

//   var svg = d3.select("svg")
//     .attr("width", '100%')
//     .attr("height", '100%')
//     .append('g')
//     .attr('class', 'map')
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//   var map = d3.selectAll('.map');
//   var projection = d3.geoMercator()
//     .scale(80)
//     .translate([width / 2, height / 1.5]);

//   var path = d3.geoPath().projection(projection);

//   var color = d3.scaleThreshold()
//     .domain([10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000, 100000000, 500000000, 1500000000])
//     .range(["rgb(255,260,0)", "rgb(255,260,0)", "rgb(255,225,0)", "rgb(255,215,0)", "rgb(255,210,0)", "rgb(255,200,0)", "rgb(255,190,0)", "rgb(255,165,0)", "rgb(255,140,0)", "rgb(255,69,0)"]);








//   let populationMap = {};
//   //create population map
//   data[0].features.forEach(element => {
//     populationMap[element.properties.name.toLowerCase()] = 0
//   });
//   data[1].forEach(element => {
//     populationMap[element['Country'].toLowerCase()] = element['Population']
//   });

//   if (error) throw error;
//   var populationById = {};
//   console.log(data);

//   var mapZoom = d3.zoom().on("zoom", freeZoom);

//   function freeZoom() {
//     map.attr("transform", d3.event.transform);
//   }

//   d3.select("#reset").on("click", function () {
//     map.transition().duration(500).call(mapZoom.transform, d3.zoomIdentity);
//   });

//   d3.select("#zoom_in").on("click", function () {
//     mapZoom.scaleBy(svg.transition().duration(500), 1.1);
//   });

//   d3.select("#zoom_out").on("click", function () {
//     mapZoom.scaleBy(svg.transition().duration(500), 0.9);
//   });

//   svg.append("g")
//     .attr("class", "countries")
//     .selectAll("path")
//     .data(data[0].features)
//     .enter().append("path")
//     .attr("d", path)
//     .style("fill", function (d) { return color(populationMap[d.properties.name.toLowerCase()]); })
//     .style('stroke', 'white')
//     .style('stroke-width', 1.5)
//     .style("opacity", 0.8)
//     // tooltips
//     .style("stroke", "white")
//     .style('stroke-width', 0.3).on('click', function (d) {
//       console.log('clocked', d)
//       countryClicked(d);
//     })

//     .on('mouseover', function (d) {


//       d3.select(this)
//         .style("opacity", 1)
//         .style("stroke", "white")
//         .style("stroke-width", 3);
//     }).on('mouseout', function (d) {


//       d3.select(this)
//         .style("opacity", 0.8)
//         .style("stroke", "white")
//         .style("stroke-width", 0.3);
//     })

//   //zoom:


//   svg.append("path")
//     .datum(topojson.mesh(data[0].features, function (a, b) { return a.id !== b.id; }))
//     // .datum(topojson.mesh(data.features, function(a, b) { return a !== b; }))
//     .attr("class", "names")
//     .attr("d", path)

//   map.call(mapZoom);




//   initDetail(data)

// }


// function initDetail(data) {
//   data = [
//     { "title": "Revenue", "subtitle": "US$, in thousands", "ranges": [150, 225, 300], "measures": [220, 270], "markers": [250] },
//     { "title": "Profit", "subtitle": "%", "ranges": [20, 25, 30], "measures": [21, 23], "markers": [26] },
//     { "title": "Order Size", "subtitle": "US$, average", "ranges": [350, 500, 600], "measures": [100, 320], "markers": [550] },
//     { "title": "New Customers", "subtitle": "count", "ranges": [1400, 2000, 2500], "measures": [1000, 1650], "markers": [2100] },
//     { "title": "Satisfaction", "subtitle": "out of 5", "ranges": [3.5, 4.25, 5], "measures": [3.2, 4.7], "markers": [4.4] }
//   ]
//   var margin = { top: 5, right: 40, bottom: 20, left: 120 },
//     width = 600 - margin.left - margin.right,
//     height = 50 - margin.top - margin.bottom;

//   var chart = d3.bullet()
//     .width(width)
//     .height(height);

//   var g2 = d3.select('svg')
//     .append('g')
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//     var s=g2
//     .data(data)
//     .enter().append("svg")
//     .attr("class", "bullet")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
//     .call(chart);

//   var title = s.append("g")
//     .style("text-anchor", "end")
//     .attr("transform", "translate(-6," + height / 2 + ")");

//   title.append("text")
//     .attr("class", "title")
//     .text(function (d) { return d.title; });

//   title.append("text")
//     .attr("class", "subtitle")
//     .attr("dy", "1em")
//     .text(function (d) { return d.subtitle; });






// }
// function countryClicked(data) {

// }

var hidden = false;
let plotRadarData = [];
let clicked = {}
var shownContinent = '';
var color = {
  'europe': 1,
  'asia': 2,
  'africa': 3,
  'oceania': 4,
  'south america': 5,
  'north america': 6
}
var colorScale = d3.scaleOrdinal(d3.schemeCategory10);
var continentPopulation = {},
  continentLiteracy = {},
  continentGDP = {};
var detailSvg;
var processedData = [];
function initDetail() {


  d3.json("./data/country-continent.json", function (continentCountry) {

    d3.csv("./data/countries_processed.csv", function (data) {
      //form data:
      console.log('data', data)
      continentPopulation = {}
      continentLiteracy = {}
      continentGDP = {}
      data.map(function (d) {
        let obj = continentCountry.find(o => o.country.toLowerCase() == d['Country'].toLowerCase());
        d.continent = ''
        if (obj) {
          d.continent = obj.continent;
          if (!continentPopulation[obj.continent]) {
            continentPopulation[obj.continent] = 0
          }
          if (!continentLiteracy[obj.continent]) {
            continentLiteracy[obj.continent] = 0
          }
          if (!continentGDP[obj.continent]) {
            continentGDP[obj.continent] = 0
          }
          continentPopulation[obj.continent] += parseInt(d['Population'])
          continentGDP[obj.continent] += parseInt(d['GDP ($ per capita)']) * parseInt(d['Population'])
          continentLiteracy[obj.continent] += (parseInt(d['Literacy (%)']) * parseInt(d['Population'])) / 100;
        }


      })
      var dataToDraw = [];
      Object.keys(continentPopulation).map(function (k) {
        dataToDraw.push({ 'continent': k, 'gdp': continentGDP[k] / continentPopulation[k], 'population': continentPopulation[k], 'literacy': (continentLiteracy[k] / continentPopulation[k]) * 100 })
      });

      console.log('data to draw is ', dataToDraw);

      //calling drawBubbleChart:
      drawBubbleChart(dataToDraw);

      processedData = data;
      let plotRadarData = [];
      console.log('processed data ', processedData)
      processedData.map(function (d) {
        if (d.continent.toLowerCase() == 'asia') {
          console.log('found asia')
          plotRadarData.push([{
            'area': 'Birthrate',
            'value': d['Birthrate'],
          },
          {
            'area': 'Deathrate',
            'value': d['Deathrate']
          },
          {
            'area': 'Net Migration',
            'value': d['Net migration']
          },
          {
            'value': 'Literacy(%)',
            'value': d['Literacy (%)']
          }])
        }
      });
      console.log('plotradar data ', plotRadarData);
      plotRadar([], '');
      appendWriteup();


    });
  });
}

var plottedDetails = {}
function plotCountryBubble(data, svg, x, y) {
  //x,y coordinate of the continent:
  console.log('plot country ', data)
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 560 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
  var radiusScale = d3.scaleSqrt().domain([0, 5e8]).range([0, width * 0.05])
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
  console.log('data', data);
  var x = d3.scaleLog().domain([300, 1e5]).range([0, width]),
    y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  var points = svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr('class', function (d) { return d.continent })
    .attr("cx", function (d) { return x(parseInt(d['GDP ($ per capita)'])); })
    .attr("cy", function (d) { return y(parseFloat(d['Literacy (%)']).toFixed(2)); })
    .attr("r", function (d) {
      return radiusScale(parseInt(d['Population']))
    })
    .style('fill', function (d) {
      d.color = colorScale(color[d.continent.toLowerCase()]);
      return colorScale(color[d.continent.toLowerCase()]);
    }).on('mouseover', function (d) {
      let html = `<span style="color:${d.color}">${d['Country']}</span><br>
      <b>Population: </b> ${d['Population']}<br>
      <b>GDP ($ per capita): </b>${d['GDP ($ per capita)']}<br>
      <b>Literacy %: </b>${d['Literacy (%)']}`
      tooltip.html(html)
        .style('left', (d3.event.pageX + 15) + 'px')
        .style('top', (d3.event.pageY + 28) + 'px')
        .style('opacity', 1)
      svg.selectAll('circle').style('opacity', 0.3);
      d3.select(this).style('opacity', 1);
      d3.select(this).style("cursor", "pointer");


    }).on('mouseout', function (d) {
      tooltip.style('opacity', 0);
      svg.selectAll('circle').style('opacity', 1);
    }).on('click', function (d) {

      
      if (!clicked[d['Country']]) {
        clicked[d['Country']]=true;
        d3.select(this).style('stroke', 'black').style('stroke-width', 4)
      } else {
        d3.select(this).style('stroke', 'white').style('stroke-width', 0)

        clicked[d['Country']]=false;
      }
      plotRadarData=[];
      let countryNames=[];
      processedData.map(function(d){
        if(clicked[d['Country']]==true){
          countryNames.push(d['Country'])
          plotRadarData.push([{
            'area': 'Birthrate',
            'value': d['Birthrate'],
          },
          {
            'area': 'Deathrate',
            'value': d['Deathrate']
          },
          {
            'area': 'Net Migration',
            'value': parseInt(d['Net migration']) * 10
          },
          {
            'area': 'Literacy(%)',
            'value': d['Literacy (%)']
          }])
        }
      })
      plotRadar(plotRadarData, countryNames)
    });




}

function drawBubbleChart(data) {
  console.log(data);
  var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width = 560 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  var radiusScale = d3.scaleSqrt().domain([0, 5e8]).range([0, width * 0.05])

  // append the svg object to the body of the page
  var svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom + 200)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");


  // var y= d3.scaleLinear()
  //   .domain(d3.extent(data, function (d) {
  //     return d['population'];
  // var y=d3.scaleLog().domain([0, 5e8])
  //   .range([height, 0]);


  // var x = d3.scaleLinear()
  //   .domain([0, 100])
  //   .range([0, width + 10]);
  var x = d3.scaleLog().domain([10, 1e5]).range([0, width]),
    y = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  var xAxis = d3.axisBottom(x)

  var yAxis = d3.axisLeft(y)

  var gX = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

  var gY = svg.append("g")
    .call(yAxis);


  svg.append("text")
    .attr("transform",
      "translate(" + (width / 2) + " ," +
      (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("GDP per capita");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Literacy %");



  //tooltip for the svg:
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  var zoom = d3.zoom()
    .scaleExtent([.5, 20])
    .extent([[0, 0], [width, height]])
    .on("zoom", zoomed);

  function zoomed() {
    // create new scale ojects based on event
    var new_xScale = d3.event.transform.rescaleX(x);
    var new_yScale = d3.event.transform.rescaleY(y);
    // update axes
    gX.call(xAxis.scale(new_xScale));
    gY.call(yAxis.scale(new_yScale));
    points.data(data)
      .attr('cx', function (d) { return new_xScale(d['gdp']) })
      .attr('cy', function (d) { return new_yScale(parseFloat(d['literacy']).toFixed(2)) });
  }






  //append dots for the data:
  var points = svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return x(d['gdp']) })
    .attr("cy", function (d) { return y(parseFloat(d['literacy']).toFixed(2)); })
    .attr("r", function (d) {
      return radiusScale(parseInt(d.population))
    })
    .style('fill', function (d) {
      d.color = colorScale(color[d.continent.toLowerCase()]);
      return colorScale(color[d.continent.toLowerCase()]);
    }).on("mouseover", function (d) {
      let gdp = parseFloat(d['gdp']).toFixed(2);
      let pop = d['population'];
      let lit = parseFloat(d['literacy']).toFixed(2);
      d3.select(this).style("cursor", "pointer");
      svg.selectAll('circle').style('opacity', 0.3);
      d3.select(this).style('opacity', 1);

      var html =
        "<span style='color:" + d.color + ";'>" + d['continent'] + "</span><br/>" + "<b>Population</b>" +
        pop +
        "<br><b>GDP ($ per capita):</b>" + gdp + "<br><b>Literacy(%): </b>" + lit;
      tooltip.html(html)
        .style('left', (d3.event.pageX + 15) + 'px')
        .style('top', (d3.event.pageY - 28) + 'px')
        .style('opacity', 1)


    }).on("mouseout", function (d) {
      svg.selectAll('circle').style('opacity', 1);

      tooltip
        .style('opacity', 0)

    }).on('click', function (d) {
      //create data for the country:


      plottedDetails[d.continent] = true;
      let datat = [];
      processedData.map(function (ele) {

        if (ele.continent.toLowerCase() == d.continent.toLowerCase()) {
          datat.push(ele);
        }
      });
      //reduce radius
      let element = this;
      d3.select(this)
        .transition()
        .delay(function (d, i) { return (i * 3) })
        .duration(2000)
        .attr('r', 10)
        .style('opacity', 0)
        .style('display', 'none');


      plotCountryBubble(datat, svg, d3.select(this).attr('cx'), d3.select(this).attr('cy'));

    }).call(zoom)
  console.log('points appended are ', points);
  svg.append("circle").attr("cx", 2).attr("cy", height + 40).attr("r", 8).style("fill", colorScale(1))
  svg.append("text").attr("x", 20).attr("y", height + 40).text("Europe").style("font-size", "15px").attr("alignment-baseline", "middle")
  svg.append("circle").attr("cx", 2).attr("cy", height + 60).attr("r", 8).style("fill", colorScale(2))
  svg.append("text").attr("x", 20).attr("y", height + 60).text("Asia").style("font-size", "15px").attr("alignment-baseline", "middle")
  svg.append("circle").attr("cx", 2).attr("cy", height + 80).attr("r", 8).style("fill", colorScale(3))
  svg.append("text").attr("x", 20).attr("y", height + 80).text("Africa").style("font-size", "15px").attr("alignment-baseline", "middle")
  svg.append("circle").attr("cx", 2).attr("cy", height + 100).attr("r", 8).style("fill", colorScale(4))
  svg.append("text").attr("x", 20).attr("y", height + 100).text("Oceania").style("font-size", "15px").attr("alignment-baseline", "middle")
  svg.append("circle").attr("cx", 2).attr("cy", height + 120).attr("r", 8).style("fill", colorScale(5))
  svg.append("text").attr("x", 20).attr("y", height + 120).text("South America").style("font-size", "15px").attr("alignment-baseline", "middle")
  svg.append("circle").attr("cx", 2).attr("cy", height + 140).attr("r", 8).style("fill", colorScale(6))
  svg.append("text").attr("x", 20).attr("y", height + 140).text("North America").style("font-size", "15px").attr("alignment-baseline", "middle")




  // plotRadar(d)



  // .style("fill", function (d) {
  //   let obj = continentCountry.find(o => o.country.toLowerCase() == d['Country'].toLowerCase());
  //   d.continent = '';
  //   if (obj) {
  //     d.color = colorScale(color[obj.continent.toLowerCase()]);
  //     d.continent = obj.continent.toLowerCase();
  //     return colorScale(color[obj.continent.toLowerCase()])
  //   } else {
  //     return 'black'
  //   }
  // })

  // var tooltip = d3.select("body").append("div")
  //   .attr("class", "tooltip")
  //   .style("opacity", 0);

  // svg.append('g')
  //   .selectAll("dot")
  //   .data(data)
  //   .enter()
  //   .append("circle")
  //   .attr("cx", function (d) { return x(d['GDP ($ per capita)']) })
  //   .attr("cy", function (d) { return y(Math.abs(d['Literacy (%)'])); })
  //   .attr("r", function (d) { return radiusScale(d['Population']) })
  //   .style("fill", function (d) {
  //     let obj = continentCountry.find(o => o.country.toLowerCase() == d['Country'].toLowerCase());
  //     d.continent = '';
  //     if (obj) {
  //       d.color = colorScale(color[obj.continent.toLowerCase()]);
  //       d.continent = obj.continent.toLowerCase();
  //       return colorScale(color[obj.continent.toLowerCase()])
  //     } else {
  //       return 'black'
  //     }
  //   })
  //   .on("mouseover", function (d) {
  //     if (!hidden) {
  //       svg.selectAll('circle').style('opacity', 0.2);
  //       d3.select(this).style('opacity', 1);
  //     }

  //     if (shownContinent == '' || d.continent == shownContinent) {

  //       var html =
  //         "<span style='color:" + d.color + ";'>" + d['Country'] + "</span><br/>" +
  //         "<b>GDP:</b>" + d['GDP ($ per capita)'] + "<br><b>Literacy(%): </b>" + d['Literacy (%)'];
  //       tooltip.html(html)
  //         .style('left', (d3.event.pageX + 15) + 'px')
  //         .style('top', (d3.event.pageY - 28) + 'px')
  //         .style('opacity', 1)
  //     }

  //   })
  //   .on("mouseout", function (d) {
  //     if (!hidden) {
  //       svg.selectAll('circle').style('opacity', 1);
  //     }
  //     tooltip
  //       .style('opacity', 0)

  //   })
}
// function hideCountries(continent) {
//   detailSvg.selectAll('circle')
//     .style('opacity', function (d) {
//       // console.log(d)
//       if (d.continent.toLowerCase() == continent) {
//         return 1
//       } else {
//         return 0
//       }
//     });
//   hidden = true;
//   shownContinent = continent;
// }

// function showAll() {
//   detailSvg.selectAll('circle')
//     .style('opacity', 1);
//   hidden = false;
//   shownContinent = ''

// }

// var width = 800;
// var height = 500;

// //var color = d3.scaleOrdinal(d3.schemeCategory10).domain(d3.range(0, 9));

// var graticule = d3.geoGraticule();
// var svg = d3.select("body").append("svg")
//   .attr('width', width)
//   .attr('height', 500)
//   .attr("transform", "translate(" + 20 + "," + 30 + ")");
// var g = svg.append("g").attr('class', 'map');

// var projection = d3.geoMercator()
//   .scale(width / 2 / Math.PI)
//   .translate([width / 2, height / 2])
//   .rotate([-10, 0]);

// var path = d3.geoPath().projection(projection);


// g.append("path")
//   .datum(graticule)
//   .attr("class", "graticule")
//   .attr("d", path);

// //reference
// //techslides.com/demos/d3/worldmap-template-d3v4.html
// //https://github.com/piwodlaiwo/topojson
// //http://bl.ocks.org/micahstubbs/8e15870eb432a21f0bc4d3d527b2d14f (look into using d3.tip.js)
// var data = "./data/continents.json";


// d3.json(data, function (error, topology) {
//   //var features = topojson.feature(world, world.objects.countries).features;
//   var continents = topojson.feature(topology, topology.objects.continent).features;
//   var centroids = continents.map(function (feature) {
//     return path.centroid(feature);
//   });
//   console.log(centroids);

//   //var neighbors = topojson.neighbors(topology.objects.continent.geometries);
//   var tooltip = d3.select("body").append("div")
//     .attr("class", "tooltip")
//     .style("opacity", 0);

//   g.selectAll(".continent")
//     .data(continents)
//     .enter()
//     .append("path")
//     .attr("d", path)
//     .attr('class', function (d) { return d.properties.continent.replace(' ','-') })
//     .attr("title", function (d, i) {
//       //console.log(d.properties.continent)
//       return d.properties.continent;
//     }).on('mouseover', function (d) {


//       d3.select(this)
//         .style("stroke", "black")
//         .style("stroke-width", 2);
//     }).on('mouseout', function (d) {


//       d3.select(this)
//         .style("stroke", "white")
//         .style("stroke-width", 0.3);
//     })
//     .style("fill", function (d, i) { return colorScale(color[d.properties.continent.toLowerCase()]); })
//     .on('click', function (d) {
//       if (g.selectAll("path").style('opacity') < 1) {
//         g.selectAll("path").style('opacity', 1)
//         showAll();
//         return
//       }
//       console.log('clicked', d)

//       g.selectAll("path").style('opacity', 0.2)
//       d3.select('.' + d.properties.continent.replace(' ','-')).style('opacity', 1)
//       d3.select('.' + d.properties.continent.replace(' ','-')).style("stroke", "black")
//         .style("stroke-width", 2);
//       let name = d.properties.continent.toLowerCase();
//       hideCountries(name);
//     })
//   //.style("fill", function(d, i) { return color(d.color = d3.max(neighbors[i], function(n) { return continents[n].color; }) + 1 | 0); });


//   // svg.selectAll(".centroid").data(centroids)
//   //   .enter().append("circle")
//   //   .attr("class", "centroid")
//   //   .attr("fill", "rgba(255, 49, 255, 0.388)")
//   //   .attr("stroke", "rgba(0, 0, 0, 0.5)")
//   //   .attr("stroke-width", 0.1)
//   //   .attr("r", 16)
//   //   .attr("cx", function (d) { return d[0]; })
//   //   .attr("cy", function (d) { return d[1]; });


//   svg.selectAll(".name").data(centroids)
//     .enter().append("text")
//     .attr("x", function (d) { return d[0]; })
//     .attr("y", function (d) { return d[1]; })
//     .attr("dy", -7)
//     .style("fill", "black")
//     .attr("text-anchor", "middle")
//     .text(function (d, i) { return continents[i].properties.continent; });

//   /*
//    .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
//    .attr("y", function(d) { return projection([d.lon, d.lat])[1]; })
//    */


// })
function plotRadar(data, countryNames) {
  let countryName='No country selected';
if(data.length==0){
  data = [
    [
      { "area": "Birthrate ", "value": 0 ,'countryName':'indddd'},
      { "area": "Deathrate", "value": 0, 'countryName': 'indddd' },
      { "area": "Literacy(%)", "value": 0, 'countryName': 'indddd'},
      { "area": "Net Migration ", "value": 0, 'countryName': 'indddd' },
    ]
  ]
  countryName='No country selected'
}

if(data.length>1){
  countryName='Multiple Countries'
}else{
  countryName=countryNames[0];
}
  // var 
  var width = 300,
    height = 300;

  var colorScale1 = d3.scaleOrdinal().domain([0,40])
    .range(["gold", "blue", "green", "yellow", "black", "grey", "darkgreen", "pink", "brown", "slateblue", "grey1", "orange"])
    let colors=[];

  plotRadarData.map(function(r,i){
    colors.push(colorScale1(i))
  })
  // Config for the Radar chart
  var config = {
    w: width,
    h: height,
    maxValue: 200,
    levels: 5,
    ExtraWidthX: 300,
    countryNames: countryNames,
    colors:colors
  }

  //Call function to draw the Radar chart
  // d3.json("data.json", function (error, data) {
  // if (error) throw error;
  // });

  // var svg = d3.select('body')
  //   .append('svg')
  //   .attr("width", width)
  //   .attr("height", height);
  let svg = RadarChart.draw("#chart", data, config);
  document.getElementById('countryName').innerHTML = countryName
}

function appendWriteup() {
  $('body').append(`
  <div class='jumbotron'>
  <div class='container'>
    <h3><u>Domain Abstraction :</u></h3>
    <p>The potential users for this visualization can be market researchers who want to know the relationship between the GDP per capita of a country and the literacy of the country.</p>
    <p>On a higher level, the user can see the data at the continent level. And with further interactions, country level abstraction is revealed.</p>

  </div>
  <div class='container'>
  <h3><u>Data Abstraction :</u></h3>
  <ol>
    <li>
      The dataset used is a <b>Table</b> dataset which is a combination of :
      <ul>
        <li>Attributes</li>
        <li>Items</li>
      </ul>
    </li>

    <li>
      There are <b>two</b> attributes that are being visualized in the overview visualization:
        <ol>
          <li> GDP ($ per capita):
              <br>
              <b>Attribute type :</b> Quantitative attribute
          </li>
          <li> Literacy (%):
              <br>
              <b>Attribute type :</b> Quantitative attribute
          </li>
        </ol>

    </li>
    <li>
      Additional data pre-processing was done to plot the overview visualization:
        <p>Calculated the GDP and literacy percent for the continents using the country level data and country level population.</p>
        <p>Binned the values based on the continent name.</p>
    </li>
  </ol>

  </div>

   <div class='container'>
    <h3><u>Task Abstraction :</u></h3>
   <p>The <u><b>three</b></u> tasks supported by this visualization are :</p>
   <ol>
      <li>
        <p>Bubble chart shows the overall data for continents.</p>
        
        <b>Action</b> : Analyze (Consume) , <b>Target</b> : Overview Data
      </li>
      <li>
        <p>Clicking on the continent bubble on the bubble chart plots the corresponding country bubbles.</p>
        <b>Action</b> : Analyze (derive) , <b>Target</b> : Network data (topology)
      </li>
      <li>
        <p>Clicking on the country bubble on the bubble chart plots the corresponding country attributes(Birthrate, Deathrate, Net migration, Literacy %)  on the radar plot.</p>
        <b>Action</b> : Search (lookup) , <b>Target</b> : All Data (features)
      </li>
   </ol>

  </div>


  <div class='container'>
    <h3><u>Visualization and Interaction abstraction:</u></h3>
    <ol>
      <li>
        <p>There are two visualizations in the UI as follows:</p>
        <ol>
            <li><u>Bubble chart:</u>
            <p> Marks: Points (Nodes with radius scaled to the corresponding total population)</p>
            <p> Channels : Color(Continents have different color), Size (Size of each mark depends on the population it represents)</p>
            </li>
            <li><u>Radar chart:</u>
            <p> Marks: Points (Nodes with radius scaled to the corresponding total population), Lines, Area</p>
            <p> Channels : Area (Total area defines the spread of the data for the particular country)</p>
            </li>
        </ol>
      </li>

      <li>
        <p>The overview visualization (Bubble chart) supports actions like a. analyzing (Consume) and b. Derive.</p>
        <p>The radar chart supports the primary action of consume and comparison.</p>
      </li>
      <li>
        Using a bubble chart makes the overview visualization inference easy. The interactions like hover and click are also easy. 
        The bubble chart allows the user to gauge 3 dimensions of data without complexity. 
        In this case:
        <br>
        Using a bubble chart the UI portrayed the continents based on their population. 
        Using the radar chart, the UI was able to show the comparison of 4 attribute of a country. 
      </li>
    </ol>

  </div>

  

  <div class='container'>
    <h3><u>Algorithm Abstraction :</u></h3>
    <p>The process of data pre-processing and plotting can be considered an algorithm. In this system, the data was binned based on the continent name. 
    For each continent bin the attributes were calculated based on the children data (In this case countries act as children of the corresponding continents). 
    This helped with the plotting of overview visualization which shows continents as bubbles. </p>
  </div>
  
  </div>
  `)
}

initDetail();

// plotRadar()