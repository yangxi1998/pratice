import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import{HttpClient, HttpHeaders } from '@angular/common/http'
import $ from 'jquery';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   telNumber:string;
   pwNumber:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private http:HttpClient) {
  }
  
  
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: data,
      subTitle: '不能为空',
      buttons: ['知道了']
    });
    alert.present();
  }
  
  tel(e){
     this.telNumber=e.target.value;
  }
  pw(e){
    this.pwNumber=e.target.value;
  }
ionViewWillEnter() {
  var that=this;  //注意this指代
  $(function($){
    $('#a').click(function(){
    console.log( that.telNumber);
    console.log( that.pwNumber);

    if(that.telNumber==''){
      that.presentAlert('手机号不能为空');
    }
    else if(that.pwNumber==''){
      that.presentAlert('密码不能为空');}

   else{
    var arr=new Array();//新建一个数组，用来保存接收的数据
        $.ajax({
        type:"GET",
        url:'http://localhost:8102/login',
        dataType: "jsonp", //jsonp跨域,只支持get请求
        data: "phone="+that.telNumber+"&password="+that.pwNumber,
        jsonp: "callback",

　　　　jsonpCallback:'jsonpCallback',
        async:true,/*同步请求将锁住浏览器，用户其他操作必须等待请求完成才可以执行 ,默认为异步true*/
        
        success:function(data){  //接收后台返回的值 ，
        
          
          var data1=eval("("+data+")");//或 var data1= $.parseJSON(data)
          if(data1.message=='0'){
            that.presentAlert('登录成功');
            console.log('登陆成功');
          }
          else if(data1.message=='1'){
            that.presentAlert('手机号或密码不正确');
          }
          else{
            that.presentAlert('数据库错误');
          }
        },
        error:function(data1,err){  //未实现：数据传送到error，没有传送到success，后台传送的数据和前端数据类型不匹配，进入到error
         console.log('loser');
         console.log(data1);
         console.log(err);
        }
      })
}
})
})
}
}
  

