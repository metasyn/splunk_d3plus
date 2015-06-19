See the documentation on [github](https://github.com/alexandersimoes/d3plus/wiki/Visualizations) or take a peek at the documentation link on the nav bar above.

A simple mapping of the method from the d3plus docs to the splunk-view div data-options :

```
Legend: .nameOfMethod() - "name in data options" : (accepted values)

.id() - "levels" : ( String | Array | Object )
.time() - "time_field" : ( false | String | Function | Object )
.x() - "x_data" : ( false | String | Function | Object )
.y() - "y_data" : ( false | String | Function | Object )
.size() - "size" : ( false | String | Number | Function | Object )
.color() - "color_field" : ( String | Function | Object )
.tooltip() - "tooltip_data" : ( Array | Object )
.ui() - "ui" : ( false | Array | Object )
.aggs() - "aggs" : ( Object )
```
