
<?php 
session_start();

if(isset($_GET[session_id()])) {

	$_SESSION['elmult'] = true;
	
}
?>

<body>

<?php
if(empty($_SESSION['elmult'])) {
?>
        <div style="width:100%; height:100%; background-color:#333333; opacity:0.9; position:fixed; margin:0; padding:0; z-index:1001;">
            <div style="text-align:center; color:#FFFFFF;">Elmúltál?
                <p>
                    <a href="?<?php echo session_id(); ?>">Igen</a>
                    <a href="http://www.lego.com">Nem</a>
                </p>
            </div>
        </div>
<?php
}
?>
Akármi meg valami olyan tartalom...
</body>