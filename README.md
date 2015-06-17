# Using [D3Plus](http://d3plus.org/) Visualizations

First things first: download the Splunk 6.x dashboard examples, and (almost more importantly), Satoshi's Custom Visualizations app. These two apps are crucial, and more or less considered preqrequisites to understanding or utilizing this app fully.

- [Splunk 6.x Dashboard Examples](https://splunkbase.splunk.com/app/1603/)
- [Custom Visualizations](https://splunkbase.splunk.com/app/2717/) - Satoshi has outlined a lot of relevant details in the **tutorial**.

## the basic usage

Go to examples and look at both the dashboard xml, and the javascript (bottom of the page). If you like a visualization, you can copy the files into your own `appserver/static`. 

After that, you need 2 parts added to your dashboard.

####1.) The Search  - splunk-manager div

Here's an example:
```
<div id="custom_viz_search" class="splunk-manager" data-require="splunkjs/mvc/searchmanager" data-options='{
        "search": "index=foo sourcetype=bar | stats count",
        "preview": true
}'>
</div>
```
The trickiest part here is making sure you ESCAPE any XML attributes, namely, `'<>"\,` that might be used in your search. Of course quotes come up, but remember angle brackets too (e.g. named field extractions). Commas too will break the search. 


####2.) The View - splunk-view div

Here is an example:

```
<div id="custom_viz" class="splunk-view" data-require="app/my_apps_name/path/to/my/needed/javascript" data-options='{
    "managerid": "custom_viz_search",
    "height": 800,
    "x" : {"value": "count", "scale": "log"},
    "boolean": true
}'>
```
Trouble Shooting Tips from Satoshi's Custom Visualizations app:

 - Check that the managerid matches the id of the searchmanager's `<div>`.
 - Check for the correct path for data-require for the visualization "container" `<div>`. It should be in the form of `app/<app_name>/path/to/<js_file_without_extension>`.
 - Check that all XML attributes are properly escaped. For example, make sure all `'<>"\` characters are escaped in the search query.
 - Check that all tokens are wrapped in the token_safe syntax and are defined by 2 dollar signs on each side (like `$$token$$`).
 - Check that the value of data-options is in valid JS object (not necessary JSON since single quotes can be used). In other words, check for comma and quote placements.
 - Check for any JS errors in the browser (via some dev tool).
 - If all else fail then start with the working examples then modify it in small steps to see where it breaks.


## the main idea

Splunk is highly configurable and easily extendible. This app shows how we can quite easily extend a Splunk dashboard to use d3plus visualizations. See the details in the docs [here](http://dev.splunk.com/view/webframework-splunkjsstack/SP-CAAAES5). 

In order to get things working, there are a few steps to creating a totally custom visualization. See a small demo / template [here](https://gist.github.com/metasyn/70e5e3599abe76c37a07). A simplified step list might look like:

 - List dependencies
 - Specify data options
 - Create View
 - Format Data
 - Update View
