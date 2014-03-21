# [Workaround for IE stylesheet files limit](http://lusever.github.com/ie31css/demo/)

Fix [31 css bug](http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx) in IE (9 and less).

## Usage
After all style tags add:
```html
<script src="ie-31-css-fix.js"></script>
<!--[if IE]>
    <script>
        fixIESheets();
    </script>
<![endif]-->
```
