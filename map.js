require([
    "esri/config", "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Directions",
    "esri/layers/RouteLayer",
    "esri/widgets/Search", 
    "esri/widgets/ScaleBar" 
],
    function (esriConfig, WebMap, MapView, Home, LayerList, BasemapGallery, Directions, RouteLayer, Search, ScaleBar) { 
        esriConfig.apiKey = "AAPK18de79411ec34c1d91324b64adfb025cZ2kco7lrwaw8dKzeb_Ms4HBfalIgYEgA642Ral-CZZPEt4guLgsj6jErVcXhhj1B";

        const routeLayer = new RouteLayer();

        const webmap = new WebMap({
            portalItem: {
                id: "232b4d297d054b2a831a3ce629ac8495"
            }
        });

        webmap.layers.add(routeLayer);

        const view = new MapView({
            container: "viewDiv",
            map: webmap
        });

        const directionsWidget = new Directions({
            layer: routeLayer,
            apiKey: "AAPK77ebc8a134de4074a160da0e32d0d877onv_cK6xV7_3fD5hbgt8oYIPGcwHVf3SZVZkhweY7eONVEXqwdhRAkgphMmXCg9x",
            view
        });

        view.ui.add(directionsWidget, { position: "top-left" });

        const homeBtn = new Home({
            view
        });

        view.ui.add(homeBtn, "bottom-left");

        const layerList = new LayerList({
            view,
        });
        view.ui.add("layer-list-btn", "bottom-right");
        view.ui.add(layerList, "bottom-right");
        view.ui.add("basemap-gallery-btn", "bottom-right");

        const basemapGallery = new BasemapGallery({
            view
        });

        view.ui.add(basemapGallery, "bottom-right");

        const searchWidget = new Search({
            view
        });
        view.ui.add(searchWidget, {
            position: "bottom-left",
            index: 1
        });

        const scaleBar = new ScaleBar({
            view
        });
        view.ui.add(scaleBar, {
            position: "top-right"
        });

        document.getElementById("layer-list-btn").addEventListener("click", function () {
            toggleButton("layerList");

            layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
        });
        document.getElementById("basemap-gallery-btn").addEventListener("click", function () {
            toggleButton("gallery");

        });

        function toggleButton(element) {
            if (element == "layerList") {
                const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
                const currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "none" ? "block" : "none");
            } else if (element == "gallery") {
                const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
                const currentPropGallery = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentPropGallery == "none" ? "block" : "none");
            }
        }
    });