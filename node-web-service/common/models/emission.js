var args=require('../inteface/args');

module.exports=function(Emission){
   
    Emission.calculate=function(){
       var str='{';
       for(var i=0;i<args.length;i++){
           //前端提交的请求参数列表需包含args文件内的所有参数名称
            var name=args[i].arg;
            var val=arguments[i];
            //添加对名称的控制条件
           
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