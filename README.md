# Custom browser new tab page

### To set a local URL for new tab page in Firefox:

##### `/usr/lib/firefox/defaults/pref/autoconfig.js`:

```javascript
// first line must be a comment
pref("generat.config.filename", "firefox.cfg");
pref("general.config.obscure_value", 0);
pref("general.config.sandbox_enabled", false);
```

##### `/usr/lib/firefox/firefox.cfg`:

```javascript
// first line must be a comment
var {classes:Cc,interfaces:Ci,utils:Cu} = Components;
try {
    var newTabURL = "file:///path/to/index.html";
    Cu.import("resource:///modules/AboutNewTab.jsm");
    AboutNewTab.newTabURL = newTabURL;
} catch(e) {
    Cu.reportError(e);
}
```

(`firefox.cfg` can be any name `.cfg` file, but must be in `/usr/lib/firefox/` directory)