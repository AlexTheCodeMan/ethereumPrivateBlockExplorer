import * as APICallouts from "../modules/apiCallouts.js";


async function UICopyToClipboard(){
    var _temp = $("<input>");
    $('.aCopyValue').on('click', function(e) {
        event.preventDefault();
        $("body").append(_temp);
        _temp.val($(this).attr("data-copy")).select();
        document.execCommand("copy");
        _temp.remove();
    })
}

async function UISearchAddress(){
    $(".aSearch").click(async function(e){
        e.preventDefault();
        const address = $(".cAddressInput").val();
        //validate the address
        //account or contract - 42 length
        if(address.length == 42){
            window.open('/account.html#' + address, '_blank');
        }
        //txn hash - 66 length
        if(address.length == 66){
            window.open('/transaction.html#' + address, '_blank');
        }
        //block number
        if(address.length != 42 && address.length != 66){
            window.open('/block.html#' + address, '_blank');
        }

    })
}

async function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

async function UIToggleLoader(){
    $(".loader").toggle();
}

export{
    UICopyToClipboard,
    UISearchAddress,
    UIToggleLoader,
    findGetParameter
}