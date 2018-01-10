exports["default"] = function () {
    return {
        visitor: {
            Program: {
                exit: function exit(path) {
                    var bi = false;
                    var list = path.node.directives;
                    if(path.hub.file.ast.comments.length!=0){
                        if(path.hub.file.ast.comments[0].value.indexOf('no use strict')>=0){
                            bi = true;
                        }
                    }
                    for(var i=list.length-1, it; i>=0 ; i--){
                        it = list[i];
                        if (it.value.value==='use strict'&&bi==true){
                            list.splice(i,1);
                        }
                    }
                }

            }
        }
    };
};

module.exports = exports["default"];