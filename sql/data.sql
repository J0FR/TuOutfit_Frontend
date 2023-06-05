--OUTFIT_ENTITY
--ID, COLORES, GENERO, IMAGEN, NOMBRE, OCASIONES, PRECIO, RANGO_EDAD, TALLA, DESCRIPCION

--PRENDA_ENTITY
--ID, COLORES, GENERO, IMAGEN, NOMBRE, OCASIONES, PRECIO, RANGO_EDAD, TALLA, URL_SITIO_WEB_COMPRA, MARCA_ID

--PRENDA_ENTITY_OUTFITS
--PRENDAS_ID, OUTFITS_ID

--MARCA_ENTITY
--ID, DETALLE_DE_MARCA, LOGO, NOMBRE, URL_SITIO_WEB

--UBICACION_ENTITY
--ID, LATITUD, LONGITUD

--TIENDA_FISICA_ENTITY
--ID, HORARIOS, NOMBRE, MARCA_ID, UBICACION_ID


    --COLORES:
    --0: ROJO, 1: AZUL, 2: DORADO, 3: VERDE, 4: PLATA, 5: AMARILLO, 6: CAFE, 7: BLANCO, 8:NEGRO

    --GENERO:
    --0: HOMBRE, 1: MUJER, 2: UNISEX

    --OCASIONES:
    --0: BODA, 1: FIESTA, 2: CENA, 3: CASUAL, 4: FORMAL, 5: GRADO

    --RANGO_EDAD:
    --0: BEBE, 1: NINHO, 2: ADOLESCENTE, 3: JOVEN, 4: ADULTO, 5: ABUELOS


--Marcas
--Marca 1
INSERT INTO MARCA_ENTITY VALUES (1, 'Ropa mágica que convierte tus sueños en estilo.', 'https://www.shopdisney.com/on/demandware.static/-/Sites-shopDisney-Library/default/dwc4d33617/images/default-logo.svg', 'Disney', 'https://www.shopdisney.com/franchises/disney/clothing/');
--Tiendas
INSERT INTO UBICACION_ENTITY VALUES (1, 35.46285592290404, -97.64799256441759);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (1, '10:00-20:00', 'Disney Outlet Store - Shoppes At Oklahoma City', 1, 1);

INSERT INTO UBICACION_ENTITY VALUES (2, 40.758252965455284, -73.98504954622754);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (2, '9:00-21:00', 'Disney Store - Times Square', 1, 2);

INSERT INTO UBICACION_ENTITY VALUES (3, 36.163702742881014, -115.15772774677949);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (3, '10:00-20:00', 'Disney Outlet Store - Las Vegas North Premium Outlets', 1, 3);

--Marca 2
INSERT INTO MARCA_ENTITY VALUES (2, 'Creamos diseños atemporales que te hacen lucir y sentirte genial todos los días.', 'https://www.esprit.com/-img/common/Esprit_Logo_2023_Red_RGB.svg', 'ESPRIT', 'https://www.esprit.com.co');
--Tiendas
INSERT INTO UBICACION_ENTITY VALUES (4, 4.666727888556293, -74.05374773428223);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (4, '10:00-20:00', 'Esprit Andino Bogotá', 2, 4);

INSERT INTO UBICACION_ENTITY VALUES (5, 50.042361479186404, 10.228776837549606);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (5, '9:00-21:00', 'Esprit GALERIA Karstadt Kaufhof', 2, 5);

--Marca 3
INSERT INTO MARCA_ENTITY VALUES (3, 'Creemos que la moda es una forma de expresión personal y se refleja en la amplia gama de estilos que ofrecemos.', 'https://theme.zdassets.com/theme_assets/36268/b0ce7503bf380deff58ba15c456fa1e5e5c024dd.svg', 'Only', 'https://www.only.com/es-es');
--Tiendas
INSERT INTO UBICACION_ENTITY VALUES (6, 19.086417708301614, 72.88897940632177);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (6, '10:00-21:00', 'ONLY Store - Phoenix Marketcity - Mumbai', 3, 6);

--Marca 4
INSERT INTO MARCA_ENTITY VALUES (4, 'Mustang es reconocida por su estilo audaz y contemporáneo, combinando a la perfección moda y calidad. “Sin ilusión no hay proyecto”', 'https://www.mtngshoes.com/on/demandware.static/Sites-Mustang-Site/-/default/dw4b94f89a/images/logo.svg', 'Mustang', 'https://www.mtngshoes.com');
--Tiendas
INSERT INTO UBICACION_ENTITY VALUES (7, 39.469148035567, -0.4874632089642139);
INSERT INTO TIENDA_FISICA_ENTITY VALUES (7, '10:00-22:00', 'Mustang Valencia', 4, 7);

--Marca 5
INSERT INTO MARCA_ENTITY VALUES (5, 'El destino integral de moda y estilo de vida, que inspira a las personas a expresar su verdadero yo a través del estilo.', 'https://www.ynap.com/wp-content/uploads/2022/09/yoox.png', 'Yoox', 'https://www.yoox.com');

--Outfit 1
INSERT INTO OUTFIT_ENTITY VALUES (1, '1', '1', 'https://img.bantoa.com/images/large/1636710/outfit-basic-8338.jpg', 'Women Basic 1', '3', 128, '3', 'M', 'Outfit hecho para aquellas mujeres que quieren vestirse casual, sin complicaciones.');

--Prendas Outfit 1
--Prenda 1
INSERT INTO PRENDA_ENTITY VALUES (1, '1', '1', 'https://img.bantoa.com/squareimage/7110239.jpg', 'Disney Mickey Years', '3', 17, '3', 'M', 'https://www.amazon.es/dp/B07D48YG9F/', 1);
--Prenda 2
INSERT INTO PRENDA_ENTITY VALUES(2, '1', '1', 'https://img.bantoa.com/squareimage/7749617.jpg', 'Jeans mujer azul luz lavado', '3', 33, '3', 'M', 'https://www.amazon.es/dp/B099S6SXVK', 2);
--Prenda 3
INSERT INTO PRENDA_ENTITY VALUES (3, '4', '2', 'https://img.bantoa.com/squareimage/7963008.jpg', 'Gorra de beisbol gris', '3', 14, '3', 'M', 'https://www.amazon.es/dp/B09NW7Y1DL/', 3);
--Prenda 4
INSERT INTO PRENDA_ENTITY VALUES(4, '1', '2', 'https://m.media-amazon.com/images/I/71KfEErpnRL._AC_UY575_.jpg', 'Zapatillas Bajas', '3', 40, '3', 'M', 'https://www.amazon.es/dp/B076ZL5CCV/?th=1', 4);
--Prenda 5
INSERT INTO PRENDA_ENTITY VALUES(5, '1', '1', 'https://img.bantoa.com/squareimage/8066032.jpg', 'SMMR', '3', 24, '3', 'M', 'https://www.yoox.com/es/45743793MK/item', 5);

INSERT INTO PRENDA_ENTITY_OUTFITS VALUES (1, 1);
INSERT INTO PRENDA_ENTITY_OUTFITS VALUES (2, 1);
INSERT INTO PRENDA_ENTITY_OUTFITS VALUES (3, 1);
INSERT INTO PRENDA_ENTITY_OUTFITS VALUES (4, 1);
INSERT INTO PRENDA_ENTITY_OUTFITS VALUES (5, 1);
