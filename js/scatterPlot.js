// this is where your implementation for your scatter plot should go 
function ScatterPlot(svg, data, updateFlowDiagram) {

    var margins = {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
    };

    this.svg = svg;
    
    // grab the bounding box of the container
    var boundingBox = svg.node().getBoundingClientRect();

    //  grab the width and height of our containing SVG
    var svgHeight = boundingBox.height;
    var svgWidth = boundingBox.width;

    // this is where your code should go to generate the flow diagram from the random data
    var yscale = d3.scaleLinear()
    .range([svgHeight-30, 0]);

    var xscale = d3.scaleLinear()
    .range([0,svgWidth]);
    var y_axis = d3.axisLeft()
    .scale(yscale);

    var x_axis = d3.axisBottom()
    .scale(xscale);

   

    this.svg=d3.select('body .scatter')
                .append("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight)
                .attr('id','plot');

    svg.append('g')
        .attr("class", "y_axis")
        .attr('transform','translate(30,10)')
        .call(y_axis);
    svg.append("g")
        .attr("class", "x_axis")
        .attr("transform", "translate(30, " + ((svgHeight-20))  +")")
        .call(x_axis);

    const methods={
        draw(data){
            // alert('drawwww')
            console.log('draw called with data ',data);
            // d3.select('body .scatter').selectAll('*').remove(); //remove all children of the svg

            //defining the scale for the x and y axis  : v0 for x-axis and v2 for y-axis
            // yscale.domain([Math.min.apply(Math, data.map(function(o) { return o.v0; })), Math.max.apply(Math, data.map(function(o) { return o.v0; }))])
            // .range([svgHeight-30, 0]);

          
            // xscale.domain(d3.extent([d3.min(data,function(d){return d.v0}), d3.max(data, function(d) { return d.v0; })]))
            // .range([0,svgWidth]);


            xscale.domain(d3.extent(data, function(d) {
                return d.v0;
            })).nice();
            yscale.domain(d3.extent(data, function(d) {
                return d.v1;
            })).nice();
            // Update X Axis
            svg.select(".x_axis")
            .transition()
            // .duration(1000)
            .call(x_axis);

            // Update Y Axis
            svg.select(".y_axis")
                .transition()
                // .duration(100)
                .call(y_axis);

    
            //draw the dots for the data

            // if(svg.selectAll('circle').data().length==0){
            // svg.selectAll(".dot")
            // .data(data,d=>d.id)
            // .enter().append("circle")
            // .attr("class", "dot")
            // .attr("r", 3.5)
            // .attr("cx", function(d) { return xscale(d.v0)} )
            // .attr("cy", function(d) { return yscale(d.v1) })
            // .attr('id',function(d){return d.id})
            // .style("fill",'green');

            // }else{

            // let oldData=svg.selectAll('circle').data()
            //remove
            // svg.selectAll(".dot")
            // .data(data)
            // .exit()
            // .remove();

         
           //update

            const dots=svg.selectAll('.dot')
                          .data(data,d=>d.id);


            dots
            .enter().append("circle")
           .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function(d) { return xscale(d.v0)+22} )
            .attr("cy", function(d) { return yscale(d.v1) })
            .attr('id',function(d){return d.id})
            .style('fill','green');


           dots
           .merge(dots)
           .transition()  // Transition from old to new
            .duration(500)  // Length of animation
            .delay(function(d, i) {
                return i / data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)
            })
            //.ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
            .attr("cx", function(d) {
                return xscale(d['v0'])+22;  // Circle's X
            })
            .attr("cy", function(d) {
                return yscale(d['v1']);  // Circle's Y
            })
            .style('fill','orange')
           



            dots
            .exit()
            .remove();

           

            // svg.selectAll("circle")
            // .data(data)// Update with new data
            // .transition()  // Transition from old to new
            // .duration(1000)  // Length of animation
            // .delay(function(d, i) {
            //     return i / data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)
            // })
            // //.ease("linear")  // Transition easing - default 'variable' (i.e. has acceleration), also: 'circle', 'elastic', 'bounce', 'linear'
            // .attr("cx", function(d) {
            //     return xscale(d['v0']);  // Circle's X
            // })
            // .attr("cy", function(d) {
            //     return yscale(d['v1']);  // Circle's Y
            // })
            // .style('fill','red');

            //add
            // svg.selectAll("circle")
            // .data(data)
            //  .enter()
            //  .append("circle")
            //            .attr("cx", function(d) {
            //                 return xscale(d['v0']);
            //            })
            //            .attr("cy", function(d) {
            //                 return yscale(d['v1']);
            //            })
            //  .attr("r", 2);
            // }
            console.log('selection.data gives',svg.selectAll('circle').data())

        }

    }

    let p=Object.create(methods);
    return p
}
