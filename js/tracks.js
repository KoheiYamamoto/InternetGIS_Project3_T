var width = 960,
    height = 1100;

var projection = d3.geoMercator()
    .scale(20*(width + 1) / 2 / Math.PI)
    .translate([width / 2, height / 2])
    .rotate([-125, -12, 0])
    .precision(.1);

// var projection = d3.geo.albers()
//         .rotate([-4,0])
//         .scale(3000)
//         .translate([width / 2, height / 2])
//         .center([122.427150, 12.499176])
//         .parallels([10, 15]);

var path = d3.geoPath()
    .projection(projection);

var graticule = d3.geoGraticule();

var svg1 = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("overflow", "auto");

var tip = d3.tip()
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                  return "<strong>Province: </strong><span class='details'>" + d.id + "<br></span>"
                })
  svg1.call(tip);

// var color = d3.scaleThreshold()
//         .domain([0, 1000000, 2000000, 3000000, 5000000])
//         .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1", "#54278f"]);

d3.queue()
        .defer(d3.json, "assets/province2.json") // Load US Counties
        .defer(d3.csv,"assets/province3.csv")
        .await(ready); // Run 'ready' when JSONs are loaded
            // Ready Function, runs when data is loaded

function ready(error, world,unemployment) {
      if (error) throw error;

      var rateById = {}; // Create empty object for holding dataset
          unemployment.forEach(function(d) {
            rateById[d.id] = +d.rate // Create property for each ID, give it value from rate
            //console.log(d);
          });

          var color = d3.scaleThreshold()
              .domain([100, 400000, 780000, 1600000, 13000000])
              .range(["#f2f0f7", "#dadaeb", "#bcbddc", "#9e9ac8", "#756bb1"]);

          svg1.append("g")
              .attr("class", "gadm36_PHL_1")
            .selectAll("path")
              .data(topojson.feature(world, world.objects.gadm36_PHL_1).features)
              // .data(topojson.feature(us, us.objects.counties).features) // Bind TopoJSON data elements
            .enter().append("path")
              .attr("d", path)
              .style("fill", function(d) {
                return color(rateById[d.id])
                //console.log(color(rateById[d.id])); // get rate value for property matching data ID
                // pass rate value to color function, return color based on domain and range
              })
              .style("stroke", "white")
              .on("mouseover",function(d){
                    tip.show(d);
                    d3.select(this)
                      .style("opacity", 1)
                      .style("stroke","white")
                      .style("stroke-width",3)
                })
                .on("mouseout",function(d){
                    tip.hide(d);
                    d3.select(this)
                      .style("opacity", 0.8)
                      .style("stroke","white")
                      .style("stroke-width",0.3);
                });
              var linear = color;
          //console.log(rateById);
          svg1.append("g")
            .attr("class", "legendLinear")
            .attr("transform", "translate(20,20)");

          var legendLinear = d3.legendColor()
            .shapeWidth(100)
            .labels([ "Population", "<400000", "<780000", "<1600000", "<13000000"])
            .orient('horizontal')
            .scale(linear);

          svg1.select(".legendLinear")
            .call(legendLinear);

        }

