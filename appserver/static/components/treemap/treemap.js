define(function(require, exports, module) {
    // We have a few dependencies; namely, d3, and d3plus
    // In order for d3plus to get loaded, we need to load it into
    // the name var, d3
    var d3 = require("../d3/d3");
    var d3 = require("../d3plus/d3plus");
    var _ = require("underscore");
    var SimpleSplunkView = require("splunkjs/mvc/simplesplunkview");

    // I'm not sure if this is necessary
    // I want to make sure d3plus is loaded though
    require("splunkjs/mvc/simplexml/ready!");

    var TreeMap= SimpleSplunkView.extend({
        className: "splunk-toolkit-treemap",
        options: {
            "managerid": null,
            "data": "preview",
            "height": "400",
            // these represent the different 'levels'
            // that we can zoom into
            "width": "600",
            "levels": [],
            "color_field": "color",
            "size_field": "count",
            "time_field": "_time"
        },
        output_mode: "json",

        initialize: function() {
            SimpleSplunkView.prototype.initialize.apply(this, arguments);

            $(window).resize(this, _.debounce(this._handleResize, 20));
        },
        _handleResize: function(e) {
            // e.data is the this pointer passed to the callback.
            // here it refers to this object and we call render()
            e.data.render();
        },

        // createView takes no arguments
        // it creates the view we need
        // then returns the visualization as the first
        // arugment (named 'viz') to updateView, below
        createView: function() {

            // this gets rid of the "waiting for data message"
            // and assures us that we have a clean slate
            this.$el.html("");

            // get the height and width from the options
            // and set the div container to that size
            var height = this.settings.get("height");
            var width= this.settings.get("width");
            this.$el.height(height); 
            this.$el.width(width);

            // get the div id, adding a # to reference the fact
            // that it is going to be an id when referencedd
            var divId = "#" + this.$el.attr("id");

            // create a container for the viz inside this container
            // so that it can have space to add timeline, color spectrum, etc.
           
            $(divId).append('<div id="viz_container"></div>');

            // get the levels list and size_field
            var levels = this.settings.get("levels");
            var size_field = this.settings.get("size_field");
            var time_field = this.settings.get("time_field");
            var color_field = this.settings.get("color_field");


            // this is where we create the actual visualization
            // but we haven't attached the data to it yet
            var visualization = d3plus.viz()
              .container("#viz_container")
              .type("tree_map")
              .id(levels)
              .size(size_field)
              .time(time_field);
          
            return visualization;
        },

        // Making the data look how we want it to for updateView to do its job
        // it becomes the second arugment ('data') for updateView
        formatData: function(data) {
          var size_field = this.settings.get("size_field");

          // Convert the string value to number
          data = _(data).map(function(f){
            f[size_field] = parseInt(f[size_field]);
            return f;
          });
          return data;
        },

        // this is the final step
        // where the data actually meets the visualization
        // in this case, our visualization from createView is viz
        // and our data from formatData is data
        updateView: function(viz, data) {

          // d3plus has a data and a draw method
          // that we are using to finalize our visualization
          viz
            .dev(true)
            .data(data)
            .draw()
        }
    });
    return TreeMap;
});
