function take(f){
    //d(i) untuk cek apakah ada i di dalam f
var bq,sn,sb,sm,sg;

function d(i){return f.includes(i)}
function s(i){if(i=1){return true}else{return false}}
function p(i){if (i>1){return true}else{return false}}
f.z     =function(){if (d('b'||'bt'||'bb'||'btb')){return 6}else{return 12}}
f.zt    =function(){if (d('b'||'bt'||'bb'||'btb')){return 3}else{return 6}}
f.ma    =function(){if (d('a'||'m')){return 0}else{return 4}}
f.mm    =function(){if (d('m')){return 0}else{return 4}}
f.mmm   =function(){if (d('m'||'mm')){return 0}else{return 4}}
f.mmb   =function(){if (d('a'||'m'||'mm'||'ma')){return 0}else{return 4}}
f.bt    =function(){if (s('bt')){return 12}else if(p('bt')){return 16}else if(d('b')){return sb}}
f.htm   =function(){if (s('htm')){return 4}else if(p('htm')){return 8}else if(d('b'||'j'||'a'||'bt'||'bb'||'btb')){return 0}}
f.hm    =function(){if (s('hm')){return 4}else if(p('hm')){return 8}else if(d('b'||'j'||'a'||'bt'||'bb'||'btb')){return 0}}
f.m     =function(){if (d('a'&&'z') || d('a'&&'zt')){return 8*bq}else if(d('b'||'bt'||'bb'||'btb') || p('h'||'ht')){return 4}}
f.a     =function(){if (d('bt'||'btb')){return 4+bq}else if(d('b'||'bb')){return 4}else{return sn}}
f.j     =function(){if (d('bt'||'btb')){return 4+bq}else if(d('b'||'bb')){return 4}else if(d('a')){return 0}else{return sn}}
f.b     =function(){return sn}
f.htq   =function(){if (s('htq')){return 12}else if(p('htq')){return 16}else if(d('bt'||'btb')){return sm}else if(d('hq')){return sb}else if(d('a'||'b'||'bb')){return 0}}
f.hta   =function(){if (s('hta')){return 12}else if(p('hta')){return 16}else if(p('htq')){return 0}else if(d('bt'||'btb')){return sm}else if(d('ha')){return sb}else if(d('a'||'b'||'bb'||'hq')){return 0}else if(f.htq==sm){return 0}}
f.btb   =function(){if (s('btb')){return 12}else if(p('btb')){return 16}else if(s('bt')){return 4}else if(d('bb')){return sg}else if(d('b') || p('bt')){return 0}}
}
