const getAcceleration = (obj) => {
    if (obj.f / obj.m) {
        return obj.f / obj.m
    } else if (obj.Δv / obj.Δt) {
        return obj.Δv / obj.Δt
    } else if ((obj.d *2) / (obj.t * obj.t)) {
        return (obj.d *2) / (obj.t * obj.t)
    }
    return "impossible"
}