svg1.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("assets/track2.json", function(error, track) {
d3.json("assets/province2.json", function(error, world) {
  var color_scale = d3.scaleQuantile().domain([1, 5]).range(colorbrewer.YlOrRd[5]);

    svg1.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.gadm36_PHL_1))
      .attr("class", "gadm36_PHL_1")
      .attr("d", path);

    var dateText = svg1.append("text") //inserted this variable
        .attr("id", "dataTitle")
        .text("2013/11/"+track[0].day + " " + track[0].hour + ":00 class: " + track[0].class+ " wind: " + track[0].wind+ "kt pressure: " + track[0].pressure+"hPa")
        .attr("x", 20)
        .attr("y", 100)
        .attr("font-family", "avenir next, sans-serif")
        .attr("font-size", "20px")
        .attr("fill", color_scale(track[0].class));

    var pathLine = d3.line()
            .curve(d3.curveCardinal)
            .x(function(d) { return projection([d.lon, d.lat])[0]; })
            .y(function(d) { return projection([d.lon, d.lat])[1]; });

    // var pathLine = d3.line()
    //     .interpolate("cardinal")
    //     .x(function(d) { return projection([d.lon, d.lat])[0]; })
    //     .y(function(d) { return projection([d.lon, d.lat])[1]; });

    var haiyanPath = svg1.append("path")
    .attr("d",pathLine(track))
    .attr("fill","none")
    .attr("stroke", color_scale(track[0].class))
    .attr("stroke-width", 3) //addeingf the colours aesthetics
    .style('stroke-dasharray', function(d) {
      var l = d3.select(this).node().getTotalLength();
      return l + 'px, ' + l + 'px';
    })
    .style('stroke-dashoffset', function(d) {
      return d3.select(this).node().getTotalLength() + 'px';
     });
    //.attr("class","path"); //replaced

    var haiyanPathEl = haiyanPath.node(); //getting vaeiables for the path
    var haiyanPathElLen = haiyanPathEl.getTotalLength();

    var pt = haiyanPathEl.getPointAtLength(0);

    var icon = svg1.append("path") //making the icon
    .attr("d","m 20,-42 c -21.61358,0.19629 -34.308391,10.76213 -41.46346,18.0657 -7.155097,7.3036 -11.451337,17.59059 -11.599112,26.13277 0,14.45439 9.037059,26.79801 21.767213,31.69368 -14.965519,10.64929 -25.578236,6.78076 -37.671451,7.85549 C -4.429787,54.20699 14.03,37.263 23.12144,28.41572 32.2133,19.56854 34.6802,10.79063 34.82941,2.19847 c 0,-14.45219 -9.03405,-26.79679 -21.76113,-31.69364 14.90401,-10.54656 25.48889,-6.69889 37.55061,-7.77104 C 38.78869,-40.57565 29.11666,-41.95733 21.03853,-42 20.68954,-42.0105 20.34303,-42.0105 20,-42 z M 0.82306,-7.46851 c 4.72694,0 8.56186,4.27392 8.56186,9.54602 0,5.2725 -3.83492,9.54651 -8.56186,9.54651 -4.726719,0 -8.555958,-4.27401 -8.555958,-9.54651 0,-5.2721 3.829239,-9.54602 8.555958,-9.54602 z")
    .attr("transform", "translate(" + pt.x + "," + pt.y + "), scale("+(0.20*track[0].class)+")")
    .attr("fill", color_scale(track[0].class))
    .attr("class","icon");

    var i=0
    d3.select("#start").on("click", function() {
      var animation = setInterval(function(){
        pt = haiyanPathEl.getPointAtLength(haiyanPathElLen*i/track.length);
        icon
          .transition()
          .ease(d3.easeLinear)
          .duration(1000)
          .attr("transform", "translate(" + pt.x + "," + pt.y + "), scale("+(0.20*track[i].class)+"), rotate("+(i*30)+")")
          .attr("fill", color_scale(track[i].class));

        haiyanPath
          .transition()
          .duration(1000)
          .ease(d3.easeLinear)
          .attr("stroke", color_scale(track[i].class))
          .style('stroke-dashoffset', function(d) {
            var stroke_offset = (haiyanPathElLen - haiyanPathElLen*i/track.length + 9);
            return (haiyanPathElLen < stroke_offset) ? haiyanPathElLen : stroke_offset + 'px';
          });

        dateText
          .text("2013/11/"+track[i].day + " " + track[i].hour + ":00 class: " + track[i].class+ " wind: " + track[i].wind+ "kt pressure: " + track[i].pressure+"hPa")
          .attr("fill", color_scale(track[i].class));
        i = i + 1;
        if (i==track.length)
          clearInterval(animation)

      },1000);
    });


});
});


d3.select(self.frameElement).style("height", height + "px");
