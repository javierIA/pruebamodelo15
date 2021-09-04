
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleHybrid_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "1_1": {
            "type": "geojson",
            "data": json_1_1
        }
                    ,
        "2_2": {
            "type": "geojson",
            "data": json_2_2
        }
                    ,
        "3_3": {
            "type": "geojson",
            "data": json_3_3
        }
                    ,
        "4_4": {
            "type": "geojson",
            "data": json_4_4
        }
                    ,
        "52_5": {
            "type": "geojson",
            "data": json_52_5
        }
                    ,
        "51_6": {
            "type": "geojson",
            "data": json_51_6
        }
                    ,
        "6_7": {
            "type": "geojson",
            "data": json_6_7
        }
                    ,
        "7_8": {
            "type": "geojson",
            "data": json_7_8
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleHybrid_0_0",
            "type": "raster",
            "source": "GoogleHybrid_0"
        },
        {
            "id": "lyr_1_1_0",
            "type": "circle",
            "source": "1_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e5b636', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_2_2_0",
            "type": "circle",
            "source": "2_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_3_3_0",
            "type": "circle",
            "source": "3_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#beb297', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_4_4_0",
            "type": "circle",
            "source": "4_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#91522d', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_52_5_0",
            "type": "circle",
            "source": "52_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#7d8b8f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_51_6_0",
            "type": "circle",
            "source": "51_6",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_6_7_0",
            "type": "circle",
            "source": "6_7",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_7_8_0",
            "type": "circle",
            "source": "7_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#729b6f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}