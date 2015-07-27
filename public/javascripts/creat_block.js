
function creat(a, C) {
    href = 'show.html?' + C.UID;
    var c = "    <li> <div class='product_box' id='pro_box'>   <div class='pro_picture' id='pro_pic'>  </div>     <div class='product_name' id='pro_name'>   <a href=" + href + ">" + C.zp_name + "     </a>        </div>   <div class='user_info'> <img class='user_picture' id='user_pic' src='img/user.png' /><div class='user_name2' id='user_name2'>    " + C.account + "  </div> </div>  <div class='from_box'><div class='tag'>        来源   </div><div class='user_from' id='user_from'>   " + C.laiyuan + " </div>  <div class='line2'>  </div>  <div class='tag tag2'> 作品标签 </div> <div class='user_from pro_from' id='pro_from'>      " + C.lable + "   </div>  </div>    <div class='pro_info' id='pro_info'>        <div class='pro_infoText'>" + C.Text + "</div>   </div> </div>               </li>";
    jQuery(a)[0].innerHTML += c;
}
