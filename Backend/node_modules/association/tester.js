var association = require('./index.js')
var a = new association({
    formula: 'pearson'
});
var jordan = {
    'Lord of the Rings':4.1,
    'The dark night':1.7,
    'Sin city':5,
    'Friday night lights':2.4
};
var alec = {
    'Lord of the Rings':4,
    'The dark night':1,
    'Sin city':4,
    'Friday night lights':4,
    'silence of the lambs':5,
    'dawn of the dead':6
};
var randy = {
    'Lord of the Rings':5,
    'The dark night':5,
    'Sin city':5,
    'Friday night lights':2,
    'silence of the lambs':3.9,
    'dawn of the dead':5,
    'night of the living dead':6
};
var obj = {
    alec:alec,
    randy:randy
}
console.log(a.getRecommendations(a.compareAll(2,obj,jordan),obj,jordan))
console.log(a.compareAll(2,obj,jordan));

