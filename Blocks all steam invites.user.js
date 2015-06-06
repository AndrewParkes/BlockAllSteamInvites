// ==UserScript==
// @name         Blocks all steam invites
// @include      *steamcommunity.com/*/home/invites*
// @version      0.9
// @description  Blocks all steam users much like the ignore all steam invites
// @author       Andrew Parkes -Ant_Shrew-
// @namespace    https://greasyfork.org/users/10599
// @download	 https://raw.githubusercontent.com/AndrewParkes/BlockAllSteamInvites/master/Blocks%20all%20steam%20invites.user.js
// @updateURL    https://raw.githubusercontent.com/AndrewParkes/BlockAllSteamInvites/master/Blocks%20all%20steam%20invites.user.js
// @downloadURL  https://raw.githubusercontent.com/AndrewParkes/BlockAllSteamInvites/master/Blocks%20all%20steam%20invites.user.js

// ==/UserScript==

//check to see if you have any pending invites
var element =  document.getElementById('pinvites_ignoreall');
if (typeof(element) != 'undefined' && element !== null)
{

    //adds the Block all tag next to the | Ignore all tag
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_Private" class="linkStandard">Block Private</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_Banned" class="linkStandard">Block Banned</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_Non_Setup" class="linkStandard">Block Non-setup</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All_level_0" class="linkStandard">Block Lvl </a>' + '<input type="text" id="inputLevel" value="0" style="width:23px;" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="3">';
    
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a id="donate" title="Show your appreciation for the script" href="https://github.com/AndrewParkes/BlockAllSteamInvites/blob/master/README.md#donations" target="_blank" style="align: right; float: right;"> Donate&nbsp;&nbsp;&nbsp;&nbsp;</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a style="align: right; float: right; color: red;">&hearts;&nbsp;</a>';
    
    var blockPrivateCheckBox=0;
    var blockBannedCheckBox=0;
    var blockNonSetupCheckBox=0;
    
    
    //adds the clickable function to Block all 
    var block = document.getElementById('Block_Private');
    if (block) 
    {
        block.addEventListener ("click", blockPrivate , 0);
        block.addEventListener ("dblclick", blockPrivateCheck , 0);
        
        if(getCookie("blockPrivateCheckBox")==1)
        {
            blockPrivateCheckBox=1;
            colorBlue("Block_Private");
        }
    }
    
    var blocklvl0 = document.getElementById('Block_All_level_0');
    if (blocklvl0) 
    {
        blocklvl0.addEventListener ("click", blockAllLevel0 , 0);
    }
    
    var blockbanned = document.getElementById('Block_Banned');
    if (blockbanned) 
    {
        blockbanned.addEventListener ("click", blockbannedAcc , 0);
        blockbanned.addEventListener ("dblclick", blockBannedCheck , 0);
        
        if(getCookie("blockBannedCheckBox")==1)
        {
            blockBannedCheckBox=1;
            colorBlue("Block_Banned");
        }
    }
    
    var blocknonsetup = document.getElementById('Block_Non_Setup');
    if (blocknonsetup) 
    {
        blocknonsetup.addEventListener ("click", blockNonSetupAcc , 0);
        blocknonsetup.addEventListener ("dblclick", blockNonSetupCheck , 0);
    
        if(getCookie("blockNonSetupCheckBox")==1)
        {
            blockNonSetupCheckBox=1;
            colorBlue("Block_Non_Setup");
        }
    }

    if(blockPrivateCheckBox==1)
    {
        blockPrivate(0);
    }
    
    if(blockBannedCheckBox==1)
    {
        blockbannedAcc(0);
    }
    
    if(blockNonSetupCheckBox==1)
    {
        blockNonSetupAcc(0);
    }
    
}

function colorBlue(name)
{
    var text = document.getElementById(name);
    text.style.textShadow = "1px 1px 1px CornflowerBlue ";
    text.style.mozTextShadow = "1px 1px 1px CornflowerBlue ";
    text.style.webkitTextShadow = "1px 1px 1px CornflowerBlue ";
}

function uncolorBlue(name)
{
    var text = document.getElementById(name);
    text.style.textShadow = "0px 0px 0 CornflowerBlue ";
    text.style.mozTextShadow = "0px 0px 0 CornflowerBlue ";
    text.style.webkitTextShadow = "0px 0px 0 CornflowerBlue ";
}

function blockPrivateCheck()
{
    if(blockPrivateCheckBox===0)
    {
        blockPrivateCheckBox=1;
        colorBlue("Block_Private");
    }
    else if(blockPrivateCheckBox===1)
    {
        blockPrivateCheckBox=0;
        uncolorBlue("Block_Private");
    }
    setCookie( "blockPrivateCheckBox", blockPrivateCheckBox, 10 );
}

function blockBannedCheck()
{
    if(blockBannedCheckBox===0)
    {
        blockBannedCheckBox=1;
        colorBlue("Block_Banned");
    }
    else if(blockBannedCheckBox===1)
    {
        blockBannedCheckBox=0;
        uncolorBlue("Block_Banned");
    }
    setCookie( "blockBannedCheckBox", blockBannedCheckBox, 10 );
}

