# Media Query

# What is Media Query
Media queries allow you to apply CSS styles depending on a device's general type (such as print vs. screen) or other characteristics such as screen resolution or browser viewport width. Media queries are used for the following:

- To conditionally apply styles with the CSS 
- To target specific media for the < style >, < link >, < source >, and other HTML elements with the media= attribute.
- To test and monitor media states using the Window .match Media() and MediaQueryList.addListener() JavaScript methods.

Media queries can modify the appearance (and even behavior) or a website or app based on a matched set of conditions about the user’s device, browser or system settings.

A media query is composed of an optional media type and any number of media feature expressions, which may optionally be combined in various ways using logical operators. Media queries are case-insensitive.

Media types define the broad category of device for which the media query applies: all, print, screen. The type is optional (assumed to be all) except when using the not or only logical operators.
Media features describe a specific characteristic of the user agent, output device, or environment:

CSS Media queries are a way to target browser by certain characteristics, features, and user preferences, then apply styles or run other code based on those things. Perhaps the most common media queries in the world are those that target particular viewport ranges and apply custom styles, which birthed the whole idea of responsive design.

### Syntax

```
/* When the browser is at least 600px and above */
@media screen and (min-width: 600px) {
  .element {
    /* Apply some styles */
  }
}
``` 

There are lots of other things we can target beside viewport width. That might be screen resolution, device orientation, operating system preference, or even more among a whole bevy of things we can query and use to style content. like hover , color, grid, height etc.

### Example
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/Rakii/embed/zYaLgPd?default-tab=css&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Rakii/pen/zYaLgPd">
  Untitled</a> by Rakhshanda Begum (<a href="https://codepen.io/Rakii">@Rakii</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Using media queries
Media queries are commonly associated with CSS, but they can be used in HTML and JavaScript as well.

### With HTML

**You can use the media query with HTML like this:**
```
<html>
  <head>
    <!-- Served to all users -->
    <link rel="stylesheet" href="all.css" media="all" />
    <!-- Served to screens that are at least 20em wide -->
    <link rel="stylesheet" href="small.css" media="(min-width: 20em)" />
    <!-- Served to screens that are at least 64em wide -->
    <link rel="stylesheet" href="medium.css" media="(min-width: 64em)" />
    <!-- Served to screens that are at least 90em wide -->
    <link rel="stylesheet" href="large.css" media="(min-width: 90em)" />
    <!-- Served to screens that are at least 120em wide -->
    <link rel="stylesheet" href="extra-large.css" media="(min-width: 120em)" />
    <!-- Served to print media, like printers -->
    <link rel="stylesheet" href="print.css" media="print" />
  </head>
  <!-- ... -->
</html>
```

### With CSS 
**You can use the media query with CSS like this:**


```
/* Viewports between 320px and 480px wide */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .card {
    background: #bada55;
  }
}
``` 

### With Javascript
**You can use the media query with Javascript like this:**
We can use media queries in JavaScript, too! And guess, what? They’re work a lot like they do in CSS. The difference? We start by using the window.matchMedia() method to define the conditions first.

So, say we want to log a message to the console when the browser is at least 768px wide. We can create a constant that calls matchMedia() and defines that screen width:
Then we can fire log to the console when that condition is matched:



```
// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia( '( min-width: 768px )' )
 
// Note the `matches` property
if ( mediaQuery.matches ) {
  console.log('Media Query Matched!')
}
``` 


## Media Type:

What type of media are we trying to target? In many (if not most) cases, you’ll see a screen value used here, which makes sense since many of the media types we’re trying to match are devices with screens attached to them.

But screens aren’t the only type of media we can target, of course. We have a few, including:

- **all**: Matches all devices
- **print**: Matches documents that are viewed in a print preview or any media that breaks the content up into pages intended to print.
- **screen**: Matches devices with a screen
- ** speech**: Matches devices that read the content audibly, such as a screenreader. This replaces the now deprecated aural type since Media Queries Level 4.


## Reference of this Blog

- https://css-tricks.com/a-complete-guide-to-css-media-queries/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- https://www.w3schools.com/css/css3_mediaqueries.asp




