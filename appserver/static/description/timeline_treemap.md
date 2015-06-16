<h4>Options</h4>
<h5>
  All the options here almost entirely reference the methods defined <a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations">here</a>. Most of the names have stayed the same, but a few are slightly different. You can see what these map to, in the cases where they are different, by looking at the d3plus viz objects in the createView and updateView functions.
</h5>
<table class="table table-striped table-bordered">
    <tbody>
    <tr>
        <td><b>Name</b></td>
        <td><b>Type</b></td>
        <td><b>Default</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td><code>managerid</code></td>
        <td>string</td>
        <td>null</td>
        <td>The search manager bound to the chart.</td>
    </tr>
    <tr>
        <td><code>height</code></td>
        <td>string</td>
        <td>400</td>
        <td>The height of the visualization.</td>
    </tr>
    <tr>
        <td><code>width</code></td>
        <td>string</td>
        <td>600</td>
        <td>The width of the visualization.</td>
    </tr>
    <tr>
        <td><code>levels</code></td>
        <td>array</td>
        <td>null</td>
        <td>An array of field names which the visualization will use to nest the data. You can give it just one field name if you don't want to nest your data.<a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#id">here</a>.</td>
    </tr>
    <tr>
        <td><code>x_data</code></td>
        <td>object</td>
        <td>{"value": "x", "scale": "linear"}</td>
        <td>This is an object of key value pairs. The first key is "value" whose default value is "x". The "x" here is the field name that will be charted on the x axis.<a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#x">here</a>.</td>
    </tr>
    <tr>
        <td><code>y_data</code></td>
        <td>object</td>
        <td>{"value": "y", "scale": "linear"}</td>
        <td>This is an object of key value pairs. The first key is "value" whose default value is "y". The "y" here is the field name that will be charted on the y ayis. <a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#x">here</a>.</td>
    </tr>
    <tr>
        <td><code>point_size</code></td>
        <td>integer</td>
        <td>25</td>
        <td>The size of the points. <a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#size">here</a>. </td>
    </tr>
    <tr>
        <td><code>color_field</code></td>
        <td>string</td>
        <td>"color"</td>
        <td>The field whose values are used to determine the color values. <a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#color">here</a>.</td>
    </tr>
    <tr>
        <td><code>tooltip_data</code></td>
        <td>object</td>
        <td>{"children": true}</td>
        <td>Change aspects of the tooltip. Docs <a href="https://github.com/alexandersimoes/d3plus/wiki/Visualizations#tooltip">here</a>.</td>
    </tr>
    </tbody>
</table>
