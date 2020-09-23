export default function getHealthPoints(hp) {
    if (hp.health > 50) return "healthy"
    else if (hp.health < 15) return "critical"
    else return "wounded"
}