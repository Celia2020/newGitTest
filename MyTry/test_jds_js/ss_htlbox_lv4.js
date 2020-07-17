//ss_coupon.js
$(".jss_tabNav li.sortChk").click(function(){
    setTimeout("SORTBOX()",500);
});

$('.jdsSelectShow.htlboxSCH').each(function (i) {
    var jdsSelf = this;
    var jdsSelf_i = i;
    var jdsSelf_li = $(jdsSelf).find('.typeRow > ul > li');
    var jdsSelf_li_checked;
    var jdsSelf_hash;
    var ssLV = [];
    $(jdsSelf_li).each(function(){
      $(jdsSelf).click(function(){
            //window.location.hash = '';
            jdsSelf_li_checked = $(jdsSelf).find('.typeRow > ul > li.checked:visible');
            jdsSelf_hash = '';
            for(var i = 0; i < jdsSelf_li_checked.length; i++){
                jdsSelf_hash += (jdsSelf_li_checked.eq(i).attr('tag') + '_');
            }
            sessionStorage.setItem("jdsSelf_hash"+jdsSelf_i, jdsSelf_hash);
        });
    });
    if(sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i) != null){
        ssLV[jdsSelf_i] = sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i).split('_');
        // for (var i = 0; i < ssLV[jdsSelf_i].length-1; i++) {
            // var tagCnt = '*[tag=' + ssLV[jdsSelf_i][i] + ']';
            
//  $(jdsSelf).find(tagCnt).trigger('click');
//  setTimeout(function () {//20180611 at ssMoreRead by oy
//      $(jdsSelf).find(tagCnt).trigger('click');
//  }, 400);
        // }
//  console.log('test:' + sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i))
    }
});

SORTBOX = function () {
        $('.jdsSelectShow.htlboxSCH').each(function () {
          //  console.log($(this));
            var self = this,
            self_jss = $(self).find(".allList.jssBox").find('.jss'),
            jssBox = $(self).find(".allList.jssBox"),
            sortBox =  $(self).find(".sortBox"),
            typeRow = $(self).find(".typeRow"),
            self_tag_sin = $(self).find('*[tag]').not('[tag=all]'),//180424
            sortSelect = $(self).find('*[tagsort]'),//180424
            self_nothing = $(self).find('.jdsSelectNothing'),
            sortBoxCopy = $(self).find(".sortBoxCopy");
            var notSelect = $(self_tag_sin).not(".checked");//180424
            var notSortSelect = $(sortSelect).not(".checked");//180424
                
            var itemStr;
            var allHtml;
            var self_sortItem = new Array();
            var self_sortObj = new Array();
            
            //$(jssBox).find('.jss:visible').show();
            var jssVisible = $(jssBox).find('.jss:visible');
            var lvisiSort = $(jssVisible).length;
            $(self).find(".countNum").html(lvisiSort);            
           // console.log(lvisiSort);
            if(lvisiSort >0 ){ //0131
          //  console.log($(self).find('.selectBtnNewSort').length);
            $(self).find('.selectBtnNewSort').each(function () {
                var selfBus = $(this);
                var selfBusLi = $(selfBus).find("li");                
               // console.log(selfBusLi.length);
                $(selfBusLi).click(function () {
                	               	                                  	
//if( $(self).find('.typeRowCop') ){ $(self).find('.typeRowCop').removeClass("checkedbg");}
$(self).find(".selectBtnNewSort").children(".typeRow").addClass("checkedbg");//180424

//susj180425 
         var notSelect = $(typeRow).not(".checkedbg");
	     if(notSelect.length==typeRow.length){
    	 $(self).find(".kome").addClass("on");//180424
              }      
         else{
         $(self).find(".kome").removeClass("on");//180424
         }
         
                    $(sortBox).html("");
                    var indexHtml = "<div class='sortIndex' style='display:none;'></div>";

                    //$(self).find(".radioBtn.checkedAll").trigger("click");
                    $(selfBusLi).removeClass("checked");
                    $(this).addClass("checked");
                    var thisTag = $(this).attr("tagSort");
                    $(jssBox).hide();
                    $(sortBox).show(10);

                    allHtml = $(jssVisible).clone();
                    //alert(lvisiSort+";"+allHtml);
                    $(sortBoxCopy).html(allHtml);

                    //$(indexHtml).insertAfter("#sortConst");

                    $(sortBox).html(indexHtml);
                    for (ss = 0; ss <= self_jss.length; ss++) {

                        if (thisTag == "priceU") {
                            itemStr = ".jss[price=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                        if (thisTag == "priceD") {
                            itemStr = ".jss[price=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertAfter(".sortIndex");
                        }
                        if (thisTag == "StimeU") {
                            itemStr = ".jss[Stime=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                        if (thisTag == "StimeD") {
                            itemStr = ".jss[Stime=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertAfter(".sortIndex");
                        }
                        if (thisTag == "TtimeU") {
                            itemStr = ".jss[Ttime=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                        if (thisTag == "TtimeD") {
                            itemStr = ".jss[Ttime=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertAfter(".sortIndex");
                        }
                        if (thisTag == "rank") {
                            itemStr = ".jss[rank=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                        if (thisTag == "osusume") {
                            itemStr = ".jss[osusume=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                        if (thisTag == "comm") {
                            itemStr = ".jss[comm=" + ss + "]";
                            self_sortObj = $(sortBoxCopy).find(itemStr).sort();
                            $(self_sortObj).insertBefore(".sortIndex");
                        }
                    }
                    
                    $(self).find(".jdsSelectNothing").hide();
                    $(sortBox).trigger("click");
                }); //click
            }); //selectBtnNewSort
              }
         //if(lvisiSort == 0 ){
          	//   self_nothing.show();
    //  }
       
            /* $(".arrive").each(function () {
             	 var arrive = $(this);
                            var arriveLi = $(arrive).find("li.checkBtn").not(".all");
                            alert(arriveLi.length);
                            var arriveLiALL = $(arrive).find("li.checkBtn.all");
                            $(arriveLi).click(function(){
                            var target = $(this).attr("target");
                            var tarLi = "li."+target'
                            $(".depart").find("li.checkBtn").hide();
                            $(".depart").find(tarLi).show();
             });
             
                    $(arriveLiALL).click(function(){
                    	$(".depart").find("li.checkBtn").SHOW();
                    });
              });*/


        }); //jdsSelectShow
    }


