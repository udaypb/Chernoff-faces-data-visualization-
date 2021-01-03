// this is where your implementation for your flow diagram should go 
function FlowDiagram(svg, data) {
    this.svg = svg;
    
    // grab the bounding box of the container
    var boundingBox = svg.node().getBoundingClientRect();

    //  grab the width and height of our containing SVG
    var svgHeight = boundingBox.height;
    var svgWidth = boundingBox.width;

    var yscale = d3.scaleLinear()
    .range([svgHeight-30, 0]);

    var xscale = d3.scaleLinear()
    .range([0,svgWidth-80]);

    this.svg=d3.select('body .flow')
                .attr("width", svgWidth)
                .attr("height", svgHeight);

    let oldexits=[];
    // this is where your code should go to generate the flow diagram from the random data
    this.draw=function(data){
        
        // var item = svg
        // .selectAll('ul').selectAll('li')
        // .data(data,d=>d.id);

        // item
        // .enter()
        // .append('li')
        // .attr('class', 'item')
        // .text(function(d) { return 'List item ' + d.name });
        var text = svg.selectAll('text')
        .data(data,d=>d.id);
        

        svg.selectAll('.removed').remove()

        

        console.log(text.enter().data())
        let len=text.enter().data().length;
        text.enter().data().map(function(o,i){
            let obj=data.find(d=>d.id==o.id);
            obj['y']=12+i*20;
        })

        text
       .enter().append('text')
       .text(function(d) { return d.name })
       .attr('x',1)
       .style('text-decoration','underline')
       .attr('y',function(d,i){return d['y']})
       .style('fill','green');


       text
       .merge(text)
       .transition()  // Transition from old to new
       .duration(500)  // Length of animation
       .delay(function(d, i) {
           return i / data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)
       })
       .attr("x",200)
        .attr("y", function(d,i){return 12+i*20})
        .style('fill','orange');

       
        console.log('text length count ',text.data().length)


        let c=-1;
       console.log('old exits',oldexits)
       console.log('new exits',text.exit().data())
        text.exit().data().map(function(o,i){
            if(oldexits.indexOf(o.id)<0){
                c+=1
                o['y']=12+c*20;
            }
            
        });
        
        console.log('!!!!!!!',text.exit().data())


        text
        .exit()
        .transition()
        .duration(1000)
        .delay(function(d, i) {
            return i / data.length * 500;  // Dynamic delay (i.e. each item delays a little longer)
        })
        .attr("x",400)
         .attr("y", function(d,i){return d['y'] })
         .style('fill','red')
         .attr('class','removed');


        // console.log(d3.select('body .flow').selectAll('.removed')._groups)

        //  svg.selectAll('.removed')._groups[0].forEach((d)=>{
        //     c+=1
        //     console.log('iterating removed')
        //     d.y.baseVal[0].value
        // })

         oldexits=text.exit().data().map(d=>d.id);


    }

}
