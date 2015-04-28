// ==UserScript==
// @name         Blocks all steam invites
// @include      *steamcommunity.com/*/home/invites*
// @version      0.6
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
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All" class="linkStandard">Block Private</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_Banned" class="linkStandard">Block Banned</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All_level_0" class="linkStandard">Block Lvl </a>' + '<input type="text" id="inputLevel" value="0" style="width:23px;" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="3">';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a id="donate" title="Show your appreciation for the script" href="https://github.com/AndrewParkes/BlockAllSteamInvites/blob/master/README.md#donations" target="_blank" style="align: right; float: right;"> Donate&nbsp;&nbsp;&nbsp;&nbsp;</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a style="align: right; float: right; color: red;">&hearts;&nbsp;</a>';
    
    //document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_Inactive" class="linkStandard">Block Inactive</a>';
    
    //adds the clickable function to Block all 
    var block = document.getElementById('Block_All');
    if (block) 
    {
        block.addEventListener ("click", blockPrivate , false);
    }
    
    var blocklvl0 = document.getElementById('Block_All_level_0');
    if (blocklvl0) 
    {
        blocklvl0.addEventListener ("click", blockAllLevel0 , false);
    }
    
    var blockbanned = document.getElementById('Block_Banned');
    if (blockbanned) 
    {
        blockbanned.addEventListener ("click", blockbannedAcc , false);
    }
    
    var blockinact = document.getElementById('Block_Inactive');
    if (blockinact) 
    {
        blockinact.addEventListener ("click", blockInactive , false);
    }

}

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
                xmlhttp.open("GET",url,false);
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
            xmlhttp.open("GET",url,false);
            xmlhttp.send();
            var text=xmlhttp.responseText;
            if(!(text.indexOf("<vacBanned>0</vacBanned>")>-1 && text.indexOf("<tradeBanState>None</tradeBanState>")>-1 && text.indexOf("<isLimitedAccount>0</isLimitedAccount>")>-1))
            {
                FriendAccept(userAccount , 'block');
            }
        }
    }
}
/*
function blockInactive(zEvent) 
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
                xmlhttp.open("GET",url,false);
                xmlhttp.send();
                if(xmlhttp.responseText.indexOf("<hoursPlayed2Wk>0.0</hoursPlayed2Wk>")>-1)
                {
                    FriendAccept(userAccount , 'block');
                }
            }
        }
    }
}
*/

