module.exports = 
{
    t: function(a){
        var B = {};
        var i; for (i = 0; i<a; i++)
            B[i] = (a % (i+2))==0;
        return B;
    },
    com: function(a,b){
        var A = module.exports.t(a);
        var B = module.exports.t(b);
        var Q = 1; var i;
        for (i=0; i<a+b; i++)
            if (B[i] && A[i])
                Q = i+2;
        var rt = {};
        rt[0] = a/Q;
        rt[1] = a/Q;
        return rt;
    }
}