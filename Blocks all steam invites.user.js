// ==UserScript==
// @name         Blocks all steam invites
// @include      *steamcommunity.com/*/home/invites*
// @version      0.2
// @description  Blocks all steam users much like the ignore all steam invites
// @author       Andrew Parkes -Ant_Shrew-
// @namespace 	 https://greasyfork.org/users/10599
// ==/UserScript==

/*
PLEASE READ:
I do not mind if you use or edit this code but please leave mention of me in the new code

There are errors when clicking on Block all but it does not seem to impact the outcome of the code such as:
Refused to set unsafe header "Content-Length"

Please send feedback if you find that it does not work or runs into errors: 

Thanks
*/

//check to see if you have any pending invites
var element =  document.getElementById('pinvites_ignoreall');
if (typeof(element) != 'undefined' && element !== null)
{

    //adds the Block all tag next to the | Ignore all tag
    document.getElementById('pinvites_ignoreall').innerHTML =document.getElementById('pinvites_ignoreall').innerHTML +'<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All" class="linkStandard">Block All</a>' +'<span class="infoBreak" >&nbsp;&nbsp;|&nbsp;&nbsp;</span>' +'<a id="Block_All_level_0" class="linkStandard">Block All Level 0</a>';

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
            if(elemslvl[counter].innerHTML==0)
            {
                //alert(userAccount+" "+elemslvl[counter].innerHTML);
                
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
