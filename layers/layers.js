var wms_layers = [];
var format_Europa_0 = new ol.format.GeoJSON();
var features_Europa_0 = format_Europa_0.readFeatures(json_Europa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Europa_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Europa_0.addFeatures(features_Europa_0);var lyr_Europa_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Europa_0, 
                style: style_Europa_0,
    title: 'Europa<br />\
    <img src="styles/legend/Europa_0_0.png" /> 0 - 10<br />\
    <img src="styles/legend/Europa_0_1.png" /> 10 - 60<br />\
    <img src="styles/legend/Europa_0_2.png" /> 60 - 150<br />\
    <img src="styles/legend/Europa_0_3.png" /> 150 - 500<br />\
    <img src="styles/legend/Europa_0_4.png" /> 500 - 2000<br />\
    <img src="styles/legend/Europa_0_5.png" /> 2000 - 18818<br />'
        });

lyr_Europa_0.setVisible(true);
var layersList = [lyr_Europa_0];
lyr_Europa_0.set('fieldAliases', {'PAIS': 'PAIS', 'NOM_ORIGIN': 'NOM_ORIGIN', 'Dens_Pob': 'Dens_Pob', });
lyr_Europa_0.set('fieldImages', {'PAIS': 'TextEdit', 'NOM_ORIGIN': 'TextEdit', 'Dens_Pob': 'Range', });
lyr_Europa_0.set('fieldLabels', {'PAIS': 'header label', 'NOM_ORIGIN': 'no label', 'Dens_Pob': 'header label', });
lyr_Europa_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});