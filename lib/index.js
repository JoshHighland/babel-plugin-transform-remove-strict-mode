exports["default"] = function () {
    return {
        visitor: {
            Program: function Program(path) {
                var list = path.node.directives;
                for(var i=list.length, it; i>=0 ; i++){
                    it = list[i];
                    if (it.value.value==='use strict'){
                        list.splice(i,1);
                    }
                }
            }
        }
    };
};

module.exports = exports["default"];