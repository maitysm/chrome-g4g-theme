# chrome-g4g-theme
Grey theme for geeksforgeeks website

## Features

* Changes geeksforgeeks website default color from greeen to grey.
* Hide google ads
* Hide Few specific images of geeks for geeks


## Dev guide
* If specific image need to be blocked, add the url of image in `blockedImages` array in file named `contents.js`
* To make left side boxes and right side boxes visible, comment below lines in `styles.css`

```
/*Hide blocks in right side */
.widget-area{
	visibility: hidden !important;
}

/*Hide left side block */
.leftSideBar {
    visibility: hidden !important;
}
```


## Installation
1. Download and unzip
2. Open chrome extension.
..2. Using url `chrome://extensions/` or
..2. Chrome -> Settings-> Extension
3. Enable Develeoper mode (Right side toggle)
4. Click `Load unpacked` option. Select the folder and click ok.
May need to restart chrome.


## Reference
[Blog by Max](https://blog.lateral.io/2016/04/create-chrome-extension-modify-websites-html-css/)
