var association = function (config) {
    config = config || {}
    this.sim = (config.formula === 'pearson') ? this.correlation : this.distance
};
association.prototype.getRecommendations = function(simObj,map,myMap) {
    var total = {};
    var simTotal = {};
    var rankings = [];
    for (var key in simObj) {
        if (simObj[key].score >= 0) {
            for (var x in map[simObj[key].key]) {
                if (!myMap[x]) {
                    total[x] = total[x] || 0
                    simTotal[x] = simTotal[x] || 0
                    total[x] += map[simObj[key].key][x] * simObj[key].score
                    simTotal[x]+= simObj[key].score
                }
            }
        }
    }
    for (var y in total) {
        rankings.push({key: y, score: total[y] / simTotal[y]})
    }
    rankings.sort(function (a, b) {
        if (a.score > b.score) {
            return 1;
        }
        if (a.score < b.score) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    rankings.reverse();
    return rankings;
}
association.prototype.compareAll = function (n, map, myMap) {
    var ar = [];
    for (var key in map) {
        ar.push({key: key, score: this.sim(map[key], myMap)})
    }
    ar.sort(function (a, b) {
        if (a.score > b.score) {
            return 1;
        }
        if (a.score < b.score) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
    ar.reverse();
    return ar.splice(0, n);
};
association.prototype.distance = function (mapOne, mapTwo) {
    var sumofSq = 0;
    var sim = {};
    for (var key in mapOne) {
        if (key in mapTwo) {
            sim[key] = true;
        }
    }
    if (Object.keys(sim).length === 0) {
        return sumofSq;
    }
    for (var i in sim) {
        sumofSq += Math.pow(mapOne[i] - mapTwo[i], 2)
    }
    return 1 / (1 + Math.sqrt(sumofSq))
};
association.prototype.correlation = function (mapOne, mapTwo) {
    var sumOne = 0;
    var sumTwo = 0;
    var sum1Sq = 0;
    var sum2Sq = 0;
    var productSum = 0;
    var sim = {};
    for (var key in mapOne) {
        if (key in mapTwo) {
            sim[key] = true;
        }
    }
    for (var k in sim) {
        sumOne += mapOne[k];
        sumTwo += mapTwo[k];
        sum1Sq += Math.pow(mapOne[k], 2);
        sum2Sq += Math.pow(mapTwo[k], 2);
        productSum += (mapOne[k] * mapTwo[k]);
    }
    var i = Object.keys(sim).length;
    var n = productSum - (sumOne * sumTwo / i);
    var d = Math.sqrt((sum1Sq - Math.pow(sumOne, 2) / i) * (sum2Sq - Math.pow(sumTwo, 2) / i))
    if (d === 0) {
        return 0
    }
    return (n / d)
};
module.exports = association;