jQuery(document).ready(function ($) {
    //1114
    if($(window).width() > 720){
       
      // lightBox();
                              
    };

    $('.jdsSelectShow.htlboxSCH li[tagAll=call]').each(function() {
        var self = $(this);
        self.click(function() {
            self.addClass('checkedAll');
            self.nextAll('.checked').trigger('click');
        });
    });
});





var lightBox = function () { $('.lightbox_copon').removeClass('cp__trigger');
        $('.lightbox_copon').each(function(){
            var self = $(this);
            self.next().append('<div class="click_e"></div>');
            self.next().find('table').css({'z-index':'999'});
            self.next().find('.click_e').css({'position':'fixed','width':'100%','height':'100%','left':'0','top':'0','z-index':'9'}).click(function(){
                self.parent(".cp__acordion").find(".detailholder.submenu").fadeOut(500);
            });
            self.click(function(){
                self.parent(".cp__acordion").find(".detailholder.submenu").hide().fadeIn(500);
            });

            self.next().find('.closedetails').click(function(){
                self.next().fadeOut(500);
            });
        });
    }
    
    
    
  $(".sortBox").click(function(){
  //	setTimeout(function () {lightBox();},500);
  });
  
  
//moreBtn
  
    var boxH;
    var boxID;
    var btnID;
    var boxMg;
    var gyousu;
    var ww = parseInt($(window).width());
    function setHDiv(boxID,gyousu, boxMg,pcsp){
     
     if(pcsp =="pc"){

     if(ww > 720){ boxH = parseInt($(boxID).find(".jss:visible").eq(0).height()+ boxMg)*gyousu+boxMg+"px";$(boxID).css("height",boxH);$(boxID).css("overflow","hidden");
                }
     }
     if(pcsp =="sp"){
     
     if(ww <= 720){ 
     var spH = 0;
     
for(isp=0; isp<gyousu; isp++){
     var newH = new Array(); 
 	 newH = parseInt($(boxID).find(".jss:visible").eq(isp).height());
 	 spH += newH;	 
 }
//return spH;
 
 //boxH = parseInt($(boxID).find(".jss").eq(0).height()+ boxMg)*gyousu+boxMg+"px";
 boxH = parseInt(spH + boxMg*(gyousu+1))+"px";   
     $(boxID).css("height",boxH);$(boxID).css("overflow","hidden");
                 }
     }
    if(pcsp =="pcsp"){
      boxH = parseInt($(boxID).find(".jss:visible").eq(0).height()+ boxMg)*gyousu+boxMg+"px";$(boxID).css("height",boxH);$(boxID).css("overflow","hidden");
     }
    
    
    }
    
    $(function () {
   $(".moreDetail").click(function () {
   	   $(this).toggleClass("moreDetails");
   	   var boxId = $(this).attr("boxid");
   	   $(boxId).toggleClass("ovHide");
if($(this).hasClass("moreDetails")){ $(this).text("もっと見る");}
else{$(this).text("閉じる");}
   	   	});
   	   	
   $(".details.cp__trigger.lightbox_copon").click(function () {
   	   var detailHolder = $(this).parent(".detealbox");
   	   var gyousu =3;
       var boxMg = 25;
   	   if(ww <= 720){
   	   	  var moreDetail = $(this).parent(".detealbox").parent("li.jss").parent("ul.cpnholder.jssBox").parent(".jdsSelectShow").find(".moreDetail");
   	   	  var spdetH = 0;
   var blockL = $(this).parent(".detealbox").parent("li.jss").parent("ul.cpnholder.jssBox").parent(".jdsSelectShow").find(".detailholder.submenu:visible");
  if(blockL.length==0 && $(moreDetail).hasClass("moreDetails")){
     var spdetHall1 = parseInt($("#couponDetBox").find(".jss").eq(0).height()+$("#couponDetBox").find(".jss").eq(1).height()+$("#couponDetBox").find(".jss").eq(2).height()+boxMg*(gyousu+1))+"px";
 	 $("#couponDetBox").height(spdetHall1);
   	 $("#couponDetBox").css("overflow","hidden");
       }    
 if(blockL.length>0 && $(moreDetail).hasClass("moreDetails")){
 	  var allBlockH = new Array();
 	  
 	  setTimeout(function () {
 /*for( is = 0; is< blockL.length; is++){
    allBlockH = parseInt($(blockL).eq(is).height());
    spdetH += allBlockH;
 }*/
     
 	 var spdetHall = parseInt($("#couponDetBox").find(".jss").eq(0).height()+$("#couponDetBox").find(".jss").eq(1).height()+$("#couponDetBox").find(".jss").eq(2).height()+boxMg*(gyousu+1))+"px";
 	//alert("spdetH:"+spdetH+";spdetHall:"+spdetHall);
 	 $("#couponDetBox").height(spdetHall);
   	 $("#couponDetBox").css("overflow","hidden");
   	 
   	 }, 500);
   	 
   }//blockL.length>0
   
else{
//$("#COUPONSIBORI").addClass("ovHide");
}
   
  }//ww<720
   	   });
 
 
 
 
 //$(".jdsSelectShow").find("ul.level").children("li").click(function () {
 	 //var moreDetail = $(this).parent("ul").parent("div")
   	   //	});
   	   	});
   	   	
   	   	
   	   	
 jQuery(function ($) {
    var ADDHEIGHT = function () { //select show
        if ($('.jdsSelectShow').length <= 0) {
            return;
        };




        $('.jdsSelectShow').each(function () {
            var self = $(this), 
              moreDetail = $(this).find(".moreDetail"),
              boxid = $(moreDetail).attr("boxid"),
              jdsSelf_li = $(this).find('.typeRow > ul > li');
           
            $(jdsSelf_li).click(function (ev) {
          if(moreDetail.length>0){
          $(moreDetail).removeClass("moreDetails");
          $(moreDetail).text("詳細を見る");
          $(boxid).addClass("ovHide");
          }
            stopBubble(ev);
            	});// li tag
            		});//each 
            	}	
            		
            		
          ADDHEIGHT(); 
          
     });	
	 
	 
	 
