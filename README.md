# [Workaround for IE stylesheet files limit](http://lusever.github.com/ie31css/demo/)

## Usage
After all style tags add:
```html
<!--[if IE]>
    <script>
        fixIESheets();
    </script>
<![endif]-->
```
