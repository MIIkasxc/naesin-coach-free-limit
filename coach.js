function dlfile(code){
    doubleSubmitFlag = false;
    stop_chk = false;
    let para = document.location.href.split("?");
	location.href = 'https://vfile.nscoach.com/file/free.downloadFile.php?it_id='+code+'&re=null&file_type=1&para='+para;
}

dlfile("datainput")