	<?php

	if ( !empty( $_FILES ) ) {
	    
	    function varDumpToString ($var)
		{
		    ob_start();
		    var_dump($var);
		    $result = ob_get_clean();
		    error_log($result);
		}

		varDumpToString($_FILES);

	    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
	    $uploadPath = dirname( __FILE__ ) . '/' . $_FILES[ 'file' ][ 'name' ];

	    error_log($tempPath);

	    move_uploaded_file( $tempPath, $uploadPath );

	    $answer = array( 'answer' => 'File transfer completed' );
	    $json = json_encode( $answer );

	    echo $json;

	} else {

	    echo 'No files';

	}

	phpinfo();

	?>