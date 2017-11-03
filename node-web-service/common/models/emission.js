var args=require('../interface/emission-args');
// var path=require('path');
// var efData=require(path.resolve(__dirname,'../init/ef-data.json'));
var efData=require('../init/ef-data.json');
module.exports=function(Emission){
   
    Emission.calculate=function(){
        console.log("Enter Emission.calculate Function...");
       var str='{';
       for(var i=0;i<args.length;i++){
           //前端提交的请求参数列表需包含args文件内的所有参数名称
            var name=args[i].arg;
            var val=arguments[i];
           if((name=="ash1"||name=="ash2"||name=="ash3"||name=="ash4"||name=="ash5"||name=="ash6"||name=="ash7"||name=="ash8"||name=="ash9"||name=="ash10"||name=="ash11"||name=="ash12"
            ||name=="sul1"||name=="sul2"||name=="sul3"||name=="sul4"||name=="sul5"||name=="sul6"||name=="sul7"||name=="sul8"||name=="sul9"||name=="sul10"||name=="sul11"||name=="sul12"
            )&&(typeof val=='undefined'||val=='')){
                val=100;//默认值为100
           }
           if((name=="cost1"||name=="cost2"||name=="cost3"||name=="cost4"||name=="cost5"||name=="cost6"||name=="cost7"||name=="cost8"||name=="cost9"||name=="cost10"||name=="cost11"||name=="cost12")
           &&(typeof val=='undefined'||val=='')){
               val=0;//默认值为0
           }
            console.log(name+"="+val);
            str+='"'+name+'"'+':'+'"'+val+'",';
            if(i==args.length-1){
                str+='"'+name+'":'+'"'+val+'"}';
            }
           
       }
        this.call(arguments[arguments.length-1](null,JSON.parse(str)));
    }
    Emission.remoteMethod(
        'calculate',{
            accepts: args,
            returns:{
                arg:'emissions',
                type:'json'
            },
            description:["calculate the emisson"]
        }
    )
}