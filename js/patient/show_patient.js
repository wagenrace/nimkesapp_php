/*
Thanks to ropeladder for this code of http://bl.ocks.org/ropeladder/83915942ac42f17c087a82001418f2ee

This code changes the click event from:
-Click do single click event
- if you click within x time a second single click event is called and the double click event.

ropeladders code changes this to:
- if you click nothing happens for an x time.
- if you click again within this x time to double click event is called
- otherwise the single click event is called
*/
function clickcancel() {
  // we want to a distinguish single/double click
  // details http://bl.ocks.org/couchand/6394506
  var dispatcher = d3.dispatch('click', 'dblclick');
  function cc(selection) {
      var down, tolerance = 5, last, wait = null, args;
      // euclidean distance
      function dist(a, b) {
          return Math.sqrt(Math.pow(a[0] - b[0], 2), Math.pow(a[1] - b[1], 2));
      }
      selection.on('mousedown', function() {
          down = d3.mouse(document.body);
          last = +new Date();
          args = arguments;
      });
      selection.on('mouseup', function() {
          if (dist(down, d3.mouse(document.body)) > tolerance) {
              return;
          } else {
              if (wait) {
                  window.clearTimeout(wait);
                  wait = null;
                  dispatcher.apply("dblclick", this, args);
              } else {
                  wait = window.setTimeout((function() {
                      return function() {
                          dispatcher.apply("click", this, args);
                          wait = null;
                      };
                  })(), 300);
              }
          }
      });
  };
  // Copies a variable number of methods from source to target.
  var d3rebind = function(target, source) {
    var i = 1, n = arguments.length, method;
    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
    return target;
  };

  // Method is assumed to be a standard D3 getter-setter:
  // If passed with no arguments, gets the value.
  // If passed with arguments, sets the value and returns the target.
  function d3_rebind(target, source, method) {
    return function() {
      var value = method.apply(source, arguments);
      return value === source ? target : value;
    };
  }
  return d3rebind(cc, dispatcher, 'on');
}

function add_patients(){
    var cc = clickcancel();
    //viewbox to correct size
    svg_patient_bench.attr("viewBox", "0 0 " + width_patient_box + " " + (patient_data.length * height_patient_box * 1.1 + height_patient_box))

    //Clear the whole bench
    svg_patient_bench.selectAll("*").remove();

    patient_data.sort(function(a, b){
        a = a.name.toLowerCase()
        b = b.name.toLowerCase()
        return a > b});
    //Set all the x values
    for(var i = 0; i<patient_data.length; i++){
        patient_data[i].y = (i * height_patient_box * 1.1).toFixed(0)
    }

    //Fill the bench with new patients
    var all_patients = svg_patient_bench
    .selectAll("g").data(patient_data)
    .enter().append("g")
    .attr("id", function(d) {return("id_num_"+d.id)})
    .attr("transform", function(d) {return("translate(" + d.x + "," + d.y + ")")})

    //Give all patients a rectangle
    all_patients.append("rect")
        .attr("width", width_patient_box)
        .attr("height", height_patient_box)
        .attr("rx", 15)
        .attr("ry", 15)
        .attr("fill", "yellow");

    //give all patients a name
    all_patients.append("text")
        .attr("x", 15)
        .attr("y", height_patient_box/2)
        .text(function(d) {return(d.name)});

    all_patients.call(cc);

    cc.on('dblclick', function(d) {
        open_add_patient(d.id)
    });

    cc.on("click", function(d){
        set_active_number(d.id)
    });

    /*
    CALANDER
    */

    //Fill the calander with planned appointments
    patient_data.forEach(function(patient) {
        patient.planned_slots.forEach(function(slot_name) {
            fill_day_slot(slot_name, patient.id)
        });
    });
}
