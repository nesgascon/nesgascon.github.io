var wms_layers = [];
var format_DensidadPoblacin_0 = new ol.format.GeoJSON();
var features_DensidadPoblacin_0 = format_DensidadPoblacin_0.readFeatures(json_DensidadPoblacin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadPoblacin_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_DensidadPoblacin_0.addFeatures(features_DensidadPoblacin_0);var lyr_DensidadPoblacin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidadPoblacin_0, 
                style: style_DensidadPoblacin_0,
    title: 'Densidad Población<br />\
    <img src="styles/legend/DensidadPoblacin_0_0.png" /> 3 - 31<br />\
    <img src="styles/legend/DensidadPoblacin_0_1.png" /> 31 - 83<br />\
    <img src="styles/legend/DensidadPoblacin_0_2.png" /> 83 - 134<br />\
    <img src="styles/legend/DensidadPoblacin_0_3.png" /> 134 - 371<br />\
    <img src="styles/legend/DensidadPoblacin_0_4.png" /> 371 - 1355<br />\
    <img src="styles/legend/DensidadPoblacin_0_5.png" /> 1355 - 18818<br />'
        });var format_Ros_1 = new ol.format.GeoJSON();
var features_Ros_1 = format_Ros_1.readFeatures(json_Ros_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ros_1.addFeatures(features_Ros_1);var lyr_Ros_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_1, 
                style: style_Ros_1,
                title: '<img src="styles/legend/Ros_1.png" /> Ríos'
            });var format_Ciudades_2 = new ol.format.GeoJSON();
var features_Ciudades_2 = format_Ciudades_2.readFeatures(json_Ciudades_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ciudades_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Ciudades_2.addFeatures(features_Ciudades_2);var lyr_Ciudades_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ciudades_2, 
                style: style_Ciudades_2,
                title: '<img src="styles/legend/Ciudades_2.png" /> Ciudades'
            });

lyr_DensidadPoblacin_0.setVisible(true);lyr_Ros_1.setVisible(true);lyr_Ciudades_2.setVisible(true);
var layersList = [lyr_DensidadPoblacin_0,lyr_Ros_1,lyr_Ciudades_2];
lyr_DensidadPoblacin_0.set('fieldAliases', {'PAIS': 'PAIS', 'NOM_ORIGIN': 'NOM_ORIGIN', 'Dens_Pob': 'Dens_Pob', });
lyr_Ros_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_Ciudades_2.set('fieldAliases', {'CITY_NAME': 'CITY_NAME', 'ADMIN_NAME': 'ADMIN_NAME', 'CNTRY_NAME': 'CNTRY_NAME', 'STATUS': 'STATUS', });
lyr_DensidadPoblacin_0.set('fieldImages', {'PAIS': 'TextEdit', 'NOM_ORIGIN': 'TextEdit', 'Dens_Pob': 'Range', });
lyr_Ros_1.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_Ciudades_2.set('fieldImages', {'CITY_NAME': 'TextEdit', 'ADMIN_NAME': 'TextEdit', 'CNTRY_NAME': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_DensidadPoblacin_0.set('fieldLabels', {'PAIS': 'no label', 'NOM_ORIGIN': 'no label', 'Dens_Pob': 'header label', });
lyr_Ros_1.set('fieldLabels', {'NOMBRE': 'header label', });
lyr_Ciudades_2.set('fieldLabels', {'CITY_NAME': 'header label', 'ADMIN_NAME': 'no label', 'CNTRY_NAME': 'no label', 'STATUS': 'header label', });
lyr_Ciudades_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});