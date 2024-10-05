let cur_bal_s = 180;
let pre_clo_price_s = 300;
let val_pre_clo_s = cur_bal_s * pre_clo_price_s;
let ltp_s = 320;
let val_ltp_s = cur_bal_s * ltp_s;

let cur_bal_g = 50;
let pre_clo_price_g = 200;
let val_pre_clo_g = cur_bal_g * pre_clo_price_g;
let ltp_g = 250;
let val_ltp_g = cur_bal_g * ltp_g;

let tot_pre_clo = val_pre_clo_g + val_pre_clo_s;
let tot_ltp = val_ltp_s + val_ltp_g;

document.getElementById("s_yes").innerHTML = pre_clo_price_s;
document.getElementById("g_yes").innerHTML = pre_clo_price_g;

document.getElementById("s_yes_total").innerHTML = val_pre_clo_s;
document.getElementById("g_yes_total").innerHTML = val_pre_clo_g;

document.getElementById("s_ltp").innerHTML = ltp_s;

document.getElementById("g_ltp").innerHTML = ltp_g;

document.getElementById("s_ltp_total").innerHTML = val_ltp_s;
document.getElementById("g_ltp_total").innerHTML = val_ltp_g;

document.getElementById("yes_total").innerHTML = "Rs. " + tot_pre_clo;
document.getElementById("ltp_total").innerHTML = "Rs. " + tot_ltp;
