# [Workaround for IE stylesheet files limit](http://lusever.github.com/ie31css/demo/)

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
