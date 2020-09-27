<!DOCTYPE HTML>
<html>
<head>

    <link href="css/style.css" rel="stylesheet">
</head>
<body>

    <div id="info-bar" class="info-bar" style="height: 20%;">
        <div style="padding-top: 10px;">
            <label style="font-size: 16px; width: 200px; display: inline-block; padding: 0 0 10px 0">Address Search:</label>
            <input type="text" id="search-address" style="width: 500px;">
            <br>
            <label style="font-size: 16px; width: 200px; display: inline-block; padding: 0 0 10px 0">Latitude:</label>
            <input type="text" id="latitude" style="width: 500px;">
            <br>
            <label style="font-size: 16px; width: 200px; display: inline-block; padding: 0 0 10px 0">Longitude:</label>
            <input type="text" id="longitude" style="width: 500px;">
        </div>
    </div>


    <div id="map-canvas" style="height: 80%"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
    <script src="js/scripts.js?ts=<?= rand(); ?>"></script>

    <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR GOOGLE API KEY&callback=init&libraries=places"></script>

</body>
</html>