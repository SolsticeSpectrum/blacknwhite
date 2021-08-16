/**
 * @name LinkBanner
 * @author CT-1409
 * @version 1.0.1
 * @description Allows you to click on a user's banner to open it in the browser
 */

module.exports = class LinkBanner {

    start() {
        document.addEventListener("click", this.link);
    }
    stop() {
        document.removeEventListener("click", this.link);
    }

    link({target}) {
        let mod = BdApi.findModuleByProps("banner", "bannerOverlay").banner 
        if (target.classList.contains(mod) && target.style.backgroundImage) {
            let url = target.style.backgroundImage
            url = url.substring(4, url.length-1).replace(/["']/g, "")
            url = url.replace(/(?:\?size=\d{3,4})?$/, "?size=4096")
            window.open(url)
        }
        
    }
}