//ss_select_pro2018.js

jQuery(function ($) {
    var SELECTSHOW = function () { //select show
        if ($('.jdsSelectShow').length <= 0) {
            return;
        };




        $('.jdsSelectShow').each(function () {
            var self = $(this),
                self_tags = $(self).find('*[tag]'),
                self_datas = $(self).find('*[data]'),
                self_nothing = $(self).find('.jdsSelectNothing'),//1116
                self_tag_all = $(self).find('*[tag=all]'),
                self_tag_sin = $(self).find('*[tag]').not('[tag=all]'),
                self_tag_sin2 = $(self).find('*[tagcop]'),
                self_tag_sin3 = $(self).find('*[tagNi]'),
                self_tag_sin2bg = $(self_tag_sin2).parent().parent(),
                sortBox = self.find(".sortBox"),
                jssBox = $(self).find(".allList.jssBox"),
                sortBoxCopy = self.find(".sortBoxCopy"),
                self_jss = $(self).find('.jss'),
                typeRow = $(self).find(".typeRow"),
                sortSelect = $(self).find('*[tagsort]'),//180424
                
                lv = ''	
                var notSelect = $(self_tag_sin).not(".checked");//180424
                var notSortSelect = $(sortSelect).not(".checked");//180424
                
                
                runTile = function () {
                setTimeout(function () {
                    //
                }, 200);
            };
            $(self_jss).attr('datar', '');


            //1107
            $(self_tags).each(function (i) {
                $(this).click(function (ev) {
    
                    $(sortBox).hide();
                    $(sortBoxCopy).hide();
                    $(self).find(".selectBtnNewSort").find(".radioBtn.sort").removeClass("checked");
                    $(self).find(".selectBtnNewSort").children(".typeRow").removeClass("checkedbg");//180424
                   
        
         stopBubble(ev);

         
                    $(self).find(".jssBox").show();
                    if ($(this).attr('tag') == 'all') { //all
                        $(self_jss).show();
                        $(self_tag_all).toggleClass('checked');
                        $(self_tag_sin).removeClass('checked');
                        $(self_tag_sin2).removeClass('checked');
                        $(self_tag_sin2bg).removeClass('checkedbg');
                        if($(self_tag_sin3)){$(self_tag_sin3).children("a").removeClass('on');}
                        $("#budgetTime").val(0);
                    } else { //sin
                        $(self_jss).hide();
                        $(this).toggleClass('checked');
                        //susj
                        var l = $(this).parent("ul").children("li.checked");
                        var lvL = $(this).parent("ul").parent(".typeRow").parent("div").parent("div").parent(self).find("ul.level");
                        var tagNum = $(this).parent("ul").children("ol");
                        var tagNumAttr = $(this).parent("ul.level").find(tagNum).attr("tagall");


                        var self_getSelf = $(this).parent("ul").parent(".typeRow").parent("div").parent(".selectBtnNew");
                        var self_tagLvAll = $(self_getSelf).find('*[tagall=lvAll]');


                        if (l.length > 0) {
                            $(tagNum).attr("tagall", "");
                            $(self_getSelf).children("div").children("ul").children(".checkedAll").removeClass('checked');
                            //if ($(lvL).hasClass("radio")) {
                              //  $(this).parent("ul").children("li").removeClass("checked");//0227
                              //  $(this).addClass("checked");
                    //}
                        }
                        if (l.length == 0) {
                            $(tagNum).attr("tagall", "lvAll");
                            //alert(self_tagLvAll.length +"lv:"+lvL.length);
                            if (self_tagLvAll.length == lvL.length - 1) {
                                $(self_getSelf).find(".checkedAll").addClass('checked');
                                $(this).parent(self).find(self_jss).show();
                            }
                        } //(l.length == 0);



                    };
                    
                    
        

                    // radio button start
                  
                    var thisUl = $(this).parent("ul");
                    if ($(thisUl).hasClass("radio") && $(this).hasClass("radioBtn")) {
                        var lchecked = $(thisUl).children("li.radioBtn.checked");
                        if (lchecked.length >= 1) {
                            $(thisUl).children("li.radioBtn.checked").not(this).trigger("click");
                            $(thisUl).children("li.radioBtn").removeClass("checked");
                            $(this).addClass("checked");
                        }
                    if (lchecked.length == 0){
                     $(thisUl).children("li.radioBtn").removeClass("checked");
                    }
                        

                    }
                    // radio button end 

                    var lv1 = [],
                        lv2 = [],
                        lv3 = [],
                        lv4 = [];
                        lv5 = [];
                        lv6 = [];
                        lv7 = [];
                        lv8 = [];
                        lv9 = [];

                    var lv1all = [],
                        lv2all = [],
                        lv3all = [],
                        lv4all = [];
                        lv5all = [];
                        lv6all = [];
                        lv7all = [];
                        lv8all = [];
                        lv9all = [];

                    for (var i = 0; i < $(self_datas).eq(0).find('li').length; i++) {
                        lv1all.push($(self_datas).eq(0).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(1).find('li').length; i++) {
                        lv2all.push($(self_datas).eq(1).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(2).find('li').length; i++) {
                        lv3all.push($(self_datas).eq(2).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(3).find('li').length; i++) {
                        lv4all.push($(self_datas).eq(3).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(4).find('li').length; i++) {
                        lv5all.push($(self_datas).eq(4).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(5).find('li').length; i++) {
                        lv6all.push($(self_datas).eq(5).find('li').eq(i).attr('tag'));
                    }
                    for (var i = 0; i < $(self_datas).eq(6).find('li').length; i++) {
                        lv7all.push($(self_datas).eq(6).find('li').eq(i).attr('tag'));
                    }
                     for (var i = 0; i < $(self_datas).eq(7).find('li').length; i++) {
                        lv8all.push($(self_datas).eq(7).find('li').eq(i).attr('tag'));
                    }
                     for (var i = 0; i < $(self_datas).eq(8).find('li').length; i++) {
                        lv9all.push($(self_datas).eq(8).find('li').eq(i).attr('tag'));
                    }


                    for (var i = 0; i < $(self_datas).eq(0).find('.checked').length; i++) {
                        lv1.push($(self_datas).eq(0).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv1:' + lv1);
                    for (var i = 0; i < $(self_datas).eq(1).find('.checked').length; i++) {
                        lv2.push($(self_datas).eq(1).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv2:' + lv2);
                    for (var i = 0; i < $(self_datas).eq(2).find('.checked').length; i++) {
                        lv3.push($(self_datas).eq(2).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv3:' + lv3);
                    for (var i = 0; i < $(self_datas).eq(3).find('.checked').length; i++) {
                        lv4.push($(self_datas).eq(3).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv4:' + lv4);
                    for (var i = 0; i < $(self_datas).eq(4).find('.checked').length; i++) {
                        lv5.push($(self_datas).eq(4).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv5:' + lv5);
                    for (var i = 0; i < $(self_datas).eq(5).find('.checked').length; i++) {
                        lv6.push($(self_datas).eq(5).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv6:' + lv6);
                    for (var i = 0; i < $(self_datas).eq(6).find('.checked').length; i++) {
                        lv7.push($(self_datas).eq(6).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv7:' + lv7);
                    
                    for (var i = 0; i < $(self_datas).eq(7).find('.checked').length; i++) {
                        lv8.push($(self_datas).eq(7).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv8:' + lv8);
                    
                    for (var i = 0; i < $(self_datas).eq(8).find('.checked').length; i++) {
                        lv9.push($(self_datas).eq(8).find('.checked').eq(i).attr('tag'));
                    }
                    console.log('lv9:' + lv9);

                    //
                    $(self_jss).removeAttr('lv1');
                    $(self_jss).removeAttr('lv2');
                    $(self_jss).removeAttr('lv3');
                    $(self_jss).removeAttr('lv4');
                    $(self_jss).removeAttr('lv5');
                    $(self_jss).removeAttr('lv6');
                    $(self_jss).removeAttr('lv7');
                    $(self_jss).removeAttr('lv8');
                    $(self_jss).removeAttr('lv9');

                    var tagAlllv1 = $(self).find('*[data=lv1]').children("li.checked");
                    var tagAlllv2 = $(self).find('*[data=lv2]').children("li.checked");
                    var tagAlllv3 = $(self).find('*[data=lv3]').children("li.checked");
                    var tagAlllv4 = $(self).find('*[data=lv4]').children("li.checked");
                    var tagAlllv5 = $(self).find('*[data=lv5]').children("li.checked");
                    var tagAlllv6 = $(self).find('*[data=lv6]').children("li.checked");
                    var tagAlllv7 = $(self).find('*[data=lv7]').children("li.checked");
                    var tagAlllv8 = $(self).find('*[data=lv8]').children("li.checked");
                    var tagAlllv9 = $(self).find('*[data=lv9]').children("li.checked");


                    if (lv1.length >= 0) {
                        for (var i = 0; i < lv1.length; i++) {
                            if (tagAlllv1.length > 0) {
                                //$(self_jss).removeAttr('lv1'); 
                                $(self).find('.jss.' + lv1[i]).attr('lv1', true);
                            }
                        };
                        for (var j = 0; j < lv1all.length; j++) {
                            if (tagAlllv1.length == 0) {
                                $(self).find('.jss').attr('lv1', true);
                            }
                        }
                        // $(self_jss).hide();
                        // $(self).find('.jss[lv1=true]').show();
                        //
                        if (lv2.length >= 0) {
                            for (var ii = 0; ii < lv2.length; ii++) {
                                if (tagAlllv2.length > 0) {
                                    //$(self_jss).removeAttr('lv2'); 
                                    $(self).find('.jss.' + lv2[ii]).attr('lv2', true);
                                }
                            };
                            for (var jj = 0; jj < lv2all.length; jj++) {
                                if (tagAlllv2.length == 0) {
                                    $(self).find('.jss').attr('lv2', true);
                                }
                            }
                            //$(self_jss).hide();
                            //$(self).find('.jss[lv2=true]').show();

                            if (lv3.length >= 0) {
                                for (var iii = 0; iii < lv3.length; iii++) {
                                    if (tagAlllv3.length > 0) {
                                        //$(self_jss).removeAttr('lv3');
                                        $(self).find('.jss.' + lv3[iii]).attr('lv3', true);
                                        //because c6 is no answer. if User click the C5, for is end of c6, result is nothing.
                                    }
                                };
                                for (var jjj = 0; jjj < lv3all.length; jjj++) {
                                    if (tagAlllv3.length == 0) {
                                        $(self).find('.jss').attr('lv3', true);
                                    }
                                }
                                //$(self_jss).hide();
                                //$(self).find('.jss[lv3=true]').show();
                                //
                                if (lv4.length >= 0) {
                                    for (var iiii = 0; iiii < lv4.length; iiii++) {
                                        if (tagAlllv4.length > 0) {
                                            //$(self_jss).removeAttr('lv4');
                                            $(self).find('.jss.' + lv4[iiii]).attr('lv4', true);
                                        }
                                    };
                                    for (var jjjj = 0; jjjj < lv4all.length; jjjj++) {
                                        if (tagAlllv4.length == 0) {
                                            $(self).find('.jss').attr('lv4', true);
                                        }
                                    }
                                    
                                    
                                    
                               if (lv5.length >= 0) {
                                  for (var iiiii = 0; iiiii < lv5.length; iiiii++) {
                                   if (tagAlllv5.length > 0) {
                                //$(self_jss).removeAttr('lv5'); 
                                   $(self).find('.jss.' + lv5[iiiii]).attr('lv5', true);
                                  }
                               };
                                for (var jjjjj = 0; jjjjj < lv5all.length; jjjjj++) {
                                  if (tagAlllv5.length == 0) {
                                  $(self).find('.jss').attr('lv5', true);
                                  }
                               }
                               
                               
                               if (lv6.length >= 0) {
                                  for (var iiiiii = 0; iiiiii < lv6.length; iiiiii++) {
                                   if (tagAlllv6.length > 0) {
                                //$(self_jss).removeAttr('lv6'); 
                                   $(self).find('.jss.' + lv6[iiiiii]).attr('lv6', true);
                                  }
                               };
                                for (var jjjjjj = 0; jjjjjj < lv6all.length; jjjjjj++) {
                                  if (tagAlllv6.length == 0) {
                                  $(self).find('.jss').attr('lv6', true);
                                  }
                               }
                               
                               
                               if (lv7.length >= 0) {
                                  for (var iiiiiii = 0; iiiiiii < lv7.length; iiiiiii++) {
                                   if (tagAlllv7.length > 0) {
                                //$(self_jss).removeAttr('lv7'); 
                                   $(self).find('.jss.' + lv7[iiiiiii]).attr('lv7', true);
                                  }
                               };
                                for (var jjjjjjj = 0; jjjjjjj < lv7all.length; jjjjjjj++) {
                                  if (tagAlllv7.length == 0) {
                                  $(self).find('.jss').attr('lv7', true);
                                  }
                               }
                               
                               
                               
                               if (lv8.length >= 0) {
                                  for (var iiiiiiii = 0; iiiiiiii < lv8.length; iiiiiiii++) {
                                   if (tagAlllv8.length > 0) {
                                //$(self_jss).removeAttr('lv8'); 
                                   $(self).find('.jss.' + lv8[iiiiiiii]).attr('lv8', true);
                                  }
                               };
                                for (var jjjjjjjj = 0; jjjjjjjj < lv8all.length; jjjjjjjj++) {
                                  if (tagAlllv8.length == 0) {
                                  $(self).find('.jss').attr('lv8', true);
                                  }
                               }
                                   
                               
                               if (lv9.length >= 0) {
                                  for (var iiiiiiiii = 0; iiiiiiiii < lv9.length; iiiiiiiii++) {
                                   if (tagAlllv9.length > 0) {
                                //$(self_jss).removeAttr('lv9'); 
                                   $(self).find('.jss.' + lv9[iiiiiiiii]).attr('lv9', true);
                                  }
                               };
                                for (var jjjjjjjjj = 0; jjjjjjjjj < lv9all.length; jjjjjjjjj++) {
                                  if (tagAlllv9.length == 0) {
                                  $(self).find('.jss').attr('lv9', true);
                                  }
                               }


                                    $(self_jss).hide();

                                    $(self_jss).each(function (i) {
                                        var val1 = $(this).attr('lv1');
                                        var val2 = $(this).attr('lv2');
                                        var val3 = $(this).attr('lv3');
                                        var val4 = $(this).attr('lv4');
                                        var val5 = $(this).attr('lv5');
                                        var val6 = $(this).attr('lv6');
                                        var val7 = $(this).attr('lv7');
                                        var val8 = $(this).attr('lv8');
                                        var val9 = $(this).attr('lv9');
                                        if (val1 == "true" && val2 == "true" && val3 == "true" && val4 == "true" && val5 == "true" && val6 == "true" && val7 == "true" && val8 == "true" && val9 == "true") {
                                            //alert(i);
                                            $(this).show();
                                        }
                                    });
                                   
                                   };

                                        };
                                    };
                                };
                            };
                        };
                    };
                };
              };
                    //
                   // console.log('---------------');
                    
                    $(self).find('*[tag]').not('[tag=all]').parent().parent(".typeRow").removeClass('checkedbg');
                    $(self).find('*[tag]').not('[tag=all]').filter('.checked').parent().parent(".typeRow").addClass('checkedbg');
         //susj180425 
         var notSelect = $(typeRow).not(".checkedbg");
	     if(notSelect.length==typeRow.length){
    	 $(self).find(".kome").addClass("on");//180424
              }      
         else{
         $(self).find(".kome").removeClass("on");//180424
         }
                    
                    //1116
                    self_nothing.hide();
                    var lvisi = $(jssBox).find('.jss:visible').length;
                    $(self).find(".countNum").html(lvisi);
                    setTimeout(function () {
                        if($(self).find('.jss:visible').length == 0){
                            self_nothing.show();//1120
                        }
                    }, 600);

                   $(sortBox).hide();
                   $(sortBoxCopy).hide();
                    $(self).find(".selectBtnNewSort").find(".radioBtn.sort").removeClass("checked");
                });
            });
            //$(self_tag_all).trigger('click'); //default click
        });
    };
    SELECTSHOW();




       
    SORTBOX();




    var SELECTURLhtl = function () {
        var ssSlectObj = new Array();
        var ssSlectSai = new Array();
        var ssLV = new Array();
        var ssSlect = window.location.hash;
        
        //0427 OY
        $(".jdsSelectShow.htlboxSCH li[tagsort]").each(function(){
            $(this).attr('tag',$(this).attr('tagsort'));
        });
        // END 0427 OY
       
        if (ssSlect.indexOf("-") >= 0) {
        	 ssSlectObj = ssSlect.split("-");
            var anchu = ssSlectObj[0];
            var speed = 500;
            var href = anchu;
            //var target = $(href);
            //var position = $(href).offset().top - SSworld.hasGlobalNav;
            //setTimeout(function () {
            //    $("html, body").not(':animated').animate({
            //        scrollTop: position
            //   }, speed, "swing");
            //}, 3000);

            var i;
            var selectTag = $(anchu).find(".jdsSelectShow.htlboxSCH");

            $('.jdsSelectShow.htlboxSCH').each(function (i) {
                var jdsSelf = $(this);
                //jdsSelf.find('li.checked').trigger('click');//0622
                var xx = parseInt(i + 1);
                ssSlectSai = ssSlectObj[xx];
                if (ssSlectSai.indexOf("_") >= 0 || ssSlectSai.indexOf("-") >= 0){
                    ssLV = ssSlectSai.split("_");
                    for (p = 0; p < ssLV.length; p++) {
                        var tagCnt = "*[tag=" + ssLV[p] + "]";
                        $(selectTag).find(tagCnt).trigger("click");
                    }
                }
            });

        } //if(ssSlectObj.length>0)
    }

    
    $(window).load(function () {
        setTimeout(function () {
            SELECTURLhtl();
        }, 2600);

    });
    
    //0427 OY
    $(window).load(function () {//0621
        if($('.jdsSelectShow').length > 0){
            $('.jdsSelectShow').each(function (i) {
                var jdsSelf = $(this);
                var jdsSelf_i = i;
                var jdsSelf_li = jdsSelf.find('.typeRow > ul > li');
                var jdsSelf_li_checked = jdsSelf.find('.typeRow > ul > li.checked:visible');
                var jdsSelf_hash = '';
                var ssLV = [];
                $(jdsSelf_li).each(function(){
                    $(this).click(function(){
                        //window.location.hash = '';
                        jdsSelf_li_checked = jdsSelf.find('.typeRow > ul > li.checked:visible');
                        jdsSelf_hash = '';
                        for(var i = 0; i < jdsSelf_li_checked.length; i ++){
                            jdsSelf_hash += (jdsSelf_li_checked.eq(i).attr('tag') + '_');
                        }
                        sessionStorage.setItem("jdsSelf_hash"+jdsSelf_i, jdsSelf_hash);
                    });
                });
                if(sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i) != null){
                    ssLV[jdsSelf_i] = sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i).split('_');
                    for (var i = 0; i < ssLV[jdsSelf_i].length-1; i++) {
                        var tagCnt = '*[tag=' + ssLV[jdsSelf_i][i] + ']';
                        
                        //$(jdsSelf).find(tagCnt).trigger('click');
//                        setTimeout(function () {//20180611 at ssMoreRead by oy
//                            $(jdsSelf).find(tagCnt).trigger('click');
//                        }, 400);
                    }
//                    console.log('test:' + sessionStorage.getItem("jdsSelf_hash"+jdsSelf_i))
                }
            });
        }
        // END 0427 OY
    });
    
    
    
    
     var setKome = function(){
    	
    	$('.jdsSelectShow').each(function () {
            var self = $(this),
            typeRow = $(self).find(".typeRow"),
             self_tag_sin = $(self).find('*[tag]').not('[tag=all]'),
             sortSelect = $(self).find('*[tagsort]');
            
         //susj180425 
    	 var notSelect = $(typeRow).not(".checkedbg");
	     if(notSelect.length==typeRow.length){
    	 //$(self).find(".kome").addClass("on");//180424
              }      
         else{
         //$(self).find(".kome").removeClass("on");//180424
         }
    	 	 
    	 	 });
    }


   setKome();
});









// 弹出层后锁定 body 不可滚动
 /* $('html').css({
      'overflow': 'hidden',
      'top': -clickTop + 'px'
  })*/
  		  
  
  



		  
// 施舍框SIBORI by SUSJ 20190815
$(".jdsSelectShow .popup-buttonHTL.finished-button").click(function(){
  $(".jdsSelectShow .blackCP").fadeOut(); $(".jdsSelectShow .submenu").fadeOut();

  setTimeout(function(){
    $('.jss_scrollUpDown').attr('style','');
  }, 300);
  
  $('html').css({
      'paddingRight': '',
      'overflow': ''
  });
  $("body").css({
    'position': '',
    'width': '',
    'top': ''
  });
  $('html,body').scrollTop(clickTop);
});


$(".jdsSelectShow .popup-buttonHTL.clear-button").click(function(){
	
	var ev = $(this).parents(".selectBtnNew").find(".blackCP");
	stopBubble(ev);
});


$(".blackCP .sp.close").click(function(){ if($(window).width() < 720){ 
  $(".blackCP").fadeOut(); 
  
  $('html').css({
      'paddingRight': '',
      'overflow': ''
  });
  $('html,body').scrollTop(clickTop);
}});




$(".checkBtn.copyBtn.feature").click(function(){
	var lvID= $(this).attr("LVid");
	var lvIDObj = "#"+lvID;	
	$(lvIDObj).trigger("click");
	//$("#tagNic2").trigger("click");
    $(this).children("a").toggleClass('on');
	});


function stopBubble(e){
if( e && e.stopPropagation ){ e.stopPropagation();}else{ window.event.cancelBubble = true;}	
}



function getNumOv(e){
var getID = $(e);
var lili = $(getID).children("li.jss");
var liL = lili.length;

 setTimeout(function(){  $(getID).parents(".jdsSelectShow").find("span.countNum").text(liL);},1000);
 //setTimeout(function(){SS.tilePC},1100);

}


function getNumCar(e){
var getID = $(e);
var lili = $(getID).children("li.jss");
var liL = lili.length;

 setTimeout(function(){  $(getID).parents(".jdsSelectShow").find("span.countNum").text(liL);},1000);
 //setTimeout(function(){SS.tilePC},1100);

}
