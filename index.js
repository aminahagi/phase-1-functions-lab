// Code your solution in this file!
function distanceFromHqInBlocks(value) {
    let run = 42 - value;
    return Math.abs(run);
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(a) {
    let dist = (42-a)*264;
    return Math.abs(dist);
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(b, c) {
    let distFeet = (b-c)*264;
    return Math.abs(distFeet);
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)

function calculatesFarePrice(start,destination) {
    const distance = distanceTravelledInFeet(start,destination);
    if (distance <= 400) {
        return 0;        
    }else if (distance > 400 && distance <= 2000) {
        return .02*(distance - 400);
    }else if (distance > 2000 && distance < 2500) {
        return 25;
    }else{
        return 'cannot travel that far';
    }
    
}