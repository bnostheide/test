console.log ('Prototype: Buy Now 2.0 Library');
process_session_id();

function build_asci_pixel()
{
    try{
        var locpath=encodeURIComponent(window.location.protocol+"//"+window.location.hostname+window.location.pathname);
        
        var cbuster = "cbuster"+(new Date().getTime()).toString()+".gif";
        var sessionID=get_asci_cookie('asci_visit');
        
        var pixel = '//pix04.revsci.net/F09828/b3/0/3/'+cbuster+'?D=DM_LOC%3D'+locpath+'%253FsessionID%253D'+sessionID+'%2526bpid%253Dpgoo%26DM_EOM%3D1&C=F09828&L=0';
        
        return pixel;
        
    }
    catch(err)
    {
        return;
    }
}
 
function process_session_id()
{
    //if no cookie
    //create cookie
    if (get_asci_cookie('asci_visit')=="")
    {
        
        
        createASCICookie('asci_visit',guid(););
    }
}
function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);  }

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
 
 
function create_asci_cookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}
function get_asci_cookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) 
      {
      var c = ca[i].trim();
      if (c.indexOf(name)==0) return c.substring(name.length,c.length);
    }
    return "";
} 
 
