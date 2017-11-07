var args=require('../interface/emission-args');
var efData=require('../init/ef-data.json');
module.exports=function(Emission){
    //inputData接口:
    Emission.inputData=function(){
        console.log("Enter Emission.inputData Function...");
       
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
           if(name=="uid")
           var uid=val;
           if(name=="deviceId")
           var deviceId=val;
           if(name=="fuelType")
           var fuelType=val;
           if(name=="fuelName")
           var fuelName=val;
           if(name=="deviceType")
           var deviceType=val;
           if(name=="power")
           var power=val;
           if(name=="ash1")
           var ash1=val;
           if(name=="ash2")
           var ash2=val;
           if(name=="ash3")
           var ash3=val;
           if(name=="ash4")
           var ash4=val;
           if(name=="ash5")
           var ash5=val;
           if(name=="ash6")
           var ash6=val;
           if(name=="ash7")
           var ash7=val;
           if(name=="ash8")
           var ash8=val;
           if(name=="ash9")
           var ash9=val;
           if(name=="ash10")
           var ash10=val;
           if(name=="ash11")
           var ash11=val;
           if(name=="ash12")
           var ash12=val;
           if(name=="sul1")
           var sul1=val;
           if(name=="sul2")
           var sul2=val;
           if(name=="sul3")
           var sul3=val;
           if(name=="sul4")
           var sul4=val;
           if(name=="sul5")
           var sul5=val;
           if(name=="sul6")
           var sul6=val;
           if(name=="sul7")
           var sul7=val;
           if(name=="sul8")
           var sul8=val;
           if(name=="sul9")
           var sul9=val;
           if(name=="sul10")
           var sul10=val;
           if(name=="sul11")
           var sul11=val;
           if(name=="sul12")
           var sul12=val;
           if(name=="cost1")
           var cost1=val;
           if(name=="cost2")
           var cost2=val;
           if(name=="cost3")
           var cost3=val;
           if(name=="cost4")
           var cost4=val;
           if(name=="cost5")
           var cost5=val;
           if(name=="cost6")
           var cost6=val;
           if(name=="cost7")
           var cost7=val;
           if(name=="cost8")
           var cost8=val;
           if(name=="cost9")
           var cost9=val;
           if(name=="cost10")
           var cost10=val;
           if(name=="cost11")
           var cost11=val;
           if(name=="cost12")
           var cost12=val;

       }
       var status=getStatus(fuelName,power);
       console.log("helperColumn:",status+fuelName+deviceType);
      try{
          var ef_nox=efData[status+fuelName+deviceType]['nox'];
          var ef_co=efData[status+fuelName+deviceType]['co'];
          var ef_sox=efData[status+fuelName+deviceType]['sox'];
          var ef_pm2_5=efData[status+fuelName+deviceType]['pm2_5'];
          var ef_pm10=efData[status+fuelName+deviceType]['pm10'];
          var ef_filterabletpm=efData[status+fuelName+deviceType]['filterabletpm'];
          var ef_condensiblepm=efData[status+fuelName+deviceType]['condensiblepm'];
        }catch(err){
            console.error("查询ef值时出错:"+err+"\t原因可能为:数据中没有对应的ef值");
            throw err;
        }
       console.log("EF==>nox:"+ef_nox+";co:"+ef_co+";sox:"+ef_sox+";pm2_5:"+ef_pm2_5+";pm10:"+ef_pm10+";filterabletpm:"+ef_filterabletpm+";condensiblepm:"+ef_condensiblepm)
        //NOx,SOx...各月份的排放量:
        var emisson1_NOx=cost1*ef_nox;
        var emisson2_NOx=cost2*ef_nox;
        var emisson3_NOx=cost3*ef_nox;
        var emisson4_NOx=cost4*ef_nox;
        var emisson5_NOx=cost5*ef_nox;
        var emisson6_NOx=cost6*ef_nox;
        var emisson7_NOx=cost7*ef_nox;
        var emisson8_NOx=cost8*ef_nox;
        var emisson9_NOx=cost9*ef_nox;
        var emisson10_NOx=cost10*ef_nox;
        var emisson11_NOx=cost11*ef_nox;
        var emisson12_NOx=cost12*ef_nox;
        var emisson1_CO=cost1*ef_co;
        var emisson2_CO=cost2*ef_co;
        var emisson3_CO=cost3*ef_co;
        var emisson4_CO=cost4*ef_co;
        var emisson5_CO=cost5*ef_co;
        var emisson6_CO=cost6*ef_co;
        var emisson7_CO=cost7*ef_co;
        var emisson8_CO=cost8*ef_co;
        var emisson9_CO=cost9*ef_co;
        var emisson10_CO=cost10*ef_co;
        var emisson11_CO=cost11*ef_co;
        var emisson12_CO=cost12*ef_co;
        //sox
        var emisson1_SOx=0;
        var emisson2_SOx=0;
        var emisson3_SOx=0;
        var emisson4_SOx=0;
        var emisson5_SOx=0;
        var emisson6_SOx=0;
        var emisson7_SOx=0;
        var emisson8_SOx=0;
        var emisson9_SOx=0;
        var emisson10_SOx=0;
        var emisson11_SOx=0;
        var emisson12_SOx=0;

       
        if(fuelName!="天然气"){
            emisson1_SOx=cost1*ef_sox*sul1;
            emisson2_SOx=cost2*ef_sox*sul2;
            emisson3_SOx=cost3*ef_sox*sul3;
            emisson4_SOx=cost4*ef_sox*sul4;
            emisson5_SOx=cost5*ef_sox*sul5;
            emisson6_SOx=cost6*ef_sox*sul6;
            emisson7_SOx=cost7*ef_sox*sul7;
            emisson8_SOx=cost8*ef_sox*sul8;
            emisson9_SOx=cost9*ef_sox*sul9;
            emisson10_SOx=cost10*ef_sox*sul10;
            emisson11_SOx=cost11*ef_sox*sul11;
            emisson12_SOx=cost12*ef_sox*sul12;
        }else{
            emisson1_SOx=cost1*ef_sox; 
            emisson2_SOx=cost2*ef_sox; 
            emisson3_SOx=cost3*ef_sox; 
            emisson4_SOx=cost4*ef_sox; 
            emisson5_SOx=cost5*ef_sox; 
            emisson6_SOx=cost6*ef_sox; 
            emisson7_SOx=cost7*ef_sox; 
            emisson8_SOx=cost8*ef_sox; 
            emisson9_SOx=cost9*ef_sox; 
            emisson10_SOx=cost10*ef_sox; 
            emisson11_SOx=cost11*ef_sox; 
            emisson12_SOx=cost12*ef_sox; 
        }
        //pm2_5
        var emisson1_PM2_5=0;
        var emisson2_PM2_5=0;
        var emisson3_PM2_5=0;
        var emisson4_PM2_5=0;
        var emisson5_PM2_5=0;
        var emisson6_PM2_5=0;
        var emisson7_PM2_5=0;
        var emisson8_PM2_5=0;
        var emisson9_PM2_5=0;
        var emisson10_PM2_5=0;
        var emisson11_PM2_5=0;
        var emisson12_PM2_5=0;
        //pm10
        var emisson1_PM10=0;
        var emisson2_PM10=0;
        var emisson3_PM10=0;
        var emisson4_PM10=0;
        var emisson5_PM10=0;
        var emisson6_PM10=0;
        var emisson7_PM10=0;
        var emisson8_PM10=0;
        var emisson9_PM10=0;
        var emisson10_PM10=0;
        var emisson11_PM10=0;
        var emisson12_PM10=0;

        if(fuelName!="烟煤"&&fuelName!="次烟煤"&&fuelName!="无烟煤"&&fuelName!="褐煤"&&deviceType!="固态排渣对冲式煤粉锅炉-两至三个独立燃烧器"&&deviceType!="固态排渣切向燃烧式煤粉锅炉"&&deviceType!="固态排渣墙式煤粉锅炉"&&deviceType!="液态排渣墙式煤粉锅炉"&&deviceType!="旋风式锅炉"&&deviceType!="煤粉锅炉"){
            emisson1_PM2_5=cost1*ef_pm2_5;
            emisson2_PM2_5=cost2*ef_pm2_5;
            emisson3_PM2_5=cost3*ef_pm2_5;
            emisson4_PM2_5=cost4*ef_pm2_5;
            emisson5_PM2_5=cost5*ef_pm2_5;
            emisson6_PM2_5=cost6*ef_pm2_5;
            emisson7_PM2_5=cost7*ef_pm2_5;
            emisson8_PM2_5=cost8*ef_pm2_5;
            emisson9_PM2_5=cost9*ef_pm2_5;
            emisson10_PM2_5=cost10*ef_pm2_5;
            emisson11_PM2_5=cost11*ef_pm2_5;
            emisson12_PM2_5=cost12*ef_pm2_5;
            emisson1_PM10=cost1*ef_pm10;
            emisson2_PM10=cost2*ef_pm10;
            emisson3_PM10=cost3*ef_pm10;
            emisson4_PM10=cost4*ef_pm10;
            emisson5_PM10=cost5*ef_pm10;
            emisson6_PM10=cost6*ef_pm10;
            emisson7_PM10=cost7*ef_pm10;
            emisson8_PM10=cost8*ef_pm10;
            emisson9_PM10=cost9*ef_pm10;
            emisson10_PM10=cost10*ef_pm10;
            emisson11_PM10=cost11*ef_pm10;
            emisson12_PM10=cost12*ef_pm10;
        }else{
            emisson1_PM2_5=cost1*ef_pm2_5*ash1;
            emisson2_PM2_5=cost2*ef_pm2_5*ash2;
            emisson3_PM2_5=cost3*ef_pm2_5*ash3;
            emisson4_PM2_5=cost4*ef_pm2_5*ash4;
            emisson5_PM2_5=cost5*ef_pm2_5*ash5;
            emisson6_PM2_5=cost6*ef_pm2_5*ash6;
            emisson7_PM2_5=cost7*ef_pm2_5*ash7;
            emisson8_PM2_5=cost8*ef_pm2_5*ash8;
            emisson9_PM2_5=cost9*ef_pm2_5*ash9;
            emisson10_PM2_5=cost10*ef_pm2_5*ash10;
            emisson11_PM2_5=cost11*ef_pm2_5*ash11;
            emisson12_PM2_5=cost12*ef_pm2_5*ash12;
            emisson1_PM10=cost1*ef_pm10*ash1;
            emisson2_PM10=cost2*ef_pm10*ash2;
            emisson3_PM10=cost3*ef_pm10*ash3;
            emisson4_PM10=cost4*ef_pm10*ash4;
            emisson5_PM10=cost5*ef_pm10*ash5;
            emisson6_PM10=cost6*ef_pm10*ash6;
            emisson7_PM10=cost7*ef_pm10*ash7;
            emisson8_PM10=cost8*ef_pm10*ash8;
            emisson9_PM10=cost9*ef_pm10*ash9;
            emisson10_PM10=cost10*ef_pm10*ash10;
            emisson11_PM10=cost11*ef_pm10*ash11;
            emisson12_PM10=cost12*ef_pm10*ash12;
            }
        //ftpm
        var emisson1_FTPM=0;
        var emisson2_FTPM=0;
        var emisson3_FTPM=0;
        var emisson4_FTPM=0;
        var emisson5_FTPM=0;
        var emisson6_FTPM=0;
        var emisson7_FTPM=0;
        var emisson8_FTPM=0;
        var emisson9_FTPM=0;
        var emisson10_FTPM=0;
        var emisson11_FTPM=0;
        var emisson12_FTPM=0;
        if(fuelName!="无烟煤"&&fuelName!="褐煤"&&fuelName!="七号燃料油"&&fuelName!="六号燃料油"&&deviceType!="固态排渣对冲式煤粉锅炉-两至三个独立燃烧器"&&deviceType!="固态排渣切向燃烧式煤粉锅炉"&&deviceType!="固态排渣墙式煤粉锅炉"&&deviceType!="液态排渣墙式煤粉锅炉"&&deviceType!="旋风式锅炉"&&deviceType!="煤粉锅炉")
        {
            emisson1_FTPM=cost1*ef_filterabletpm;
            emisson2_FTPM=cost2*ef_filterabletpm;
            emisson3_FTPM=cost3*ef_filterabletpm;
            emisson4_FTPM=cost4*ef_filterabletpm;
            emisson5_FTPM=cost5*ef_filterabletpm;
            emisson6_FTPM=cost6*ef_filterabletpm;
            emisson7_FTPM=cost7*ef_filterabletpm;
            emisson8_FTPM=cost8*ef_filterabletpm;
            emisson9_FTPM=cost9*ef_filterabletpm;
            emisson10_FTPM=cost10*ef_filterabletpm;
            emisson11_FTPM=cost11*ef_filterabletpm;
            emisson12_FTPM=cost12*ef_filterabletpm;
        }else if(fuelName=="六号燃料油"&&ef_filterabletpm!=0){
            emisson1_FTPM=cost1*(ef_filterabletpm*sul1+3.22);
            emisson2_FTPM=cost2*(ef_filterabletpm*sul2+3.22);
            emisson3_FTPM=cost3*(ef_filterabletpm*sul3+3.22);
            emisson4_FTPM=cost4*(ef_filterabletpm*sul4+3.22);
            emisson5_FTPM=cost5*(ef_filterabletpm*sul5+3.22);
            emisson6_FTPM=cost6*(ef_filterabletpm*sul6+3.22);
            emisson7_FTPM=cost7*(ef_filterabletpm*sul7+3.22);
            emisson8_FTPM=cost8*(ef_filterabletpm*sul8+3.22);
            emisson9_FTPM=cost9*(ef_filterabletpm*sul9+3.22);
            emisson10_FTPM=cost10*(ef_filterabletpm*sul10+3.22);
            emisson11_FTPM=cost11*(ef_filterabletpm*sul11+3.22);
            emisson12_FTPM=cost12*(ef_filterabletpm*sul12+3.22);
        }else{
            emisson1_FTPM=cost1*ef_filterabletpm*ash1;
            emisson2_FTPM=cost2*ef_filterabletpm*ash2;
            emisson3_FTPM=cost3*ef_filterabletpm*ash3;
            emisson4_FTPM=cost4*ef_filterabletpm*ash4;
            emisson5_FTPM=cost5*ef_filterabletpm*ash5;
            emisson6_FTPM=cost6*ef_filterabletpm*ash6;
            emisson7_FTPM=cost7*ef_filterabletpm*ash7;
            emisson8_FTPM=cost8*ef_filterabletpm*ash8;
            emisson9_FTPM=cost9*ef_filterabletpm*ash9;
            emisson10_FTPM=cost10*ef_filterabletpm*ash10;
            emisson11_FTPM=cost11*ef_filterabletpm*ash11;
            emisson12_FTPM=cost12*ef_filterabletpm*ash12;
        }

        //cpm
        var emisson1_CPM=0;
        var emisson2_CPM=0;
        var emisson3_CPM=0;
        var emisson4_CPM=0;
        var emisson5_CPM=0;
        var emisson6_CPM=0;
        var emisson7_CPM=0;
        var emisson8_CPM=0;
        var emisson9_CPM=0;
        var emisson10_CPM=0;
        var emisson11_CPM=0;
        var emisson12_CPM=0;
        if(fuelName=="无烟煤"){
            emisson1_CPM=cost1*ef_condensiblepm*ash1;
            emisson2_CPM=cost2*ef_condensiblepm*ash2;
            emisson3_CPM=cost3*ef_condensiblepm*ash3;
            emisson4_CPM=cost4*ef_condensiblepm*ash4;
            emisson5_CPM=cost5*ef_condensiblepm*ash5;
            emisson6_CPM=cost6*ef_condensiblepm*ash6;
            emisson7_CPM=cost7*ef_condensiblepm*ash7;
            emisson8_CPM=cost8*ef_condensiblepm*ash8;
            emisson9_CPM=cost9*ef_condensiblepm*ash9;
            emisson10_CPM=cost10*ef_condensiblepm*ash10;
            emisson11_CPM=cost11*ef_condensiblepm*ash11;
            emisson12_CPM=cost12*ef_condensiblepm*ash12;
        }else{
            emisson1_CPM=cost1*ef_condensiblepm;
            emisson2_CPM=cost2*ef_condensiblepm;
            emisson3_CPM=cost3*ef_condensiblepm;
            emisson4_CPM=cost4*ef_condensiblepm;
            emisson5_CPM=cost5*ef_condensiblepm;
            emisson6_CPM=cost6*ef_condensiblepm;
            emisson7_CPM=cost7*ef_condensiblepm;
            emisson8_CPM=cost8*ef_condensiblepm;
            emisson9_CPM=cost9*ef_condensiblepm;
            emisson10_CPM=cost10*ef_condensiblepm;
            emisson11_CPM=cost11*ef_condensiblepm;
            emisson12_CPM=cost12*ef_condensiblepm;
        }
        //tpm(汇总的各月份的tpm:ftpm+cpm)
        var emisson1_TPM=emisson1_FTPM+emisson1_CPM;
        var emisson2_TPM=emisson2_FTPM+emisson2_CPM;
        var emisson3_TPM=emisson3_FTPM+emisson3_CPM;
        var emisson4_TPM=emisson4_FTPM+emisson4_CPM;
        var emisson5_TPM=emisson5_FTPM+emisson5_CPM;
        var emisson6_TPM=emisson6_FTPM+emisson6_CPM;
        var emisson7_TPM=emisson7_FTPM+emisson7_CPM;
        var emisson8_TPM=emisson8_FTPM+emisson8_CPM;
        var emisson9_TPM=emisson9_FTPM+emisson9_CPM;
        var emisson10_TPM=emisson10_FTPM+emisson10_CPM;
        var emisson11_TPM=emisson11_FTPM+emisson11_CPM;
        var emisson12_TPM=emisson12_FTPM+emisson12_CPM;
        var totalNOx=emisson1_NOx+emisson2_NOx+emisson3_NOx+emisson4_NOx+emisson5_NOx+emisson6_NOx+emisson7_NOx+emisson8_NOx+emisson9_NOx+emisson10_NOx+emisson11_NOx+emisson12_NOx;
        var totalSOx=emisson1_SOx+emisson2_SOx+emisson3_SOx+emisson4_SOx+emisson5_SOx+emisson6_SOx+emisson7_SOx+emisson8_SOx+emisson9_SOx+emisson10_SOx+emisson11_SOx+emisson12_SOx;
        var totalCO=emisson1_CO+emisson2_CO+emisson3_CO+emisson4_CO+emisson5_CO+emisson6_CO+emisson7_CO+emisson8_CO+emisson9_CO+emisson10_CO+emisson11_CO+emisson12_CO;
        var totalTPM=emisson1_TPM+emisson2_TPM+emisson3_TPM+emisson4_TPM+emisson5_TPM+emisson6_TPM+emisson7_TPM+emisson8_TPM+emisson9_TPM+emisson10_TPM+emisson11_TPM+emisson12_TPM;
        var totalPM2_5=emisson1_PM2_5+emisson2_PM2_5+emisson3_PM2_5+emisson4_PM2_5+emisson5_PM2_5+emisson6_PM2_5+emisson7_PM2_5+emisson8_PM2_5+emisson9_PM2_5+emisson10_PM2_5+emisson11_PM2_5+emisson12_PM2_5;
        var totalPM10=emisson1_PM10+emisson2_PM10+emisson3_PM10+emisson4_PM10+emisson5_PM10+emisson6_PM10+emisson7_PM10+emisson8_PM10+emisson9_PM10+emisson10_PM10+emisson11_PM10+emisson12_PM10;
        var totalFTPM=emisson1_FTPM+emisson2_FTPM+emisson3_FTPM+emisson4_FTPM+emisson5_FTPM+emisson6_FTPM+emisson7_FTPM+emisson8_FTPM+emisson9_FTPM+emisson10_FTPM+emisson11_FTPM+emisson12_FTPM;
        var totalCPM=emisson1_CPM+emisson2_CPM+emisson3_CPM+emisson4_CPM+emisson5_CPM+emisson6_CPM+emisson7_CPM+emisson8_CPM+emisson9_CPM+emisson10_CPM+emisson11_CPM+emisson12_CPM;
        console.log("\n 汇总:\ndeviceId:"+deviceId+",totalNOx:"+totalNOx.toFixed(3)+",totalSOx:"+totalSOx.toFixed(3)+",totalCO:"+totalCO.toFixed(3)+",totalTPM:"+totalTPM.toFixed(3)+",totalPM2_5:"+totalPM2_5.toFixed(3)+",totalPM10:"+totalPM10.toFixed(3)+",totalFTPM:"+totalFTPM.toFixed(3)+",totalCPM:"+totalCPM.toFixed(3)+"\n");
        
         Emission.find({"where":{"uid":uid,"deviceid":deviceId}}, function(err, emission) {
                if (err){
                    console.log("find Error:",err);
                    throw err;
                }
                if(emission.length>0){
                    console.log("更新数据");
                    Emission.update(
                        { "deviceid": deviceId,"uid":uid},{ "nox": totalNOx.toFixed(3),"sox":totalSOx.toFixed(3),"co":totalCO.toFixed(3),"tpm":totalTPM.toFixed(3),"pm2_5":totalPM2_5.toFixed(3),"pm10":totalPM10.toFixed(3),"ftpm":totalFTPM.toFixed(3),"cpm":totalCPM.toFixed(3)}
                      , function (err, result) {
                        if (err) {
                            console.log("updateEmission Error",err);
                            throw err;
                        }
                        console.log('updateEmission Success:', result);
                    })
                    
                 }
                else{
                    console.log("新建数据");
                    Emission.create(
                        [{ "deviceid": deviceId, "nox": totalNOx.toFixed(3),"sox":totalSOx.toFixed(3),"co":totalCO.toFixed(3),"tpm":totalTPM.toFixed(3),"pm2_5":totalPM2_5.toFixed(3),"pm10":totalPM10.toFixed(3),"ftpm":totalFTPM.toFixed(3),"cpm":totalCPM.toFixed(3),"uid":uid}]
                      , function (err, emission) {
                        if (err) {
                            console.log("createEmission Error",err);
                            throw err;
                        }
                        console.log('createEmission success:', emission);
                    })
                }
            
         });   
        // console.log("uid="+uid+";;deviceId="+deviceId+";;fuelType="+fuelType+";;fuelName="+fuelName+";;deviceType="+deviceType+";;power="+power+";;"
        // +"ash1="+ash1+";;ash2="+ash2+";;ash3="+ash3+";;ash4="+ash4+";;ash5="+ash5+";;ash6="+ash6+";;ash7="+ash7+";;ash8="+ash8+";;ash9="+ash9+";;ash10="+ash10+";;ash11="+ash11
        // +";;ash12="+ash12+";;sul10="+sul10+";;cost11="+cost11+";;status="+status);
        this.call(arguments[arguments.length-1](null,"saveSuccess"));
    }
    Emission.remoteMethod(
        'inputData',{
            accepts: args,
            returns:{
                arg:'result',
                type:'string'
            },
            description:["calculate and save the emisson data"]
        }
    )

    //queryData接口:
    Emission.queryData=function(uid,cb){
        console.log("Enter Emission queryData Function...");
        Emission.find({"where":{"uid":uid},"fields":{id:false,uid:false,pm2_5:false,pm10:false,ftpm:false,cpm:false}}, function(err, emission) {
            if(err) throw err;
            cb(null,emission);
        })
    }
    Emission.remoteMethod(
        'queryData',{
            accepts:{
                arg:"uid",
                type:"string"
            },
            returns:{
                arg:'emissions',
                type:'json'
            },
            description:["query the emisson totalData"]
        }
    )

    //clearData接口:(重置该用户的计算器)
    Emission.clearData=function(uid,cb){
        console.log("Enter Emission clearData Function...");
        Emission.deleteAll({"where":{"uid":uid}},function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            console.log("clearData:",result);
            cb(null,"clearSuccess");
        })
    }

    Emission.remoteMethod(
        'clearData',{
            accepts:{
                arg:"uid",
                type:"string"
            },
            returns:{
                arg:'result',
                type:'string'
            },
            description:["clear the emisson Data belongs to User"]
        }
    )
     //查询状态编号  
     function getStatus(fuelName,power){
        if(fuelName=="烟煤"||fuelName=="次烟煤"||fuelName=="无烟煤"||fuelName=="褐煤"){
            if(power>=73){
                return 2;
            }else{
                return 1;
            }
        }else if(fuelName=="天然气"){
            if(power>=73){
                return 2;
            }
            else if(power<=29){
                return 3
            }
            return 4;
        }else{
            if(power<=29)
            return 3;
            return 4;
        }
    };
}