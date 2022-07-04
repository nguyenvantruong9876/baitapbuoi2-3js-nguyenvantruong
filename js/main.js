
/**bai1 tính tiền lương 
* ?khối 1 input
* 
* songaylam
* luongngay
* 
* ?khối2 các bước xữ lý
* 
* tạo biến
* gán giá trị
* lâp công thưc
* =>   tienLuong = ( songaylam * luongngay)
* 
* 
* ?khối 3 output
* 
* tienLuong
*/
function tienLuong(){
    var songaylam = document.getElementById("songaylam").value;
    console.log(songaylam);
    var luongngay = 100000;

    var tienLuong = (Number(songaylam) * Number(luongngay));
    console.log("tiền lương tháng:", tienLuong);
    document.getElementById("txtResultbai1").innerHTML = tienLuong;

}
document.getElementById("btnTinhbai1").onclick= tienLuong;


/**bai2 tính giá trị trung bình
 * 
 * ?khối 1 input
 * sothunhat
 * sothuhai
 * sothuctu
 * sothucnam
 * sothucba
 * 
 * 

 * ?khối2 các bước xữ lý
 *  tạo biến
 * gán giá trị
 * lâp công thưc
 * =>> var gttb = ( Number(sothunhat) + Number(sothuhai) + Number(sothuba) + Number(sothutu)+ Number(sothunam))/5;
 * 
 * 
 * ?khối 3 output
 * tinhGTTB
 * 
 * 
 */

 function tinhGTTB(){
   
    var sothunhat = document.getElementById("num1").value;
    var sothuhai = document.getElementById("num2").value;
    var sothuba = document.getElementById("num3").value;
    var sothutu = document.getElementById("num4").value;
    var sothunam = document.getElementById("num5").value;
    console.log(sothunhat,sothuhai,sothuba,sothutu,sothunam);
   

    var gttb = ( Number(sothunhat) + Number(sothuhai) + Number(sothuba) + Number(sothutu)+ Number(sothunam))/5;
    console.log(gttb);
    document.getElementById("txtResultbai2").innerHTML = gttb;
}

document.getElementById("btnTinhbai2").onclick = tinhGTTB;

/**bai3: Quy Đổi Tiền 
 * ?khối 1 input
 * giausd
 * sousd
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * =>   tienVND = ( giaUSD * sousd);
 *  
 * ?khối 3 output
 * 
 * sotienVND
 */

 function sotienVND(){
    var sousd = document.getElementById("sousd").value;
    console.log(sousd);
    var giausd = 23500;

    var sotienVND = (Number(sousd) * Number(giausd));
    console.log("số tiền VND của bạn:", sotienVND + "VND");
    document.getElementById("txtResultbai3").innerHTML = sotienVND + "VND";

}
document.getElementById("btnTinhbai3").onclick= sotienVND;

/**bai 4 tinh diên tích chu vi hình chữu nhật
 *  ?khối 1 input
 * 
 * chieudai
 * chieurong
 * 
 * ?khối2 các bước xữ lý
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * => dientich = (chieudai * chieurong);
 * =>   chuvi = (chieudai + chieurong)*2;
 * 
 * 
 * ?khối 3 output
 * dientich
 * chuvi
 * 
 * 
 */

 function tinhHCN(){
    var chieudai = document.getElementById("chieudai").value;
    var chieurong = document.getElementById("chieurong").value;
    console.log(chieudai,chieurong);


    var dientich = (Number(chieudai) * Number(chieurong));
    console.log("diện tích hình chữ nhật:",dientich);
    document.getElementById("txtResultdientich").innerHTML = dientich;
    var chuVi = ((Number(chieudai) + Number(chieurong))) *2;
    console.log("chu vi hinh chữ nhật:", chuVi);
    document.getElementById("txtResultbaichuvi").innerHTML = chuVi;


}
document.getElementById("btndientich").onclick = tinhHCN;
document.getElementById("btnChuvi").onclick = tinhHCN;


/**bai 5 tổng 2 chữ số
 * 
 *  ?khối 1 input
 * 
 * soTuNhien
 * 
 * 
 * 
 * ?khối2 các bước xữ lý
 * 
 * tạo biến
 * gán giá trị
 * lâp công thưc
 * =>  sohangchuc = Math.floor(number/10);
 * =>  sodonvi = (number%10);
 * tong = ( Math.floor(number/10)+ (number%10))
 * 
 * 
 * ?khối 3 output
 * 
 * tong
 */
 function tong(){
    var soTuNhien = document.getElementById("number").value;
    console.log(soTuNhien);
   

    var tinhTong = (Number(Math.floor(soTuNhien/10) ) + Number( (soTuNhien%10)));
    console.log("tổng 2 chữ số:", tinhTong);
    document.getElementById("txtResultbai5").innerHTML = tinhTong;

}
document.getElementById("btnTinhbai5").onclick = tong;

