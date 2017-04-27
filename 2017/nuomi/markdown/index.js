var markdownMake={
    quote:function(msg){
        var myRex=/(>)\s([^\n]*)/g;
        return msg.replace(myRex,"<blockquote>$2</blockquote>")
    },
    h1:function(msg){
        var myRex=/(#)\s([^\n]*)/g;        
        return msg.replace(myRex,"<h1>$2</h1>")
    },
    h2:function(msg){
        var myRex=/(##)\s([^\n]*)/g;        
        return msg.replace(myRex,"<h2>$2</h2>")
    },
    h3:function(msg){
        var myRex=/(###)\s([^\n]*)/g;        
        return msg.replace(myRex,"<h3>$2</h3>")
    },
    h4:function(msg){
        var myRex=/(####)\s([^\n]*)/g;        
        return msg.replace(myRex,"<h4>$2</h4>")
    },
    h5:function(msg){
        var myRex=/(#####)\s([^\n]*)/g;        
        return msg.replace(myRex,"<h5>$2</h5>")
    },
    h6:function(msg){
        var myRex=/(#####)\s([^\n]*)/g;
        return msg.replace(myRex,"<h6>$2</h6>")
    },
    list:function(msg){
        var myRex=/(\*|\-)\s([^\n]*)/g
        return msg.replace(myRex,"<li>$2</li>")
    },
    list2:function(msg){
        var myRex=/(\d+\.)\s([^\n]*)/g
        return msg.replace(myRex,"<li>$1 $2</li>")        
    },
    code:function(msg){
        var myRex=/(```)([^\n]*)(```)/g
        return msg.replace(myRex,"<code>$2</code>")
    },
    build:function(msg){
        var node;
        node=this.quote(msg);
        node=this.h6(node);
        node=this.h5(node);
        node=this.h4(node);
        node=this.h3(node);
        node=this.h2(node);
        node=this.h1(node);                
        node=this.list(node);
        node=this.list2(node);        
        node=this.code(node); 
        return node;
    }
}
var test="> 12312\n > ssss\n # 12312\n ## ssss \n - 12312\n * ssss\n ``` hellow ``` \n 1. 111\n 2. 333";
console.log(markdownMake.build(test));