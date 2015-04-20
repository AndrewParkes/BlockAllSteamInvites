// ==UserScript==
// @name         Blocks all steam invites
// @include      *steamcommunity.com/*/home/invites*
// @version      0.3
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
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All" class="linkStandard">Block All</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML + '<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All_level_0" class="linkStandard">Block Lvl </a>' + '<input type="text" id="inputLevel" value="0" style="width:23px;" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="3">';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a id="donate" title="Show your appreciation for the script" href="https://github.com/AndrewParkes/BlockAllSteamInvites/blob/master/README.md#donations" target="_blank" style="align: right; float: right;"> Donate&nbsp;&nbsp;&nbsp;&nbsp;</a>';
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<a style="align: right; float: right; color: red;">?&nbsp;</a>';
    //<style> a#donate:before { color: red; content: '?'; display: block; font-size: 1.5em;}</style>
    
    //adds the clickable function to Block all 
    var block = document.getElementById('Block_All');
    if (block) 
    {
        block.addEventListener ("click", blockAll , false);
    }
    
    var blocklvl0 = document.getElementById('Block_All_level_0');
    if (blocklvl0) 
    {
        blocklvl0.addEventListener ("click", blockAllLevel0 , false);
    }
}

function blockAllLevel0(zEvent) 
{
    //alert("blocking lvl 0");

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
            //FriendAccept(userAccount , 'block');

            var resBox=document.getElementById('inviterBlockIcon');
            
            //alert(userAccount+" "+elemslvl[counter].innerHTML);

            if(parseInt(elemslvl[counter].innerHTML)<=parseInt(document.getElementById('inputLevel').value))
            {
                //alert();

                var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
                //calles steams block function
                FriendAccept(userAccount , 'block');
            }
            
            counter++;
        }
    }
    //alert("blocked");*/
}

function blockAll(zEvent) 
{
    //alert("blocking");

    //gathers all the functions accept ignore and block
    var elems = document.getElementsByClassName('linkStandard');
    for (var i in elems) 
    {
        //finds the functions that contain block
        if((elems[i]+"").indexOf("block") !=-1)
        {
            //aquires the users steam id
            var userAccount=((elems[i]+"").substr(26)).substr(0,((elems[i]+"").substr(26)).indexOf(",")-1);
            //calles steams block function
            FriendAccept(userAccount , 'block');
        }
    }
    //alert("blocked");
}
