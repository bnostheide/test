console.log ('Prod.Audience.Science.Custom.Events.1.3');
var sConsumerAction="";
function as_listener12(sAction)
{
    as_listener13(sAction,null);
}
function as_listener(sAction)
{
    as_listener13(sAction,null);
}


function as_listener13(sAction,jqClicked)
{
    try{
 
        sConsumerAction = lookupAction[sAction]();
        if (sConsumerAction=="") return;
        var category="";
        var subcat="";
        var locpath=encodeURIComponent(window.location.protocol+"//"+window.location.hostname+window.location.pathname);
        //console.log(window.location.search.replace("?", ""));
        if (typeof pgReservedVars !== 'undefined'){
            for(var index in pgReservedVars) 
            {
                if (pgReservedVars[index].name=="content.category")
                    {category=encodeURIComponent(pgReservedVars[index].value);}
                if (pgReservedVars[index].name=="content.sub-category") 
                    {subcat=encodeURIComponent(pgReservedVars[index].value);}
            }
        }
        var domain="";
 
         if (sAction=="event_buy_now_eretailer_exit" && jqClicked!=null)
         {
            var opt_label= jQuery(jqClicked).attr('data-action-retailer');
            if (typeof opt_label === "undefined" || opt_label=="") {             
                opt_label  = jQuery(jqClicked).attr('data-action-detail');
                if (typeof opt_label  === "undefined" || opt_label=="")
                {  
                    var url = jQuery(jqClicked).attr('href');
                    var urlParts = url.replace(/.*\:\/\//g,'').split(/[/?#]/);
                    opt_label = urlParts[0];
                }
            }
 
            domain = opt_label;
            sConsumerAction=sAction;
         }
 
        
        var cbuster = "cbuster"+(new Date().getTime()).toString()+".gif";
        var pixel = '//pix04.revsci.net/F09828/b3/0/3/'+cbuster+'?D=DM_LOC%3D'+locpath+'%253Fcategory%253D'+category+'%2526domain%253D'+domain+'%2526event%253D'+sConsumerAction+'%2526subcat%253D'+subcat+'%2526bpid%253Dpgoo%26DM_EOM%3D1&C=F09828&L=0';
        
        if(window.console) console.log("pixel="+pixel);
        //    var img = document.createElement('img');
        //    img.src = pixel;
        //    document.body.appendChild(img);
        //var timeout = setTimeout("return;", 1000);
        (new Image()).src=(location.protocol=="https:"?"https:":"http:")+pixel;
        if(window.console) console.log("on page - after pixel "+window.location.href);
        //clearTimeout(timeout);

    }
    catch(err)
    {
        //console.log(err);
        return;
    }
}
 
    var lookupAction = {
        "event_buy_now": function () {return "buy_now";                                         },
        "event_buy_now_add_to_cart": function () {return "buy_now";                             },          
        "event_buy_now_choose_retailer": function () {return "buy_now";                         },
        "event_buy_now_choose_product": function () {return "buy_now";                          },
        "event_buy_now_eretailer_exit": function () {return "buy_now";                          },
        "event_product_consultation_start": function () {return "product_consultation_start";   },
        "event_print_page": function () {return "print_page";                                   },
        "event_video_play": function () {return "video_play";                                   },
        "video_progress_25": function () {return "video_progress_25";                           },
        "video_progress_50": function () {return "video_progress_50";                           },
        "video_progress_75": function () {return "video_progress_75";                           },
        "video_completed": function () {return "video_completed";                               },
        "video_watched": function () {return "video_watched";                                   },
        "event_time_on_page": function () {return "event_time_on_page";                         },
        "event_time_on_page_10s": function () {return "event_time_on_page_10s";                 },
        "event_time_on_page_20s": function () {return "event_time_on_page_20s";                 },        
        "event_scrolled": function () {return "event_scrolled";                                 },
        "event_second_page": function () {return "event_second_page";                           },
        "event_profile_register_complete": function () {return "event_profile_register_complete";},
        "event_search": function () {return "event_search";                                     },
        "event_socialmedia_share": function () {return "event_socialmedia_share";               },
        "event_share": function () {return "event_share";                                       },
        "event_socialmedia_exit": function () {return "event_socialmedia_exit";                 },

        "event_plan_frequency": function () {return "event_plan_frequency";                     },
        "event_start_plan": function () {return "event_start_plan";                             },
        "event_finish_plan": function () {return "event_finish_plan";                           },
        "event_add_to_plan": function () {return "event_add_to_plan";                           },
        "event_remove_from_plan": function () {return "event_remove_from_plan";                 },
        "event_coupon_requested": function () {return "event_coupon_requested";                 },
        "event_coupon_redeem": function () {return "event_coupon_redeem";                       },
        "event_crm_registration": function () {return "event_crm_registration";                 },
        "event_profile_register": function () {return "event_profile_register";                 },
        "event_profile_update": function () {return "event_profile_update";                     },
        "event_profile_register_start": function () {return "event_profile_register_start";     },
        "event_profile_update_gender": function () {return "event_profile_update_gender";       },

        "event_file_download": function () {return "download";                                  },
        "event_product_review_view": function () {return "product_review";                      },
        "event_coupon_request": function () {return "event_coupon_request";                     },
        "event_coupon_print": function () {return "print_coupon";                               },
        "event_product_review": function () {return "product_review";                           },
        "event_submit_review": function () {return "product_review";                            },        
        "event_sample_request": function () {return "sample_request";                           },
        "event_sweepstakes_complete": function () {return "event_sweepstakes_complete";         },        
        "event_sweepstakes_quiz": function () {return "sweepstakes_entry";                      }
        }
    //we only want to do this on the 1st page of the site
    if (runASCIEvent())
    {
        createASCICookie('pvisit','1');
        if (typeof jQuery != 'undefined') {
            jQuery( document ).ready(function( ) {
                jQuery(window).on('scroll', function() {
                    //console.log ('scrolled');  
                    call_asi('event_scrolled');
                    jQuery(window).off('scroll');
                    return;
                });
             setTimeout(function(){
                    call_asi('event_time_on_page_10s');
             },10000);
     
             setTimeout(function(){
                    call_asi('event_time_on_page_20s');
             },20000);
        
            });
        }
    }
    else
    {
        //if 'pvisit' cookie is set then we are on 2nd page
        //if we are on 2nd page we laod ASI and clear 'pvisit'
        if (getASCICookie('pvisit')=="1")
        {
            createASCICookie('pvisit','2');
           // call_asi('event_second_page');
        }
        
    }
     
    
    function runASCIEvent()
    {
       if (document.referrer=="")
        {
            console.log('no referer');
            return true;
        }
        var url = document.referrer;
        var urlParts = url.replace(/.*\:\/\//g,'').split(/[/?#]/);
        var domain = urlParts[0];
        if (domain == window.location.host)
        {
            return false;
        }
        return true;
    }
    
    
    function call_asi(ev)
    {
        as_listener13(ev,null);
    }
 
    function createASCICookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
    		var expires = "; expires="+date.toGMTString();
    	}
    	else var expires = "";
    	document.cookie = name+"="+value+expires+"; path=/";
    }
    function getASCICookie(cname)
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