function blockNonSetupCheck()
{
    if(blockNonSetupCheckBox===0)
    {
        blockNonSetupCheckBox=1;
        colorBlue("Block_Non_Setup");
    }
    else if(blockNonSetupCheckBox===1)
    {
        blockNonSetupCheckBox=0;
        uncolorBlue("Block_Non_Setup");
    }
    setCookie( "blockNonSetupCheckBox", blockNonSetupCheckBox, 10 );
}

function getCookie(NameOfCookie){
    if (document.cookie.length > 0) {              
    begin = document.cookie.indexOf(NameOfCookie+"=");       
    if (begin != -1) {           
      begin += NameOfCookie.length+1;       
      end = document.cookie.indexOf(";", begin);
      if (end == -1) end = document.cookie.length;
        return unescape(document.cookie.substring(begin, end));
    } 
  }
  return null;
}

function setCookie(NameOfCookie, value, expiredays) {
var ExpireDate = new Date ();
ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));

  document.cookie = NameOfCookie + "=" + escape(value) + 
  ((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}

function delCookie (NameOfCookie) {
  if (getCookie(NameOfCookie)) {
    document.cookie = NameOfCookie + "=" +
    "; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

function DoTheCookieStuff()
{
username=getCookie('username');
if (username!=null) {alert('Hi there '+username+' - Good to see you again!')}
else {username=prompt('Hi - this is your first visit to my page - please enter your name.',"");setCookie('username',username,365)}
}

//-----------------------------------------------------------------------------------------

function blockAllLevel0(zEvent) 
{
    //gathers all the functions accept ignore and block
    var elems = document.getElementsByClassName('linkStandard');
    var elemslvl = document.getElementsByClassName('friendPlayerLevelNum');
    
    var counter=0;
    for (var i in elems) 
    {
        //finds the functions that contain block
        if((elems[i]+"").indexOf("block") !=-1)
        {
            //aquires the users steam id
            var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
            //calles steams block function

            var resBox=document.getElementById('inviterBlockIcon');

            if(parseInt(elemslvl[counter].innerHTML)<=parseInt(document.getElementById('inputLevel').value))
            {
                var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
                //calles steams block function
                FriendAccept(userAccount , 'block');
            }
        }
    }
}


function blockPrivate(zEvent) 
{
    var xmlhttp = new XMLHttpRequest(); 
    var elems = document.getElementsByClassName('linkStandard');
    for (var i in elems) 
    {
        
        //finds the functions that contain block
            if((elems[i]+"").indexOf("block") !=-1)
            {
                //if(parseInt(elemslvl[counter].innerHTML)<=0)
                {
                //aquires the users steam id
                var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
                //calles steams block function
                var url ='http://steamcommunity.com/profiles/' +userAccount+ '?xml=1'
                xmlhttp.open("GET",url,0);
                xmlhttp.send();
                if(xmlhttp.responseText.indexOf("<privacyState>private</privacyState>")>-1)
                {
                    FriendAccept(userAccount , 'block');
                }
            }
        }
    }
}

function blockbannedAcc(zEvent) 
{
    var xmlhttp = new XMLHttpRequest(); 
    var elems = document.getElementsByClassName('linkStandard');
    for (var i in elems) 
    {
        
        //finds the functions that contain block
        if((elems[i]+"").indexOf("block") !=-1)
        {
            //aquires the users steam id
            var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
            //calles steams block function
            var url ='http://steamcommunity.com/profiles/' +userAccount+ '?xml=1'
            xmlhttp.open("GET",url,0);
            xmlhttp.send();
            var text=xmlhttp.responseText;
            if(!(text.indexOf("<vacBanned>0</vacBanned>")>-1 && text.indexOf("<tradeBanState>None</tradeBanState>")>-1 && text.indexOf("<isLimitedAccount>0</isLimitedAccount>")>-1))
            {
                FriendAccept(userAccount , 'block');
            }
        }
    }
}

function blockNonSetupAcc(zEvent) 
{
    var xmlhttp = new XMLHttpRequest(); 
    var elems = document.getElementsByClassName('linkStandard');
    for (var i in elems) 
    {
        
        //finds the functions that contain block
            if((elems[i]+"").indexOf("block") !=-1)
            {
                //if(parseInt(elemslvl[counter].innerHTML)<=0)
                {
                //aquires the users steam id
                var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
                //calles steams block function
                var url ='http://steamcommunity.com/profiles/' +userAccount+ '?xml=1'
                xmlhttp.open("GET",url,0);
                xmlhttp.send();
                if(xmlhttp.responseText.indexOf("[unassigned]")>-1  || xmlhttp.responseText.indexOf("This user has not yet set up their Steam Community profile")>-1)
                {
                    FriendAccept(userAccount , 'block');
                }
            }
        }
    }
}

/*var element =  document.getElementById('BG_bottom');

var blocknonsetup = document.getElementById('Block_Non_Setup');
    if (blocknonsetup) 
    {
        blocknonsetup.addEventListener ("click", blockNonSetupAcc , 0);
    }
function stopRefresh()
{
    var element =  document.getElementById('BG_bottom');
    element.innerHTML="";
}*/

