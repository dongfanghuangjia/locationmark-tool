const btt_resetabove_onclick = () => {
    document.getElementById("txt_lv4name").value = '';
    document.getElementById("txt_lv6name").value = '';
    document.getElementById("txt_mapwidth").value = '450';
    document.getElementById("txt_imagewidth").value = '';
    document.getElementById("txt_imagename").value = '';
}
var isubitem = 0;
var ctp_index = 0;
const btt_addsubitem_onclick = () => {
    var subitem_list = document.getElementById("subitem_list");
    isubitem++;
    // Index
    var lbl_stt = document.createElement("span");
    lbl_stt.style = "width: 100px;";
    lbl_stt.innerText = isubitem.toString().padStart(2,"0") + ". ";
    subitem_list.appendChild(lbl_stt);
    // Combobox type
    var cbb_itype = document.createElement("select");
    cbb_itype.id = "cbb_itype" + isubitem;
    cbb_itype.style = "width: 50px;";
    cbb_itype.addEventListener("click", cbb_itype_onchange);
    for(i=0;i<4;i++) {
        var opt_type = document.createElement("option");
        opt_type.value = i;
        opt_type.innerText = i;
        cbb_itype.appendChild(opt_type);
    }
    cbb_itype.value = ctp_index;
    subitem_list.appendChild(cbb_itype);
    // Textbox name
    var txt_iname = document.createElement("input");
    txt_iname.type = "text";
    txt_iname.id = "txt_iname" + isubitem;
    txt_iname.style = "width: 150px;";
    subitem_list.appendChild(txt_iname);
    // Textbox x-image
    var nmb_iximg = document.createElement("input");
    nmb_iximg.type = "number";
    nmb_iximg.id = "nmb_iximg" + isubitem;
    nmb_iximg.style = "width: 80px;";
    nmb_iximg.min = "0";
    subitem_list.appendChild(nmb_iximg);
    // Textbox y-image
    var nmb_iyimg = document.createElement("input");
    nmb_iyimg.type = "number";
    nmb_iyimg.id = "nmb_iyimg" + isubitem;
    nmb_iyimg.style = "width: 80px;";
    nmb_iyimg.min = "0";
    subitem_list.appendChild(nmb_iyimg);
    subitem_list.appendChild(document.createElement("br"));
}
const cbb_itype_onchange = () => {
    ctp_index = document.getElementById("cbb_itype" + isubitem).value;
}
const btt_reset_onclick = () => {
    isubitem = 0;
    document.getElementById("subitem_list").innerText = "";
}