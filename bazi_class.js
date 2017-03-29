function Bazi(y,m,d,h,sex){
	var y=Number(y);
	var m=m-1;
	var d=Number(d);
	var h=Number(h);
	var sex=Number(sex);
	var y_d=new Date();
        y_d.setFullYear(y);
      	y_d.setMonth(m);
      	y_d.setDate(d);
      	y_d.setHours(h);
      	y_d.setMinutes(0);
      	y_d.setSeconds(0);
    var y_t=y_d.getTime();
    var tg=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"];
    var dz=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
    var dz0=["丑","寅","卯","辰","巳","午","未","申","酉","戌","亥","子"];
    var jq=["小寒","立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪"];
    var jq84=[442208451146,444755924716,447326679845,449936540593,452591457618,455285317308,458000946032,460714673166,463403390187,466051355952,468654332864,471220083199];
    var y_d84=441734400726;
    var zsss={
        甲:["沐浴","冠带","临官","帝旺","衰","病","死","墓","绝","胎","养","长生"],
        乙:["病","衰","帝旺","临官","冠带","沐浴","长生","养","胎","绝","墓","死"],
        丙:["胎","养","长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝"],
        丁:["绝","墓","死","病","衰","帝旺","临官","冠带","沐浴","长生","养","胎"],
        戊:["胎","养","长生","沐浴","冠带","临官","帝旺","衰","病","死","墓","绝"],
        己:["绝","墓","死","病","衰","帝旺","临官","冠带","沐浴","长生","养","胎"],
        庚:["死","墓","绝","胎","养","长生","沐浴","冠带","临官","帝旺","衰","病"],
        辛:["长生","养","胎","绝","墓","死","病","衰","帝旺","临官","冠带","沐浴"],
        壬:["帝旺","衰","病","死","墓","绝","胎","养","长生","沐浴","冠带","临官"],
        癸:["临官","冠带","沐浴","长生","养","胎","绝","墓","死","病","衰","帝旺"]   	
    }
    var nayi={
        甲子:["海中金"],乙丑:["海中金"],丙寅:["炉中火"],丁卯:["炉中火"],戊辰:["大林木"],己巳:["大林木"],庚午:["路旁土"],辛未:["路旁土"],壬申:["剑锋金"],癸酉:["剑锋金"],
        甲戌:["山头火"],乙亥:["山头火"],丙子:["涧下水"],丁丑:["涧下水"],戊寅:["城墙土"],己卯:["城墙土"],庚辰:["白腊金"],辛巳:["白腊金"],壬午:["杨柳木"],癸未:["杨柳木"],
        甲申:["泉中水"],乙酉:["泉中水"],丙戌:["屋上土"],丁亥:["屋上土"],戊子:["霹雳火"],己丑:["霹雳火"],庚寅:["松柏木"],辛卯:["松柏木"],壬辰:["长流水"],癸巳:["长流水"],
        甲午:["沙中金"],乙未:["沙中金"],丙申:["山下火"],丁酉:["山下火"],戊戌:["平地木"],己亥:["平地木"],庚子:["壁上土"],辛丑:["壁上土"],壬寅:["金箔金"],癸卯:["金箔金"],
        甲辰:["覆灯火"],乙巳:["覆灯火"],丙午:["天河水"],丁未:["天河水"],戊申:["大驿土"],己酉:["大驿土"],庚戌:["钗钏金"],辛亥:["钗钏金"],壬子:["桑柘木"],癸丑:["桑柘木"],
        甲寅:["大溪水"],乙卯:["大溪水"],丙辰:["沙中土"],丁巳:["沙中土"],戊午:["天上火"],己未:["天上火"],庚申:["石榴木"],辛酉:["石榴木"],壬戌:["大海水"],癸亥:["大海水"]
    }
	var cangdun={
	    子:["癸",48],
	    丑:["己",16,"癸",8,"辛",4],
	    寅:["甲",32,"丙",16,"戊",8],
	    卯:["乙",48],
	    辰:["戊",16,"乙",8,"壬",8,],
	    巳:["丙",32,"庚",8,"戊",8],
	    午:["丁",48,"己",24],
	    未:["己",32,"丁",8,"乙",8],
	    申:["庚",32,"壬",16,"戊",8],
	    酉:["辛",48],
	    戌:["戊",32,"丁",8,"辛",8],
	    亥:["壬",32,"甲",16],
	}
	this.yGan=function(){  //年干
		return tg[(y+6)%10];   
	}
	this.yZhi=function(){  //年支
		var nz;
        if(y-1984<=0) nz=dz0[11+(y-1984)%12];
        if(y-1984>0){
          ((y-1984)%12-1)==-1?nz=dz0[11]:nz=dz0[(y-1984)%12-1];
        }
        return nz;
	}
	this.yZhu=function(){  //年柱
		return this.yGan()+this.yZhi();
	}
	this.mGan=function(){  //月干
		var ng=this.yGan();
		var yg;
		if(ng=="甲"||ng=="己") yg=tg[(1+m)%10];
        if(ng=="乙"||ng=="庚") yg=tg[(3+m)%10];
        if(ng=="丙"||ng=="辛") yg=tg[(5+m)%10];
        if(ng=="丁"||ng=="壬") yg=tg[(7+m)%10];
        if(ng=="戊"||ng=="癸") yg=tg[(9+m)%10];
        if(y_t<((y-1984)*31556926009+jq84[m])){
            (tg.indexOf(yg)-1)==-1?yg=tg[9]:yg=tg[tg.indexOf(yg)-1];
        }
        return yg;
	}
	this.mZhi=function(){  //月支
		var yz=dz0[m];        
        if(y_t<((y-1984)*31556926009+jq84[m])){
            yz=dz0[dz.indexOf(yz)-1];
        }
        return yz;
	}
	this.mZhu=function(){  //月柱
		return this.mGan()+this.mZhi();
	}
	this.dGan=function(){  //日干
		var y_r=Math.floor((y_t-y_d84)/86400000)%60;
      	var rg;
      	y_r>=0?rg=tg[y_r%10]:rg=tg[(4+(60+y_r)%10)%10];
        return rg;
	}
	this.dZhi=function(){  //日支
		var y_r=Math.floor((y_t-y_d84)/86400000)%60;
      	var rz;
      	y_r>=0?rz=dz0[(5+y_r%12)%12]:rz=dz0[(5+(60+y_r)%12)%12];
      	return rz;
	}
	this.dZhu=function(){  //日柱
		return this.dGan()+this.dZhi();
	}
	this.hGan=function(){  //时干
		var rg=this.dGan();
		var sz=this.hZhi();
		var sg;
		if(rg=="甲"||rg=="己") sg=tg[(1+dz0.indexOf(sz))%10];
        if(rg=="乙"||rg=="庚") sg=tg[(3+dz0.indexOf(sz))%10];
        if(rg=="丙"||rg=="辛") sg=tg[(5+dz0.indexOf(sz))%10];
        if(rg=="丁"||rg=="壬") sg=tg[(7+dz0.indexOf(sz))%10];
        if(rg=="戊"||rg=="癸") sg=tg[(9+dz0.indexOf(sz))%10];
        return sg;
	}
	this.hZhi=function(){  //时支
		var sz;
        if(h>=0) sz=dz0[11];
        if(h>=1) sz=dz0[0];
        if(h>=3) sz=dz0[1];
        if(h>=5) sz=dz0[2];
        if(h>=7) sz=dz0[3];
        if(h>=9) sz=dz0[4];
        if(h>=11) sz=dz0[5];
        if(h>=13) sz=dz0[6];
        if(h>=15) sz=dz0[7];
        if(h>=17) sz=dz0[8];
        if(h>=19) sz=dz0[9];
        if(h>=21) sz=dz0[10];
        if(h>=23) sz=dz0[11];
        return sz;
	}
	this.hZhu=function(){  //时柱
		return this.hGan()+this.hZhi();
	}
	this.xunKong=function(){  //旬空
		var xtg=tg.indexOf(this.dGan());
        var xdz=dz.indexOf(this.dZhi());
        var xunk;
        if((xtg-xdz)==0) xunk=dz[10]+dz[11];
        if((xtg-xdz)==-10||(xtg-xdz)==2) xunk=dz[8]+dz[9];
        if((xtg-xdz)==-8||(xtg-xdz)==4) xunk=dz[6]+dz[7];
        if((xtg-xdz)==-6||(xtg-xdz)==6)	xunk=dz[4]+dz[5];
        if((xtg-xdz)==-4||(xtg-xdz)==8)	xunk=dz[2]+dz[3];
        if((xtg-xdz)==-2)	xunk=dz[0]+dz[1];
        return xunk;
	}
	this.daYun=function(){  //大运
        //  大运
        var dyg=[];
        var tg1=tg.concat(tg);
        var dyz=[];
        var dz1=dz.concat(dz);
        var ng=this.yGan();
        var yg=this.mGan();
        var yz=this.mZhi();
        var dyun=[];
        //大运天干
        if(((tg.indexOf(ng))%2==0 && sex==1)||((tg.indexOf(ng))%2==1 && sex==0)){
    		for(var n=(tg1.indexOf(yg))+1; n<20; n++){
                dyg.push(tg1[n]);
                dyg.splice(8,22);
    		}
        }
        if(((tg.indexOf(ng))%2==1 && sex==1)||((tg.indexOf(ng))%2==0 && sex==0)){
    		tg1.reverse();
    		for(var n=(tg1.indexOf(yg))+1; n<20; n++){ 
                dyg.push(tg1[n]);
                dyg.splice(8,22);
    		}
        }
        //大运地支
        if(((tg.indexOf(ng))%2==0 && sex==1)||((tg.indexOf(ng))%2==1 && sex==0)){
    		for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                dyz.push(dz1[n]);
                dyz.splice(8,26);
    		}
        }
        if(((tg.indexOf(ng))%2==1 && sex==1)||((tg.indexOf(ng))%2==0 && sex==0)){
    		dz1.reverse();
    		for(var n=(dz1.indexOf(yz))+1; n<24; n++){
                dyz.push(dz1[n]);
                dyz.splice(8,26);
    		}
        }
        for (i in dyg){
            dyun.push(dyg[i]+dyz[i]);
        }
        return dyun;
	}
	this.qiYun=function(){  //起运
        var qiy;
        if(y_t<((y-1984)*31556926009+jq84[m])){
          var jnianm=(((y-1984)*31556926009+jq84[m])-y_t)/259200000;
          var jniann=(y_t-((y-1984)*31556926009+jq84[m-1]))/259200000;
        }else{
          var jnianm=(((y-1984)*31556926009+jq84[m+1])-y_t)/259200000;
          var jniann=(y_t-((y-1984)*31556926009+jq84[m]))/259200000;
        }
        (sex==1 && y%2==0)?qiy=Math.round(jnianm):qiy=Math.round(jniann);
        (sex==0 && y%2==1)?qiy=Math.round(jnianm):qiy=Math.round(jniann);
        return qiy;
	}
	this.liuNian=function(){  //流年
		var n=this.qiYun();
	    var l=parseInt(y)+parseInt(n);
	    var g,z;
	    var lgz=[];
        for(var n=0;n<80;n++){
            g=tg[(l+6)%10];
            if(l-1984<=0) z=dz0[11+(l-1984)%12];
            if(l-1984>0) ((l-1984)%12-1)==-1?z=dz0[11]:z=dz0[(l-1984)%12-1];
            lgz.push(g+z);
            l=l+1;
        }
        return lgz;          
	}
	this.shiShen=function(g){  //十神
        var sn;
        var cn=tg.indexOf(g);
        var shi=tg.indexOf(this.dGan());
        if((shi%2)==0){
        if((cn-shi)==-5||(cn-shi)==5) sn="财";
        if((cn-shi)==-4||(cn-shi)==6) sn="杀";
        if((cn-shi)==-3||(cn-shi)==7) sn="官";
        if((cn-shi)==-2||(cn-shi)==8) sn="枭";
        if((cn-shi)==-1||(cn-shi)==9) sn="印";
        if((cn-shi)==0) sn="比";
        if((cn-shi)==1||(cn-shi)==-9) sn="劫";
        if((cn-shi)==2||(cn-shi)==-8) sn="食";
        if((cn-shi)==3||(cn-shi)==-7) sn="伤";
        if((cn-shi)==4||(cn-shi)==-6) sn="才";
        }
       if((shi%2)==1){
        if((cn-shi)==-5||(cn-shi)==5) sn="官";
        if((cn-shi)==-4||(cn-shi)==6) sn="杀";
        if((cn-shi)==-3||(cn-shi)==7) sn="印";
        if((cn-shi)==-2||(cn-shi)==8) sn="枭";
        if((cn-shi)==-1||(cn-shi)==9) sn="劫";
        if((cn-shi)==0) sn="比";
        if((cn-shi)==1||(cn-shi)==-9) sn="伤";
        if((cn-shi)==2||(cn-shi)==-8) sn="食";
        if((cn-shi)==3||(cn-shi)==-7) sn="财";
        if((cn-shi)==4||(cn-shi)==-6) sn="才";
       }
       return sn;
    }
	this.xingBie=function(){  //性别
		var qk;
		sex==0?qk="坤造":qk="乾造"; 
		return qk;
	}
	this.naYin=function(zhu){  //纳音
        var na=[];
        na=na.concat(nayi[zhu]); 
        return na[0];
    }
    this.shuaiWang=function(g,z){  //旺衰
        var zz=dz.indexOf(z);
        var sr=zsss[g][zz];
        return sr;
    }
    this.wuXing=function(gan){  //五行
    	var wux="";
        if(gan=="甲"||gan=="乙") wux="木";
        if(gan=="丙"||gan=="丁") wux="火";
        if(gan=="戊"||gan=="己") wux="土";
        if(gan=="庚"||gan=="辛") wux="金";
        if(gan=="壬"||gan=="癸") wux="水";
        return wux;
    }
	this.cangGan=function(zhi){
		var z=cangdun[zhi];
		console.log(z);
		var zh=[];
		for (var i=0;i<z.length; i++){
		    if(i%2==0)zh.push(z[i]);
		}
		return zh;
	}
	this.ng=this.yGan();
	this.yg=this.mGan();
	this.rg=this.dGan();
	this.sg=this.hGan();
	this.nz=this.yZhi();
	this.yz=this.mZhi();
	this.rz=this.dZhi();
	this.sz=this.hZhi();
	this.xk=this.xunKong();
	this.qk=this.xingBie();
}